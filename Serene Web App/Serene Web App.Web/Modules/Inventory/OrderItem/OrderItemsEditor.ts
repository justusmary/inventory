
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class OrderItemsEditor extends Common.GridEditorBase<OrderItemRow> {
        protected getColumnsKey() { return "Inventory.OrderItem"; }
        protected getDialogType() { return OrderItemDialog; }
        protected getLocalTextPrefix() { return OrderItemRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            row.ProductId = Q.toId(row.ProductId);

            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This product is already in order details!');
                return false;
            }

            row.ProductName = ProductRow.getLookup().itemById[row.ProductId].Name;
            row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0);
            return true;
        }
    }
}