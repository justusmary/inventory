
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class OrderItemGrid extends Serenity.EntityGrid<OrderItemRow, any> {
        protected getColumnsKey() { return 'Inventory.OrderItem'; }
        protected getDialogType() { return OrderItemDialog; }
        protected getIdProperty() { return OrderItemRow.idProperty; }
        protected getInsertPermission() { return OrderItemRow.insertPermission; }
        protected getLocalTextPrefix() { return OrderItemRow.localTextPrefix; }
        protected getService() { return OrderItemService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}