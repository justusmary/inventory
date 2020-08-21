namespace Serene_Web_App.Inventory {
    export interface SupplierProductRow {
        SupplierProductId?: number;
        SupplierId?: number;
        ProductId?: number;
        SupplierName?: string;
        SupplierPhone?: string;
        SupplierAddress?: string;
        ProductName?: string;
        ProductQuantity?: number;
        ProductUnit?: string;
        ProductPrice?: number;
        ProductSupplierId?: number;
        ProductCategoryId?: number;
    }

    export namespace SupplierProductRow {
        export const idProperty = 'SupplierProductId';
        export const localTextPrefix = 'Inventory.SupplierProduct';
        export const deletePermission = 'Inventory:SupplierProduct:Modify';
        export const insertPermission = 'Inventory:SupplierProduct:Modify';
        export const readPermission = 'Inventory:SupplierProduct:Read';
        export const updatePermission = 'Inventory:SupplierProduct:Modify';

        export declare const enum Fields {
            SupplierProductId = "SupplierProductId",
            SupplierId = "SupplierId",
            ProductId = "ProductId",
            SupplierName = "SupplierName",
            SupplierPhone = "SupplierPhone",
            SupplierAddress = "SupplierAddress",
            ProductName = "ProductName",
            ProductQuantity = "ProductQuantity",
            ProductUnit = "ProductUnit",
            ProductPrice = "ProductPrice",
            ProductSupplierId = "ProductSupplierId",
            ProductCategoryId = "ProductCategoryId"
        }
    }
}
