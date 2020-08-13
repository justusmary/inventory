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
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Quantity").AsInt32().Nullable()
                .WithColumn("Unit").AsString(20).Nullable()
                .WithColumn("Price").AsInt32().Nullable();
        }

        public override void Down()
        {
        }
    }
}
