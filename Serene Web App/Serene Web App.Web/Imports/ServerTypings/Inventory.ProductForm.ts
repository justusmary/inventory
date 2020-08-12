namespace Serene_Web_App.Inventory {
    export interface ProductForm {
        Name: Serenity.StringEditor;
        Quantity: Serenity.IntegerEditor;
        Unit: Serenity.IntegerEditor;
        Price: Serenity.IntegerEditor;
        CategoryId: Serenity.LookupEditor;
    }

    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Product';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductForm.init)  {
                ProductForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(ProductForm, [
                    'Name', w0,
                    'Quantity', w1,
                    'Unit', w1,
                    'Price', w1,
                    'CategoryId', w2
                ]);
            }
        }
    }
}
