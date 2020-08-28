namespace Serene_Web_App.Inventory {
    export interface PurchaseOrderForm {
        CustomerId: Serenity.LookupEditor;
        ItemList: OrderItemsEditor;
    }

    export class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.PurchaseOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseOrderForm.init)  {
                PurchaseOrderForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = OrderItemsEditor;

                Q.initFormType(PurchaseOrderForm, [
                    'CustomerId', w0,
                    'ItemList', w1
                ]);
            }
        }
    }
}
