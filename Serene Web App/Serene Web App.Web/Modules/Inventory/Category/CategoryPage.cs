
namespace Serene_Web_App.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CategoryRow))]
    public class CategoryController : Controller
    {
        [Route("Inventory/Category")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Category/CategoryIndex.cshtml");
        }
    }
}