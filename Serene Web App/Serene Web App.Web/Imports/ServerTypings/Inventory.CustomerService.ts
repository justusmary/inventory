namespace Serene_Web_App.Inventory {
    export namespace CustomerService {
        export const baseUrl = 'Inventory/Customer';

        export declare function Create(request: Serenity.SaveRequest<Administration.UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<Administration.UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<Administration.UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: UserListRequest, onSuccess?: (response: Serenity.ListResponse<Administration.UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inventory/Customer/Create",
            Update = "Inventory/Customer/Update",
            Delete = "Inventory/Customer/Delete",
            Retrieve = "Inventory/Customer/Retrieve",
            List = "Inventory/Customer/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CustomerService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
