
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ShipmentDialog extends Serenity.EntityDialog<ShipmentRow, any> {
        protected getFormKey() { return ShipmentForm.formKey; }
        protected getIdProperty() { return ShipmentRow.idProperty; }
        protected getLocalTextPrefix() { return ShipmentRow.localTextPrefix; }
        protected getNameProperty() { return ShipmentRow.nameProperty; }
        protected getService() { return ShipmentService.baseUrl; }
        protected getDeletePermission() { return ShipmentRow.deletePermission; }
        protected getInsertPermission() { return ShipmentRow.insertPermission; }
        protected getUpdatePermission() { return ShipmentRow.updatePermission; }

        protected form = new ShipmentForm(this.idPrefix);

    }
}