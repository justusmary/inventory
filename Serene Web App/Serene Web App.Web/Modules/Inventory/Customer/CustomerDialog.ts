
namespace Serene_Web_App.Inventory {
    
    @Serenity.Decorators.registerClass()
    export class CustomerDialog extends Serenity.EntityDialog<Serene_Web_App.Administration.UserRow, any> {
        protected getFormKey() { return Serene_Web_App.Administration.UserForm.formKey; }
        protected getIdProperty() { return Serene_Web_App.Administration.UserRow.idProperty; }
        protected getLocalTextPrefix() { return Serene_Web_App.Administration.UserRow.localTextPrefix; }
        protected getNameProperty() { return Serene_Web_App.Administration.UserRow.nameProperty; }
        protected getService() { return CustomerService.baseUrl; }
        protected getReadPermission() { return "Administration:Admin"; }
        protected getDeletePermission() { return "Administration:Admin"; }
        protected getInsertPermission() { return "Administration:Admin"; }
        protected getUpdatePermission() { return "Administration:Admin"; }

        protected form = new CustomerForm(this.idPrefix);

        constructor() {
            super();

            this.form.Password.addValidationRule(this.uniqueName, e => {
                if (this.form.Password.value.length < 7)
                    return "Password must be at least 7 characters!";
            });

            this.form.PasswordConfirm.addValidationRule(this.uniqueName, e => {
                if (this.form.Password.value != this.form.PasswordConfirm.value)
                    return "The passwords entered doesn't match!";
            });
        }

        protected getToolbarButtons() {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "edit-roles-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "edit-permissions-button"), 1);

            return buttons;
        }
    }
}