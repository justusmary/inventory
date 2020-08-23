namespace Serene_Web_App.Inventory.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Inventory.SupplierProd")]
    [BasedOnRow(typeof(Entities.ProductRow))]
    public class SupplierProdColumns
    {
        [EditLink, Width(200)]
        public String Name { get; set; }
        [Width(150), QuickFilter]
        public String CategoryName { get; set; }
        [Width(100)]
        public Int32 Quantity { get; set; }
        [Width(100)]
        public String Unit { get; set; }
        [Width(100)]
        public Int32 Price { get; set; }
    }
}