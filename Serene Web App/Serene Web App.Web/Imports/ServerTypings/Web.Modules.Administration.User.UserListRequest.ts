namespace Serene_Web_App.Web.Modules.Administration.User {
    export interface UserListRequest extends Serenity.ListRequest {
        IsCustomer?: boolean;
    }
}
