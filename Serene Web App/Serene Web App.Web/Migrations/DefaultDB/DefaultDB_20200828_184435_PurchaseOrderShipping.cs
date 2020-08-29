using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200828_184435)]
    public class DefaultDB_20200828_184435_PurchaseOrderShipping : Migration
    {
        public override void Up()
        {
            Alter.Table("PurchaseOrder").InSchema("inv")
                .AddColumn("DestinationAddress").AsString().NotNullable().WithDefaultValue("Lagos")
                .AddColumn("ShippedDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("Shipped").AsBoolean().WithDefaultValue(false);
        }

        public override void Down()
        {
        }
    }
}
