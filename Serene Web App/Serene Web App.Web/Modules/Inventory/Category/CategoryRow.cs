
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

    [ConnectionKey("Default"), Module("Inventory"), TableName("[inv].[Category]")]
    [DisplayName("Categories"), InstanceName("Category")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.SupplierAdmin)]
    [LookupScript("Inventory.Category")]
    public sealed class CategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Category Id"), Identity]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
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
            get { return Fields.CategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryId;
            public StringField Name;
            public Int32Field UpdateUserId;
            public StringField UpdateUsername;
            public DateTimeField UpdateDate;
            public Int32Field InsertUserId;
            public StringField InsertUsername;
            public DateTimeField InsertDate;
        }
    }
}
