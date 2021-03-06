﻿namespace Serene_Web_App.Inventory {
    export interface ProductOrderRow {
        ProductOrderId?: number;
        ProductId?: number;
        Quantity?: number;
        TotalAmount?: number;
        Date?: string;
        Fulfilled?: boolean;
        ProductName?: string;
        ProductQuantity?: number;
        ProductUnit?: string;
        ProductPrice?: number;
        ProductSupplierId?: number;
        ProductCategoryId?: number;
        ProductPrimaryImage?: string;
        SupplierId?: number;
        SupplierName?: string;
        UpdateUserId?: number;
        UpdateUsername?: string;
        UpdateDate?: string;
    }

    export namespace ProductOrderRow {
        export const idProperty = 'ProductOrderId';
        export const localTextPrefix = 'Inventory.ProductOrder';
        export const lookupKey = 'Inventory.ProductOrder';

        export function getLookup(): Q.Lookup<ProductOrderRow> {
            return Q.getLookup<ProductOrderRow>('Inventory.ProductOrder');
        }
        export const deletePermission = 'Administration:Admin';
        export const insertPermission = 'Administration:Admin';
        export const readPermission = 'User:Supplier';
        export const updatePermission = 'Administration:Admin';

        export declare const enum Fields {
            ProductOrderId = "ProductOrderId",
            ProductId = "ProductId",
            Quantity = "Quantity",
            TotalAmount = "TotalAmount",
            Date = "Date",
            Fulfilled = "Fulfilled",
            ProductName = "ProductName",
            ProductQuantity = "ProductQuantity",
            ProductUnit = "ProductUnit",
            ProductPrice = "ProductPrice",
            ProductSupplierId = "ProductSupplierId",
            ProductCategoryId = "ProductCategoryId",
            ProductPrimaryImage = "ProductPrimaryImage",
            SupplierId = "SupplierId",
            SupplierName = "SupplierName",
            UpdateUserId = "UpdateUserId",
            UpdateUsername = "UpdateUsername",
            UpdateDate = "UpdateDate"
        }
    }
}
