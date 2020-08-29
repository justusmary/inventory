namespace Serene_Web_App.Inventory {
    export interface PurchaseOrderRow {
        PurchaseOrderId?: number;
        CustomerId?: number;
        Amount?: number;
        Date?: string;
        CustomerName?: string;
        ItemList?: OrderItemRow[];
        DestinationAddress?: string;
        CustomerAddress?: string;
        ShippedDate?: string;
        Shipped?: boolean;
        UpdateUserId?: number;
        UpdateUsername?: string;
        UpdateDate?: string;
    }

    export namespace PurchaseOrderRow {
        export const idProperty = 'PurchaseOrderId';
        export const localTextPrefix = 'Inventory.PurchaseOrder';
        export const deletePermission = 'Administrator:CustomerAdm';
        export const insertPermission = 'Administrator:Customer';
        export const readPermission = 'Administrator:Customer';
        export const updatePermission = 'Administrator:CustomerAdm';

        export declare const enum Fields {
            PurchaseOrderId = "PurchaseOrderId",
            CustomerId = "CustomerId",
            Amount = "Amount",
            Date = "Date",
            CustomerName = "CustomerName",
            ItemList = "ItemList",
            DestinationAddress = "DestinationAddress",
            CustomerAddress = "CustomerAddress",
            ShippedDate = "ShippedDate",
            Shipped = "Shipped",
            UpdateUserId = "UpdateUserId",
            UpdateUsername = "UpdateUsername",
            UpdateDate = "UpdateDate"
        }
    }
}
