using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200828_192435)]
    public class DefaultDB_20200828_192435_ShipmentTableDrop : Migration
    {
        public override void Up()
        {
            Delete.ForeignKey("FK_Shipment_PurchaseOrderId").OnTable("Shipment").InSchema("inv");
            Delete.Table("Shipment").InSchema("inv");
        }

        public override void Down()
        {
        }
    }
}
