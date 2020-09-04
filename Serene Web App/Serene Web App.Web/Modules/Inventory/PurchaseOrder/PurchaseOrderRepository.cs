
namespace Serene_Web_App.Inventory.Repositories
{
    using Serene_Web_App.Administration;
    using Serene_Web_App.Administration.Entities;
    using Serene_Web_App.Administration.Repositories;
    using Serene_Web_App.Inventory.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
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
                    base.Row.CustomerId = int.Parse(Authorization.UserId);

                    if(base.Row.DestinationAddress.IsNullOrEmpty())
                    {
                        base.Row.DestinationAddress = UnitOfWork.Connection.ById<UserRow>(Authorization.UserId).Address;
                    }
                    
                    decimal amount = 0;
                    foreach (var item in base.Row.ItemList)
                    {
                        amount += item.LineTotal.Value;  
                    }
                    base.Row.Amount = amount;
                }

                if (base.IsUpdate)
                {
                    base.Row.UpdateUserId = int.Parse(Authorization.UserId);
                    base.Row.UpdateDate = DateTime.Now;
                }
            }

            protected override void AfterSave()
            {
                base.AfterSave();
                           
                if (base.IsCreate)
                {
                    foreach (var item in base.Row.ItemList)
                    {
                        var pRow = UnitOfWork.Connection.ById <ProductRow>(item.ProductId);
                        UnitOfWork.Connection.UpdateById(new ProductRow()
                        {
                            ProductId = item.ProductId,
                            Quantity = pRow.Quantity - item.Quantity
                        });
                    }
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> {
            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();
                using (var connection = SqlConnections.NewFor<OrderItemRow>())
                {
                    var data = connection.List<OrderItemRow>().Where(x => x.PurchaseOrderId == Row.PurchaseOrderId).ToList();
                    foreach (var item in data)
                    {
                        connection.DeleteById<OrderItemRow>(item.OrderItemId);
                    }
                }
            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow, PurchaseOrderListRequest> {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                var user = Authorization.UserDefinition;

                if (!Authorization.HasPermission(PermissionKeys.Admin))
                    query.Where(fld.CustomerId == user.Id);

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