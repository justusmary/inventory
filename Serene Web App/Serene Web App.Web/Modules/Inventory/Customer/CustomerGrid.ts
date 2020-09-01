
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class CustomerGrid extends Serenity.EntityGrid<Serene_Web_App.Administration.UserRow, any> {
        protected getColumnsKey() { return "Inventory.Customer"; }
        protected getDialogType() { return CustomerDialog; }
        protected getIdProperty() { return Serene_Web_App.Administration.UserRow.idProperty; }
        protected getIsActiveProperty() { return Serene_Web_App.Administration.UserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return Serene_Web_App.Administration.UserRow.localTextPrefix; }
        protected getService() { return CustomerService.baseUrl; }
        protected getReadPermission() { return "Administration:Admin"; }
        protected getDeletePermission() { return "Administration:Admin"; }
        protected getInsertPermission() { return "Administration:Admin"; }
        protected getUpdatePermission() { return "Administration:Admin"; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getDefaultSortBy() {
            return [Serene_Web_App.Administration.UserRow.Fields.Username];
        }

        
    }
}