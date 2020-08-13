
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class SupplierProdGrid extends Serenity.EntityGrid<SupplierProductRow, any>
    {
        protected getColumnsKey() { return "Inventory.SupplierProd"; }
        protected getIdProperty() { return SupplierProductRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierProductRow.localTextPrefix; }
        protected getService() { return SupplierProductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            return null;
        }

        protected getInitialTitle() {
            return null;
        }

        protected usePager() {
            return false;
        }

        protected getGridCanLoad() {
            return this.supplierID != null;
        }

        private _supplierID: number;

        get supplierID() {
            return this._supplierID;
        }

        set supplierID(value: number) {
            if (this._supplierID != value) {
                this._supplierID = value;
                this.setEquality(SupplierProductRow.Fields.SupplierId, value);
                this.refresh();
            }
        }
    }
}