namespace Serene_Web_App.Inventory {
    export interface ProductOrderForm {
        ProductId: Serenity.LookupEditor;
        SupplierId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        TotalAmount: Serenity.DecimalEditor;
        Fulfilled: Serenity.BooleanEditor;
    }

    export class ProductOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.ProductOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductOrderForm.init)  {
                ProductOrderForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ProductOrderForm, [
                    'ProductId', w0,
                    'SupplierId', w0,
                    'Quantity', w1,
                    'TotalAmount', w2,
                    'Fulfilled', w3
                ]);
            }
        }
    }
}
