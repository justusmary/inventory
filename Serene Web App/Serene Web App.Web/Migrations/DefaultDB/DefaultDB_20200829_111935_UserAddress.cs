using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200829111935)]
    public class DefaultDB_20200829_111935_UserAddress : Migration
    {
        public override void Up()
        {
            Alter.Table("Users").InSchema("dbo")
                .AddColumn("Phone").AsString(35).Nullable()
                .AddColumn("Address").AsString(1000).Nullable();
        }

        public override void Down()
        {
        }
    }
}
