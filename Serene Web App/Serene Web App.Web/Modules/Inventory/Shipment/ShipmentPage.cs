
namespace Serene_Web_App.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ShipmentRow))]
    public class ShipmentController : Controller
    {
        [Route("Inventory/Shipment")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Shipment/ShipmentIndex.cshtml");
        }
    }
}