
namespace Serene_Web_App.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.PurchaseOrder")]
    [BasedOnRow(typeof(Entities.PurchaseOrderRow), CheckNames = true)]
    public class PurchaseOrderColumns
    {
        [RowIndexFormatter, EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 PurchaseOrderId { get; set; }
        [EditLink]
        public String CustomerName { get; set; }
        public Decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }
}