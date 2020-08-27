
namespace Serene_Web_App.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomerRow))]
    public class CustomerController : Controller
    {
        [Route("Inventory/Customer")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Customer/CustomerIndex.cshtml");
        }
    }
}