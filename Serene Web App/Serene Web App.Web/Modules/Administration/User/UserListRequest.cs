using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Serene_Web_App.Web.Modules.Administration.User
{
    public class UserListRequest : ListRequest
    {
        public Boolean? IsCustomer { get; set; }
    }
}
