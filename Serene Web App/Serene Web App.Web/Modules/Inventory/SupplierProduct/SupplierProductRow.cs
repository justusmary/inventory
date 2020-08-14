
namespace Serene_Web_App.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventory"), TableName("[inv].[SupplierProduct]")]
    [DisplayName("Supplier Product"), InstanceName("Supplier Product")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SupplierProductRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? SupplierProductId
        {
            get { return Fields.SupplierProductId[this]; }
            set { Fields.SupplierProductId[this] = value; }
        }

        [DisplayName("Supplier"), NotNull, ForeignKey("[inv].[Supplier]", "SupplierId"), LeftJoin("jSupplier"), TextualField("SupplierName")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Product"), NotNull, ForeignKey("[inv].[Product]", "ProductId"), LeftJoin("jProduct"), TextualField("ProductName")]
        [LookupEditor(typeof(ProductRow), InplaceAdd = true)]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Supplier Name"), Expression("jSupplier.[Name]")]
        public String SupplierName
        {
            get { return Fields.SupplierName[this]; }
            set { Fields.SupplierName[this] = value; }
        }

        [DisplayName("Supplier Phone"), Expression("jSupplier.[Phone]")]
        public String SupplierPhone
        {
            get { return Fields.SupplierPhone[this]; }
            set { Fields.SupplierPhone[this] = value; }
        }

        [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        public String SupplierAddress
        {
            get { return Fields.SupplierAddress[this]; }
            set { Fields.SupplierAddress[this] = value; }
        }

        [DisplayName("Product Name"), Expression("jProduct.[Name]")]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Product Quantity"), Expression("jProduct.[Quantity]")]
        public Int32? ProductQuantity
        {
            get { return Fields.ProductQuantity[this]; }
            set { Fields.ProductQuantity[this] = value; }
        }

        [DisplayName("Product Unit"), Expression("jProduct.[Unit]")]
        public String ProductUnit
        {
            get { return Fields.ProductUnit[this]; }
            set { Fields.ProductUnit[this] = value; }
        }

        [DisplayName("Product Price"), Expression("jProduct.[Price]")]
        public Int32? ProductPrice
        {
            get { return Fields.ProductPrice[this]; }
            set { Fields.ProductPrice[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierId]")]
        public Int32? ProductSupplierId
        {
            get { return Fields.ProductSupplierId[this]; }
            set { Fields.ProductSupplierId[this] = value; }
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryId]")]
        public Int32? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SupplierProductId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SupplierProductRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SupplierProductId;
            public Int32Field SupplierId;
            public Int32Field ProductId;

            public StringField SupplierName;
            public StringField SupplierPhone;
            public StringField SupplierAddress;

            public StringField ProductName;
            public Int32Field ProductQuantity;
            public StringField ProductUnit;
            public Int32Field ProductPrice;
            public Int32Field ProductSupplierId;
            public Int32Field ProductCategoryId;
        }
    }
}
