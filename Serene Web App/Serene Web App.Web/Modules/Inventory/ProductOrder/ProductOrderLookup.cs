using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Serene_Web_App.Inventory.Scripts
{
    
    using Serene_Web_App.Inventory.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Betz.Job", Expiration = -1, Permission = "*")]
    public class ProductOrderLookup : RowLookupScript<ProductRow>
    {
        public ProductOrderLookup()
        {
            IdField = "SupplierId";
            TextField = "SupplierName";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ProductRow.Fields;
            query.Select(fld.SupplierName, fld.SupplierId)
                .Where(new Criteria(fld.ProductId) == 10);
        }
    }
}
