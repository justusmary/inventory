namespace Serene_Web_App.Inventory {
    export interface PurchaseOrderForm {
        CustomerId: Serenity.IntegerEditor;
        CustomerName: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        ItemList: OrderItemsEditor;
        ShippedDate: Serenity.DateEditor;
        Shipped: Serenity.BooleanEditor;
        DestinationAddress: Serenity.StringEditor;
        CustomerAddress: Serenity.StringEditor;
    }

    export class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.PurchaseOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseOrderForm.init)  {
                PurchaseOrderForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = OrderItemsEditor;
                var w4 = s.DateEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(PurchaseOrderForm, [
                    'CustomerId', w0,
                    'CustomerName', w1,
                    'Amount', w2,
                    'ItemList', w3,
                    'ShippedDate', w4,
                    'Shipped', w5,
                    'DestinationAddress', w1,
                    'CustomerAddress', w1
                ]);
            }
        }
    }
}
