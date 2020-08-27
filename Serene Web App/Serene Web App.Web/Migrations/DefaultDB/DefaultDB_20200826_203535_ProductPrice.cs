using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200826203535)]
    public class DefaultDB_20200826_203535_ProductPrice : Migration
    {
        public override void Up()
        {
            Alter.Table("Product").InSchema("inv")
                .AlterColumn("Price").AsDecimal();
        }

        public override void Down()
        {
        }
    }
}
