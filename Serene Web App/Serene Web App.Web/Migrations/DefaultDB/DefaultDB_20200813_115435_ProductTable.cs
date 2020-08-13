using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200813_115435)]
    public class DefaultDB_20200813_115435_ProductTable : Migration
    {
        public override void Up()
        {
            Alter.Table("Product").InSchema("inv")
                .AlterColumn("Unit").AsString(20).Nullable();
        }

        public override void Down()
        {
        }
    }
}
