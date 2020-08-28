
namespace Serene_Web_App.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.Shipment")]
    [BasedOnRow(typeof(Entities.ShipmentRow), CheckNames = true)]
    public class ShipmentColumns
    {
        [RowIndexFormatter, EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ShipmentId { get; set; }
        [EditLink]
        public String CustomerName { get; set; }
        public Decimal TotalAmount { get; set; }
        [EditLink]
        public String DestinationAddress { get; set; }
        public DateTime Date { get; set; }
        public Boolean Shipped { get; set; }
    }
}