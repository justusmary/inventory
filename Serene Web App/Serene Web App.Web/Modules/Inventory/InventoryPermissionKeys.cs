using Serenity.Extensibility;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Serene_Web_App.Web.Modules.Inventory
{
    [NestedPermissionKeys]
    public class PermissionKeys
    {
        [DisplayName("Products")]
        public class Product
        {
            [ImplicitPermission(View)]
            public const string Delete = "Inventory:Product:Delete";
            [ImplicitPermission(View)]
            public const string Modify = "Inventory:Product:Modify";
            public const string View = "Inventory:Product:View";
        }

        [DisplayName("Suppliers")]
        public class Supplier
        {
            [ImplicitPermission(View)]
            public const string Delete = "Inventory:Supplier:Delete";
            [ImplicitPermission(View)]
            public const string Modify = "Inventory:Supplier:Modify";
            public const string View = "Inventory:Supplier:View";
        }

        public class Category
        {
            [ImplicitPermission(View)]
            public const string Delete = "Inventory:Category:Delete";
            [ImplicitPermission(View)]
            public const string Modify = "Inventory:Category:Modify";
            public const string View = "Inventory:Category:View";
        }
    }
}
