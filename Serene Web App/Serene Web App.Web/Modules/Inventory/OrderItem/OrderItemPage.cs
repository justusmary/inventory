
namespace Serene_Web_App.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OrderItemRow))]
    public class OrderItemController : Controller
    {
        [Route("Inventory/OrderItem")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/OrderItem/OrderItemIndex.cshtml");
        }
    }
}