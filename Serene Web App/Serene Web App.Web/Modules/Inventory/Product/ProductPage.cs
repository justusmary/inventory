
namespace Serene_Web_App.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductRow))]
    public class ProductController : Controller
    {
        [Route("Inventory/Product")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Product/ProductIndex.cshtml");
        }
    }
}