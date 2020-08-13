namespace Serene_Web_App.Inventory {
    export interface SupplierProductForm {
        SupplierId: Serenity.LookupEditor;
        ProductId: Serenity.LookupEditor;
    }

    export class SupplierProductForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.SupplierProduct';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SupplierProductForm.init)  {
                SupplierProductForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(SupplierProductForm, [
                    'SupplierId', w0,
                    'ProductId', w0
                ]);
            }
        }
    }
}
