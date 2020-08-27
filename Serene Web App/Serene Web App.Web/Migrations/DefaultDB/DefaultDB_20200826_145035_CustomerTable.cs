using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200826145035)]
    public class DefaultDB_20200826_145035_CustomerTable : Migration
    {
        public override void Up()
        {
            Create.Table("Customer").InSchema("inv")
                .WithColumn("CustomerId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Phone").AsString(35).Nullable()
                .WithColumn("Address").AsString(1000).Nullable();
        }

        public override void Down()
        {
        }
    }
}
