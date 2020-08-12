using Serenity.Navigation;
using Administration = Serene_Web_App.Administration.Pages;
using MyPages = Serene_Web_App.Inventory.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]

[assembly: NavigationMenu(2000, "Inventory", icon: "fa-industry")]
[assembly: NavigationLink(2100, "Inventory/Products",
    typeof(MyPages.ProductController), icon: "fa-shopping-cart")]

[assembly: NavigationLink(2200, "Inventory/Categories",
    typeof(MyPages.CategoryController), icon: "fa-sort")]

[assembly: NavigationLink(2300, "Inventory/Suppliers",
    typeof(MyPages.SupplierController), icon: "fa-truck")]
