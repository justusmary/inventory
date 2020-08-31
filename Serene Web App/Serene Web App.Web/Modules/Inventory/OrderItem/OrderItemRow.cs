
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

    [ConnectionKey("Default"), Module("Inventory"), TableName("[inv].[OrderItem]")]
    [DisplayName("Order Item"), InstanceName("Order Item")]
    [ReadPermission(PermissionKeys.User)]
    [InsertPermission(PermissionKeys.Customer)]
    [ModifyPermission(PermissionKeys.Admin)]
    public sealed class OrderItemRow : Row, IIdRow
    {
        [DisplayName("Order Item Id"), Identity]
        public Int32? OrderItemId
        {
            get { return Fields.OrderItemId[this]; }
            set { Fields.OrderItemId[this] = value; }
        }

        [DisplayName("Purchase Order"), PrimaryKey, ForeignKey("[inv].[PurchaseOrder]", "PurchaseOrderId"), LeftJoin("jPurchaseOrder"), Updatable(false)]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [LookupEditor(typeof(ProductRow))]
        [DisplayName("Product"), NotNull, ForeignKey("[inv].[Product]", "ProductId"), LeftJoin("jProduct"), TextualField("ProductName")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Quantity"), NotNull, DefaultValue(1)]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Unit Price"), Size(19), Scale(5), NotNull]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Date"), Insertable(false), Updatable(false)]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Purchase Order Amount"), Expression("jPurchaseOrder.[Amount]")]
        public Decimal? PurchaseOrderAmount
        {
            get { return Fields.PurchaseOrderAmount[this]; }
            set { Fields.PurchaseOrderAmount[this] = value; }
        }

        [DisplayName("Purchase Order Date"), Expression("jPurchaseOrder.[Date]")]
        public DateTime? PurchaseOrderDate
        {
            get { return Fields.PurchaseOrderDate[this]; }
            set { Fields.PurchaseOrderDate[this] = value; }
        }

        [DisplayName("Product Name"), Expression("jProduct.[Name]"), MinSelectLevel(SelectLevel.List), AlignCenter]
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

        [DisplayName("Line Total"), Expression("(T0.[UnitPrice] * T0.[Quantity])")]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderItemId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderItemRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderItemId;
            public Int32Field PurchaseOrderId;
            public Int32Field ProductId;
            public Int32Field Quantity;
            public DecimalField UnitPrice;
            public DateTimeField Date;

            public DecimalField PurchaseOrderAmount;
            public DateTimeField PurchaseOrderDate;

            public StringField ProductName;
            public Int32Field ProductQuantity;
            public StringField ProductUnit;
            public Int32Field ProductPrice;
            public Int32Field ProductSupplierId;
            public Int32Field ProductCategoryId;
            public StringField ProductPrimaryImage;

            public DecimalField LineTotal;
        }
    }
}
