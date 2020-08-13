
namespace Serene_Web_App.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.SupplierProduct")]
    [BasedOnRow(typeof(Entities.SupplierProductRow), CheckNames = true)]
    public class SupplierProductForm
    {
        public Int32 SupplierId { get; set; }
        public Int32 ProductId { get; set; }
    }
}