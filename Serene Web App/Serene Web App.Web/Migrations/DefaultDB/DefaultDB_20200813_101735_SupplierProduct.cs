using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200813101735)]
    public class DefaultDB_20200813_101735_SupplierProduct : Migration
    {
        public override void Up()
        {
            Create.Table("SupplierProduct").InSchema("inv")
                .WithColumn("SupplierProductId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("SupplierId").AsInt32().NotNullable()
                    .ForeignKey("FK_SupplierProduct_SupplierId", "inv", "Supplier", "SupplierId")
                .WithColumn("ProductId").AsInt32().NotNullable()
                    .ForeignKey("FK_SupplierProduct_ProductId", "inv", "Product", "ProductID");
        }

        public override void Down()
        {
        }
    }
}
