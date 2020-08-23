using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200823122735)]
    public class DefaultDB_20200823_122735_SupplierUser : Migration
    {
        public override void Up()
        {
            Alter.Table("Users")
                .AddColumn("SupplierId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Roles")
                .AddColumn("SupplierId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Languages")
                .AddColumn("SupplierId").AsInt32()
                    .NotNullable().WithDefaultValue(1);
        }

        public override void Down()
        {
        }
    }
}
