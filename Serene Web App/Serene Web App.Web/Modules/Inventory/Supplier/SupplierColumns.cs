
namespace Serene_Web_App.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow), CheckNames = true)]
    public class SupplierColumns
    {
        [RowIndexFormatter, EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 SupplierId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Phone { get; set; }
        [Width(300)]
        public String Address { get; set; }
    }
}