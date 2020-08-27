﻿namespace Serene_Web_App.Inventory {
    export interface PurchaseOrderForm {
        CustomerId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
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
                var w1 = s.DecimalEditor;
                var w2 = OrderItemsEditor;

                Q.initFormType(PurchaseOrderForm, [
                    'CustomerId', w0,
                    'Amount', w1,
                    'ItemList', w2
                ]);
            }
        }
    }
}
