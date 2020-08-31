using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Serene_Web_App
{
    public interface ICustomerRow
    {
        Int32Field UserIdField { get; }
    }
}
