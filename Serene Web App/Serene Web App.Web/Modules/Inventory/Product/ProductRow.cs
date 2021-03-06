﻿
namespace Serene_Web_App.Inventory.Entities
{
    using Serene_Web_App.Administration;
    using Serene_Web_App.Inventory.Scripts;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventory"), TableName("[inv].[Product]")]
    [DisplayName("Products"), InstanceName("Product")]
    [ReadPermission(PermissionKeys.User)]
    [InsertPermission(PermissionKeys.Supplier)]
    [ModifyPermission(PermissionKeys.Supplier)]
    [DeletePermission(PermissionKeys.Admin)]
    [LookupScript("Inventory.Product", LookupType = typeof(MultiSupplierRowLookupScript<>))]
    public sealed class ProductRow : Row, IIdRow, INameRow, IMultiSupplierRow
    {
        [DisplayName("Primary Image"), Size(100),
         ImageUploadEditor(FilenameFormat = "Product/PrimaryImage/~")]
        public string PrimaryImage
        {
            get { return Fields.PrimaryImage[this]; }
            set { Fields.PrimaryImage[this] = value; }
        }

        [DisplayName("Product Id"), Identity]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Category"), ForeignKey("[inv].Category", "CategoryId"), LeftJoin("c")]
        [LookupEditor(typeof(CategoryRow), InplaceAdd = true)]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Category"), Expression("c.Name")]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Quantity")]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Unit")]
        public String Unit
        {
            get { return Fields.Unit[this]; }
            set { Fields.Unit[this] = value; }
        }

        [DisplayName("Price"), LookupInclude]
        public Int32? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Supplier"), ForeignKey("[inv].Supplier", "SupplierId"), LeftJoin("s")]
        [LookupEditor(typeof(MultiSupplierLookup), InplaceAdd = true), LookupInclude]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Supplier"), Expression("s.Name")]
        public String SupplierName
        {
            get { return Fields.SupplierName[this]; }
            set { Fields.SupplierName[this] = value; }
        }

        [ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jInserter"), TextualField("InsertUsername")]
        public Int32? InsertUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Inserted By"), Expression("jInserter.[DisplayName]")]
        public String InsertUsername
        {
            get { return Fields.InsertUsername[this]; }
            set { Fields.InsertUsername[this] = value; }
        }
        
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUpdater"), TextualField("UpdateUsername")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Updated By"), Expression("jUpdater.[DisplayName]")]
        public String UpdateUsername
        {
            get { return Fields.UpdateUsername[this]; }
            set { Fields.UpdateUsername[this] = value; }
        }
        [DisplayName("Last Updated")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public Int32Field SupplierIdField
        {
            get { return Fields.SupplierId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductId;
            public StringField Name;
            public Int32Field Quantity;
            public StringField Unit;
            public Int32Field Price;
            public readonly Int32Field CategoryId;
            public readonly StringField CategoryName;
            public readonly Int32Field SupplierId;
            public readonly StringField SupplierName;
            public readonly StringField PrimaryImage;
            public Int32Field UpdateUserId;
            public StringField UpdateUsername;
            public DateTimeField UpdateDate;
            public Int32Field InsertUserId;
            public StringField InsertUsername;
            public DateTimeField InsertDate;
        }
    }
}
