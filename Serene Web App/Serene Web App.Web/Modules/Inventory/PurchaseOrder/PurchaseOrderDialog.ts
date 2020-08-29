﻿
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class PurchaseOrderDialog extends Serenity.EntityDialog<PurchaseOrderRow, any> {
        protected getFormKey() { return PurchaseOrderForm.formKey; }
        protected getIdProperty() { return PurchaseOrderRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseOrderRow.localTextPrefix; }
        protected getService() { return PurchaseOrderService.baseUrl; }
        protected getDeletePermission() { return PurchaseOrderRow.deletePermission; }
        protected getInsertPermission() { return PurchaseOrderRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseOrderRow.updatePermission; }

        protected form = new PurchaseOrderForm(this.idPrefix);
    }
}