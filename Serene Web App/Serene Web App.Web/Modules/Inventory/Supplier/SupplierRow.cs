﻿
namespace Serene_Web_App.Inventory.Entities
{
    using Serene_Web_App.Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventory"), TableName("[inv].[Supplier]")]
    [DisplayName("Suppliers"), InstanceName("Supplier")]
    [ReadPermission(PermissionKeys.User)]
    [InsertPermission(PermissionKeys.Admin)]
    [ModifyPermission(PermissionKeys.SupplierAdmin)]
    [DeletePermission(PermissionKeys.Admin)]
    [LookupScript("Inventory.Supplier")]
    public sealed class SupplierRow : Row, IIdRow, INameRow, IMultiSupplierRow
    {
        [DisplayName("Primary Image"), Size(100),
         ImageUploadEditor(FilenameFormat = "Supplier/PrimaryImage/~")]
        public string PrimaryImage
        {
            get { return Fields.PrimaryImage[this]; }
            set { Fields.PrimaryImage[this] = value; }
        }

        [DisplayName("Supplier Id"), Identity]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch, LookupInclude]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Phone"), Size(35)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Address"), Size(1000)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
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
            get { return Fields.SupplierId; }
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

        public SupplierRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SupplierId;
            public StringField Name;
            public StringField Phone;
            public StringField Address;
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
