namespace Serene_Web_App.Inventory.Forms
{
    using Serene_Web_App.Administration.Entities;
    using Serenity.ComponentModel;
    using System;

    [FormScript("Inventory.Customer")]
    [BasedOnRow(typeof(UserRow), CheckNames = true)]
    public class CustomerForm
    {
        public String Username { get; set; }
        public String DisplayName { get; set; }
        [EmailEditor]
        public String Email { get; set; }
        public String UserImage { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        [OneWay]
        public string Source { get; set; }
        public Int32? SupplierId { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
    }
}