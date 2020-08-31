
namespace Serene_Web_App.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serene_Web_App.Administration.Entities;

    [ColumnsScript("Inventory.Customer")]
    [BasedOnRow(typeof(UserRow), CheckNames = true)]
    public class CustomerColumns
    {
        [RowIndexFormatter, EditLink, AlignCenter, Width(55)]
        public String UserId { get; set; }
        [EditLink, Width(150)]
        public String Username { get; set; }
        [Width(150)]
        public String DisplayName { get; set; }
        [Width(250)]
        public String Email { get; set; }
        [Width(100)]
        public String Phone { get; set; }
        public String Address { get; set; }
    }
}