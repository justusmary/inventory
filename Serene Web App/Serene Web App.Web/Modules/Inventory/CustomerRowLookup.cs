using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Serene_Web_App.Inventory.Scripts
{
    using Administration;
    using Serene_Web_App.Administration.Entities;
    using Serene_Web_App.Inventory.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using static Serenity.Data.SqlQuery;


    [LookupScript]
    public class CustomerRowLookupScript : RowLookupScript<CustomerRow>
    {
        public CustomerRowLookupScript()
        {
            Expiration = TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            /*
            if (!Authorization.HasPermission(PermissionKeys.Admin) && Authorization.HasPermission(PermissionKeys.Customer))
            {
                AddCustomerFilter(query);
            }
            */

            AddCustomerFilter(query);
        }

        protected void AddCustomerFilter(SqlQuery query)
        {
            var c = new CustomerRow();
            var u = new UserRoleRow();
            var r = new RoleRow();

            /*
            query.Where(c.UserIdField ==
                ((UserDefinition)Authorization.UserDefinition).UserId);
                
            
            query
                .Where(c.UserIdField
                .In(query.SubQuery()
                .From("UserRoles").Select("UserId")
                .Where("RoleId == 1")));
            */
        }
    }
}