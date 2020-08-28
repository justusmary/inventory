namespace Serene_Web_App.Inventory {
    export interface ShipmentRow {
        ShipmentId?: number;
        PurchaseOrderId?: number;
        TotalAmount?: number;
        DestinationAddress?: string;
        Date?: string;
        Shipped?: boolean;
        PurchaseOrderAmount?: number;
        PurchaseOrderDate?: string;
        CustomerId?: number;
        CustomerName?: string;
    }

    export namespace ShipmentRow {
        export const idProperty = 'ShipmentId';
        export const nameProperty = 'DestinationAddress';
        export const localTextPrefix = 'Inventory.Shipment';
        export const deletePermission = 'Administrator:CustomerAdm';
        export const insertPermission = 'Administrator:Customer';
        export const readPermission = 'Administrator:Customer';
        export const updatePermission = 'Administrator:CustomerAdm';

        export declare const enum Fields {
            ShipmentId = "ShipmentId",
            PurchaseOrderId = "PurchaseOrderId",
            TotalAmount = "TotalAmount",
            DestinationAddress = "DestinationAddress",
            Date = "Date",
            Shipped = "Shipped",
            PurchaseOrderAmount = "PurchaseOrderAmount",
            PurchaseOrderDate = "PurchaseOrderDate",
            CustomerId = "CustomerId",
            CustomerName = "CustomerName"
        }
    }
}
