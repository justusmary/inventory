
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

        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [Description("View all suppliers and items")]
        public const string Suppliers = "Administration:Suppliers";

        [Description("Insert suppliers"), ImplicitPermission(Suppliers)]
        public const string SuppliersAdd = "Administration:SuppliersAdd";

        [Description("Modify suppliers")]
        public const string SuppliersMod = "Administration:SuppliersModify";

        [Description("Insert and Modify products")]
        public const string SupplierAdmin = "Administrator:SuppliersAdm";

        [Description("Insert customer and purchase order")]
        public const string Customer = "Administrator:Customer";

        [Description("Modify customer and purchase order"), ImplicitPermission(Customer)]
        public const string CustomerAdmin = "Administrator:CustomerAdm";

        [Description("View product order")]
        public const string Store = "Administrator:Store";

        [Description("Modify product order"), ImplicitPermission(Store)]
        public const string StoreAdmin = "Administrator:StoreAdm";

        [Description("Insert product order"), ImplicitPermission(Store)]
        public const string StoreHQ = "Administrator:StoreHQ";
    }
}
