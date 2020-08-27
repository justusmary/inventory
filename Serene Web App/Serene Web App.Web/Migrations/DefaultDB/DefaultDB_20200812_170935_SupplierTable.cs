using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200812170935)]
    public class DefaultDB_20200812_170935_SupplierTable : Migration
    {
        public override void Up()
        {
            Create.Table("Supplier").InSchema("inv")
                .WithColumn("SupplierId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Phone").AsString(35).Nullable()
                .WithColumn("Address").AsString(1000).Nullable()
                .WithColumn("PrimaryImage").AsString(100).Nullable();

            Alter.Table("Product").InSchema("inv")
                .AddColumn("SupplierId").AsInt32().Nullable()
                    .ForeignKey("FK_Product_SupplierId", "inv", "Supplier", "SupplierId");
        }

        public override void Down()
        {
        }
    }
}
