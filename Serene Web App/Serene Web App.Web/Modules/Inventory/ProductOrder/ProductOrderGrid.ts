
namespace Serene_Web_App.Inventory {

    import fld = ProductOrderRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProductOrderGrid extends Serenity.EntityGrid<ProductOrderRow, any> {
        protected getColumnsKey() { return 'Inventory.ProductOrder'; }
        protected getDialogType() { return ProductOrderDialog; }
        protected getIdProperty() { return ProductOrderRow.idProperty; }
        protected getInsertPermission() { return ProductOrderRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductOrderRow.localTextPrefix; }
        protected getService() { return ProductOrderService.baseUrl; }

        private pendingChanges: Q.Dictionary<any> = {};

        constructor(container: JQuery) {
            super(container);

            this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push({
                title: 'Save Changes',
                cssClass: 'apply-changes-button disabled',
                onClick: e => this.saveClick(),
                separator: true
            });

            return buttons;
        }

        protected onViewProcessData(response) {
            this.pendingChanges = {};
            this.setSaveButtonState();
            return super.onViewProcessData(response);
        }

        private numericInputFormatter(ctx) {
            var klass = 'edit numeric';
            var item = ctx.item as ProductOrderRow;
            var pending = this.pendingChanges[item.ProductOrderId];

            if (pending && pending[ctx.column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, ctx.column.field) as number;

            return "<input type='text' class='" + klass +
                "' data-field='" + ctx.column.field +
                "' value='" + Q.formatNumber(value, '0.##') + "'/>";
        }

        private boolInputFormatter(ctx) {
            var klass = 'edit bool';
            var item = ctx.item as ProductOrderRow;
            var pending = this.pendingChanges[item.ProductOrderId];
            var column = ctx.column as Slick.Column;

            if (pending && pending[column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, column.field) as boolean;
            var state = ""
            value == true ? state = "checked" : state = "";

            return "<input type='checkbox' class='" + klass +
                "' data-field='" + column.field + "'" +
                Q.attrEncode(state) + "/>";
        }

        private selectFormatter(ctx: Slick.FormatterContext, idField: string, lookup: Q.Lookup<any>) {
            var klass = 'edit';
            var item = ctx.item as ProductOrderRow;
            var pending = this.pendingChanges[item.ProductOrderId];

            if (pending && pending[idField] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, idField);
            var markup = "<select class='" + klass +
                "' data-field='" + idField +
                "' style='width: 100%; max-width: 100%'>";
            for (var c of lookup.items) {
                let id = c[lookup.idField];
                markup += "<option value='" + Q.attrEncode(id) + "'"
                if (id == value) {
                    markup += " selected";
                }
                markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
            }
            return markup + "</select>";
        }

        private getEffectiveValue(item, field): any {
            var pending = this.pendingChanges[item.ProductOrderId];
            if (pending && pending[field] !== undefined) {
                return pending[field];
            }

            return item[field];
        }

        protected getColumns() {
            var columns = super.getColumns();
            var num = ctx => this.numericInputFormatter(ctx);
            var bool = ctx => this.boolInputFormatter(ctx);

            var supplier = Q.first(columns, x => x.field === fld.SupplierName);
            supplier.referencedFields = [fld.SupplierId];
            supplier.format = ctx => this.selectFormatter(ctx, fld.SupplierId, SupplierRow.getLookup());

            Q.first(columns, x => x.field === fld.Quantity).format = num;
            Q.first(columns, x => x.field === fld.TotalAmount).format = num;
            Q.first(columns, x => x.field === fld.Fulfilled).format = bool;

            return columns;
        }

        private inputsChange(e: JQueryEventObject) {
            var cell = this.slickGrid.getCellFromEvent(e);
            var item = this.itemAt(cell.row);
            var input = $(e.target);
            var field = input.data('field');
            var text = Q.coalesce(Q.trimToNull(input.val()), '0');
            var pending = this.pendingChanges[item.ProductOrderId];

            var effective = this.getEffectiveValue(item, field);
            var oldText: string;
            if (input.hasClass("numeric"))
                oldText = Q.formatNumber(effective, '0.##');
            else
                oldText = effective as string;

            var value;
            if (field === 'Quantity') {
                value = Q.parseInteger(text);
                if (value == null || isNaN(value)) {
                    Q.notifyError(Q.text('Validation.Integer'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
            }
            else if (input.hasClass("numeric")) {
                var i = Q.parseInteger(text);
                if (isNaN(i) || i > 32767 || i < 0) {
                    Q.notifyError(Q.text('Validation.Integer'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
                value = i;
            }
            else if (input.hasClass("bool")) {
                input.prop(":checked") ? value = "false" : value = "true"
            }
            else
                value = text;

            if (!pending) {
                this.pendingChanges[item.ProductOrderId] = pending = {};
            }

            pending[field] = value;
            item[field] = value;
            this.view.refresh();

            if (input.hasClass("numeric"))
                value = Q.formatNumber(value, '0.##');

            input.val(value).addClass('dirty');

            this.setSaveButtonState();
        }

        private setSaveButtonState() {
            this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
                Object.keys(this.pendingChanges).length === 0);
        }

        private saveClick() {
            if (Object.keys(this.pendingChanges).length === 0) {
                return;
            }

            // this calls save service for all modified rows, one by one
            // you could write a batch update service
            var keys = Object.keys(this.pendingChanges);
            var current = -1;
            var self = this;

            (function saveNext() {
                if (++current >= keys.length) {
                    self.refresh();
                    return;
                }

                var key = keys[current];
                var entity = Q.deepClone(self.pendingChanges[key]);
                entity.ProductOrderId = key;
                Q.serviceRequest('Inventory/ProductOrder/Update', {
                    EntityId: key,
                    Entity: entity
                }, (response) => {
                    delete self.pendingChanges[key];
                    saveNext();
                });
            })();
        }
    }
}