namespace Serene_Web_App.Inventory.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Inventory.SupplierProd")]
    [BasedOnRow(typeof(Entities.SupplierProductRow))]
    public class SupplierProdColumns
    {
        [Width(220), EditLink]
        public String ProductName { get; set; }
    }
}