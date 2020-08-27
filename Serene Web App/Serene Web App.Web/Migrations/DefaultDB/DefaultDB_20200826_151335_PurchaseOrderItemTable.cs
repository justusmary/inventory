using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200826151335)]
    public class DefaultDB_20200826_151335_PurchaseOrderItemTable : Migration
    {
        public override void Up()
        {
            Create.Table("OrderItem").InSchema("inv")
                .WithColumn("OrderItemId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("PurchaseOrderId").AsInt32().NotNullable()
                    .ForeignKey("FK_OrderItem_PurchaseOrderId", "inv", "PurchaseOrder", "PurchaseOrderId")
                .WithColumn("ProductId").AsInt32().NotNullable()
                    .ForeignKey("FK_PurchaseOrder_ProductId", "inv", "Product", "ProductId")
                .WithColumn("Quantity").AsInt32().NotNullable()
                .WithColumn("UnitPrice").AsDecimal().NotNullable()
                .WithColumn("Date").AsDateTime().Nullable();
                
        }

        public override void Down()
        {
        }
    }
}
