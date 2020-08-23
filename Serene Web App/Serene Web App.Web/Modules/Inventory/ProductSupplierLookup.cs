using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Serene_Web_App.Inventory.Scripts
{
    
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Inventory.ProductSupplier")]
    public class ProductSupplierLookup : MultiSupplierRowLookupScript<Entities.ProductRow>
    {
        public ProductSupplierLookup()
        {
            IdField = TextField = "SupplierId";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ProductRow.Fields;
            query.Distinct(true)
                .Select(fld.SupplierId)
                .Where(
                    new Criteria(fld.SupplierId) != "" &
                    new Criteria(fld.SupplierId).IsNotNull());

            AddProductSupplierFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
