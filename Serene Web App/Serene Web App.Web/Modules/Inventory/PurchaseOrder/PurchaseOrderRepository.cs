
namespace Serene_Web_App.Inventory.Repositories
{
    using Serene_Web_App.Inventory.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.PurchaseOrderRow;

    public class PurchaseOrderRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, PurchaseOrderListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {
            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (base.IsCreate)
                {
                    base.Row.Date = DateTime.Now;
                    
                    decimal amount = 0;
                    foreach (var item in base.Row.ItemList)
                    {
                        amount += item.LineTotal.Value;  
                    }
                    base.Row.Amount = amount;
                }
            }

            protected override void AfterSave()
            {
                base.AfterSave();
                           
                if (base.IsCreate)
                {
                    foreach (var item in base.Row.ItemList)
                    {
                        var pRow = new ProductRepository().Retrieve(UnitOfWork.Connection, new RetrieveRequest() { EntityId = item.ProductId });
                        UnitOfWork.Connection.UpdateById(new ProductRow()
                        {
                            ProductId = item.ProductId,
                            Quantity = pRow.Entity.Quantity - item.Quantity
                        });
                    }

                    var customer = new CustomerRepository().Retrieve(UnitOfWork.Connection, new RetrieveRequest() { EntityId = base.Row.CustomerId });

                    UnitOfWork.Connection.InsertAndGetID(new ShipmentRow()
                    {
                        PurchaseOrderId = base.Row.PurchaseOrderId,
                        TotalAmount = base.Row.Amount,
                        Date = DateTime.Now,
                        Shipped = true,
                        DestinationAddress = customer.Entity.Address
                    });
                }
                
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow, PurchaseOrderListRequest> {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                if (Request.ProductId != null)
                {
                    var od = Entities.OrderItemRow.Fields.As("od");

                    query.Where(Criteria.Exists(
                        query.SubQuery()
                            .Select("1")
                            .From(od)
                            .Where(
                                od.PurchaseOrderId == fld.PurchaseOrderId &
                                od.ProductId == Request.ProductId.Value)
                            .ToString()));
                }
            }
        }
    }
}