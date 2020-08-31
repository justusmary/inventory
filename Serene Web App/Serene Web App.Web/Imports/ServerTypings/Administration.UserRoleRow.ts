namespace Serene_Web_App.Administration {
    export interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }

    export namespace UserRoleRow {
        export const idProperty = 'UserRoleId';
        export const localTextPrefix = 'Administration.UserRole';
        export const deletePermission = 'Administration:Admin';
        export const insertPermission = 'Administration:Admin';
        export const readPermission = 'Administration:Admin';
        export const updatePermission = 'Administration:Admin';

        export declare const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
