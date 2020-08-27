using Serenity.Services;

namespace Serene_Web_App.Inventory
{
    public class PurchaseOrderListRequest : ListRequest
    {
        public int? ProductId { get; set; }
    }
}