﻿using FluentMigrator;
using System;


namespace Serene_Web_App.Migrations.DefaultDB
{
    [Migration(20200826151235)]
    public class DefaultDB_20200826_151235_PurchaseOrderTable : Migration
    {
        public override void Up()
        {
            Create.Table("PurchaseOrder").InSchema("inv")
                .WithColumn("PurchaseOrderId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("CustomerId").AsInt32().NotNullable()
                    .ForeignKey("FK_PurchaseOrder_CustomerId", "inv", "Customer", "CustomerId")
                .WithColumn("Amount").AsDecimal().NotNullable()
                .WithColumn("Date").AsDateTime().Nullable();
                
        }

        public override void Down()
        {
        }
    }
}
