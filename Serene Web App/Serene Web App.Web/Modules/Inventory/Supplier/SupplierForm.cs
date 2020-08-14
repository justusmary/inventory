
namespace Serene_Web_App.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow), CheckNames = true)]
    public class SupplierForm
    {
        public String PrimaryImage { get; set; }
        public String Name { get; set; }
        public String Phone { get; set; }

        [TextAreaEditor(Rows = 4)]
        public String Address { get; set; }
    }
}