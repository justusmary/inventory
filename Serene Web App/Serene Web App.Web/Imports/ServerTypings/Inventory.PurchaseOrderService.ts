namespace Serene_Web_App.Inventory {
    export namespace PurchaseOrderService {
        export const baseUrl = 'Inventory/PurchaseOrder';

        export declare function Create(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: PurchaseOrderListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inventory/PurchaseOrder/Create",
            Update = "Inventory/PurchaseOrder/Update",
            Delete = "Inventory/PurchaseOrder/Delete",
            Retrieve = "Inventory/PurchaseOrder/Retrieve",
            List = "Inventory/PurchaseOrder/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PurchaseOrderService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
