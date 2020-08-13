
namespace Serene_Web_App.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SupplierProductRow))]
    public class SupplierProductController : Controller
    {
        [Route("Inventory/SupplierProduct")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/SupplierProduct/SupplierProductIndex.cshtml");
        }
    }
}