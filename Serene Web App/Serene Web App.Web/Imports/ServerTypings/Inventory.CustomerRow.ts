namespace Serene_Web_App.Inventory {
    export interface CustomerRow {
        CustomerId?: number;
        Name?: string;
        Phone?: string;
        Address?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Customer';
        export const lookupKey = 'Inventory.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Inventory.Customer');
        }
        export const deletePermission = 'Administrator:CustomerAdm';
        export const insertPermission = 'Administrator:Customer';
        export const readPermission = 'Administrator:Customer';
        export const updatePermission = 'Administrator:CustomerAdm';

        export declare const enum Fields {
            CustomerId = "CustomerId",
            Name = "Name",
            Phone = "Phone",
            Address = "Address"
        }
    }
}
