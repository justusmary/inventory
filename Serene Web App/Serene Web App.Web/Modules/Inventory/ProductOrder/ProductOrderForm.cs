
namespace Serene_Web_App.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.ProductOrder")]
    [BasedOnRow(typeof(Entities.ProductOrderRow), CheckNames = true)]
    public class ProductOrderForm
    {
        public Int32 ProductId { get; set; }
        public Int32 SupplierId { get; set; }
        public Int32 Quantity { get; set; }
        public Decimal TotalAmount { get; set; }
        //public DateTime Date { get; set; }
        public Boolean Fulfilled { get; set; }
    }
}