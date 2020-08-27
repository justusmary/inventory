using Serenity.Navigation;
using MyPages = Serene_Web_App.Inventory.Pages;

/*
[assembly: NavigationLink(int.MaxValue, "Inventory/Product", typeof(MyPages.ProductController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Category", typeof(MyPages.CategoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Supplier", typeof(MyPages.SupplierController), icon: null)]
*/
[assembly: NavigationLink(int.MaxValue, "Inventory/Customer", typeof(MyPages.CustomerController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Product Order", typeof(MyPages.ProductOrderController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Purchase Order", typeof(MyPages.PurchaseOrderController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Order Item", typeof(MyPages.OrderItemController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Shipment", typeof(MyPages.ShipmentController), icon: null)]