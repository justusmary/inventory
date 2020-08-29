using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200829083935)]
    public class DefaultDB_20200829_083935_UpdatedbyAndTime : Migration
    {
        public override void Up()
        {
            Alter.Table("Product").InSchema("inv")
                .AddColumn("InsertUserId").AsInt32().NotNullable()
                    .ForeignKey("FK_ProductInsert_UserId", "dbo", "Users", "UserId").WithDefaultValue(1)
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                    .ForeignKey("FK_ProductUpdate_UserId", "dbo", "Users", "UserId")
                .AddColumn("UpdateDate").AsDateTime().Nullable();

            Alter.Table("Supplier").InSchema("inv")
                .AddColumn("InsertUserId").AsInt32().NotNullable()
                    .ForeignKey("FK_SupplierInsert_UserId", "dbo", "Users", "UserId").WithDefaultValue(1)
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                    .ForeignKey("FK_SupplierUpdate_UserId", "dbo", "Users", "UserId")
                .AddColumn("UpdateDate").AsDateTime().Nullable();

            Alter.Table("Category").InSchema("inv")
                .AddColumn("InsertUserId").AsInt32().NotNullable()
                    .ForeignKey("FK_CategoryInsert_UserId", "dbo", "Users", "UserId").WithDefaultValue(1)
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                    .ForeignKey("FK_CategoryUpdate_UserId", "dbo", "Users", "UserId")
                .AddColumn("UpdateDate").AsDateTime().Nullable();

            
            Alter.Table("ProductOrder").InSchema("inv")
                .AddColumn("InsertUserId").AsInt32().NotNullable()
                    .ForeignKey("FK_ProductOrderInsert_UserId", "dbo", "Users", "UserId").WithDefaultValue(1)
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                    .ForeignKey("FK_ProductOrderUpdate_UserId", "dbo", "Users", "UserId")
                .AddColumn("UpdateDate").AsDateTime().Nullable();

            Delete.ForeignKey("FK_PurchaseOrder_CustomerId").OnTable("PurchaseOrder").InSchema("inv");
            Alter.Table("PurchaseOrder").InSchema("inv")
                .AlterColumn("CustomerId").AsInt32().NotNullable()
                    .ForeignKey("FK_PurchaseOrder_UserId", "dbo", "Users", "UserId").WithDefaultValue(1)
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                    .ForeignKey("FK_PurchaseOrderUpdate_UserId", "dbo", "Users", "UserId")
                .AddColumn("UpdateDate").AsDateTime().Nullable();
        }

        public override void Down()
        {
        }
    }
}
