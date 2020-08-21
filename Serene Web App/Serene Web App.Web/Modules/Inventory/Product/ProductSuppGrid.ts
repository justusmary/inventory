
namespace Serene_Web_App.Inventory {

    @Serenity.Decorators.registerClass()
    export class ProductSuppGrid extends Serenity.EntityGrid<SupplierProductRow, any>
    {
        protected getColumnsKey() { return "Inventory.ProductSupp"; }
        protected getIdProperty() { return SupplierProductRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierProductRow.localTextPrefix; }
        protected getService() { return SupplierProductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getGridCanLoad() {
            return this.productID != null;
        }

        private _productID: number;

        get productID() {
            return this._productID;
        }

        set productID(value: number) {
            if (this._productID != value) {
                this._productID = value;
                this.setEquality(SupplierProductRow.Fields.ProductId, value);
                this.refresh();
            }
        }
    }
}