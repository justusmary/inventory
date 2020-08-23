using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200823082435)]
    public class DefaultDB_20200823_082435_SupplierProduct : Migration
    {
        public override void Up()
        {
            if (Schema.Schema("inv").Table("SupplierProduct").Constraint("FK_SupplierProduct_SupplierId").Exists())
            {
                Delete.ForeignKey("FK_SupplierProduct_SupplierId").OnTable("SupplierProduct").InSchema("inv");
            }

            if (Schema.Schema("inv").Table("SupplierProduct").Constraint("FK_SupplierProduct_ProductId").Exists())
            {
                Delete.ForeignKey("FK_SupplierProduct_ProductId").OnTable("SupplierProduct").InSchema("inv");
            }

            if (Schema.Schema("inv").Table("SupplierProduct").Exists())
            {
                Delete.Table("SupplierProduct").InSchema("inv");
            }
                    
        }

        public override void Down()
        {
        }
    }
}
