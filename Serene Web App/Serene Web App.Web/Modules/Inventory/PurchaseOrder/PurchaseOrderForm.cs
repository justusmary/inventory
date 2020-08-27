
namespace Serene_Web_App.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.PurchaseOrder")]
    [BasedOnRow(typeof(Entities.PurchaseOrderRow), CheckNames = true)]
    public class PurchaseOrderForm
    {
        [Category("Order Summary")]
        public Int32 CustomerId { get; set; }
        public Decimal Amount { get; set; }

        [Category("Order Items")]
        [OrderItemsEditor]
        public List<Entities.OrderItemRow> ItemList { get; set; }
    }
}