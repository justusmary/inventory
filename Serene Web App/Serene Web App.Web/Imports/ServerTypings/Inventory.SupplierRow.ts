namespace Serene_Web_App.Inventory {
    export interface SupplierRow {
        SupplierId?: number;
        Name?: string;
        Phone?: string;
        Address?: string;
        PrimaryImage?: string;
        UpdateUserId?: number;
        UpdateUsername?: string;
        UpdateDate?: string;
        InsertUserId?: number;
        InsertUsername?: string;
        InsertDate?: string;
    }

    export namespace SupplierRow {
        export const idProperty = 'SupplierId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Supplier';
        export const lookupKey = 'Inventory.Supplier';

        export function getLookup(): Q.Lookup<SupplierRow> {
            return Q.getLookup<SupplierRow>('Inventory.Supplier');
        }
        export const deletePermission = 'Administration:SuppliersModify';
        export const insertPermission = 'Administration:SuppliersAdd';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:SuppliersModify';

        export declare const enum Fields {
            SupplierId = "SupplierId",
            Name = "Name",
            Phone = "Phone",
            Address = "Address",
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
