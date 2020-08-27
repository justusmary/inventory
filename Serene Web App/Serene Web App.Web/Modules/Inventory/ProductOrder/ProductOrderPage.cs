
namespace Serene_Web_App.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductOrderRow))]
    public class ProductOrderController : Controller
    {
        [Route("Inventory/ProductOrder")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/ProductOrder/ProductOrderIndex.cshtml");
        }
    }
}