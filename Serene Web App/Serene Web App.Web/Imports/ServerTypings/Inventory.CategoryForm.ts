namespace Serene_Web_App.Inventory {
    export interface CategoryForm {
        Name: Serenity.StringEditor;
    }

    export class CategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Category';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoryForm.init)  {
                CategoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CategoryForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
