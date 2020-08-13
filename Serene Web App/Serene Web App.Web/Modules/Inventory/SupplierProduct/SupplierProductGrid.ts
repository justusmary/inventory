
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class SupplierProductGrid extends Serenity.EntityGrid<SupplierProductRow, any> {
        protected getColumnsKey() { return 'Inventory.SupplierProduct'; }
        protected getDialogType() { return SupplierProductDialog; }
        protected getIdProperty() { return SupplierProductRow.idProperty; }
        protected getInsertPermission() { return SupplierProductRow.insertPermission; }
        protected getLocalTextPrefix() { return SupplierProductRow.localTextPrefix; }
        protected getService() { return SupplierProductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}