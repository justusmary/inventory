using Serenity.Services;
using System;

namespace Serene_Web_App.Inventory
{
    public class UserListRequest : ListRequest
    {
        public Boolean? IsCustomer { get; set; }
    }
}