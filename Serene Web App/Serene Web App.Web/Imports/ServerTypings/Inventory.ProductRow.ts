namespace Serene_Web_App.Inventory {
    export interface ProductRow {
        ProductId?: number;
        Name?: string;
        Quantity?: number;
        Unit?: string;
        Price?: number;
        CategoryId?: number;
        CategoryName?: string;
        SupplierId?: number;
        SupplierName?: string;
        PrimaryImage?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'ProductId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Product';
        export const lookupKey = 'Inventory.Product';

        export function getLookup(): Q.Lookup<ProductRow> {
            return Q.getLookup<ProductRow>('Inventory.Product');
        }
        export const deletePermission = 'Inventory:Product:Modify';
        export const insertPermission = 'Inventory:Product:Modify';
        export const readPermission = 'Inventory:Product:Read';
        export const updatePermission = 'Inventory:Product:Modify';

        export declare const enum Fields {
            ProductId = "ProductId",
            Name = "Name",
            Quantity = "Quantity",
            Unit = "Unit",
            Price = "Price",
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            SupplierId = "SupplierId",
            SupplierName = "SupplierName",
            PrimaryImage = "PrimaryImage"
        }
    }
}
