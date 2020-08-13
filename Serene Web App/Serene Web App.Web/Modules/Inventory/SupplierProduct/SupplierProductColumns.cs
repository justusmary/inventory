
namespace Serene_Web_App.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.SupplierProduct")]
    [BasedOnRow(typeof(Entities.SupplierProductRow), CheckNames = true)]
    public class SupplierProductColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SupplierProductId { get; set; }
        public String SupplierName { get; set; }
        public String ProductName { get; set; }
    }
}