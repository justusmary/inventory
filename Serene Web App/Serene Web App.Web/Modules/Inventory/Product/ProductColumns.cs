
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductId { get; set; }
        [EditLink]
        public String Name { get; set; }

        [Width(100), QuickFilter]
        public String CategoryName { get; set; }
        public Int32 Quantity { get; set; }
        public Int32 Unit { get; set; }
        public Int32 Price { get; set; }

        [Width(100), QuickFilter]
        public String SupplierName { get; set; }
    }
}