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
            [ImplicitPermission(Read), ImplicitPermission(Category.Read), ImplicitPermission(Supplier.Read)]
            public const string Delete = "Inventory:Product:Delete";
            [ImplicitPermission(Read), ImplicitPermission(Category.Read), ImplicitPermission(Supplier.Read)]
            public const string Insert = "Inventory:Product:Create";
            [ImplicitPermission(Read), ImplicitPermission(Category.Read), ImplicitPermission(Supplier.Read)]
            public const string Modify = "Inventory:Product:Modify";
            [ ImplicitPermission(Category.Read), ImplicitPermission(Supplier.Read)]
            public const string Read = "Inventory:Product:Read";
        }

        [DisplayName("Suppliers")]
        public class Supplier
        {
            [ImplicitPermission(Read), ImplicitPermission(Product.Read), ImplicitPermission(Category.Read), ]
            public const string Delete = "Inventory:Supplier:Delete";
            [ImplicitPermission(Read), ImplicitPermission(Product.Read), ImplicitPermission(Category.Read), ]
            public const string Insert = "Inventory:Supplier:Create";
            [ImplicitPermission(Read), ImplicitPermission(Product.Read), ImplicitPermission(Category.Read), ]
            public const string Modify = "Inventory:Supplier:Modify";
            [ ImplicitPermission(Product.Read), ImplicitPermission(Category.Read)]
            public const string Read = "Inventory:Supplier:Read";
        }

        public class Category
        {
            [ImplicitPermission(Read)]
            public const string Delete = "Inventory:Category:Delete";
            [ImplicitPermission(Read)]
            public const string Insert = "Inventory:Category:Create";
            [ImplicitPermission(Read)]
            public const string Modify = "Inventory:Category:Modify";
            public const string Read = "Inventory:Category:Read";
        }
    }
}
