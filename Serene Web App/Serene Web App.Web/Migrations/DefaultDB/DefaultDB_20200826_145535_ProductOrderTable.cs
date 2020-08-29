using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200826145535)]
    public class DefaultDB_20200826_145535_ProductOrderTable : Migration
    {
        public override void Up()
        {
            Create.Table("ProductOrder").InSchema("inv")
                .WithColumn("ProductOrderId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("ProductId").AsInt32().NotNullable()
                    .ForeignKey("FK_ProductOrder_ProductId", "inv", "Product", "ProductId")
                .WithColumn("SupplierId").AsInt32().NotNullable()
                    .ForeignKey("FK_ProductOrder_SupplierId", "inv", "Supplier", "SupplierId")
                .WithColumn("Quantity").AsInt32().NotNullable()
                .WithColumn("TotalAmount").AsDecimal().NotNullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("Fulfilled").AsBoolean().WithDefaultValue(false)
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                    .ForeignKey("FK_ProductOrderInsert_UserId", "dbo", "Users", "UserId")
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                    .ForeignKey("FK_ProductOrderUpdate_UserId", "dbo", "Users", "UserId")
                .WithColumn("UpdateDate").AsDateTime().Nullable();

        }

        public override void Down()
        {
        }
    }
}
