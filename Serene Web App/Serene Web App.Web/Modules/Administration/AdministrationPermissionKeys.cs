
using Serenity.Extensibility;
using System.ComponentModel;

namespace Serene_Web_App.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        public const string Suppliers = "Administration:Suppliers";

        [Description("Base Admin Rights")]
        public const string General = "Administration:General";
    }
}
