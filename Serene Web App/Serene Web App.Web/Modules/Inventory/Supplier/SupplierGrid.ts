﻿
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey() { return 'Inventory.Supplier'; }
        protected getDialogType() { return SupplierDialog; }
        protected getIdProperty() { return SupplierRow.idProperty; }
        protected getInsertPermission() { return SupplierRow.insertPermission; }
        protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
        protected getService() { return SupplierService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}