
namespace Serene_Web_App.Inventory.Entities
{
    using Serene_Web_App.Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventory"), TableName("[inv].[PurchaseOrder]")]
    [DisplayName("Purchase Order"), InstanceName("Purchase Order")]
    [ReadPermission(PermissionKeys.Customer)]
    [InsertPermission(PermissionKeys.Customer)]
    [ModifyPermission(PermissionKeys.CustomerAdmin)]
    public sealed class PurchaseOrderRow : Row, IIdRow
    {
        [DisplayName("Purchase Order Id"), Identity]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [ReadOnly(true), Insertable(false)]
        [DisplayName("Amount"), Size(19), Scale(5)]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [LookupEditor(typeof(CustomerRow)), Updatable(false)]
        [DisplayName("Customer"), NotNull, ForeignKey("[inv].[Customer]", "CustomerId"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [ReadOnly(true)]
        [DisplayName("Destination Address"), Expression("jCustomer.[Address]")]
        public String DestinationAddress
        {
            get { return Fields.DestinationAddress[this]; }
            set { Fields.DestinationAddress[this] = value; }
        }

        [ReadOnly(true)]
        [DisplayName("Shpped Date"), DefaultValue("now")]
        public DateTime? ShippedDate
        {
            get { return Fields.ShippedDate[this]; }
            set { Fields.ShippedDate[this] = value; }
        }

        [DisplayName("Shipped"), NotNull]
        public Boolean? Shipped
        {
            get { return Fields.Shipped[this]; }
            set { Fields.Shipped[this] = value; }
        }

        [DisplayName("Date"), NotNull, Insertable(false), Updatable(false)]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("Items"), MasterDetailRelation(foreignKey: "PurchaseOrderID"), NotMapped]
        public List<OrderItemRow> ItemList
        {
            get { return Fields.ItemList[this]; }
            set { Fields.ItemList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PurchaseOrderId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PurchaseOrderId;
            public Int32Field CustomerId;
            public DecimalField Amount;
            public DateTimeField Date;
            public StringField CustomerName;

            public RowListField<OrderItemRow> ItemList;
            public StringField DestinationAddress;
            public DateTimeField ShippedDate;
            public BooleanField Shipped;
        }
    }
}
