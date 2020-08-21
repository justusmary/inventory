
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class ProductSuppDialog extends Serenity.EntityDialog<SupplierProductRow, any> {
        protected getFormKey() { return SupplierProductForm.formKey; }
        protected getIdProperty() { return SupplierProductRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierProductRow.localTextPrefix; }
        protected getService() { return SupplierProductService.baseUrl; }
        protected getDeletePermission() { return SupplierProductRow.deletePermission; }
        protected getInsertPermission() { return SupplierProductRow.insertPermission; }
        protected getUpdatePermission() { return SupplierProductRow.updatePermission; }

        protected form = new SupplierProductForm(this.idPrefix);

    }
}