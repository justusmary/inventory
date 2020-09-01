using Microsoft.Extensions.Configuration;
using Serene_Web_App.Inventory.Entities;
using Serene_Web_App.Inventory.Repositories;
using Serenity.Data;
using Serenity.Services;
using Serene_Web_App.Administration;
using Serene_Web_App.Inventory;
using Serene_Web_App.Administration.Repositories;
using Serene_Web_App.Administration.Entities;

namespace Serene_Web_App.Common
{
    public class DashboardPageModel
    {
        public int ProductCount { 
            get {
                using (var connection = SqlConnections.NewFor<ProductRow>())
                {
                    return new ProductRepository().List(connection, new ListRequest()).TotalCount; //connection.List<ProductRow>().Count;
                }
            }
            set { } 
        }
        public int SupplierCount { 
            get
            {
                using (var connection = SqlConnections.NewFor<SupplierRow>())
                {
                    return connection.List<SupplierRow>().Count;
                }
            }
            set { } 
        }

        public int PurchaseOrderCount
        {
            get
            {
                using (var connection = SqlConnections.NewFor<PurchaseOrderRow>())
                {
                    return new PurchaseOrderRepository().List(connection, new PurchaseOrderListRequest()).TotalCount;
                }
            }
            set { }
        }

        public int CustomerCount
        {
            get
            {
                var request = new UserListRequest();
                request.IsCustomer = true;

                using (var connection = SqlConnections.NewFor<UserRow>())
                {
                    return new UserRepository().List(connection, request).TotalCount;
                }
            }
            set { }
        }

        public int ProductOrderCount
        {
            get
            {
                using (var connection = SqlConnections.NewFor<ProductOrderRow>())
                {
                    return new ProductOrderRepository().List(connection, new ListRequest()).TotalCount;
                }
            }
            set { }
        }
    }
}