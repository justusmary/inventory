namespace Serene_Web_App.Administration {
    export interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }

    export namespace UserPermissionRow {
        export const idProperty = 'UserPermissionId';
        export const nameProperty = 'PermissionKey';
        export const localTextPrefix = 'Administration.UserPermission';
        export const deletePermission = 'Administration:SharedAdmin';
        export const insertPermission = 'Administration:SharedAdmin';
        export const readPermission = 'Administration:SharedAdmin';
        export const updatePermission = 'Administration:SharedAdmin';

        export declare const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
