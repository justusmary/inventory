namespace Serene_Web_App.Inventory {
    export interface ProductForm {
        PrimaryImage: Serenity.ImageUploadEditor;
        Name: Serenity.StringEditor;
        Quantity: Serenity.IntegerEditor;
        Unit: Serenity.StringEditor;
        Price: Serenity.IntegerEditor;
        CategoryId: Serenity.LookupEditor;
        SupplierId: Serenity.LookupEditor;
    }

    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Product';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductForm.init)  {
                ProductForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(ProductForm, [
                    'PrimaryImage', w0,
                    'Name', w1,
                    'Quantity', w2,
                    'Unit', w1,
                    'Price', w2,
                    'CategoryId', w3,
                    'SupplierId', w3
                ]);
            }
        }
    }
}
