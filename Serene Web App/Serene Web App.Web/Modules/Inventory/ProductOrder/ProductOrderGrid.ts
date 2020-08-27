
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class ProductOrderGrid extends Serenity.EntityGrid<ProductOrderRow, any> {
        protected getColumnsKey() { return 'Inventory.ProductOrder'; }
        protected getDialogType() { return ProductOrderDialog; }
        protected getIdProperty() { return ProductOrderRow.idProperty; }
        protected getInsertPermission() { return ProductOrderRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductOrderRow.localTextPrefix; }
        protected getService() { return ProductOrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}