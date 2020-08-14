using Microsoft.Extensions.Configuration;
using Serene_Web_App.Inventory.Entities;
using Serenity.Data;

namespace Serene_Web_App.Common
{
    public class DashboardPageModel
    {
        public int ProductCount { 
            get {
                using (var connection = SqlConnections.NewFor<ProductRow>())
                {
                    return connection.List<ProductRow>().Count;
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