
namespace Serene_Web_App.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventory"), TableName("[inv].[Shipment]")]
    [DisplayName("Shipment"), InstanceName("Shipment")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ShipmentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Shipment Id"), Identity]
        public Int32? ShipmentId
        {
            get { return Fields.ShipmentId[this]; }
            set { Fields.ShipmentId[this] = value; }
        }

        [DisplayName("Purchase Order"), NotNull, ForeignKey("[inv].[PurchaseOrder]", "PurchaseOrderId"), LeftJoin("jPurchaseOrder")]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Total Amount"), Size(19), Scale(5), NotNull]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [Expression("jPurchaseOrder.[CustomerID]"), ForeignKey("[inv].[Customer]", "CustomerId"), LeftJoin("c")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [Expression("c.Name")]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Destination Address"), Size(255), NotNull, QuickSearch]
        public String DestinationAddress
        {
            get { return Fields.DestinationAddress[this]; }
            set { Fields.DestinationAddress[this] = value; }
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Shipped"), NotNull]
        public Boolean? Shipped
        {
            get { return Fields.Shipped[this]; }
            set { Fields.Shipped[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.ShipmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DestinationAddress; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ShipmentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ShipmentId;
            public Int32Field PurchaseOrderId;
            public DecimalField TotalAmount;
            public StringField DestinationAddress;
            public DateTimeField Date;
            public BooleanField Shipped;

            public DecimalField PurchaseOrderAmount;
            public DateTimeField PurchaseOrderDate;
            public Int32Field CustomerId;
            public StringField CustomerName;
        }
    }
}
