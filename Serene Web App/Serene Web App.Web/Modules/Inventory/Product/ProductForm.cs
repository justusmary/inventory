﻿
namespace Serene_Web_App.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.Product")]
    [BasedOnRow(typeof(Entities.ProductRow), CheckNames = true)]
    public class ProductForm
    {
        public String PrimaryImage { get; set; }
        public String Name { get; set; }
        public Int32 Quantity { get; set; }
        public String Unit { get; set; }
        public Int32 Price { get; set; }
        public Int32 CategoryId { get; set; }
        public Int32 SupplierId { get; set; }
    }
}