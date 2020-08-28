using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Serene_Web_App.Inventory.Scripts
{
    using Serene_Web_App.Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Inventory.ProductList")]
    public class ProductListLookup : MultiSupplierRowLookupScript<Entities.ProductRow>
    {
        public ProductListLookup()
        {
            IdField = "ProductId";
            TextField = "Name";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ProductRow.Fields;
            query.Distinct(true)
                .Select(fld.ProductId, fld.Name)
                .Where(
                    new Criteria(fld.SupplierId) != "" &
                    new Criteria(fld.SupplierId).IsNotNull());

            if (!Authorization.HasPermission(PermissionKeys.Suppliers))
            {
                AddProductOrderFilter(query);
            }
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
