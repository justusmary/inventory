
namespace Serene_Web_App.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.ProductOrder")]
    [BasedOnRow(typeof(Entities.ProductOrderRow), CheckNames = true)]
    public class ProductOrderColumns
    {
        [RowIndexFormatter, EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 ProductOrderId { get; set; }
        [EditLink]
        public String ProductName { get; set; }
        public Int32 Quantity { get; set; }
        public Decimal TotalAmount { get; set; }
        public DateTime Date { get; set; }
        public String SupplierName { get; set; }
        public Boolean Fulfilled { get; set; }
        public Int32 UpdateUsername { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}