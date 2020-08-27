
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class ShipmentGrid extends Serenity.EntityGrid<ShipmentRow, any> {
        protected getColumnsKey() { return 'Inventory.Shipment'; }
        protected getDialogType() { return ShipmentDialog; }
        protected getIdProperty() { return ShipmentRow.idProperty; }
        protected getInsertPermission() { return ShipmentRow.insertPermission; }
        protected getLocalTextPrefix() { return ShipmentRow.localTextPrefix; }
        protected getService() { return ShipmentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}