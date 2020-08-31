
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey() { return "Inventory.Customer"; }
        protected getDialogType() { return CustomerDialog; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getIsActiveProperty() { return CustomerRow.isActiveProperty; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getService() { return CustomerService.baseUrl; }
        protected getReadPermission() { return CustomerRow.readPermission; }
        protected getDeletePermission() { return CustomerRow.deletePermission; }
        protected getInsertPermission() { return CustomerRow.insertPermission; }
        protected getUpdatePermission() { return CustomerRow.updatePermission; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getDefaultSortBy() {
            return [CustomerRow.Fields.Username];
        }

        
    }
}