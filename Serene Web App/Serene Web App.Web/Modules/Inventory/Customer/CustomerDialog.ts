
namespace Serene_Web_App.Inventory {
    
    @Serenity.Decorators.registerClass()
    export class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey() { return CustomerForm.formKey; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getNameProperty() { return CustomerRow.nameProperty; }
        protected getService() { return CustomerService.baseUrl; }
        protected getReadPermission() { return CustomerRow.readPermission; }
        protected getDeletePermission() { return CustomerRow.deletePermission; }
        protected getInsertPermission() { return CustomerRow.insertPermission; }
        protected getUpdatePermission() { return CustomerRow.updatePermission; }

        protected form = new Serene_Web_App.Administration.UserForm(this.idPrefix);

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