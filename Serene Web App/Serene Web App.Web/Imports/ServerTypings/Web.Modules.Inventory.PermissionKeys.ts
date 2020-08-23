namespace Serene_Web_App.Web.Modules.Inventory {
    declare namespace PermissionKeys {

        namespace Product {
            export const Delete = "Inventory:Product:Delete";
            export const Modify = "Inventory:Product:Modify";
            export const View = "Inventory:Product:View";
        }

        namespace Supplier {
            export const Delete = "Inventory:Supplier:Delete";
            export const Modify = "Inventory:Supplier:Modify";
            export const View = "Inventory:Supplier:View";
        }

        namespace Category {
            export const Delete = "Inventory:Category:Delete";
            export const Modify = "Inventory:Category:Modify";
            export const View = "Inventory:Category:View";
        }
    }
}
