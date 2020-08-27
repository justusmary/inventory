using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200827090435)]
    public class DefaultDB_20200827_090435_ProductOrderSupplier : Migration
    {
        public override void Up()
        {
            Alter.Table("ProductOrder").InSchema("inv")
                .AddColumn("SupplierId").AsInt32().NotNullable()
                    .ForeignKey("FK_ProductOrder_SupplierId", "inv", "Supplier", "SupplierId");
                
        }

        public override void Down()
        {
        }
    }
}
