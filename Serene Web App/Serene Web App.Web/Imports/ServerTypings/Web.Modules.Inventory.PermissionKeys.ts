namespace Serene_Web_App.Web.Modules.Inventory {
    declare namespace PermissionKeys {

        namespace Product {
            export const Delete = "Inventory:Product:Delete";
            export const Insert = "Inventory:Product:Create";
            export const Modify = "Inventory:Product:Modify";
            export const Read = "Inventory:Product:Read";
        }

        namespace Supplier {
            export const Delete = "Inventory:Supplier:Delete";
            export const Insert = "Inventory:Supplier:Create";
            export const Modify = "Inventory:Supplier:Modify";
            export const Read = "Inventory:Supplier:Read";
        }

        namespace Category {
            export const Delete = "Inventory:Category:Delete";
            export const Insert = "Inventory:Category:Create";
            export const Modify = "Inventory:Category:Modify";
            export const Read = "Inventory:Category:Read";
        }
    }
}
