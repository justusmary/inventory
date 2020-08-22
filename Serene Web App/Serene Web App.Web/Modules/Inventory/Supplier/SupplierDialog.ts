
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey() { return SupplierForm.formKey; }
        protected getIdProperty() { return SupplierRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
        protected getNameProperty() { return SupplierRow.nameProperty; }
        protected getService() { return SupplierService.baseUrl; }
        protected getDeletePermission() { return SupplierRow.deletePermission; }
        protected getInsertPermission() { return SupplierRow.insertPermission; }
        protected getUpdatePermission() { return SupplierRow.updatePermission; }

        protected form = new SupplierForm(this.idPrefix);

        private ProductGrid: SupplierProdGrid;

        constructor() {
            super();

            this.ProductGrid = new SupplierProdGrid(this.byId("ProductGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.ProductGrid.supplierID = this.entityId;
        }

    }
}