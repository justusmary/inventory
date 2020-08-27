
namespace Serene_Web_App.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.Shipment")]
    [BasedOnRow(typeof(Entities.ShipmentRow), CheckNames = true)]
    public class ShipmentForm
    {
        public Int32 PurchaseOrderId { get; set; }
        public Decimal TotalAmount { get; set; }
        public String DestinationAddress { get; set; }
        public DateTime Date { get; set; }
        public Boolean Shipped { get; set; }
    }
}