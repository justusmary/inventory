namespace Serene_Web_App.Inventory {
    export interface SupplierForm {
        PrimaryImage: Serenity.ImageUploadEditor;
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
    }

    export class SupplierForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Supplier';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SupplierForm.init)  {
                SupplierForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(SupplierForm, [
                    'PrimaryImage', w0,
                    'Name', w1,
                    'Phone', w1,
                    'Address', w2
                ]);
            }
        }
    }
}
