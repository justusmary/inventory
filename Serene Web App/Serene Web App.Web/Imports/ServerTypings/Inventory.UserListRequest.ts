namespace Serene_Web_App.Inventory {
    export interface UserListRequest extends Serenity.ListRequest {
        IsCustomer?: boolean;
    }
}
