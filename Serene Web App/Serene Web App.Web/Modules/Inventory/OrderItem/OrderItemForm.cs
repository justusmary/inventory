
namespace Serene_Web_App.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.OrderItem")]
    [BasedOnRow(typeof(Entities.OrderItemRow), CheckNames = true)]
    public class OrderItemForm
    {
        public Int32 ProductId { get; set; }
        public Int32 Quantity { get; set; }
        public Decimal UnitPrice { get; set; }
    }
}