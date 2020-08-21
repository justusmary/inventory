namespace Serene_Web_App.Inventory {
    export interface SupplierRow {
        SupplierId?: number;
        Name?: string;
        Phone?: string;
        Address?: string;
        PrimaryImage?: string;
    }

    export namespace SupplierRow {
        export const idProperty = 'SupplierId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Supplier';
        export const lookupKey = 'Inventory.Supplier';

        export function getLookup(): Q.Lookup<SupplierRow> {
            return Q.getLookup<SupplierRow>('Inventory.Supplier');
        }
        export const deletePermission = 'Inventory:Supplier:Delete';
        export const insertPermission = 'Inventory:Supplier:Modify';
        export const readPermission = 'Inventory:Supplier:Read';
        export const updatePermission = 'Inventory:Supplier:Modify';

        export declare const enum Fields {
            SupplierId = "SupplierId",
            Name = "Name",
            Phone = "Phone",
            Address = "Address",
            PrimaryImage = "PrimaryImage"
        }
    }
}
