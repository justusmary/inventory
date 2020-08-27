using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200827082535)]
    public class DefaultDB_20200827_082535_PurchaseOrderCustomer : Migration
    {
        public override void Up()
        {
            Alter.Table("PurchaseOrder").InSchema("inv")
                .AddColumn("CustomerId").AsInt32().NotNullable()
                    .ForeignKey("FK_PurchaseOrder_CustomerId", "inv", "Customer", "CustomerId");
        }

        public override void Down()
        {
        }
    }
}
