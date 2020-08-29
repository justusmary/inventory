
namespace Serene_Web_App.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow), CheckNames = true)]
    public class CategoryColumns
    {
        [RowIndexFormatter, EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 CategoryId { get; set; }
        [EditLink, Width(200)]
        public String Name { get; set; }
        public Int32 InsertUsername { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 UpdateUsername { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}