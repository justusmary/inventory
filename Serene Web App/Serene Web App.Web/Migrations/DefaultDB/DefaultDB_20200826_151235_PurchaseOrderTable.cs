using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200826151235)]
    public class DefaultDB_20200826_151235_PurchaseOrderTable : Migration
    {
        public override void Up()
        {
            Create.Table("PurchaseOrder").InSchema("inv")
                .WithColumn("PurchaseOrderId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("CustomerId").AsInt32().Nullable()
                    .ForeignKey("FK_PurchaseOrder_UserId", "dbo", "Users", "UserId")
                .WithColumn("Amount").AsDecimal().Nullable()
                .WithColumn("Date").AsDateTime().Nullable()
                    .WithDefault(SystemMethods.CurrentDateTime)
                .WithColumn("DestinationAddress").AsString().Nullable()
                .WithColumn("ShippedDate").AsDateTime().Nullable()
                .WithColumn("Shipped").AsBoolean().WithDefaultValue(false)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                    .ForeignKey("FK_PurchaseOrderUpdate_UserId", "dbo", "Users", "UserId")
                .WithColumn("UpdateDate").AsDateTime().Nullable();

        }

        public override void Down()
        {
        }
    }
}
