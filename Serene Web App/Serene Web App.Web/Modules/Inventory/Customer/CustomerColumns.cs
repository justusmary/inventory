
namespace Serene_Web_App.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerColumns
    {
        [RowIndexFormatter, EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 CustomerId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Phone { get; set; }
        public String Address { get; set; }
    }
}