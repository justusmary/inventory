namespace Serene_Web_App.Inventory {
    export interface CategoryRow {
        CategoryId?: number;
        Name?: string;
    }

    export namespace CategoryRow {
        export const idProperty = 'CategoryId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Category';
        export const lookupKey = 'Inventory.Category';

        export function getLookup(): Q.Lookup<CategoryRow> {
            return Q.getLookup<CategoryRow>('Inventory.Category');
        }
        export const deletePermission = 'Administration:Suppliers';
        export const insertPermission = 'Administration:Suppliers';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:Suppliers';

        export declare const enum Fields {
            CategoryId = "CategoryId",
            Name = "Name"
        }
    }
}
