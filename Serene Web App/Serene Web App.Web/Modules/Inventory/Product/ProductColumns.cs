
namespace Serene_Web_App.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.Product")]
    [BasedOnRow(typeof(Entities.ProductRow), CheckNames = true)]
    public class ProductColumns
    {
        [RowIndexFormatter, EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 ProductId { get; set; }
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
        [Width(200), QuickFilter]
        public String SupplierName { get; set; }
        public Int32 InsertUsername { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 UpdateUsername { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}