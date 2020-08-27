
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class OrderItemDialog extends Common.GridEditorDialog<OrderItemRow> {
        protected getFormKey() { return OrderItemForm.formKey; }
        protected getIdProperty() { return OrderItemRow.idProperty; }
        protected getLocalTextPrefix() { return OrderItemRow.localTextPrefix; }
        protected getService() { return OrderItemService.baseUrl; }
        protected getDeletePermission() { return OrderItemRow.deletePermission; }
        protected getInsertPermission() { return OrderItemRow.insertPermission; }
        protected getUpdatePermission() { return OrderItemRow.updatePermission; }

        protected form: OrderItemForm;

        constructor() {
            super();

            this.form = new OrderItemForm(this.idPrefix);

            //this.form.Date.value = Date.now.toString();

            this.form.ProductId.changeSelect2(e => {
                var ProductId = Q.toId(this.form.ProductId.value);
                if (ProductId != null) {
                    this.form.UnitPrice.value = ProductRow.getLookup().itemById[ProductId].Price;
                }
            });

            this.form.Quantity.change(e => {
                var ProductId = Q.toId(this.form.ProductId.value);
                if (ProductId != null) {
                    this.form.UnitPrice.value = ProductRow.getLookup().itemById[ProductId].Price;
                }
            });
        }

    }
}