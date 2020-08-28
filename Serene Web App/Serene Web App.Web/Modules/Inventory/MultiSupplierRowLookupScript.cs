using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Serene_Web_App.Inventory.Scripts
{
    using Administration;
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    public class MultiSupplierRowLookupScript<TRow> : RowLookupScript<TRow> where TRow : Row, IMultiSupplierRow, new()
    {
        public MultiSupplierRowLookupScript()
        {
            Expiration = TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            if (!Authorization.HasPermission(PermissionKeys.Suppliers))
            {
                AddProductSupplierFilter(query);
            }
        }

        protected void AddProductSupplierFilter(SqlQuery query)
        {
            var r = new TRow();
            query.Where(r.SupplierIdField ==
                ((UserDefinition)Authorization.UserDefinition).SupplierId);
        }

        protected void AddMultiSupplierFilter(SqlQuery query)
        {
            var r = new TRow();
            query.Where(r.SupplierIdField ==
                ((UserDefinition)Authorization.UserDefinition).SupplierId);
        }

        protected void AddProductOrderFilter(SqlQuery query)
        {
            var r = new TRow();
            query.Where(r.SupplierIdField ==
                ((UserDefinition)Authorization.UserDefinition).SupplierId);
        }

        public override string GetScript()
        {
            return TwoLevelCache.GetLocalStoreOnly("MultiSupplierRowLookup:" +
                    this.ScriptName + ":" +
                    ((UserDefinition)Authorization.UserDefinition).SupplierId,
                    TimeSpan.FromHours(1),
                new TRow().GetFields().GenerationKey, () =>
                {
                    return base.GetScript();
                });
        }
    }
}