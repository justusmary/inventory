namespace Serene_Web_App.Administration {
    export interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        SupplierId?: number;
    }

    export namespace RoleRow {
        export const idProperty = 'RoleId';
        export const nameProperty = 'RoleName';
        export const localTextPrefix = 'Administration.Role';
        export const lookupKey = 'Administration.Role';

        export function getLookup(): Q.Lookup<RoleRow> {
            return Q.getLookup<RoleRow>('Administration.Role');
        }
        export const deletePermission = 'Administration:Security';
        export const insertPermission = 'Administration:Security';
        export const readPermission = 'Administration:Admin';
        export const updatePermission = 'Administration:Security';

        export declare const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            SupplierId = "SupplierId"
        }
    }
}
