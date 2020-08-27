
namespace Serene_Web_App.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PurchaseOrderRow))]
    public class PurchaseOrderController : Controller
    {
        [Route("Inventory/PurchaseOrder")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/PurchaseOrder/PurchaseOrderIndex.cshtml");
        }
    }
}