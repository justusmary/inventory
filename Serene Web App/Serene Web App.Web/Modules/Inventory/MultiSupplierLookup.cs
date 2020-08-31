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

    [LookupScript("Inventory.MultiSupplier")]
    public class MultiSupplierLookup : MultiSupplierRowLookupScript<Entities.SupplierRow>
    {
        public MultiSupplierLookup()
        {
            IdField = "SupplierId";
            TextField = "Name";
        }

        protected override void PrepareQuery(SqlQuery query)
        {

            var fld = Entities.SupplierRow.Fields;
            query.Distinct(true)
                .Select(fld.SupplierId, fld.Name)
                .Where(
                    new Criteria(fld.SupplierId) != "" &
                    new Criteria(fld.SupplierId).IsNotNull());

            if (!Authorization.HasPermission(PermissionKeys.Admin) && Authorization.HasPermission(PermissionKeys.Supplier))
            {
                AddMultiSupplierFilter(query);
            }
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
