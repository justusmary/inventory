
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ProductOrderDialog extends Serenity.EntityDialog<ProductOrderRow, any> {
        protected getFormKey() { return ProductOrderForm.formKey; }
        protected getIdProperty() { return ProductOrderRow.idProperty; }
        protected getLocalTextPrefix() { return ProductOrderRow.localTextPrefix; }
        protected getService() { return ProductOrderService.baseUrl; }
        protected getDeletePermission() { return ProductOrderRow.deletePermission; }
        protected getInsertPermission() { return ProductOrderRow.insertPermission; }
        protected getUpdatePermission() { return ProductOrderRow.updatePermission; }

        protected form: ProductOrderForm;

        constructor() {
            super();

            this.form = new ProductOrderForm(this.idPrefix);

            //this.form.Date.value = Date.now.toString();

            this.form.ProductId.changeSelect2(e => {
                var ProductId = Q.toId(this.form.ProductId.value);
                if (ProductId != null) {
                    var temp = ProductRow.getLookup().itemById[ProductId].SupplierId.toString();
                    this.form.SupplierId.value = ProductRow.getLookup().itemById[ProductId].SupplierId.toString();
                    this.form.TotalAmount.value = ProductRow.getLookup().itemById[ProductId].Price * this.form.Quantity.value;
                }
            });

            this.form.Quantity.change(e => {
                var ProductId = Q.toId(this.form.ProductId.value);
                if (ProductId != null) {
                    this.form.TotalAmount.value = ProductRow.getLookup().itemById[ProductId].Price * this.form.Quantity.value;
                }
            });
        }

    }
}