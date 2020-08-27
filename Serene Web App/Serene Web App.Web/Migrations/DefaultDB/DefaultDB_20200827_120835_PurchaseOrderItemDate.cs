using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200827120835)]
    public class DefaultDB_20200827_120835_PurchaseOrderItemDate : Migration
    {
        public override void Up()
        {
            Alter.Table("OrderItem").InSchema("inv")
                .AlterColumn("Date").AsDateTime().Nullable();
                
        }

        public override void Down()
        {
        }
    }
}
