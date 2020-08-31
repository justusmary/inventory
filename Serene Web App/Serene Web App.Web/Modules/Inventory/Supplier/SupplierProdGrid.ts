
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class SupplierProdGrid extends Serenity.EntityGrid<ProductRow, any>
    {
        protected getColumnsKey() { return "Inventory.SupplierProd"; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getService() { return ProductService.baseUrl; }
        protected getInsertPermission() { return ProductRow.insertPermission; }

        constructor(container: JQuery) {
            super(container);
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
                this.setEquality(ProductRow.Fields.SupplierId, value);
                this.refresh();
            }
        }
    }
}