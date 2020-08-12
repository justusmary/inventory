
namespace Serene_Web_App.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SupplierRow))]
    public class SupplierController : Controller
    {
        [Route("Inventory/Supplier")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Supplier/SupplierIndex.cshtml");
        }
    }
}