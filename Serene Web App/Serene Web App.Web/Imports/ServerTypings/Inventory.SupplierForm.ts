namespace Serene_Web_App.Inventory {
    export interface SupplierForm {
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
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(SupplierForm, [
                    'Name', w0,
                    'Phone', w0,
                    'Address', w1
                ]);
            }
        }
    }
}
