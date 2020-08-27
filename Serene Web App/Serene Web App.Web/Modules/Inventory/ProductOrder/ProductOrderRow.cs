
namespace Serene_Web_App.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventory"), TableName("[inv].[ProductOrder]")]
    [DisplayName("Product Order"), InstanceName("Product Order")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProductOrderRow : Row, IIdRow
    {
        [DisplayName("Product Order Id"), Identity]
        public Int32? ProductOrderId
        {
            get { return Fields.ProductOrderId[this]; }
            set { Fields.ProductOrderId[this] = value; }
        }

        [LookupEditor(typeof(ProductRow))]
        [DisplayName("Product"), NotNull, ForeignKey("[inv].[Product]", "ProductId"), LeftJoin("jProduct"), TextualField("ProductName")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [HideOnInsert]
        [LookupEditor(typeof(SupplierRow))]
        [DisplayName("Supplier"), ForeignKey("[inv].[Supplier]", "SupplierId"), LeftJoin("JSupplier"), TextualField("SupplierName")]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Supplier"), Expression("jSupplier.[Name]")]
        public String SupplierName
        {
            get { return Fields.SupplierName[this]; }
            set { Fields.SupplierName[this] = value; }
        }

        [DisplayName("Quantity"), NotNull, Updatable(false), DefaultValue(1)]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Total Amount"), Size(19), Scale(5), NotNull]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Date"), NotNull, Insertable(false), Updatable(false)]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Fulfilled"), NotNull]
        public Boolean? Fulfilled
        {
            get { return Fields.Fulfilled[this]; }
            set { Fields.Fulfilled[this] = value; }
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

        [DisplayName("Product Primary Image"), Expression("jProduct.[PrimaryImage]")]
        public String ProductPrimaryImage
        {
            get { return Fields.ProductPrimaryImage[this]; }
            set { Fields.ProductPrimaryImage[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductOrderId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductOrderId;
            public Int32Field ProductId;
            public Int32Field Quantity;
            public DecimalField TotalAmount;
            public DateTimeField Date;
            public BooleanField Fulfilled;

            public StringField ProductName;
            public Int32Field ProductQuantity;
            public StringField ProductUnit;
            public Int32Field ProductPrice;
            public Int32Field ProductSupplierId;
            public Int32Field ProductCategoryId;
            public StringField ProductPrimaryImage;
            public Int32Field SupplierId;
            public StringField SupplierName;
        }
    }
}
