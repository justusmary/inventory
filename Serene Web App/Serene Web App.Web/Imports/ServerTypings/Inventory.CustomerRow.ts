namespace Serene_Web_App.Inventory {
    export interface CustomerRow {
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

    export namespace CustomerRow {
        export const idProperty = 'UserId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Inventory.Customer';
        export const lookupKey = 'Inventory.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Inventory.Customer');
        }
        export const deletePermission = 'Administration:Security';
        export const insertPermission = 'Administration:Admin';
        export const readPermission = 'User:Customer';
        export const updatePermission = 'User:Customer';

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
