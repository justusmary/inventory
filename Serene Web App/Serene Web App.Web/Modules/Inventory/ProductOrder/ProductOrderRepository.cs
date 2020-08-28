
namespace Serene_Web_App.Inventory.Repositories
{
    using Serene_Web_App.Inventory.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ProductOrderRow;

    public class ProductOrderRepository
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

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (base.IsCreate)
                {
                    base.Row.Date = DateTime.Now;
                    var pRow = new ProductRepository().Retrieve(UnitOfWork.Connection, new RetrieveRequest() { EntityId = base.Row.ProductId });
                    base.Row.SupplierId = pRow.Entity.SupplierId;
                }
            }

            protected override void AfterSave()
            {
                base.AfterSave();
                if (base.IsCreate)
                {
                    var pRow = new ProductRepository().Retrieve(UnitOfWork.Connection, new RetrieveRequest() { EntityId = base.Row.ProductId });
                    var newVal = base.Row.Fulfilled;

                    if (newVal == true)
                    {
                        UnitOfWork.Connection.UpdateById(new ProductRow()
                        {
                            ProductId = base.Row.ProductId,
                            Quantity = pRow.Entity.Quantity + base.Row.Quantity
                        });
                    }
                }

                if (base.IsUpdate)
                {

                    var pRow = new ProductRepository().Retrieve(UnitOfWork.Connection, new RetrieveRequest() { EntityId = base.Row.ProductId });
                    var oldVal = base.Old.Fulfilled;
                    var newVal = base.Row.Fulfilled;

                    if (oldVal == false && newVal == true)
                    {
                        UnitOfWork.Connection.UpdateById(new ProductRow()
                        {
                            ProductId = base.Row.ProductId,
                            Quantity = pRow.Entity.Quantity + base.Row.Quantity
                        });
                    }

                    else if (oldVal == true && newVal == false)
                    {
                        UnitOfWork.Connection.UpdateById(new ProductRow()
                        {
                            ProductId = base.Row.ProductId,
                            Quantity = pRow.Entity.Quantity - base.Row.Quantity
                        });
                    }
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}