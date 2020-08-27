namespace Serene_Web_App.Inventory {
    export interface ShipmentForm {
        PurchaseOrderId: Serenity.IntegerEditor;
        TotalAmount: Serenity.DecimalEditor;
        DestinationAddress: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        Shipped: Serenity.BooleanEditor;
    }

    export class ShipmentForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Shipment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ShipmentForm.init)  {
                ShipmentForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(ShipmentForm, [
                    'PurchaseOrderId', w0,
                    'TotalAmount', w1,
                    'DestinationAddress', w2,
                    'Date', w3,
                    'Shipped', w4
                ]);
            }
        }
    }
}
