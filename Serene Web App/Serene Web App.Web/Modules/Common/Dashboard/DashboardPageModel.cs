using Microsoft.Extensions.Configuration;
using Serene_Web_App.Inventory.Entities;
using Serene_Web_App.Inventory.Repositories;
using Serenity.Data;
using Serenity.Services;
using Serene_Web_App.Administration;

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
            set { } }
    }
}