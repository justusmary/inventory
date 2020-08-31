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
        UpdateUserId?: number;
        UpdateUsername?: string;
        UpdateDate?: string;
        InsertUserId?: number;
        InsertUsername?: string;
        InsertDate?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'ProductId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Product';
        export const lookupKey = 'Inventory.Product';

        export function getLookup(): Q.Lookup<ProductRow> {
            return Q.getLookup<ProductRow>('Inventory.Product');
        }
        export const deletePermission = 'Administration:Admin';
        export const insertPermission = 'User:Supplier';
        export const readPermission = 'Administration:User';
        export const updatePermission = 'User:Supplier';

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
            PrimaryImage = "PrimaryImage",
            UpdateUserId = "UpdateUserId",
            UpdateUsername = "UpdateUsername",
            UpdateDate = "UpdateDate",
            InsertUserId = "InsertUserId",
            InsertUsername = "InsertUsername",
            InsertDate = "InsertDate"
        }
    }
}
