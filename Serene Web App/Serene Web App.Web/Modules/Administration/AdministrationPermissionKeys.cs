
using Serenity.Extensibility;
using System.ComponentModel;

namespace Serene_Web_App.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("Base Admin Rights")]
        public const string General = "Administration:General";

        [Description("Shared Admin Rights")]
        public const string SharedAdmin = "Administration:SharedAdmin";

        [Description("Base User Rights")]
        public const string User = "Administration:User";

        [Description("Master Admin Rights")]
        public const string Admin = "Administration:Admin";

        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [Description("Base Supplier Rights")]
        public const string Supplier = "User:Supplier";

        [Description("Admin Supplier Rights")]
        public const string SupplierAdmin = "User:SuppliersAdm";

        [Description("Customer Rights")]
        public const string Customer = "User:Customer";
    }
}
