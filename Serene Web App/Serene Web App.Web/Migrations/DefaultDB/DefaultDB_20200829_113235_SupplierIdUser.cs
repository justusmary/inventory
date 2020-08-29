using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200829_113235)]
    public class DefaultDB_20200829_113235_SupplierIdUser : Migration
    {
        public override void Up()
        {
            Alter.Table("Users")
                .AlterColumn("SupplierId").AsInt32()
                    .Nullable();

            Alter.Table("Roles")
                .AlterColumn("SupplierId").AsInt32()
                    .Nullable();

            Alter.Table("Languages")
                .AlterColumn("SupplierId").AsInt32()
                    .Nullable();
        }

        public override void Down()
        {
        }
    }
}
