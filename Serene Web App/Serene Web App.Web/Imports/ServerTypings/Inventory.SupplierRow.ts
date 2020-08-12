namespace Serene_Web_App.Inventory {
    export interface SupplierRow {
        SupplierId?: number;
        Name?: string;
        Phone?: string;
        Address?: string;
    }

    export namespace SupplierRow {
        export const idProperty = 'SupplierId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Supplier';
        export const lookupKey = 'Inventory.Supplier';

        export function getLookup(): Q.Lookup<SupplierRow> {
            return Q.getLookup<SupplierRow>('Inventory.Supplier');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SupplierId = "SupplierId",
            Name = "Name",
            Phone = "Phone",
            Address = "Address"
        }
    }
}
