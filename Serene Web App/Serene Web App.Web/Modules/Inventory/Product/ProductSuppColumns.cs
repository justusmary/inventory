namespace Serene_Web_App.Inventory.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Inventory.ProductSupp")]
    [BasedOnRow(typeof(Entities.SupplierProductRow))]
    public class ProductSuppColumns
    {
        [EditLink]
        public String SupplierName { get; set; }
        public String Phone { get; set; }
        [Width(300)]
        public String Address { get; set; }
    }
}