
namespace Serene_Web_App.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.OrderItem")]
    [BasedOnRow(typeof(Entities.OrderItemRow), CheckNames = true)]
    public class OrderItemColumns
    {
        [EditLink, DisplayName("Product"), AlignCenter]
        public String ProductName { get; set; }
        public Int32 Quantity { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal LineTotal { get; set; }
    }
}