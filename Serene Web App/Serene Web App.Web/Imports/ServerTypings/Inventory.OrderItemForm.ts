namespace Serene_Web_App.Inventory {
    export interface OrderItemForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
    }

    export class OrderItemForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.OrderItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderItemForm.init)  {
                OrderItemForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(OrderItemForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'UnitPrice', w2
                ]);
            }
        }
    }
}
