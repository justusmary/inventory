namespace Serene_Web_App.Administration {
    export interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        SupplierId?: number;
        SupplierName?: string;
        Phone?: string;
        Address?: string;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace UserRow {
        export const idProperty = 'UserId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Administration.User';
        export const lookupKey = 'Administration.User';

        export function getLookup(): Q.Lookup<UserRow> {
            return Q.getLookup<UserRow>('Administration.User');
        }
        export const deletePermission = 'Administration:Admin';
        export const insertPermission = 'Administration:SharedAdmin';
        export const readPermission = 'Administration:User';
        export const updatePermission = 'Administration:User';

        export declare const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            SupplierId = "SupplierId",
            SupplierName = "SupplierName",
            Phone = "Phone",
            Address = "Address",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
