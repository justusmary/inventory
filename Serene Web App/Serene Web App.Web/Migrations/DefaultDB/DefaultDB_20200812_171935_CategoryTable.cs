﻿using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200812171935)]
    public class DefaultDB_20200812_171935_CategoryTable : Migration
    {
        public override void Up()
        {
            Create.Table("Category").InSchema("inv")
                .WithColumn("CategoryId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable();

            Alter.Table("Product").InSchema("inv")
                .AddColumn("CategoryId").AsInt32().Nullable()
                    .ForeignKey("FK_Product_CategoryId", "inv", "Category", "CategoryId");
        }

        public override void Down()
        {
        }
    }
}
