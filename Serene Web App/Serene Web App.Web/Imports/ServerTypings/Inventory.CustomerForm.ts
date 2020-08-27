namespace Serene_Web_App.Inventory {
    export interface CustomerForm {
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.StringEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CustomerForm, [
                    'Name', w0,
                    'Phone', w0,
                    'Address', w0
                ]);
            }
        }
    }
}
