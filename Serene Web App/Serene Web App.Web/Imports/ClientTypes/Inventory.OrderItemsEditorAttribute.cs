using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene_Web_App.Inventory
{
    public partial class OrderItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene_Web_App.Inventory.OrderItemsEditor";

        public OrderItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}
