using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200812170735)]
    public class DefaultDB_20200812_170735_ProductTable : Migration
    {
        public override void Up()
        {
            Create.Schema("inv");

            Create.Table("Product").InSchema("inv")
                .WithColumn("ProductId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).Nullable()
                .WithColumn("Quantity").AsInt32().Nullable()
                .WithColumn("Unit").AsString(20).Nullable()
                .WithColumn("Price").AsDecimal().Nullable()
                .WithColumn("PrimaryImage").AsString(100).Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                    .ForeignKey("FK_ProductInsert_UserId", "dbo", "Users", "UserId")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                    .WithDefault(SystemMethods.CurrentDateTime)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                    .ForeignKey("FK_ProductUpdate_UserId", "dbo", "Users", "UserId")
                .WithColumn("UpdateDate").AsDateTime().Nullable();
        }

        public override void Down()
        {
        }
    }
}
