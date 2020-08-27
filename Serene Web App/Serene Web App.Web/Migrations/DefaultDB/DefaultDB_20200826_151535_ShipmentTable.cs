using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200826151535)]
    public class DefaultDB_20200826_151535_ShipmentTable : Migration
    {
        public override void Up()
        {
            Create.Table("Shipment").InSchema("inv")
                .WithColumn("ShipmentId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("PurchaseOrderId").AsInt32().NotNullable()
                    .ForeignKey("FK_Shipment_PurchaseOrderId", "inv", "PurchaseOrder", "PurchaseOrderId")
                .WithColumn("TotalAmount").AsDecimal().NotNullable()
                .WithColumn("DestinationAddress").AsString().NotNullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("Shipped").AsBoolean().WithDefaultValue(false);
                
        }

        public override void Down()
        {
        }
    }
}
