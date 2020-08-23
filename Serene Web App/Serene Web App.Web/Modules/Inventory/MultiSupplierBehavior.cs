using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Data;
using Serenity;
using Serene_Web_App.Administration;

namespace Serene_Web_App
{
    public class MultiSupplierBehavior : IImplicitBehavior, ISaveBehavior, IDeleteBehavior, IListBehavior, IRetrieveBehavior
    {
        private Int32Field fldSupplierId;

        public bool ActivateFor(Row row)
        {
            var mt = row as IMultiSupplierRow;
            if (mt == null)
                return false;

            fldSupplierId = mt.SupplierIdField;
            return true;
        }

        public void OnPrepareQuery(IRetrieveRequestHandler handler,
            SqlQuery query)
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            if (!Authorization.HasPermission(PermissionKeys.Suppliers))
                query.Where(fldSupplierId == user.SupplierId);
        }

        public void OnPrepareQuery(IListRequestHandler handler,
            SqlQuery query)
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            if (!Authorization.HasPermission(PermissionKeys.Suppliers))
                query.Where(fldSupplierId == user.SupplierId);
        }

        public void OnSetInternalFields(ISaveRequestHandler handler)
        {
            if (handler.IsCreate)
                fldSupplierId[handler.Row] =
                    ((UserDefinition)Authorization
                        .UserDefinition).SupplierId;
        }

        public void OnValidateRequest(ISaveRequestHandler handler)
        {
            if (handler.IsUpdate)
            {
                var user = (UserDefinition)Authorization.UserDefinition;
                if (fldSupplierId[handler.Old] != fldSupplierId[handler.Row])
                    Authorization.ValidatePermission(PermissionKeys.Suppliers);
            }
        }

        public void OnValidateRequest(IDeleteRequestHandler handler)
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            if (fldSupplierId[handler.Row] != user.SupplierId)
                Authorization.ValidatePermission(
                    PermissionKeys.Suppliers);
        }

        public void OnAfterDelete(IDeleteRequestHandler handler) { }
        public void OnAfterExecuteQuery(IRetrieveRequestHandler handler) { }
        public void OnAfterExecuteQuery(IListRequestHandler handler) { }
        public void OnAfterSave(ISaveRequestHandler handler) { }
        public void OnApplyFilters(IListRequestHandler handler, SqlQuery query) { }
        public void OnAudit(IDeleteRequestHandler handler) { }
        public void OnAudit(ISaveRequestHandler handler) { }
        public void OnBeforeDelete(IDeleteRequestHandler handler) { }
        public void OnBeforeExecuteQuery(IRetrieveRequestHandler handler) { }
        public void OnBeforeExecuteQuery(IListRequestHandler handler) { }
        public void OnBeforeSave(ISaveRequestHandler handler) { }
        public void OnPrepareQuery(IDeleteRequestHandler handler, SqlQuery query) { }
        public void OnPrepareQuery(ISaveRequestHandler handler, SqlQuery query) { }
        public void OnReturn(IDeleteRequestHandler handler) { }
        public void OnReturn(IRetrieveRequestHandler handler) { }
        public void OnReturn(IListRequestHandler handler) { }
        public void OnReturn(ISaveRequestHandler handler) { }
        public void OnValidateRequest(IRetrieveRequestHandler handler) { }
        public void OnValidateRequest(IListRequestHandler handler) { }
    }
}
