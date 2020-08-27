namespace Serene_Web_App.Inventory {
    export interface OrderItemRow {
        OrderItemId?: number;
        PurchaseOrderId?: number;
        ProductId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Date?: string;
        PurchaseOrderAmount?: number;
        PurchaseOrderDate?: string;
        ProductName?: string;
        ProductQuantity?: number;
        ProductUnit?: string;
        ProductPrice?: number;
        ProductSupplierId?: number;
        ProductCategoryId?: number;
        ProductPrimaryImage?: string;
        LineTotal?: number;
    }

    export namespace OrderItemRow {
        export const idProperty = 'OrderItemId';
        export const localTextPrefix = 'Inventory.OrderItem';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            OrderItemId = "OrderItemId",
            PurchaseOrderId = "PurchaseOrderId",
            ProductId = "ProductId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Date = "Date",
            PurchaseOrderAmount = "PurchaseOrderAmount",
            PurchaseOrderDate = "PurchaseOrderDate",
            ProductName = "ProductName",
            ProductQuantity = "ProductQuantity",
            ProductUnit = "ProductUnit",
            ProductPrice = "ProductPrice",
            ProductSupplierId = "ProductSupplierId",
            ProductCategoryId = "ProductCategoryId",
            ProductPrimaryImage = "ProductPrimaryImage",
            LineTotal = "LineTotal"
        }
    }
}
