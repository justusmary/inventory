
namespace Serene_Web_App.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using Serene_Web_App.Administration;

    [PageAuthorize(PermissionKeys.Admin)]
    public class CustomerController : Controller
    {
        [Route("Inventory/Customer")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Customer/CustomerIndex.cshtml");
        }
    }
}