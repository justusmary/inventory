using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200814111835)]
    public class DefaultDB_20200814_111835_SupplierProductImages : Migration
    {
        public override void Up()
        {
            Alter.Table("Product").InSchema("inv")
                .AddColumn("PrimaryImage").AsString(100).Nullable();

            Alter.Table("Supplier").InSchema("inv")
                .AddColumn("PrimaryImage").AsString(100).Nullable();
        }

        public override void Down()
        {
        }
    }
}
