var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    var w4 = s.LookupEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0,
                        'SupplierId', w4,
                        'Phone', w0,
                        'Address', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:SharedAdmin';
            UserPermissionRow.insertPermission = 'Administration:SharedAdmin';
            UserPermissionRow.readPermission = 'Administration:SharedAdmin';
            UserPermissionRow.updatePermission = 'Administration:SharedAdmin';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Admin';
            UserRow.insertPermission = 'Administration:SharedAdmin';
            UserRow.readPermission = 'Administration:User';
            UserRow.updatePermission = 'Administration:User';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
                    CategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CategoryForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            CategoryForm.formKey = 'Inventory.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Inventory.CategoryForm = CategoryForm;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryId';
            CategoryRow.nameProperty = 'Name';
            CategoryRow.localTextPrefix = 'Inventory.Category';
            CategoryRow.lookupKey = 'Inventory.Category';
            function getLookup() {
                return Q.getLookup('Inventory.Category');
            }
            CategoryRow.getLookup = getLookup;
            CategoryRow.deletePermission = 'Administration:Admin';
            CategoryRow.insertPermission = 'User:Supplier';
            CategoryRow.readPermission = 'Administration:User';
            CategoryRow.updatePermission = 'Administration:Admin';
        })(CategoryRow = Inventory.CategoryRow || (Inventory.CategoryRow = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Inventory/Category';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = Inventory.CategoryService || (Inventory.CategoryService = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    var w4 = s.LookupEditor;
                    Q.initFormType(CustomerForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0,
                        'SupplierId', w4,
                        'Phone', w0,
                        'Address', w0
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Inventory.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Inventory.CustomerForm = CustomerForm;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'UserId';
            CustomerRow.isActiveProperty = 'IsActive';
            CustomerRow.nameProperty = 'Username';
            CustomerRow.localTextPrefix = 'Inventory.Customer';
            CustomerRow.lookupKey = 'Inventory.Customer';
            function getLookup() {
                return Q.getLookup('Inventory.Customer');
            }
            CustomerRow.getLookup = getLookup;
            CustomerRow.deletePermission = 'Administration:Security';
            CustomerRow.insertPermission = 'Administration:Admin';
            CustomerRow.readPermission = 'User:Customer';
            CustomerRow.updatePermission = 'User:Customer';
        })(CustomerRow = Inventory.CustomerRow || (Inventory.CustomerRow = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Inventory/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Inventory.CustomerService || (Inventory.CustomerService = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var OrderItemForm = /** @class */ (function (_super) {
            __extends(OrderItemForm, _super);
            function OrderItemForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderItemForm.init) {
                    OrderItemForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(OrderItemForm, [
                        'ProductId', w0,
                        'Quantity', w1,
                        'UnitPrice', w2
                    ]);
                }
                return _this;
            }
            OrderItemForm.formKey = 'Inventory.OrderItem';
            return OrderItemForm;
        }(Serenity.PrefixedContext));
        Inventory.OrderItemForm = OrderItemForm;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var OrderItemRow;
        (function (OrderItemRow) {
            OrderItemRow.idProperty = 'OrderItemId';
            OrderItemRow.localTextPrefix = 'Inventory.OrderItem';
            OrderItemRow.deletePermission = 'Administration:Admin';
            OrderItemRow.insertPermission = 'User:Customer';
            OrderItemRow.readPermission = 'Administration:User';
            OrderItemRow.updatePermission = 'Administration:Admin';
        })(OrderItemRow = Inventory.OrderItemRow || (Inventory.OrderItemRow = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var OrderItemService;
        (function (OrderItemService) {
            OrderItemService.baseUrl = 'Inventory/OrderItem';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderItemService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderItemService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderItemService = Inventory.OrderItemService || (Inventory.OrderItemService = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.LookupEditor;
                    Q.initFormType(ProductForm, [
                        'PrimaryImage', w0,
                        'Name', w1,
                        'Quantity', w2,
                        'Unit', w1,
                        'Price', w2,
                        'CategoryId', w3,
                        'SupplierId', w3
                    ]);
                }
                return _this;
            }
            ProductForm.formKey = 'Inventory.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Inventory.ProductForm = ProductForm;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var ProductOrderForm = /** @class */ (function (_super) {
            __extends(ProductOrderForm, _super);
            function ProductOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductOrderForm.init) {
                    ProductOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(ProductOrderForm, [
                        'ProductId', w0,
                        'SupplierId', w0,
                        'Quantity', w1,
                        'TotalAmount', w2,
                        'Fulfilled', w3
                    ]);
                }
                return _this;
            }
            ProductOrderForm.formKey = 'Inventory.ProductOrder';
            return ProductOrderForm;
        }(Serenity.PrefixedContext));
        Inventory.ProductOrderForm = ProductOrderForm;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var ProductOrderRow;
        (function (ProductOrderRow) {
            ProductOrderRow.idProperty = 'ProductOrderId';
            ProductOrderRow.localTextPrefix = 'Inventory.ProductOrder';
            ProductOrderRow.lookupKey = 'Inventory.ProductOrder';
            function getLookup() {
                return Q.getLookup('Inventory.ProductOrder');
            }
            ProductOrderRow.getLookup = getLookup;
            ProductOrderRow.deletePermission = 'Administration:Admin';
            ProductOrderRow.insertPermission = 'Administration:Admin';
            ProductOrderRow.readPermission = 'User:Supplier';
            ProductOrderRow.updatePermission = 'Administration:Admin';
        })(ProductOrderRow = Inventory.ProductOrderRow || (Inventory.ProductOrderRow = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var ProductOrderService;
        (function (ProductOrderService) {
            ProductOrderService.baseUrl = 'Inventory/ProductOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductOrderService = Inventory.ProductOrderService || (Inventory.ProductOrderService = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductId';
            ProductRow.nameProperty = 'Name';
            ProductRow.localTextPrefix = 'Inventory.Product';
            ProductRow.lookupKey = 'Inventory.Product';
            function getLookup() {
                return Q.getLookup('Inventory.Product');
            }
            ProductRow.getLookup = getLookup;
            ProductRow.deletePermission = 'Administration:Admin';
            ProductRow.insertPermission = 'User:Supplier';
            ProductRow.readPermission = 'Administration:User';
            ProductRow.updatePermission = 'User:Supplier';
        })(ProductRow = Inventory.ProductRow || (Inventory.ProductRow = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Inventory/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Inventory.ProductService || (Inventory.ProductService = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var PurchaseOrderForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderForm, _super);
            function PurchaseOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderForm.init) {
                    PurchaseOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = Inventory.OrderItemsEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.BooleanEditor;
                    var w5 = s.StringEditor;
                    Q.initFormType(PurchaseOrderForm, [
                        'CustomerId', w0,
                        'Amount', w1,
                        'ItemList', w2,
                        'ShippedDate', w3,
                        'Shipped', w4,
                        'DestinationAddress', w5,
                        'CustomerAddress', w5
                    ]);
                }
                return _this;
            }
            PurchaseOrderForm.formKey = 'Inventory.PurchaseOrder';
            return PurchaseOrderForm;
        }(Serenity.PrefixedContext));
        Inventory.PurchaseOrderForm = PurchaseOrderForm;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var PurchaseOrderRow;
        (function (PurchaseOrderRow) {
            PurchaseOrderRow.idProperty = 'PurchaseOrderId';
            PurchaseOrderRow.localTextPrefix = 'Inventory.PurchaseOrder';
            PurchaseOrderRow.deletePermission = 'Administration:Admin';
            PurchaseOrderRow.insertPermission = 'User:Customer';
            PurchaseOrderRow.readPermission = 'User:Customer';
            PurchaseOrderRow.updatePermission = 'Administration:Admin';
        })(PurchaseOrderRow = Inventory.PurchaseOrderRow || (Inventory.PurchaseOrderRow = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var PurchaseOrderService;
        (function (PurchaseOrderService) {
            PurchaseOrderService.baseUrl = 'Inventory/PurchaseOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderService = Inventory.PurchaseOrderService || (Inventory.PurchaseOrderService = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var SupplierForm = /** @class */ (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierForm.init) {
                    SupplierForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(SupplierForm, [
                        'PrimaryImage', w0,
                        'Name', w1,
                        'Phone', w1,
                        'Address', w2
                    ]);
                }
                return _this;
            }
            SupplierForm.formKey = 'Inventory.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Inventory.SupplierForm = SupplierForm;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierId';
            SupplierRow.nameProperty = 'Name';
            SupplierRow.localTextPrefix = 'Inventory.Supplier';
            SupplierRow.lookupKey = 'Inventory.Supplier';
            function getLookup() {
                return Q.getLookup('Inventory.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            SupplierRow.deletePermission = 'Administration:Admin';
            SupplierRow.insertPermission = 'Administration:Admin';
            SupplierRow.readPermission = 'Administration:User';
            SupplierRow.updatePermission = 'User:SuppliersAdm';
        })(SupplierRow = Inventory.SupplierRow || (Inventory.SupplierRow = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Inventory/Supplier';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierService = Inventory.SupplierService || (Inventory.SupplierService = {}));
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Serene_Web_App.Membership || (Serene_Web_App.Membership = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Serene_Web_App.Membership || (Serene_Web_App.Membership = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Serene_Web_App.Membership || (Serene_Web_App.Membership = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Serene_Web_App.Membership || (Serene_Web_App.Membership = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Serene_Web_App.Membership || (Serene_Web_App.Membership = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Texts;
    (function (Texts) {
        Serene_Web_App['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1, SupplierId: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { Address: 1, DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Phone: 1, Source: 1, SupplierId: 1, SupplierName: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Inventory: { Category: { CategoryId: 1, InsertDate: 1, InsertUserId: 1, InsertUsername: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1, UpdateUsername: 1 }, Customer: { Address: 1, DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Phone: 1, Source: 1, SupplierId: 1, SupplierName: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, OrderItem: { Date: 1, LineTotal: 1, OrderItemId: 1, ProductCategoryId: 1, ProductId: 1, ProductName: 1, ProductPrice: 1, ProductPrimaryImage: 1, ProductQuantity: 1, ProductSupplierId: 1, ProductUnit: 1, PurchaseOrderAmount: 1, PurchaseOrderDate: 1, PurchaseOrderId: 1, Quantity: 1, UnitPrice: 1 }, Product: { CategoryId: 1, CategoryName: 1, InsertDate: 1, InsertUserId: 1, InsertUsername: 1, Name: 1, Price: 1, PrimaryImage: 1, ProductId: 1, Quantity: 1, SupplierId: 1, SupplierName: 1, Unit: 1, UpdateDate: 1, UpdateUserId: 1, UpdateUsername: 1 }, ProductOrder: { Date: 1, Fulfilled: 1, ProductCategoryId: 1, ProductId: 1, ProductName: 1, ProductOrderId: 1, ProductPrice: 1, ProductPrimaryImage: 1, ProductQuantity: 1, ProductSupplierId: 1, ProductUnit: 1, Quantity: 1, SupplierId: 1, SupplierName: 1, TotalAmount: 1, UpdateDate: 1, UpdateUserId: 1, UpdateUsername: 1 }, PurchaseOrder: { Amount: 1, CustomerAddress: 1, CustomerId: 1, CustomerName: 1, Date: 1, DestinationAddress: 1, ItemList: 1, PurchaseOrderId: 1, Shipped: 1, ShippedDate: 1, UpdateDate: 1, UpdateUserId: 1, UpdateUsername: 1 }, Supplier: { Address: 1, InsertDate: 1, InsertUserId: 1, InsertUsername: 1, Name: 1, Phone: 1, PrimaryImage: 1, SupplierId: 1, UpdateDate: 1, UpdateUserId: 1, UpdateUsername: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Serene_Web_App.Texts || (Serene_Web_App.Texts = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getDeletePermission = function () { return Administration.UserRow.deletePermission; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                if (Serene_Web_App.Authorization.hasPermission(Administration.RoleRow.readPermission)) {
                    buttons.push({
                        title: Q.text('Site.UserDialog.EditRolesButton'),
                        cssClass: 'edit-roles-button',
                        icon: 'fa-users text-blue',
                        onClick: function () {
                            new Administration.UserRoleDialog({
                                userID: _this.entity.UserId,
                                username: _this.entity.Username
                            }).dialogOpen();
                        }
                    });
                }
                if (Serene_Web_App.Authorization.hasPermission(Administration.UserPermissionRow.readPermission)) {
                    buttons.push({
                        title: Q.text('Site.UserDialog.EditPermissionsButton'),
                        cssClass: 'edit-permissions-button',
                        icon: 'fa-lock text-green',
                        onClick: function () {
                            new Administration.UserPermissionDialog({
                                userID: _this.entity.UserId,
                                username: _this.entity.Username
                            }).dialogOpen();
                        }
                    });
                }
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog.prototype.getPropertyItems = function () {
                var items = _super.prototype.getPropertyItems.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenants"))
                    items = items.filter(function (x) { return x.name != "SupplierId" /* SupplierId */; });
                return items;
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getInsertPermission = function () { return Administration.UserRow.insertPermission; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Serene_Web_App.Authorization || (Serene_Web_App.Authorization = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Serene_Web_App.Administration || (Serene_Web_App.Administration = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Serene_Web_App.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Serene_Web_App.LanguageList || (Serene_Web_App.LanguageList = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Serene_Web_App;
(function (Serene_Web_App) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Serene_Web_App');
        Serenity.EntityDialog.defaultLanguageList = Serene_Web_App.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Serene_Web_App.ScriptInitialization || (Serene_Web_App.ScriptInitialization = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Serene_Web_App.BasicProgressDialog = BasicProgressDialog;
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Serene_Web_App.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Serene_Web_App.DialogUtils || (Serene_Web_App.DialogUtils = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'add-button'; });
                if (addButton != null) {
                    addButton.onClick = function () {
                        _this.createEntityDialog(_this.getItemType(), function (dlg) {
                            var dialog = dlg;
                            dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                            _this.transferDialogReadOnly(dialog);
                            dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                        });
                    };
                }
                return buttons.filter(function (x) { return x.cssClass != "refresh-button"; });
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    _this.transferDialogReadOnly(dialog);
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    Serene_Web_App.StaticTextBlock = StaticTextBlock;
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Serene_Web_App.Common || (Serene_Web_App.Common = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var RowIndexFormatter = /** @class */ (function () {
            function RowIndexFormatter() {
            }
            RowIndexFormatter.prototype.format = function (ctx) {
                return (ctx.row + 1).toString();
            };
            RowIndexFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], RowIndexFormatter);
            return RowIndexFormatter;
        }());
        Inventory.RowIndexFormatter = RowIndexFormatter;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Inventory.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Inventory.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Inventory.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Inventory.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Inventory.CategoryService.baseUrl; };
            CategoryDialog.prototype.getDeletePermission = function () { return Inventory.CategoryRow.deletePermission; };
            CategoryDialog.prototype.getInsertPermission = function () { return Inventory.CategoryRow.insertPermission; };
            CategoryDialog.prototype.getUpdatePermission = function () { return Inventory.CategoryRow.updatePermission; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Inventory.CategoryDialog = CategoryDialog;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return 'Inventory.Category'; };
            CategoryGrid.prototype.getDialogType = function () { return Inventory.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Inventory.CategoryRow.idProperty; };
            CategoryGrid.prototype.getInsertPermission = function () { return Inventory.CategoryRow.insertPermission; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Inventory.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Inventory.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Inventory.CategoryGrid = CategoryGrid;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Serene_Web_App.Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Inventory.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Inventory.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Inventory.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Inventory.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Inventory.CustomerService.baseUrl; };
            CustomerDialog.prototype.getReadPermission = function () { return Inventory.CustomerRow.readPermission; };
            CustomerDialog.prototype.getDeletePermission = function () { return Inventory.CustomerRow.deletePermission; };
            CustomerDialog.prototype.getInsertPermission = function () { return Inventory.CustomerRow.insertPermission; };
            CustomerDialog.prototype.getUpdatePermission = function () { return Inventory.CustomerRow.updatePermission; };
            CustomerDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "edit-roles-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "edit-permissions-button"; }), 1);
                return buttons;
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Inventory.CustomerDialog = CustomerDialog;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Inventory.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Inventory.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Inventory.CustomerRow.idProperty; };
            CustomerGrid.prototype.getIsActiveProperty = function () { return Inventory.CustomerRow.isActiveProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Inventory.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Inventory.CustomerService.baseUrl; };
            CustomerGrid.prototype.getReadPermission = function () { return Inventory.CustomerRow.readPermission; };
            CustomerGrid.prototype.getDeletePermission = function () { return Inventory.CustomerRow.deletePermission; };
            CustomerGrid.prototype.getInsertPermission = function () { return Inventory.CustomerRow.insertPermission; };
            CustomerGrid.prototype.getUpdatePermission = function () { return Inventory.CustomerRow.updatePermission; };
            CustomerGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Inventory.CustomerGrid = CustomerGrid;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var OrderItemDialog = /** @class */ (function (_super) {
            __extends(OrderItemDialog, _super);
            function OrderItemDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.OrderItemForm(_this.idPrefix);
                //this.form.Date.value = Date.now.toString();
                _this.form.ProductId.changeSelect2(function (e) {
                    var ProductId = Q.toId(_this.form.ProductId.value);
                    if (ProductId != null) {
                        _this.form.UnitPrice.value = Inventory.ProductRow.getLookup().itemById[ProductId].Price;
                    }
                });
                _this.form.Quantity.change(function (e) {
                    var ProductId = Q.toId(_this.form.ProductId.value);
                    if (ProductId != null) {
                        _this.form.UnitPrice.value = Inventory.ProductRow.getLookup().itemById[ProductId].Price;
                    }
                });
                return _this;
            }
            OrderItemDialog.prototype.getFormKey = function () { return Inventory.OrderItemForm.formKey; };
            OrderItemDialog.prototype.getIdProperty = function () { return Inventory.OrderItemRow.idProperty; };
            OrderItemDialog.prototype.getLocalTextPrefix = function () { return Inventory.OrderItemRow.localTextPrefix; };
            OrderItemDialog.prototype.getService = function () { return Inventory.OrderItemService.baseUrl; };
            OrderItemDialog.prototype.getDeletePermission = function () { return Inventory.OrderItemRow.deletePermission; };
            OrderItemDialog.prototype.getInsertPermission = function () { return Inventory.OrderItemRow.insertPermission; };
            OrderItemDialog.prototype.getUpdatePermission = function () { return Inventory.OrderItemRow.updatePermission; };
            OrderItemDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderItemDialog);
            return OrderItemDialog;
        }(Serene_Web_App.Common.GridEditorDialog));
        Inventory.OrderItemDialog = OrderItemDialog;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var OrderItemGrid = /** @class */ (function (_super) {
            __extends(OrderItemGrid, _super);
            function OrderItemGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderItemGrid.prototype.getColumnsKey = function () { return 'Inventory.OrderItem'; };
            OrderItemGrid.prototype.getDialogType = function () { return Inventory.OrderItemDialog; };
            OrderItemGrid.prototype.getIdProperty = function () { return Inventory.OrderItemRow.idProperty; };
            OrderItemGrid.prototype.getInsertPermission = function () { return Inventory.OrderItemRow.insertPermission; };
            OrderItemGrid.prototype.getLocalTextPrefix = function () { return Inventory.OrderItemRow.localTextPrefix; };
            OrderItemGrid.prototype.getService = function () { return Inventory.OrderItemService.baseUrl; };
            OrderItemGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderItemGrid);
            return OrderItemGrid;
        }(Serenity.EntityGrid));
        Inventory.OrderItemGrid = OrderItemGrid;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var OrderItemsEditor = /** @class */ (function (_super) {
            __extends(OrderItemsEditor, _super);
            function OrderItemsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderItemsEditor.prototype.getColumnsKey = function () { return "Inventory.OrderItem"; };
            OrderItemsEditor.prototype.getDialogType = function () { return Inventory.OrderItemDialog; };
            OrderItemsEditor.prototype.getLocalTextPrefix = function () { return Inventory.OrderItemRow.localTextPrefix; };
            OrderItemsEditor.prototype.validateEntity = function (row, id) {
                row.ProductId = Q.toId(row.ProductId);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductId === row.ProductId; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Inventory.ProductRow.getLookup().itemById[row.ProductId].Name;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0);
                return true;
            };
            OrderItemsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderItemsEditor);
            return OrderItemsEditor;
        }(Serene_Web_App.Common.GridEditorBase));
        Inventory.OrderItemsEditor = OrderItemsEditor;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Inventory.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Inventory.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Inventory.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Inventory.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Inventory.ProductService.baseUrl; };
            ProductDialog.prototype.getDeletePermission = function () { return Inventory.ProductRow.deletePermission; };
            ProductDialog.prototype.getInsertPermission = function () { return Inventory.ProductRow.insertPermission; };
            ProductDialog.prototype.getUpdatePermission = function () { return Inventory.ProductRow.updatePermission; };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Inventory.ProductDialog = ProductDialog;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return 'Inventory.Product'; };
            ProductGrid.prototype.getDialogType = function () { return Inventory.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Inventory.ProductRow.idProperty; };
            ProductGrid.prototype.getInsertPermission = function () { return Inventory.ProductRow.insertPermission; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Inventory.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Inventory.ProductService.baseUrl; };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Inventory.ProductGrid = ProductGrid;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var ProductOrderDialog = /** @class */ (function (_super) {
            __extends(ProductOrderDialog, _super);
            function ProductOrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.ProductOrderForm(_this.idPrefix);
                //this.form.Date.value = Date.now.toString();
                _this.form.ProductId.changeSelect2(function (e) {
                    var ProductId = Q.toId(_this.form.ProductId.value);
                    if (ProductId != null) {
                        var temp = Inventory.ProductRow.getLookup().itemById[ProductId].SupplierId.toString();
                        _this.form.SupplierId.value = Inventory.ProductRow.getLookup().itemById[ProductId].SupplierId.toString();
                        _this.form.TotalAmount.value = Inventory.ProductRow.getLookup().itemById[ProductId].Price * _this.form.Quantity.value;
                    }
                });
                _this.form.Quantity.change(function (e) {
                    var ProductId = Q.toId(_this.form.ProductId.value);
                    if (ProductId != null) {
                        _this.form.TotalAmount.value = Inventory.ProductRow.getLookup().itemById[ProductId].Price * _this.form.Quantity.value;
                    }
                });
                return _this;
            }
            ProductOrderDialog.prototype.getFormKey = function () { return Inventory.ProductOrderForm.formKey; };
            ProductOrderDialog.prototype.getIdProperty = function () { return Inventory.ProductOrderRow.idProperty; };
            ProductOrderDialog.prototype.getLocalTextPrefix = function () { return Inventory.ProductOrderRow.localTextPrefix; };
            ProductOrderDialog.prototype.getService = function () { return Inventory.ProductOrderService.baseUrl; };
            ProductOrderDialog.prototype.getDeletePermission = function () { return Inventory.ProductOrderRow.deletePermission; };
            ProductOrderDialog.prototype.getInsertPermission = function () { return Inventory.ProductOrderRow.insertPermission; };
            ProductOrderDialog.prototype.getUpdatePermission = function () { return Inventory.ProductOrderRow.updatePermission; };
            ProductOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductOrderDialog);
            return ProductOrderDialog;
        }(Serenity.EntityDialog));
        Inventory.ProductOrderDialog = ProductOrderDialog;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var ProductOrderGrid = /** @class */ (function (_super) {
            __extends(ProductOrderGrid, _super);
            function ProductOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductOrderGrid.prototype.getColumnsKey = function () { return 'Inventory.ProductOrder'; };
            ProductOrderGrid.prototype.getDialogType = function () { return Inventory.ProductOrderDialog; };
            ProductOrderGrid.prototype.getIdProperty = function () { return Inventory.ProductOrderRow.idProperty; };
            ProductOrderGrid.prototype.getInsertPermission = function () { return Inventory.ProductOrderRow.insertPermission; };
            ProductOrderGrid.prototype.getLocalTextPrefix = function () { return Inventory.ProductOrderRow.localTextPrefix; };
            ProductOrderGrid.prototype.getService = function () { return Inventory.ProductOrderService.baseUrl; };
            ProductOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductOrderGrid);
            return ProductOrderGrid;
        }(Serenity.EntityGrid));
        Inventory.ProductOrderGrid = ProductOrderGrid;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var PurchaseOrderDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderDialog, _super);
            function PurchaseOrderDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.PurchaseOrderForm(_this.idPrefix);
                return _this;
            }
            PurchaseOrderDialog.prototype.getFormKey = function () { return Inventory.PurchaseOrderForm.formKey; };
            PurchaseOrderDialog.prototype.getIdProperty = function () { return Inventory.PurchaseOrderRow.idProperty; };
            PurchaseOrderDialog.prototype.getLocalTextPrefix = function () { return Inventory.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderDialog.prototype.getService = function () { return Inventory.PurchaseOrderService.baseUrl; };
            PurchaseOrderDialog.prototype.getDeletePermission = function () { return Inventory.PurchaseOrderRow.deletePermission; };
            PurchaseOrderDialog.prototype.getInsertPermission = function () { return Inventory.PurchaseOrderRow.insertPermission; };
            PurchaseOrderDialog.prototype.getUpdatePermission = function () { return Inventory.PurchaseOrderRow.updatePermission; };
            PurchaseOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], PurchaseOrderDialog);
            return PurchaseOrderDialog;
        }(Serenity.EntityDialog));
        Inventory.PurchaseOrderDialog = PurchaseOrderDialog;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var PurchaseOrderGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderGrid, _super);
            function PurchaseOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderGrid.prototype.getColumnsKey = function () { return 'Inventory.PurchaseOrder'; };
            PurchaseOrderGrid.prototype.getDialogType = function () { return Inventory.PurchaseOrderDialog; };
            PurchaseOrderGrid.prototype.getIdProperty = function () { return Inventory.PurchaseOrderRow.idProperty; };
            PurchaseOrderGrid.prototype.getInsertPermission = function () { return Inventory.PurchaseOrderRow.insertPermission; };
            PurchaseOrderGrid.prototype.getLocalTextPrefix = function () { return Inventory.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderGrid.prototype.getService = function () { return Inventory.PurchaseOrderService.baseUrl; };
            PurchaseOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderGrid);
            return PurchaseOrderGrid;
        }(Serenity.EntityGrid));
        Inventory.PurchaseOrderGrid = PurchaseOrderGrid;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.SupplierForm(_this.idPrefix);
                _this.ProductGrid = new Inventory.SupplierProdGrid(_this.byId("ProductGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Inventory.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Inventory.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Inventory.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Inventory.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Inventory.SupplierService.baseUrl; };
            SupplierDialog.prototype.getDeletePermission = function () { return Inventory.SupplierRow.deletePermission; };
            SupplierDialog.prototype.getInsertPermission = function () { return Inventory.SupplierRow.insertPermission; };
            SupplierDialog.prototype.getUpdatePermission = function () { return Inventory.SupplierRow.updatePermission; };
            SupplierDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.ProductGrid.supplierID = this.entityId;
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Inventory.SupplierDialog = SupplierDialog;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return 'Inventory.Supplier'; };
            SupplierGrid.prototype.getDialogType = function () { return Inventory.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Inventory.SupplierRow.idProperty; };
            SupplierGrid.prototype.getInsertPermission = function () { return Inventory.SupplierRow.insertPermission; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Inventory.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Inventory.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Inventory.SupplierGrid = SupplierGrid;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var SupplierProdDialog = /** @class */ (function (_super) {
            __extends(SupplierProdDialog, _super);
            function SupplierProdDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.ProductForm(_this.idPrefix);
                return _this;
            }
            SupplierProdDialog.prototype.getFormKey = function () { return Inventory.ProductForm.formKey; };
            SupplierProdDialog.prototype.getIdProperty = function () { return Inventory.ProductRow.idProperty; };
            SupplierProdDialog.prototype.getLocalTextPrefix = function () { return Inventory.ProductRow.localTextPrefix; };
            SupplierProdDialog.prototype.getNameProperty = function () { return Inventory.ProductRow.nameProperty; };
            SupplierProdDialog.prototype.getService = function () { return Inventory.ProductService.baseUrl; };
            SupplierProdDialog.prototype.getDeletePermission = function () { return Inventory.ProductRow.deletePermission; };
            SupplierProdDialog.prototype.getInsertPermission = function () { return Inventory.ProductRow.insertPermission; };
            SupplierProdDialog.prototype.getUpdatePermission = function () { return Inventory.ProductRow.updatePermission; };
            SupplierProdDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SupplierProdDialog);
            return SupplierProdDialog;
        }(Serenity.EntityDialog));
        Inventory.SupplierProdDialog = SupplierProdDialog;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Inventory;
    (function (Inventory) {
        var SupplierProdGrid = /** @class */ (function (_super) {
            __extends(SupplierProdGrid, _super);
            function SupplierProdGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierProdGrid.prototype.getColumnsKey = function () { return "Inventory.SupplierProd"; };
            SupplierProdGrid.prototype.getIdProperty = function () { return Inventory.ProductRow.idProperty; };
            SupplierProdGrid.prototype.getLocalTextPrefix = function () { return Inventory.ProductRow.localTextPrefix; };
            SupplierProdGrid.prototype.getService = function () { return Inventory.ProductService.baseUrl; };
            SupplierProdGrid.prototype.getGridCanLoad = function () {
                return this.supplierID != null;
            };
            Object.defineProperty(SupplierProdGrid.prototype, "supplierID", {
                get: function () {
                    return this._supplierID;
                },
                set: function (value) {
                    if (this._supplierID != value) {
                        this._supplierID = value;
                        this.setEquality("SupplierId" /* SupplierId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            SupplierProdGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierProdGrid);
            return SupplierProdGrid;
        }(Serenity.EntityGrid));
        Inventory.SupplierProdGrid = SupplierProdGrid;
    })(Inventory = Serene_Web_App.Inventory || (Serene_Web_App.Inventory = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = Serene_Web_App.Membership || (Serene_Web_App.Membership = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Serene_Web_App.Membership || (Serene_Web_App.Membership = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Serene_Web_App.Membership || (Serene_Web_App.Membership = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Serene_Web_App.Membership || (Serene_Web_App.Membership = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
var Serene_Web_App;
(function (Serene_Web_App) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Serene_Web_App.Membership || (Serene_Web_App.Membership = {}));
})(Serene_Web_App || (Serene_Web_App = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyZW5lX1dlYl9BcHAuV2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlBlcm1pc3Npb25LZXlzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlNlcmdlbkNvbm5lY3Rpb24udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uU2VyZ2VuR2VuZXJhdGVPcHRpb25zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlNlcmdlbkdlbmVyYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5TZXJnZW5MaXN0VGFibGVzUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5TZXJnZW5TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlNlcmdlblRhYmxlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uSXRlbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlckNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uVXNlclByZWZlcmVuY2VSZXRyaWV2ZVJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uVXNlclByZWZlcmVuY2VTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0NvbW1vbi5Vc2VyUHJlZmVyZW5jZVVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRXhjZWxJbXBvcnRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0V4Y2VsSW1wb3J0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2V0TmV4dE51bWJlclJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvR2V0TmV4dE51bWJlclJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0ludmVudG9yeS5DYXRlZ29yeUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5LkNhdGVnb3J5Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnZlbnRvcnkuQ2F0ZWdvcnlSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5LkNhdGVnb3J5U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnZlbnRvcnkuQ3VzdG9tZXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0ludmVudG9yeS5DdXN0b21lckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5LkN1c3RvbWVyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0ludmVudG9yeS5DdXN0b21lclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5Lk9yZGVySXRlbUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5Lk9yZGVySXRlbUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5Lk9yZGVySXRlbVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnZlbnRvcnkuT3JkZXJJdGVtU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnZlbnRvcnkuUHJvZHVjdENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5LlByb2R1Y3RGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0ludmVudG9yeS5Qcm9kdWN0T3JkZXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0ludmVudG9yeS5Qcm9kdWN0T3JkZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0ludmVudG9yeS5Qcm9kdWN0T3JkZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5LlByb2R1Y3RPcmRlclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5LlByb2R1Y3RSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5LlByb2R1Y3RTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0ludmVudG9yeS5QdXJjaGFzZU9yZGVyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnZlbnRvcnkuUHVyY2hhc2VPcmRlckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5LlB1cmNoYXNlT3JkZXJMaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnZlbnRvcnkuUHVyY2hhc2VPcmRlclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnZlbnRvcnkuUHVyY2hhc2VPcmRlclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvSW52ZW50b3J5LlN1cHBsaWVyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnZlbnRvcnkuU3VwcGxpZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0ludmVudG9yeS5TdXBwbGllclByb2RDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0ludmVudG9yeS5TdXBwbGllclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9JbnZlbnRvcnkuU3VwcGxpZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuTG9naW5Gb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuTG9naW5SZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlNpZ25VcEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NjcmlwdFVzZXJEZWZpbml0aW9uLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RleHRzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1dlYi5Nb2R1bGVzLkludmVudG9yeS5QZXJtaXNzaW9uS2V5cy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9Sb2xlUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vU2VyZ2VuL1NlcmdlblBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9UcmFuc2xhdGlvbkdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9Vc2VyR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9BdXRoZW50aWNhdGlvbi9BdXRob3JpemF0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9QZXJtaXNzaW9uQ2hlY2tFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VzZXJQZXJtaXNzaW9uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Sb2xlQ2hlY2tFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VzZXJSb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9MYW5ndWFnZUxpc3QudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9TY3JpcHRJbml0aWFsaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvQmFzaWNQcm9ncmVzc0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvQnVsa1NlcnZpY2VBY3Rpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0RpYWxvZ1V0aWxzLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9FbnVtU2VsZWN0Rm9ybWF0dGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9FeGNlbEV4cG9ydEhlbHBlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvR3JpZEVkaXRvckJhc2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0dyaWRFZGl0b3JEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL1N0YXRpY1RleHRCbG9jay50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL05hdmlnYXRpb24vTGFuZ3VhZ2VTZWxlY3Rpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL1NpZGViYXJTZWFyY2gudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL1RoZW1lU2VsZWN0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vUmVwb3J0aW5nL1BkZkV4cG9ydEhlbHBlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1JlcG9ydGluZy9SZXBvcnREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9SZXBvcnRpbmcvUmVwb3J0SGVscGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vUmVwb3J0aW5nL1JlcG9ydFBhZ2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9Vc2VyUHJlZmVyZW5jZS9Vc2VyUHJlZmVyZW5jZVN0b3JhZ2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0ludmVudG9yeS9Sb3dJbmRleEZvcm1hdHRlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvSW52ZW50b3J5L0NhdGVnb3J5L0NhdGVnb3J5RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9JbnZlbnRvcnkvQ2F0ZWdvcnkvQ2F0ZWdvcnlHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9JbnZlbnRvcnkvQ3VzdG9tZXIvQ3VzdG9tZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0ludmVudG9yeS9DdXN0b21lci9DdXN0b21lckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0ludmVudG9yeS9PcmRlckl0ZW0vT3JkZXJJdGVtRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9JbnZlbnRvcnkvT3JkZXJJdGVtL09yZGVySXRlbUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0ludmVudG9yeS9PcmRlckl0ZW0vT3JkZXJJdGVtc0VkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvSW52ZW50b3J5L1Byb2R1Y3QvUHJvZHVjdERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvSW52ZW50b3J5L1Byb2R1Y3QvUHJvZHVjdEdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0ludmVudG9yeS9Qcm9kdWN0T3JkZXIvUHJvZHVjdE9yZGVyRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9JbnZlbnRvcnkvUHJvZHVjdE9yZGVyL1Byb2R1Y3RPcmRlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0ludmVudG9yeS9QdXJjaGFzZU9yZGVyL1B1cmNoYXNlT3JkZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0ludmVudG9yeS9QdXJjaGFzZU9yZGVyL1B1cmNoYXNlT3JkZXJHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9JbnZlbnRvcnkvU3VwcGxpZXIvU3VwcGxpZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0ludmVudG9yeS9TdXBwbGllci9TdXBwbGllckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0ludmVudG9yeS9TdXBwbGllci9TdXBwbGllclByb2REaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0ludmVudG9yeS9TdXBwbGllci9TdXBwbGllclByb2RHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvTG9naW5QYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0NoYW5nZVBhc3N3b3JkL0NoYW5nZVBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvUmVzZXRQYXNzd29yZC9SZXNldFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9TaWduVXAvU2lnblVwUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUEsSUFBVSxjQUFjLENBMEJ2QjtBQTFCRCxXQUFVLGNBQWM7SUFBQyxJQUFBLGNBQWMsQ0EwQnRDO0lBMUJ3QixXQUFBLGNBQWM7UUFNbkM7WUFBa0MsZ0NBQXdCO1lBSXRELHNCQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBYWhCO2dCQVhHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFHO29CQUNyQixZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFekIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUV4QixDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTt3QkFDekIsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCLGNBQWMsRUFBRSxFQUFFO3FCQUNyQixDQUFDLENBQUM7aUJBQ047O1lBQ0wsQ0FBQztZQWpCTSxvQkFBTyxHQUFHLHlCQUF5QixDQUFDO1lBa0IvQyxtQkFBQztTQUFBLEFBbkJELENBQWtDLFFBQVEsQ0FBQyxlQUFlLEdBbUJ6RDtRQW5CWSwyQkFBWSxlQW1CeEIsQ0FBQTtJQUNMLENBQUMsRUExQndCLGNBQWMsR0FBZCw2QkFBYyxLQUFkLDZCQUFjLFFBMEJ0QztBQUFELENBQUMsRUExQlMsY0FBYyxLQUFkLGNBQWMsUUEwQnZCO0FDMUJELElBQVUsY0FBYyxDQTJCdkI7QUEzQkQsV0FBVSxjQUFjO0lBQUMsSUFBQSxjQUFjLENBMkJ0QztJQTNCd0IsV0FBQSxjQUFjO1FBT25DLElBQWlCLFdBQVcsQ0FtQjNCO1FBbkJELFdBQWlCLFdBQVc7WUFDWCxzQkFBVSxHQUFHLElBQUksQ0FBQztZQUNsQix3QkFBWSxHQUFHLGNBQWMsQ0FBQztZQUM5QiwyQkFBZSxHQUFHLHlCQUF5QixDQUFDO1lBQzVDLHFCQUFT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QUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyx5QkFBeUIsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLG1CQUFtQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxFQUFDLG9CQUFvQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxxQkFBcUIsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFB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eUJBQVUsS0FBVix5QkFBVSxRQWtEbEM7QUFBRCxDQUFDLEVBbERTLGNBQWMsS0FBZCxjQUFjLFFBa0R2QiIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlRm9ybSB7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMYW5ndWFnZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExhbmd1YWdlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTGFuZ3VhZ2VGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBMYW5ndWFnZUlkPzogc3RyaW5nO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdMYW5ndWFnZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPExhbmd1YWdlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxMYW5ndWFnZVJvdz4oJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlSWQgPSBcIkxhbmd1YWdlSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VOYW1lID0gXCJMYW5ndWFnZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBMYW5ndWFnZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TGFuZ3VhZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TGFuZ3VhZ2VSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8TGFuZ3VhZ2VSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TGFuZ3VhZ2VTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgR2VuZXJhbCA9IFwiQWRtaW5pc3RyYXRpb246R2VuZXJhbFwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTaGFyZWRBZG1pbiA9IFwiQWRtaW5pc3RyYXRpb246U2hhcmVkQWRtaW5cIjtcclxuICAgICAgICBleHBvcnQgY29uc3QgVXNlciA9IFwiQWRtaW5pc3RyYXRpb246VXNlclwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBBZG1pbiA9IFwiQWRtaW5pc3RyYXRpb246QWRtaW5cIjtcclxuICAgICAgICBleHBvcnQgY29uc3QgU2VjdXJpdHkgPSBcIkFkbWluaXN0cmF0aW9uOlNlY3VyaXR5XCI7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFRyYW5zbGF0aW9uID0gXCJBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvblwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTdXBwbGllciA9IFwiVXNlcjpTdXBwbGllclwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTdXBwbGllckFkbWluID0gXCJVc2VyOlN1cHBsaWVyc0FkbVwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lciA9IFwiVXNlcjpDdXN0b21lclwiO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVGb3JtIHtcclxuICAgICAgICBSb2xlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUm9sZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJvbGVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSb2xlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdSb2xlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFJvbGVQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgUm9sZVJvbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBSb2xlUGVybWlzc2lvbklkID0gXCJSb2xlUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgUm9sZVJvbGVOYW1lID0gXCJSb2xlUm9sZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBzdHJpbmdbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVJvdyB7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFN1cHBsaWVySWQ/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUm9sZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxSb2xlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxSb2xlUm93PignQWRtaW5pc3RyYXRpb24uUm9sZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFJvbGVOYW1lID0gXCJSb2xlTmFtZVwiLFxyXG4gICAgICAgICAgICBTdXBwbGllcklkID0gXCJTdXBwbGllcklkXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJvbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Um9sZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcmdlbkNvbm5lY3Rpb24ge1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJnZW5HZW5lcmF0ZU9wdGlvbnMge1xyXG4gICAgICAgIFJvdz86IGJvb2xlYW47XHJcbiAgICAgICAgU2VydmljZT86IGJvb2xlYW47XHJcbiAgICAgICAgVUk/OiBib29sZWFuO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcmdlbkdlbmVyYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBDb25uZWN0aW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRhYmxlPzogU2VyZ2VuVGFibGU7XHJcbiAgICAgICAgR2VuZXJhdGVPcHRpb25zPzogU2VyZ2VuR2VuZXJhdGVPcHRpb25zO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNlcmdlbkxpc3RUYWJsZXNSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIENvbm5lY3Rpb25LZXk/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgU2VyZ2VuU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vU2VyZ2VuJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdENvbm5lY3Rpb25zKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxTZXJnZW5Db25uZWN0aW9uPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RUYWJsZXMocmVxdWVzdDogU2VyZ2VuTGlzdFRhYmxlc1JlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFNlcmdlblRhYmxlPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIEdlbmVyYXRlKHJlcXVlc3Q6IFNlcmdlbkdlbmVyYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdENvbm5lY3Rpb25zID0gXCJBZG1pbmlzdHJhdGlvbi9TZXJnZW4vTGlzdENvbm5lY3Rpb25zXCIsXHJcbiAgICAgICAgICAgIExpc3RUYWJsZXMgPSBcIkFkbWluaXN0cmF0aW9uL1Nlcmdlbi9MaXN0VGFibGVzXCIsXHJcbiAgICAgICAgICAgIEdlbmVyYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9TZXJnZW4vR2VuZXJhdGVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnTGlzdENvbm5lY3Rpb25zJywgXHJcbiAgICAgICAgICAgICdMaXN0VGFibGVzJywgXHJcbiAgICAgICAgICAgICdHZW5lcmF0ZSdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlNlcmdlblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXJnZW5UYWJsZSB7XHJcbiAgICAgICAgVGFibGVuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIElkZW50aWZpZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25JdGVtIHtcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlVGV4dD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbVRleHQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgU291cmNlTGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUcmFuc2xhdGlvbkl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1VwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UcmFuc2xhdGlvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUcmFuc2xhdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBVc2VySW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZENvbmZpcm06IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFN1cHBsaWVySWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBQaG9uZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFkZHJlc3M6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVVzZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBVc2VyRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVtYWlsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzQgPSBzLkxvb2t1cEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShVc2VyRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VySW1hZ2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmRDb25maXJtJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvdXJjZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdXBwbGllcklkJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bob25lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FkZHJlc3MnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFVzZXJQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgR3JhbnRlZD86IGJvb2xlYW47XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNoYXJlZEFkbWluJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTaGFyZWRBZG1pbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNoYXJlZEFkbWluJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTaGFyZWRBZG1pbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25JZCA9IFwiVXNlclBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIEdyYW50ZWQgPSBcIkdyYW50ZWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJQZXJtaXNzaW9uUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RSb2xlUGVybWlzc2lvbnMocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RQZXJtaXNzaW9uS2V5cyhyZXF1ZXN0OiBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0XCIsXHJcbiAgICAgICAgICAgIExpc3RSb2xlUGVybWlzc2lvbnMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RSb2xlUGVybWlzc2lvbnNcIixcclxuICAgICAgICAgICAgTGlzdFBlcm1pc3Npb25LZXlzID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0UGVybWlzc2lvbktleXNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdMaXN0Um9sZVBlcm1pc3Npb25zJywgXHJcbiAgICAgICAgICAgICdMaXN0UGVybWlzc2lvbktleXMnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBVc2VyUGVybWlzc2lvblJvd1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVMaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8bnVtYmVyPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBVc2VyUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJSb2xlSWQgPSBcIlVzZXJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJSb2xlVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJSb2xlTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogVXNlclJvbGVMaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUm9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVzPzogbnVtYmVyW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRIYXNoPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkU2FsdD86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBVc2VySW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZT86IHN0cmluZztcclxuICAgICAgICBJc0FjdGl2ZT86IG51bWJlcjtcclxuICAgICAgICBTdXBwbGllcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFN1cHBsaWVyTmFtZT86IHN0cmluZztcclxuICAgICAgICBQaG9uZT86IHN0cmluZztcclxuICAgICAgICBBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybT86IHN0cmluZztcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlzQWN0aXZlUHJvcGVydHkgPSAnSXNBY3RpdmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVXNlcm5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxVc2VyUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxVc2VyUm93PignQWRtaW5pc3RyYXRpb24uVXNlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpBZG1pbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2hhcmVkQWRtaW4nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpVc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpVc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgU291cmNlID0gXCJTb3VyY2VcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRIYXNoID0gXCJQYXNzd29yZEhhc2hcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRTYWx0ID0gXCJQYXNzd29yZFNhbHRcIixcclxuICAgICAgICAgICAgRGlzcGxheU5hbWUgPSBcIkRpc3BsYXlOYW1lXCIsXHJcbiAgICAgICAgICAgIEVtYWlsID0gXCJFbWFpbFwiLFxyXG4gICAgICAgICAgICBVc2VySW1hZ2UgPSBcIlVzZXJJbWFnZVwiLFxyXG4gICAgICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlID0gXCJMYXN0RGlyZWN0b3J5VXBkYXRlXCIsXHJcbiAgICAgICAgICAgIElzQWN0aXZlID0gXCJJc0FjdGl2ZVwiLFxyXG4gICAgICAgICAgICBTdXBwbGllcklkID0gXCJTdXBwbGllcklkXCIsXHJcbiAgICAgICAgICAgIFN1cHBsaWVyTmFtZSA9IFwiU3VwcGxpZXJOYW1lXCIsXHJcbiAgICAgICAgICAgIFBob25lID0gXCJQaG9uZVwiLFxyXG4gICAgICAgICAgICBBZGRyZXNzID0gXCJBZGRyZXNzXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkID0gXCJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZENvbmZpcm0gPSBcIlBhc3N3b3JkQ29uZmlybVwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVbmRlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5VbmRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuVW5kZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9EZWxldGVcIixcclxuICAgICAgICAgICAgVW5kZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVW5kZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1VuZGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFByZWZlcmVuY2VUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUHJlZmVyZW5jZVJldHJpZXZlUmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2Uge1xyXG4gICAgICAgIFZhbHVlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclByZWZlcmVuY2VSb3cge1xyXG4gICAgICAgIFVzZXJQcmVmZXJlbmNlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFByZWZlcmVuY2VUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVmFsdWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUHJlZmVyZW5jZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlclByZWZlcmVuY2VJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0NvbW1vbi5Vc2VyUHJlZmVyZW5jZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclByZWZlcmVuY2VJZCA9IFwiVXNlclByZWZlcmVuY2VJZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBQcmVmZXJlbmNlVHlwZSA9IFwiUHJlZmVyZW5jZVR5cGVcIixcclxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZSA9IFwiVmFsdWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclByZWZlcmVuY2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdDb21tb24vVXNlclByZWZlcmVuY2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclByZWZlcmVuY2VVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFVzZXJQcmVmZXJlbmNlUmV0cmlldmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkNvbW1vbi9Vc2VyUHJlZmVyZW5jZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkNvbW1vbi9Vc2VyUHJlZmVyZW5jZS9SZXRyaWV2ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJ1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclByZWZlcmVuY2VTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQcmVmZXJlbmNlVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBQcmVmZXJlbmNlVHlwZT86IHN0cmluZztcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFZhbHVlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFeGNlbEltcG9ydFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRmlsZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEV4Y2VsSW1wb3J0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2Uge1xyXG4gICAgICAgIEluc2VydGVkPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRXJyb3JMaXN0Pzogc3RyaW5nW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdldE5leHROdW1iZXJSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFByZWZpeD86IHN0cmluZztcclxuICAgICAgICBMZW5ndGg/OiBudW1iZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdldE5leHROdW1iZXJSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSB7XHJcbiAgICAgICAgTnVtYmVyPzogbnVtYmVyO1xyXG4gICAgICAgIFNlcmlhbD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5Rm9ybSB7XHJcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yeUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0ludmVudG9yeS5DYXRlZ29yeSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2F0ZWdvcnlGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENhdGVnb3J5Rm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeVJvdyB7XHJcbiAgICAgICAgQ2F0ZWdvcnlJZD86IG51bWJlcjtcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnRVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2F0ZWdvcnlSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0NhdGVnb3J5SWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdJbnZlbnRvcnkuQ2F0ZWdvcnknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnSW52ZW50b3J5LkNhdGVnb3J5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxDYXRlZ29yeVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Q2F0ZWdvcnlSb3c+KCdJbnZlbnRvcnkuQ2F0ZWdvcnknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246QWRtaW4nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1VzZXI6U3VwcGxpZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpVc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpBZG1pbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgQ2F0ZWdvcnlJZCA9IFwiQ2F0ZWdvcnlJZFwiLFxyXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJuYW1lID0gXCJVcGRhdGVVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJuYW1lID0gXCJJbnNlcnRVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENhdGVnb3J5U2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnSW52ZW50b3J5L0NhdGVnb3J5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENhdGVnb3J5Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2F0ZWdvcnlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q2F0ZWdvcnlSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Q2F0ZWdvcnlSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiSW52ZW50b3J5L0NhdGVnb3J5L0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkludmVudG9yeS9DYXRlZ29yeS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJJbnZlbnRvcnkvQ2F0ZWdvcnkvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJJbnZlbnRvcnkvQ2F0ZWdvcnkvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiSW52ZW50b3J5L0NhdGVnb3J5L0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5DYXRlZ29yeVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJGb3JtIHtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsRWRpdG9yO1xyXG4gICAgICAgIFVzZXJJbWFnZTogU2VyZW5pdHkuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybTogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgU291cmNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3VwcGxpZXJJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIFBob25lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQWRkcmVzczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDdXN0b21lckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0ludmVudG9yeS5DdXN0b21lcic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ3VzdG9tZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDdXN0b21lckZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5Mb29rdXBFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ3VzdG9tZXJGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJJbWFnZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZENvbmZpcm0nLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnU291cmNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1cHBsaWVySWQnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnUGhvbmUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQWRkcmVzcycsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJSb3cge1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRIYXNoPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkU2FsdD86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBVc2VySW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZT86IHN0cmluZztcclxuICAgICAgICBJc0FjdGl2ZT86IG51bWJlcjtcclxuICAgICAgICBTdXBwbGllcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFN1cHBsaWVyTmFtZT86IHN0cmluZztcclxuICAgICAgICBQaG9uZT86IHN0cmluZztcclxuICAgICAgICBBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybT86IHN0cmluZztcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEN1c3RvbWVyUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VySWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpc0FjdGl2ZVByb3BlcnR5ID0gJ0lzQWN0aXZlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1VzZXJuYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0ludmVudG9yeS5DdXN0b21lcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdJbnZlbnRvcnkuQ3VzdG9tZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPEN1c3RvbWVyUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxDdXN0b21lclJvdz4oJ0ludmVudG9yeS5DdXN0b21lcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246QWRtaW4nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdVc2VyOkN1c3RvbWVyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdVc2VyOkN1c3RvbWVyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgU291cmNlID0gXCJTb3VyY2VcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRIYXNoID0gXCJQYXNzd29yZEhhc2hcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRTYWx0ID0gXCJQYXNzd29yZFNhbHRcIixcclxuICAgICAgICAgICAgRGlzcGxheU5hbWUgPSBcIkRpc3BsYXlOYW1lXCIsXHJcbiAgICAgICAgICAgIEVtYWlsID0gXCJFbWFpbFwiLFxyXG4gICAgICAgICAgICBVc2VySW1hZ2UgPSBcIlVzZXJJbWFnZVwiLFxyXG4gICAgICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlID0gXCJMYXN0RGlyZWN0b3J5VXBkYXRlXCIsXHJcbiAgICAgICAgICAgIElzQWN0aXZlID0gXCJJc0FjdGl2ZVwiLFxyXG4gICAgICAgICAgICBTdXBwbGllcklkID0gXCJTdXBwbGllcklkXCIsXHJcbiAgICAgICAgICAgIFN1cHBsaWVyTmFtZSA9IFwiU3VwcGxpZXJOYW1lXCIsXHJcbiAgICAgICAgICAgIFBob25lID0gXCJQaG9uZVwiLFxyXG4gICAgICAgICAgICBBZGRyZXNzID0gXCJBZGRyZXNzXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkID0gXCJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZENvbmZpcm0gPSBcIlBhc3N3b3JkQ29uZmlybVwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tZXJTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdJbnZlbnRvcnkvQ3VzdG9tZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q3VzdG9tZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDdXN0b21lclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxDdXN0b21lclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDdXN0b21lclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJJbnZlbnRvcnkvQ3VzdG9tZXIvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiSW52ZW50b3J5L0N1c3RvbWVyL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkludmVudG9yeS9DdXN0b21lci9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkludmVudG9yeS9DdXN0b21lci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJJbnZlbnRvcnkvQ3VzdG9tZXIvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkN1c3RvbWVyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBPcmRlckl0ZW1Gb3JtIHtcclxuICAgICAgICBQcm9kdWN0SWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBRdWFudGl0eTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVbml0UHJpY2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE9yZGVySXRlbUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0ludmVudG9yeS5PcmRlckl0ZW0nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIU9yZGVySXRlbUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIE9yZGVySXRlbUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EZWNpbWFsRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE9yZGVySXRlbUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1F1YW50aXR5JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VuaXRQcmljZScsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJJdGVtUm93IHtcclxuICAgICAgICBPcmRlckl0ZW1JZD86IG51bWJlcjtcclxuICAgICAgICBQdXJjaGFzZU9yZGVySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUHJvZHVjdElkPzogbnVtYmVyO1xyXG4gICAgICAgIFF1YW50aXR5PzogbnVtYmVyO1xyXG4gICAgICAgIFVuaXRQcmljZT86IG51bWJlcjtcclxuICAgICAgICBEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFB1cmNoYXNlT3JkZXJBbW91bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgUHVyY2hhc2VPcmRlckRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUHJvZHVjdE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUHJvZHVjdFF1YW50aXR5PzogbnVtYmVyO1xyXG4gICAgICAgIFByb2R1Y3RVbml0Pzogc3RyaW5nO1xyXG4gICAgICAgIFByb2R1Y3RQcmljZT86IG51bWJlcjtcclxuICAgICAgICBQcm9kdWN0U3VwcGxpZXJJZD86IG51bWJlcjtcclxuICAgICAgICBQcm9kdWN0Q2F0ZWdvcnlJZD86IG51bWJlcjtcclxuICAgICAgICBQcm9kdWN0UHJpbWFyeUltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIExpbmVUb3RhbD86IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE9yZGVySXRlbVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT3JkZXJJdGVtSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnSW52ZW50b3J5Lk9yZGVySXRlbSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246QWRtaW4nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1VzZXI6Q3VzdG9tZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpVc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpBZG1pbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT3JkZXJJdGVtSWQgPSBcIk9yZGVySXRlbUlkXCIsXHJcbiAgICAgICAgICAgIFB1cmNoYXNlT3JkZXJJZCA9IFwiUHVyY2hhc2VPcmRlcklkXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RJZCA9IFwiUHJvZHVjdElkXCIsXHJcbiAgICAgICAgICAgIFF1YW50aXR5ID0gXCJRdWFudGl0eVwiLFxyXG4gICAgICAgICAgICBVbml0UHJpY2UgPSBcIlVuaXRQcmljZVwiLFxyXG4gICAgICAgICAgICBEYXRlID0gXCJEYXRlXCIsXHJcbiAgICAgICAgICAgIFB1cmNoYXNlT3JkZXJBbW91bnQgPSBcIlB1cmNoYXNlT3JkZXJBbW91bnRcIixcclxuICAgICAgICAgICAgUHVyY2hhc2VPcmRlckRhdGUgPSBcIlB1cmNoYXNlT3JkZXJEYXRlXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3ROYW1lID0gXCJQcm9kdWN0TmFtZVwiLFxyXG4gICAgICAgICAgICBQcm9kdWN0UXVhbnRpdHkgPSBcIlByb2R1Y3RRdWFudGl0eVwiLFxyXG4gICAgICAgICAgICBQcm9kdWN0VW5pdCA9IFwiUHJvZHVjdFVuaXRcIixcclxuICAgICAgICAgICAgUHJvZHVjdFByaWNlID0gXCJQcm9kdWN0UHJpY2VcIixcclxuICAgICAgICAgICAgUHJvZHVjdFN1cHBsaWVySWQgPSBcIlByb2R1Y3RTdXBwbGllcklkXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RDYXRlZ29yeUlkID0gXCJQcm9kdWN0Q2F0ZWdvcnlJZFwiLFxyXG4gICAgICAgICAgICBQcm9kdWN0UHJpbWFyeUltYWdlID0gXCJQcm9kdWN0UHJpbWFyeUltYWdlXCIsXHJcbiAgICAgICAgICAgIExpbmVUb3RhbCA9IFwiTGluZVRvdGFsXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIE9yZGVySXRlbVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0ludmVudG9yeS9PcmRlckl0ZW0nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8T3JkZXJJdGVtUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8T3JkZXJJdGVtUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPE9yZGVySXRlbVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxPcmRlckl0ZW1Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiSW52ZW50b3J5L09yZGVySXRlbS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJJbnZlbnRvcnkvT3JkZXJJdGVtL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkludmVudG9yeS9PcmRlckl0ZW0vRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJJbnZlbnRvcnkvT3JkZXJJdGVtL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkludmVudG9yeS9PcmRlckl0ZW0vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pk9yZGVySXRlbVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEZvcm0ge1xyXG4gICAgICAgIFByaW1hcnlJbWFnZTogU2VyZW5pdHkuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFF1YW50aXR5OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVuaXQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQcmljZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBDYXRlZ29yeUlkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgU3VwcGxpZXJJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0Rm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnSW52ZW50b3J5LlByb2R1Y3QnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVByb2R1Y3RGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0Rm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5Mb29rdXBFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHJvZHVjdEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUHJpbWFyeUltYWdlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUXVhbnRpdHknLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnVW5pdCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmljZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeUlkJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1cHBsaWVySWQnLCB3M1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RPcmRlckZvcm0ge1xyXG4gICAgICAgIFByb2R1Y3RJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIFN1cHBsaWVySWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBRdWFudGl0eTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBUb3RhbEFtb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBGdWxmaWxsZWQ6IFNlcmVuaXR5LkJvb2xlYW5FZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RPcmRlckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0ludmVudG9yeS5Qcm9kdWN0T3JkZXInO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVByb2R1Y3RPcmRlckZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFByb2R1Y3RPcmRlckZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5Cb29sZWFuRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFByb2R1Y3RPcmRlckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1cHBsaWVySWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUXVhbnRpdHknLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVG90YWxBbW91bnQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnRnVsZmlsbGVkJywgdzNcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0T3JkZXJSb3cge1xyXG4gICAgICAgIFByb2R1Y3RPcmRlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFByb2R1Y3RJZD86IG51bWJlcjtcclxuICAgICAgICBRdWFudGl0eT86IG51bWJlcjtcclxuICAgICAgICBUb3RhbEFtb3VudD86IG51bWJlcjtcclxuICAgICAgICBEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEZ1bGZpbGxlZD86IGJvb2xlYW47XHJcbiAgICAgICAgUHJvZHVjdE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUHJvZHVjdFF1YW50aXR5PzogbnVtYmVyO1xyXG4gICAgICAgIFByb2R1Y3RVbml0Pzogc3RyaW5nO1xyXG4gICAgICAgIFByb2R1Y3RQcmljZT86IG51bWJlcjtcclxuICAgICAgICBQcm9kdWN0U3VwcGxpZXJJZD86IG51bWJlcjtcclxuICAgICAgICBQcm9kdWN0Q2F0ZWdvcnlJZD86IG51bWJlcjtcclxuICAgICAgICBQcm9kdWN0UHJpbWFyeUltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1cHBsaWVySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgU3VwcGxpZXJOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUHJvZHVjdE9yZGVyUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdQcm9kdWN0T3JkZXJJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdJbnZlbnRvcnkuUHJvZHVjdE9yZGVyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0ludmVudG9yeS5Qcm9kdWN0T3JkZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFByb2R1Y3RPcmRlclJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8UHJvZHVjdE9yZGVyUm93PignSW52ZW50b3J5LlByb2R1Y3RPcmRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpBZG1pbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246QWRtaW4nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdVc2VyOlN1cHBsaWVyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpBZG1pbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUHJvZHVjdE9yZGVySWQgPSBcIlByb2R1Y3RPcmRlcklkXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RJZCA9IFwiUHJvZHVjdElkXCIsXHJcbiAgICAgICAgICAgIFF1YW50aXR5ID0gXCJRdWFudGl0eVwiLFxyXG4gICAgICAgICAgICBUb3RhbEFtb3VudCA9IFwiVG90YWxBbW91bnRcIixcclxuICAgICAgICAgICAgRGF0ZSA9IFwiRGF0ZVwiLFxyXG4gICAgICAgICAgICBGdWxmaWxsZWQgPSBcIkZ1bGZpbGxlZFwiLFxyXG4gICAgICAgICAgICBQcm9kdWN0TmFtZSA9IFwiUHJvZHVjdE5hbWVcIixcclxuICAgICAgICAgICAgUHJvZHVjdFF1YW50aXR5ID0gXCJQcm9kdWN0UXVhbnRpdHlcIixcclxuICAgICAgICAgICAgUHJvZHVjdFVuaXQgPSBcIlByb2R1Y3RVbml0XCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RQcmljZSA9IFwiUHJvZHVjdFByaWNlXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RTdXBwbGllcklkID0gXCJQcm9kdWN0U3VwcGxpZXJJZFwiLFxyXG4gICAgICAgICAgICBQcm9kdWN0Q2F0ZWdvcnlJZCA9IFwiUHJvZHVjdENhdGVnb3J5SWRcIixcclxuICAgICAgICAgICAgUHJvZHVjdFByaW1hcnlJbWFnZSA9IFwiUHJvZHVjdFByaW1hcnlJbWFnZVwiLFxyXG4gICAgICAgICAgICBTdXBwbGllcklkID0gXCJTdXBwbGllcklkXCIsXHJcbiAgICAgICAgICAgIFN1cHBsaWVyTmFtZSA9IFwiU3VwcGxpZXJOYW1lXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJuYW1lID0gXCJVcGRhdGVVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFByb2R1Y3RPcmRlclNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0ludmVudG9yeS9Qcm9kdWN0T3JkZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UHJvZHVjdE9yZGVyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UHJvZHVjdE9yZGVyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFByb2R1Y3RPcmRlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxQcm9kdWN0T3JkZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiSW52ZW50b3J5L1Byb2R1Y3RPcmRlci9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJJbnZlbnRvcnkvUHJvZHVjdE9yZGVyL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkludmVudG9yeS9Qcm9kdWN0T3JkZXIvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJJbnZlbnRvcnkvUHJvZHVjdE9yZGVyL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkludmVudG9yeS9Qcm9kdWN0T3JkZXIvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlByb2R1Y3RPcmRlclNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFJvdyB7XHJcbiAgICAgICAgUHJvZHVjdElkPzogbnVtYmVyO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUXVhbnRpdHk/OiBudW1iZXI7XHJcbiAgICAgICAgVW5pdD86IHN0cmluZztcclxuICAgICAgICBQcmljZT86IG51bWJlcjtcclxuICAgICAgICBDYXRlZ29yeUlkPzogbnVtYmVyO1xyXG4gICAgICAgIENhdGVnb3J5TmFtZT86IHN0cmluZztcclxuICAgICAgICBTdXBwbGllcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFN1cHBsaWVyTmFtZT86IHN0cmluZztcclxuICAgICAgICBQcmltYXJ5SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIEluc2VydFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQcm9kdWN0Um93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdQcm9kdWN0SWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdJbnZlbnRvcnkuUHJvZHVjdCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdJbnZlbnRvcnkuUHJvZHVjdCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8UHJvZHVjdFJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8UHJvZHVjdFJvdz4oJ0ludmVudG9yeS5Qcm9kdWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkFkbWluJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdVc2VyOlN1cHBsaWVyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VXNlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnVXNlcjpTdXBwbGllcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUHJvZHVjdElkID0gXCJQcm9kdWN0SWRcIixcclxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICBRdWFudGl0eSA9IFwiUXVhbnRpdHlcIixcclxuICAgICAgICAgICAgVW5pdCA9IFwiVW5pdFwiLFxyXG4gICAgICAgICAgICBQcmljZSA9IFwiUHJpY2VcIixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlJZCA9IFwiQ2F0ZWdvcnlJZFwiLFxyXG4gICAgICAgICAgICBDYXRlZ29yeU5hbWUgPSBcIkNhdGVnb3J5TmFtZVwiLFxyXG4gICAgICAgICAgICBTdXBwbGllcklkID0gXCJTdXBwbGllcklkXCIsXHJcbiAgICAgICAgICAgIFN1cHBsaWVyTmFtZSA9IFwiU3VwcGxpZXJOYW1lXCIsXHJcbiAgICAgICAgICAgIFByaW1hcnlJbWFnZSA9IFwiUHJpbWFyeUltYWdlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJuYW1lID0gXCJVcGRhdGVVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJuYW1lID0gXCJJbnNlcnRVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFByb2R1Y3RTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdJbnZlbnRvcnkvUHJvZHVjdCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQcm9kdWN0Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UHJvZHVjdFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQcm9kdWN0Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFByb2R1Y3RSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiSW52ZW50b3J5L1Byb2R1Y3QvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiSW52ZW50b3J5L1Byb2R1Y3QvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiSW52ZW50b3J5L1Byb2R1Y3QvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJJbnZlbnRvcnkvUHJvZHVjdC9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJJbnZlbnRvcnkvUHJvZHVjdC9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UHJvZHVjdFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VPcmRlckZvcm0ge1xyXG4gICAgICAgIEN1c3RvbWVySWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgSXRlbUxpc3Q6IE9yZGVySXRlbXNFZGl0b3I7XHJcbiAgICAgICAgU2hpcHBlZERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgU2hpcHBlZDogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcclxuICAgICAgICBEZXN0aW5hdGlvbkFkZHJlc3M6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDdXN0b21lckFkZHJlc3M6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0ludmVudG9yeS5QdXJjaGFzZU9yZGVyJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQdXJjaGFzZU9yZGVyRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUHVyY2hhc2VPcmRlckZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gT3JkZXJJdGVtc0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NCA9IHMuQm9vbGVhbkVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NSA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFB1cmNoYXNlT3JkZXJGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0N1c3RvbWVySWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQW1vdW50JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0l0ZW1MaXN0JywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NoaXBwZWREYXRlJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NoaXBwZWQnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzdGluYXRpb25BZGRyZXNzJywgdzUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0N1c3RvbWVyQWRkcmVzcycsIHc1XHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VPcmRlckxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlcXVlc3Qge1xyXG4gICAgICAgIFByb2R1Y3RJZD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VPcmRlclJvdyB7XHJcbiAgICAgICAgUHVyY2hhc2VPcmRlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIEN1c3RvbWVySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQW1vdW50PzogbnVtYmVyO1xyXG4gICAgICAgIERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEl0ZW1MaXN0PzogT3JkZXJJdGVtUm93W107XHJcbiAgICAgICAgRGVzdGluYXRpb25BZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyQWRkcmVzcz86IHN0cmluZztcclxuICAgICAgICBTaGlwcGVkRGF0ZT86IHN0cmluZztcclxuICAgICAgICBTaGlwcGVkPzogYm9vbGVhbjtcclxuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1B1cmNoYXNlT3JkZXJJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdJbnZlbnRvcnkuUHVyY2hhc2VPcmRlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246QWRtaW4nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1VzZXI6Q3VzdG9tZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdVc2VyOkN1c3RvbWVyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpBZG1pbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUHVyY2hhc2VPcmRlcklkID0gXCJQdXJjaGFzZU9yZGVySWRcIixcclxuICAgICAgICAgICAgQ3VzdG9tZXJJZCA9IFwiQ3VzdG9tZXJJZFwiLFxyXG4gICAgICAgICAgICBBbW91bnQgPSBcIkFtb3VudFwiLFxyXG4gICAgICAgICAgICBEYXRlID0gXCJEYXRlXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyTmFtZSA9IFwiQ3VzdG9tZXJOYW1lXCIsXHJcbiAgICAgICAgICAgIEl0ZW1MaXN0ID0gXCJJdGVtTGlzdFwiLFxyXG4gICAgICAgICAgICBEZXN0aW5hdGlvbkFkZHJlc3MgPSBcIkRlc3RpbmF0aW9uQWRkcmVzc1wiLFxyXG4gICAgICAgICAgICBDdXN0b21lckFkZHJlc3MgPSBcIkN1c3RvbWVyQWRkcmVzc1wiLFxyXG4gICAgICAgICAgICBTaGlwcGVkRGF0ZSA9IFwiU2hpcHBlZERhdGVcIixcclxuICAgICAgICAgICAgU2hpcHBlZCA9IFwiU2hpcHBlZFwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VybmFtZSA9IFwiVXBkYXRlVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQdXJjaGFzZU9yZGVyU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnSW52ZW50b3J5L1B1cmNoYXNlT3JkZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UHVyY2hhc2VPcmRlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFB1cmNoYXNlT3JkZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8UHVyY2hhc2VPcmRlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFB1cmNoYXNlT3JkZXJMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UHVyY2hhc2VPcmRlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJJbnZlbnRvcnkvUHVyY2hhc2VPcmRlci9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJJbnZlbnRvcnkvUHVyY2hhc2VPcmRlci9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJJbnZlbnRvcnkvUHVyY2hhc2VPcmRlci9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkludmVudG9yeS9QdXJjaGFzZU9yZGVyL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkludmVudG9yeS9QdXJjaGFzZU9yZGVyL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5QdXJjaGFzZU9yZGVyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTdXBwbGllckZvcm0ge1xyXG4gICAgICAgIFByaW1hcnlJbWFnZTogU2VyZW5pdHkuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBob25lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQWRkcmVzczogU2VyZW5pdHkuVGV4dEFyZWFFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFN1cHBsaWVyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnSW52ZW50b3J5LlN1cHBsaWVyJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTdXBwbGllckZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFN1cHBsaWVyRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5UZXh0QXJlYUVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShTdXBwbGllckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUHJpbWFyeUltYWdlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUGhvbmUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQWRkcmVzcycsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU3VwcGxpZXJSb3cge1xyXG4gICAgICAgIFN1cHBsaWVySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTmFtZT86IHN0cmluZztcclxuICAgICAgICBQaG9uZT86IHN0cmluZztcclxuICAgICAgICBBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgICAgIFByaW1hcnlJbWFnZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0VXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFN1cHBsaWVyUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdTdXBwbGllcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnSW52ZW50b3J5LlN1cHBsaWVyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0ludmVudG9yeS5TdXBwbGllcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8U3VwcGxpZXJSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFN1cHBsaWVyUm93PignSW52ZW50b3J5LlN1cHBsaWVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkFkbWluJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpBZG1pbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlVzZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1VzZXI6U3VwcGxpZXJzQWRtJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBTdXBwbGllcklkID0gXCJTdXBwbGllcklkXCIsXHJcbiAgICAgICAgICAgIE5hbWUgPSBcIk5hbWVcIixcclxuICAgICAgICAgICAgUGhvbmUgPSBcIlBob25lXCIsXHJcbiAgICAgICAgICAgIEFkZHJlc3MgPSBcIkFkZHJlc3NcIixcclxuICAgICAgICAgICAgUHJpbWFyeUltYWdlID0gXCJQcmltYXJ5SW1hZ2VcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlcm5hbWUgPSBcIlVwZGF0ZVVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIixcclxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcclxuICAgICAgICAgICAgSW5zZXJ0VXNlcm5hbWUgPSBcIkluc2VydFVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgU3VwcGxpZXJTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdJbnZlbnRvcnkvU3VwcGxpZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8U3VwcGxpZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxTdXBwbGllclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxTdXBwbGllclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxTdXBwbGllclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJJbnZlbnRvcnkvU3VwcGxpZXIvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiSW52ZW50b3J5L1N1cHBsaWVyL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkludmVudG9yeS9TdXBwbGllci9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkludmVudG9yeS9TdXBwbGllci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJJbnZlbnRvcnkvU3VwcGxpZXIvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlN1cHBsaWVyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBPbGRQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2hhbmdlUGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ09sZFBhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENoYW5nZVBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBPbGRQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBOZXdQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRm9yZ290UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuRW1haWxFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRm9yZ290UGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2luRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Mb2dpbic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTG9naW5Gb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBMb2dpbkZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMb2dpbkZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSZXNldFBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUmVzZXRQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUmVzZXRQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVG9rZW4/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcEZvcm0ge1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1FbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuU2lnblVwJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTaWduVXBGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTaWduVXBGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFNpZ25VcEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybUVtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjcmlwdFVzZXJEZWZpbml0aW9uIHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBJc0FkbWluPzogYm9vbGVhbjtcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuVGV4dHMge1xyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIERiIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1cHBsaWVySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVBlcm1pc3Npb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVHJhbnNsYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbVRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbnRpdHlQbHVyYWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBLZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPdmVycmlkZUNvbmZpcm1hdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVDaGFuZ2VzQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0TGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc0FjdGl2ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3REaXJlY3RvcnlVcGRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkQ29uZmlybTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkSGFzaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkU2FsdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBob25lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VwcGxpZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1cHBsaWVyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySW1hZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50ZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJQZXJtaXNzaW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIENvbW1vbiB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclByZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcmVmZXJlbmNlVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJQcmVmZXJlbmNlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWYWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgSW52ZW50b3J5IHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2F0ZWdvcnlJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEN1c3RvbWVyIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc0FjdGl2ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3REaXJlY3RvcnlVcGRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkQ29uZmlybTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkSGFzaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkU2FsdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBob25lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VwcGxpZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1cHBsaWVyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySW1hZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgT3JkZXJJdGVtIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGluZVRvdGFsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJJdGVtSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0Q2F0ZWdvcnlJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdFByaWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdFByaW1hcnlJbWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RRdWFudGl0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RTdXBwbGllcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdFVuaXQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU9yZGVyQW1vdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHVyY2hhc2VPcmRlckRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU9yZGVySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBRdWFudGl0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVuaXRQcmljZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2F0ZWdvcnlJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcmljZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByaW1hcnlJbWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFF1YW50aXR5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VwcGxpZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1cHBsaWVyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVuaXQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFByb2R1Y3RPcmRlciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZ1bGZpbGxlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RDYXRlZ29yeUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0T3JkZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RQcmljZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RQcmltYXJ5SW1hZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0UXVhbnRpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0U3VwcGxpZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RVbml0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUXVhbnRpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdXBwbGllcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VwcGxpZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG90YWxBbW91bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXIge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFtb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzdGluYXRpb25BZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXRlbUxpc3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU9yZGVySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaGlwcGVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hpcHBlZERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFN1cHBsaWVyIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBob25lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJpbWFyeUltYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VwcGxpZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIEZvcm1zIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIE1lbWJlcnNoaXAge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENoYW5nZVBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBGb3Jnb3RQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtSW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIExvZ2luIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGYWNlYm9va0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR29vZ2xlQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT1I6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZW1lbWJlck1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnbkluQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnblVwQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSZXNldFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsU3ViamVjdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFNpZ25VcCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWNjZXB0VGVybXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY3RpdmF0ZUVtYWlsU3ViamVjdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1FbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtSW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFNpdGUge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWNjZXNzRGVuaWVkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9DaGFuZ2VVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhY2tQZXJtaXNzaW9uczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90TG9nZ2VkSW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhZ2VUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJhc2ljUHJvZ3Jlc3NEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FuY2VsVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBsZWFzZVdhaXQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBCdWxrU2VydmljZUFjdGlvbiB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbFN1Y2Nlc3NGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvbkZvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRXJyb3JDb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90aGluZ1RvUHJvY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU29tZUhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzc0NvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgRGFzaGJvYXJkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbnRlbnREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIExheW91dCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJDb3B5cmlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckluZm86IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlclJpZ2h0czogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR2VuZXJhbFNldHRpbmdzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2s6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2tMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbkxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUmVkTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVllbGxvd0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlckRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0UGVybWlzc2lvbnNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRSb2xlc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUmV2b2tlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJSb2xlRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFZhbGlkYXRpb25FcnJvciB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBWYWxpZGF0aW9uIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25FcnJvcjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDYW50RmluZFVzZXJXaXRoRW1haWw6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRGVsZXRlRm9yZWlnbktleUVycm9yOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsQ29uZmlybTogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbEluVXNlOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEludmFsaWRBY3RpdmF0ZVRva2VuOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEludmFsaWRSZXNldFRva2VuOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVByaW1hcnlLZXlFcnJvcjogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIFNlcmVuZV9XZWJfQXBwWydUZXh0cyddID0gUS5wcm94eVRleHRzKFRleHRzLCAnJywge0RiOntBZG1pbmlzdHJhdGlvbjp7TGFuZ3VhZ2U6e0lkOjEsTGFuZ3VhZ2VJZDoxLExhbmd1YWdlTmFtZToxfSxSb2xlOntSb2xlSWQ6MSxSb2xlTmFtZToxLFN1cHBsaWVySWQ6MX0sUm9sZVBlcm1pc3Npb246e1Blcm1pc3Npb25LZXk6MSxSb2xlSWQ6MSxSb2xlUGVybWlzc2lvbklkOjEsUm9sZVJvbGVOYW1lOjF9LFRyYW5zbGF0aW9uOntDdXN0b21UZXh0OjEsRW50aXR5UGx1cmFsOjEsS2V5OjEsT3ZlcnJpZGVDb25maXJtYXRpb246MSxTYXZlQ2hhbmdlc0J1dHRvbjoxLFNvdXJjZUxhbmd1YWdlOjEsU291cmNlVGV4dDoxLFRhcmdldExhbmd1YWdlOjEsVGFyZ2V0VGV4dDoxfSxVc2VyOntBZGRyZXNzOjEsRGlzcGxheU5hbWU6MSxFbWFpbDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLExhc3REaXJlY3RvcnlVcGRhdGU6MSxQYXNzd29yZDoxLFBhc3N3b3JkQ29uZmlybToxLFBhc3N3b3JkSGFzaDoxLFBhc3N3b3JkU2FsdDoxLFBob25lOjEsU291cmNlOjEsU3VwcGxpZXJJZDoxLFN1cHBsaWVyTmFtZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MSxVc2VySWQ6MSxVc2VySW1hZ2U6MSxVc2VybmFtZToxfSxVc2VyUGVybWlzc2lvbjp7R3JhbnRlZDoxLFBlcm1pc3Npb25LZXk6MSxVc2VyOjEsVXNlcklkOjEsVXNlclBlcm1pc3Npb25JZDoxLFVzZXJuYW1lOjF9LFVzZXJSb2xlOntSb2xlSWQ6MSxVc2VyOjEsVXNlcklkOjEsVXNlclJvbGVJZDoxLFVzZXJuYW1lOjF9fSxDb21tb246e1VzZXJQcmVmZXJlbmNlOntOYW1lOjEsUHJlZmVyZW5jZVR5cGU6MSxVc2VySWQ6MSxVc2VyUHJlZmVyZW5jZUlkOjEsVmFsdWU6MX19LEludmVudG9yeTp7Q2F0ZWdvcnk6e0NhdGVnb3J5SWQ6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSW5zZXJ0VXNlcm5hbWU6MSxOYW1lOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxLFVwZGF0ZVVzZXJuYW1lOjF9LEN1c3RvbWVyOntBZGRyZXNzOjEsRGlzcGxheU5hbWU6MSxFbWFpbDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLExhc3REaXJlY3RvcnlVcGRhdGU6MSxQYXNzd29yZDoxLFBhc3N3b3JkQ29uZmlybToxLFBhc3N3b3JkSGFzaDoxLFBhc3N3b3JkU2FsdDoxLFBob25lOjEsU291cmNlOjEsU3VwcGxpZXJJZDoxLFN1cHBsaWVyTmFtZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MSxVc2VySWQ6MSxVc2VySW1hZ2U6MSxVc2VybmFtZToxfSxPcmRlckl0ZW06e0RhdGU6MSxMaW5lVG90YWw6MSxPcmRlckl0ZW1JZDoxLFByb2R1Y3RDYXRlZ29yeUlkOjEsUHJvZHVjdElkOjEsUHJvZHVjdE5hbWU6MSxQcm9kdWN0UHJpY2U6MSxQcm9kdWN0UHJpbWFyeUltYWdlOjEsUHJvZHVjdFF1YW50aXR5OjEsUHJvZHVjdFN1cHBsaWVySWQ6MSxQcm9kdWN0VW5pdDoxLFB1cmNoYXNlT3JkZXJBbW91bnQ6MSxQdXJjaGFzZU9yZGVyRGF0ZToxLFB1cmNoYXNlT3JkZXJJZDoxLFF1YW50aXR5OjEsVW5pdFByaWNlOjF9LFByb2R1Y3Q6e0NhdGVnb3J5SWQ6MSxDYXRlZ29yeU5hbWU6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSW5zZXJ0VXNlcm5hbWU6MSxOYW1lOjEsUHJpY2U6MSxQcmltYXJ5SW1hZ2U6MSxQcm9kdWN0SWQ6MSxRdWFudGl0eToxLFN1cHBsaWVySWQ6MSxTdXBwbGllck5hbWU6MSxVbml0OjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxLFVwZGF0ZVVzZXJuYW1lOjF9LFByb2R1Y3RPcmRlcjp7RGF0ZToxLEZ1bGZpbGxlZDoxLFByb2R1Y3RDYXRlZ29yeUlkOjEsUHJvZHVjdElkOjEsUHJvZHVjdE5hbWU6MSxQcm9kdWN0T3JkZXJJZDoxLFByb2R1Y3RQcmljZToxLFByb2R1Y3RQcmltYXJ5SW1hZ2U6MSxQcm9kdWN0UXVhbnRpdHk6MSxQcm9kdWN0U3VwcGxpZXJJZDoxLFByb2R1Y3RVbml0OjEsUXVhbnRpdHk6MSxTdXBwbGllcklkOjEsU3VwcGxpZXJOYW1lOjEsVG90YWxBbW91bnQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXBkYXRlVXNlcm5hbWU6MX0sUHVyY2hhc2VPcmRlcjp7QW1vdW50OjEsQ3VzdG9tZXJBZGRyZXNzOjEsQ3VzdG9tZXJJZDoxLEN1c3RvbWVyTmFtZToxLERhdGU6MSxEZXN0aW5hdGlvbkFkZHJlc3M6MSxJdGVtTGlzdDoxLFB1cmNoYXNlT3JkZXJJZDoxLFNoaXBwZWQ6MSxTaGlwcGVkRGF0ZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MSxVcGRhdGVVc2VybmFtZToxfSxTdXBwbGllcjp7QWRkcmVzczoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJbnNlcnRVc2VybmFtZToxLE5hbWU6MSxQaG9uZToxLFByaW1hcnlJbWFnZToxLFN1cHBsaWVySWQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXBkYXRlVXNlcm5hbWU6MX19fSxGb3Jtczp7TWVtYmVyc2hpcDp7Q2hhbmdlUGFzc3dvcmQ6e0Zvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sRm9yZ290UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LExvZ2luOntGYWNlYm9va0J1dHRvbjoxLEZvcmdvdFBhc3N3b3JkOjEsRm9ybVRpdGxlOjEsR29vZ2xlQnV0dG9uOjEsT1I6MSxSZW1lbWJlck1lOjEsU2lnbkluQnV0dG9uOjEsU2lnblVwQnV0dG9uOjF9LFJlc2V0UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRW1haWxTdWJqZWN0OjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxTaWduVXA6e0FjY2VwdFRlcm1zOjEsQWN0aXZhdGVFbWFpbFN1YmplY3Q6MSxBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOjEsQmFja1RvTG9naW46MSxDb25maXJtRW1haWw6MSxDb25maXJtUGFzc3dvcmQ6MSxEaXNwbGF5TmFtZToxLEVtYWlsOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxQYXNzd29yZDoxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX19fSxTaXRlOntBY2Nlc3NEZW5pZWQ6e0NsaWNrVG9DaGFuZ2VVc2VyOjEsQ2xpY2tUb0xvZ2luOjEsTGFja1Blcm1pc3Npb25zOjEsTm90TG9nZ2VkSW46MSxQYWdlVGl0bGU6MX0sQmFzaWNQcm9ncmVzc0RpYWxvZzp7Q2FuY2VsVGl0bGU6MSxQbGVhc2VXYWl0OjF9LEJ1bGtTZXJ2aWNlQWN0aW9uOntBbGxIYWRFcnJvcnNGb3JtYXQ6MSxBbGxTdWNjZXNzRm9ybWF0OjEsQ29uZmlybWF0aW9uRm9ybWF0OjEsRXJyb3JDb3VudDoxLE5vdGhpbmdUb1Byb2Nlc3M6MSxTb21lSGFkRXJyb3JzRm9ybWF0OjEsU3VjY2Vzc0NvdW50OjF9LERhc2hib2FyZDp7Q29udGVudERlc2NyaXB0aW9uOjF9LExheW91dDp7Rm9vdGVyQ29weXJpZ2h0OjEsRm9vdGVySW5mbzoxLEZvb3RlclJpZ2h0czoxLEdlbmVyYWxTZXR0aW5nczoxLExhbmd1YWdlOjEsVGhlbWU6MSxUaGVtZUJsYWNrOjEsVGhlbWVCbGFja0xpZ2h0OjEsVGhlbWVCbHVlOjEsVGhlbWVCbHVlTGlnaHQ6MSxUaGVtZUdyZWVuOjEsVGhlbWVHcmVlbkxpZ2h0OjEsVGhlbWVQdXJwbGU6MSxUaGVtZVB1cnBsZUxpZ2h0OjEsVGhlbWVSZWQ6MSxUaGVtZVJlZExpZ2h0OjEsVGhlbWVZZWxsb3c6MSxUaGVtZVllbGxvd0xpZ2h0OjF9LFJvbGVQZXJtaXNzaW9uRGlhbG9nOntEaWFsb2dUaXRsZToxLEVkaXRCdXR0b246MSxTYXZlU3VjY2VzczoxfSxVc2VyRGlhbG9nOntFZGl0UGVybWlzc2lvbnNCdXR0b246MSxFZGl0Um9sZXNCdXR0b246MX0sVXNlclBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsR3JhbnQ6MSxQZXJtaXNzaW9uOjEsUmV2b2tlOjEsU2F2ZVN1Y2Nlc3M6MX0sVXNlclJvbGVEaWFsb2c6e0RpYWxvZ1RpdGxlOjEsU2F2ZVN1Y2Nlc3M6MX0sVmFsaWRhdGlvbkVycm9yOntUaXRsZToxfX0sVmFsaWRhdGlvbjp7QXV0aGVudGljYXRpb25FcnJvcjoxLENhbnRGaW5kVXNlcldpdGhFbWFpbDoxLEN1cnJlbnRQYXNzd29yZE1pc21hdGNoOjEsRGVsZXRlRm9yZWlnbktleUVycm9yOjEsRW1haWxDb25maXJtOjEsRW1haWxJblVzZToxLEludmFsaWRBY3RpdmF0ZVRva2VuOjEsSW52YWxpZFJlc2V0VG9rZW46MSxNaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoOjEsU2F2ZVByaW1hcnlLZXlFcnJvcjoxfX0pO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5XZWIuTW9kdWxlcy5JbnZlbnRvcnkge1xyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgUGVybWlzc2lvbktleXMge1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTGFuZ3VhZ2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTGFuZ3VhZ2VGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPExhbmd1YWdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTGFuZ3VhZ2VEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbTGFuZ3VhZ2VSb3cuRmllbGRzLkxhbmd1YWdlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUm9sZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJvbGVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRWRpdEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJvbGVQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZUlEOiB0aGlzLmVudGl0eS5Sb2xlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmVudGl0eS5Sb2xlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlJvbGVcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUm9sZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtSb2xlUm93LkZpZWxkcy5Sb2xlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4gKDxVc2VyUGVybWlzc2lvblJvdz57IFBlcm1pc3Npb25LZXk6IHggfSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4geC5QZXJtaXNzaW9uS2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICByb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJkZWNsYXJlIHZhciBWdWU7XHJcblxyXG5uYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmdlblBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZtID0gbmV3IFZ1ZSh7XHJcbiAgICAgICAgICAgICAgICBlbDogJCgnPGRpdi8+JykuYXBwZW5kVG8odGhpcy5lbGVtZW50KVswXSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgVUk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29kZTogZnVuY3Rpb24gKHRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFibGUuSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihcIklkZW50aWZpZXIgY2Fubm90IGJlIGVtcHR5IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YWJsZS5Nb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5RXJyb3IoXCJNb2R1bGUgY2Fubm90IGJlIGVtcHR5IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VyZ2VuU2VydmljZS5HZW5lcmF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0aW9uS2V5OiB0aGlzLmNvbm5lY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWJsZTogdGFibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0ZU9wdGlvbnM6IHRoaXMuZ2VuZXJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoXCJDb2RlIGZvciBzZWxlY3RlZCB0YWJsZSBpcyBnZW5lcmF0ZWQuIFlvdSdsbCBuZWVkIHRvIHJlYnVpbGQgeW91ciBwcm9qZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbCB8fCAhdmFsLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLnRhYmxlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJnZW5TZXJ2aWNlLkxpc3RUYWJsZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3Rpb25LZXk6IHZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4gdm0udGFibGVzID0gcmVzcG9uc2UuRW50aXRpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBRLmdldFRlbXBsYXRlKCdBZG1pbmlzdHJhdGlvbi5TZXJnZW5QYW5lbCcpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgU2VyZ2VuU2VydmljZS5MaXN0Q29ubmVjdGlvbnMoe30sIHJlc3BvbnNlID0+IHZtLmNvbm5lY3Rpb25zID0gcmVzcG9uc2UuRW50aXRpZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVHJhbnNsYXRpb25HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUcmFuc2xhdGlvbkl0ZW0sIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRyYW5zbGF0aW9uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQ2hhbmdlczogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHNvdXJjZUxhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7IFxyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleXVwLicgKyB0aGlzLnVuaXF1ZU5hbWUgKyAnIGNoYW5nZS4nICsgdGhpcy51bmlxdWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0LmN1c3RvbS10ZXh0JywgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBRLnRyaW1Ub051bGwoJChlLnRhcmdldCkudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRJdGVtQnlJZCgkKGUudGFyZ2V0KS5kYXRhKCdrZXknKSkuQ3VzdG9tVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgbGV0IGRvbmU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NvdXJjZS10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlNvdXJjZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uU291cmNlVGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCd0YXJnZXQtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlRhcmdldFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uVGFyZ2V0VGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW107XHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7IGZpZWxkOiAnS2V5Jywgd2lkdGg6IDMwMCwgc29ydGFibGU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnU291cmNlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb3VyY2UtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0N1c3RvbVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxpbnB1dC8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1c3RvbS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEta2V5JywgY3R4Lml0ZW0uS2V5KSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUYXJnZXRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3RhcmdldC10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb2t1cEtleTogJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNvdXJjZUxhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uVGFyZ2V0TGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlQ2hhbmdlcyhsYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZUxpa2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tpdGVtLktleV0gPSBpdGVtLkN1c3RvbVRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoVHJhbnNsYXRpb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYXJnZXRMYW5ndWFnZUlEOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIFRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zXHJcbiAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBRLnRyaW1Ub051bGwobGFuZ3VhZ2UpIHx8ICdpbnZhcmlhbnQnO1xyXG4gICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKCdVc2VyIHRyYW5zbGF0aW9ucyBpbiBcIicgKyBsYW5ndWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGxhbmd1YWdlIGFyZSBzYXZlZCB0byBcInVzZXIudGV4dHMuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgKyAnLmpzb25cIiAnICsgJ2ZpbGUgdW5kZXIgXCJ+L0FwcF9EYXRhL3RleHRzL1wiJywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy52aWV3LnBhcmFtcztcclxuICAgICAgICAgICAgcmVxdWVzdC5Tb3VyY2VMYW5ndWFnZUlEID0gdGhpcy5zb3VyY2VMYW5ndWFnZS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZUtleSA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2UudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFyZ2V0TGFuZ3VhZ2VJRCA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3U3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5TYXZlQ2hhbmdlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZSA9PiB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcHBseS1jaGFuZ2VzLWJ1dHRvbidcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAoZmllbGQsIHNlYXJjaFRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogVHJhbnNsYXRpb25JdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNkID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcztcclxuICAgICAgICAgICAgdmFyIHNlYXJjaGluZyA9IHNkKHRoaXMuc2VhcmNoVGV4dCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoaW5nKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUS5pc0VtcHR5T3JOdWxsKHNlYXJjaGluZykgfHwgbWF0Y2goaXRlbS5LZXkpIHx8IG1hdGNoKGl0ZW0uU291cmNlVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoKGl0ZW0uVGFyZ2V0VGV4dCkgfHwgbWF0Y2goaXRlbS5DdXN0b21UZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCgpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFVzZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBVc2VyUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgVXNlckZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8IDcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA3IGNoYXJhY3RlcnMhXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSAhPSB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlRoZSBwYXNzd29yZHMgZW50ZXJlZCBkb2Vzbid0IG1hdGNoIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKFJvbGVSb3cucmVhZFBlcm1pc3Npb24pKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0Um9sZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcm9sZXMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmEtdXNlcnMgdGV4dC1ibHVlJyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUm9sZURpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVudGl0eS5Vc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChBdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oVXNlclBlcm1pc3Npb25Sb3cucmVhZFBlcm1pc3Npb24pKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0UGVybWlzc2lvbnNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUGVybWlzc2lvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVudGl0eS5Vc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignZWRpdC1yb2xlcy1idXR0b24nKS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlc2UgZmllbGRzIGFyZSBvbmx5IHJlcXVpcmVkIGluIG5ldyByZWNvcmQgbW9kZVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0UHJvcGVydHlJdGVtcygpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gc3VwZXIuZ2V0UHJvcGVydHlJdGVtcygpO1xyXG4gICAgICAgICAgICBpZiAoIVEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKFwiQWRtaW5pc3RyYXRpb246VGVuYW50c1wiKSlcclxuICAgICAgICAgICAgICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKHggPT4geC5uYW1lICE9IFVzZXJSb3cuRmllbGRzLlN1cHBsaWVySWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VXNlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlVzZXJcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVXNlckRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElzQWN0aXZlUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlzQWN0aXZlUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVXNlclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFVzZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbVXNlclJvdy5GaWVsZHMuVXNlcm5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BdXRob3JpemF0aW9uIHtcclxuICAgIGV4cG9ydCBkZWNsYXJlIGxldCB1c2VyRGVmaW5pdGlvbjogU2NyaXB0VXNlckRlZmluaXRpb247XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGhvcml6YXRpb24sICd1c2VyRGVmaW5pdGlvbicsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0UmVtb3RlRGF0YSgnVXNlckRhdGEnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdWQgPSB1c2VyRGVmaW5pdGlvbjtcclxuICAgICAgICByZXR1cm4gdWQuVXNlcm5hbWUgPT09ICdhZG1pbicgfHwgISF1ZC5QZXJtaXNzaW9uc1twZXJtaXNzaW9uS2V5XTtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25DaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkRhdGFHcmlkPFBlcm1pc3Npb25DaGVja0l0ZW0sIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgYnlQYXJlbnRLZXk6IFEuR3JvdXBpbmc8UGVybWlzc2lvbkNoZWNrSXRlbT47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+ID0ge307XHJcbiAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uS2V5cyA9IHRoaXMuZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcGVybWlzc2lvbktleXMubWFwKGtleSA9PiA8UGVybWlzc2lvbkNoZWNrSXRlbT57XHJcbiAgICAgICAgICAgICAgICBLZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIFBhcmVudEtleTogdGhpcy5nZXRQYXJlbnRLZXkoa2V5KSxcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZUJ5S2V5W2tleV0sXHJcbiAgICAgICAgICAgICAgICBHcmFudFJldm9rZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIElzR3JvdXA6IGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5UGFyZW50S2V5ID0gUS50b0dyb3VwaW5nKGl0ZW1zLCB4ID0+IHguUGFyZW50S2V5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGdyYW50OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKGl0ZW0uR3JhbnRSZXZva2UgPT09IGdyYW50KSA/ICcgY2hlY2tlZCcgOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBkZXNjLmZpbHRlcih4ID0+IHguR3JhbnRSZXZva2UgPT09IGdyYW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlc2MubGVuZ3RoID09PSBncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkIHBhcnRpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlT3JJbXBsaWNpdChrZXkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trZXldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXTtcclxuICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSBvZiBPYmplY3Qua2V5cyh0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLkdyYW50UmV2b2tlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhbnRDb3VudCA9IFEuY291bnQoZGVzYywgeCA9PiB4LkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHguR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KHguS2V5KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSBkZXNjLmxlbmd0aCB8fCBkZXNjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYWxsb3cnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkZW55JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BhcnRpYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGl0ZW0uR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdChpdGVtLktleSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChncmFudGVkID8gJyBhbGxvdycgOiAnIGRlbnknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5QZXJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RpdGxlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogU2VyZW5pdHkuU2xpY2tGb3JtYXR0aW5nLnRyZWVUb2dnbGUoKCkgPT4gdGhpcy52aWV3LCB4ID0+IHguS2V5LCBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzID0gdGhpcy5nZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImVmZmVjdGl2ZS1wZXJtaXNzaW9uICcgKyBrbGFzcyArICdcIj4nICsgUS5odG1sRW5jb2RlKGN0eC52YWx1ZSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OTUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkdyYW50JyksIGZpZWxkOiAnR3JhbnQnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczEgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0xLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nY2hlY2stYm94IGdyYW50IG5vLWZsb2F0IFwiICsga2xhc3MxICsgXCInPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dSZXZva2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlJldm9rZScpLCBmaWVsZDogJ1Jldm9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMiA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImNoZWNrLWJveCByZXZva2Ugbm8tZmxvYXQgJyArIGtsYXNzMiArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldEl0ZW1zKGl0ZW1zOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10pOiB2b2lkIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnNldEluZGVudHMoaXRlbXMsIHggPT4geC5LZXksIHggPT4geC5QYXJlbnRLZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKGl0ZW1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5maWx0ZXJCeUlkKGl0ZW0sIHRoaXMudmlldywgeCA9PiB4LlBhcmVudEtleSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaENvbnRhaW5zKGl0ZW0pIHx8IGl0ZW0uSXNHcm91cCAmJiBRLmFueSh0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIGZhbHNlKSwgeCA9PiB0aGlzLm1hdGNoQ29udGFpbnMoeCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbWF0Y2hDb250YWlucyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0uVGl0bGUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldERlc2NlbmRhbnRzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGV4Y2x1ZGVHcm91cHM6IGJvb2xlYW4pOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHN0YWNrID0gW2l0ZW1dO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuYnlQYXJlbnRLZXlbaS5LZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZUdyb3VwcyB8fCAhY2hpbGQuSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGUsIHJvdywgY2VsbCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci50b2dnbGVDbGljayhlLCByb3csIGNlbGwsIHRoaXMudmlldywgeCA9PiB4LktleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ID0gdGFyZ2V0Lmhhc0NsYXNzKCdncmFudCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyYW50IHx8IHRhcmdldC5oYXNDbGFzcygncmV2b2tlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZE9yUGFydGlhbCA9IHRhcmdldC5oYXNDbGFzcygnY2hlY2tlZCcpIHx8IHRhcmdldC5oYXNDbGFzcygncGFydGlhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkT3JQYXJ0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBncmFudCAhPT0gY2hlY2tlZE9yUGFydGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCBvZiB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuR3JhbnRSZXZva2UgPSBncmFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IGdyYW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpY2tHcmlkLmludmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRQYXJlbnRLZXkoa2V5KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoMCwga2V5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaWR4ID0ga2V5Lmxhc3RJbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgaWR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS50cmltVG9OdWxsKHRleHQpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4pOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gPHN0cmluZ1tdPlEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMnKS5FbnRpdGllcztcclxuICAgICAgICAgICAgbGV0IHRpdGxlV2l0aEdyb3VwID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdChzLmxlbmd0aCAtIDEpID09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cigwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQnlLZXlbc10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W3NdID0gUS5jb2FsZXNjZShRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIHMpLCBzKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgIGxldCBncm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwVGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBncm91cCArIHBhcnRzW2ldICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQgPSBRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gcGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbZ3JvdXBdID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVGl0bGUgPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtncm91cF0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbZ3JvdXBdID0gZ3JvdXBUaXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtzXSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W3NdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLnNvcnQoKHgsIHkpID0+IFEudHVya2lzaExvY2FsZUNvbXBhcmUodGl0bGVXaXRoR3JvdXBbeF0sIHRpdGxlV2l0aEdyb3VwW3ldKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB2YWx1ZSgpOiBVc2VyUGVybWlzc2lvblJvd1tdIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFVzZXJQZXJtaXNzaW9uUm93W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLkdyYW50UmV2b2tlICE9IG51bGwgJiYgaXRlbS5LZXkuY2hhckF0KGl0ZW0uS2V5Lmxlbmd0aCAtIDEpICE9ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgUGVybWlzc2lvbktleTogaXRlbS5LZXksIEdyYW50ZWQ6IGl0ZW0uR3JhbnRSZXZva2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWUodmFsdWU6IFVzZXJQZXJtaXNzaW9uUm93W10pIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQocm93LlBlcm1pc3Npb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuR3JhbnRSZXZva2UgPSBRLmNvYWxlc2NlKHJvdy5HcmFudGVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3JvbGVQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PGJvb2xlYW4+ID0ge307XHJcblxyXG4gICAgICAgIGdldCByb2xlUGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCByb2xlUGVybWlzc2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zW2tdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaW1wbGljaXRQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PFEuRGljdGlvbmFyeTxib29sZWFuPj4gPSB7fTtcclxuXHJcbiAgICAgICAgc2V0IGltcGxpY2l0UGVybWlzc2lvbnModmFsdWU6IFEuRGljdGlvbmFyeTxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gdmFsdWVba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBvZiBsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXVtzXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucyB7XHJcbiAgICAgICAgc2hvd1Jldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tJdGVtIHtcclxuICAgICAgICBQYXJlbnRLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIElzR3JvdXA/OiBib29sZWFuO1xyXG4gICAgICAgIEdyYW50UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlclBlcm1pc3Npb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8VXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25DaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUGVybWlzc2lvbkNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUGVybWlzc2lvbnMnKSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jldm9rZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3RSb2xlUGVybWlzc2lvbnMoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnJvbGVQZXJtaXNzaW9ucyA9IHJlc3BvbnNlLkVudGl0aWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5TYXZlU3VjY2VzcycpKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuRGlhbG9nVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBpZD1cIn5fUGVybWlzc2lvbnNcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuQ2hlY2tUcmVlRWRpdG9yPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55PiwgYW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkaXY6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihkaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyh0ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRyZWVJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJvbGVSb3cuZ2V0TG9va3VwKCkuaXRlbXMubWFwKHJvbGUgPT4gPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55Pj57XHJcbiAgICAgICAgICAgICAgICBpZDogcm9sZS5Sb2xlSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJvbGUuUm9sZU5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSAmJlxyXG4gICAgICAgICAgICAgICAgKFEuaXNFbXB0eU9yTnVsbCh0aGlzLnNlYXJjaFRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLnRleHQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJSb2xlRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBSb2xlQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclJvbGVEaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFJvbGVDaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1JvbGVzJykpO1xyXG5cclxuICAgICAgICAgICAgVXNlclJvbGVTZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklEXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFEuc2VydmljZVJlcXVlc3QoJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuU2F2ZVN1Y2Nlc3MnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuRGlhbG9nVGl0bGUnKSwgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBpZD0nfl9Sb2xlcyc+PC9kaXY+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVEaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ6IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkxhbmd1YWdlTGlzdCB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDogc3RyaW5nW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGsgb2YgQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3cuZ2V0TG9va3VwKCkuaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKGsuTGFuZ3VhZ2VJZCAhPT0gJ2VuJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goW2suSWQudG9TdHJpbmcoKSwgay5MYW5ndWFnZU5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb24vSGVscGVycy9MYW5ndWFnZUxpc3QudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLlNjcmlwdEluaXRpYWxpemF0aW9uIHtcclxuICAgIFEuQ29uZmlnLnJlc3BvbnNpdmVEaWFsb2dzID0gdHJ1ZTtcclxuICAgIFEuQ29uZmlnLnJvb3ROYW1lc3BhY2VzLnB1c2goJ1NlcmVuZV9XZWJfQXBwJyk7XHJcbiAgICBTZXJlbml0eS5FbnRpdHlEaWFsb2cuZGVmYXVsdExhbmd1YWdlTGlzdCA9IExhbmd1YWdlTGlzdC5nZXRWYWx1ZTtcclxuXHJcbiAgICBpZiAoJC5mblsnY29sb3Jib3gnXSkge1xyXG4gICAgICAgICQuZm5bJ2NvbG9yYm94J10uc2V0dGluZ3MubWF4V2lkdGggPSBcIjk1JVwiO1xyXG4gICAgICAgICQuZm5bJ2NvbG9yYm94J10uc2V0dGluZ3MubWF4SGVpZ2h0ID0gXCI5NSVcIjtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25lcnJvciA9IFEuRXJyb3JIYW5kbGluZy5ydW50aW1lRXJyb3JIYW5kbGVyO1xyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQmFzaWNQcm9ncmVzc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxhbnk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1Byb2dyZXNzQmFyJykucHJvZ3Jlc3NiYXIoe1xyXG4gICAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICAgICAgICAgIGNoYW5nZTogKGUsIHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ5SWQoJ1Byb2dyZXNzTGFiZWwnKS50ZXh0KHRoaXMudmFsdWUgKyAnIC8gJyArIHRoaXMubWF4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY2FuY2VsbGVkOiBib29sZWFuO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IG1heCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ieUlkKCdQcm9ncmVzc0JhcicpLnByb2dyZXNzYmFyKCkucHJvZ3Jlc3NiYXIoJ29wdGlvbicsICdtYXgnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdQcm9ncmVzc0JhcicpLnByb2dyZXNzYmFyKCkucHJvZ3Jlc3NiYXIoJ29wdGlvbicsICdtYXgnLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ5SWQoJ1Byb2dyZXNzQmFyJykucHJvZ3Jlc3NiYXIoJ3ZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdQcm9ncmVzc0JhcicpLnByb2dyZXNzYmFyKCkucHJvZ3Jlc3NiYXIoJ3ZhbHVlJywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmRpYWxvZygpLmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpYWxvZygpLmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNhbmNlbFRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGdldERpYWxvZ09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEudGV4dCgnU2l0ZS5CYXNpY1Byb2dyZXNzRGlhbG9nLlBsZWFzZVdhaXQnKTtcclxuICAgICAgICAgICAgb3B0LndpZHRoID0gNjAwO1xyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLnVpLWRpYWxvZycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcudWktZGlhbG9nLWJ1dHRvbnBhbmUgLnVpLWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ29wYWNpdHknLCAnMC41Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaWFsb2coJ29wdGlvbicsICd0aXRsZScsIFEudHJpbVRvTnVsbCh0aGlzLmNhbmNlbFRpdGxlKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ1NpdGUuQmFzaWNQcm9ncmVzc0RpYWxvZy5DYW5jZWxUaXRsZScpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdERpYWxvZygpIHtcclxuICAgICAgICAgICAgc3VwZXIuaW5pdERpYWxvZygpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLnVpLWRpYWxvZycpLmZpbmQoJy51aS1kaWFsb2ctdGl0bGViYXItY2xvc2UnKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ncy1EaWFsb2dDb250ZW50IHMtQmFzaWNQcm9ncmVzc0RpYWxvZ0NvbnRlbnQnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjxkaXYgaWQ9J35fU3RhdHVzVGV4dCcgY2xhc3M9J3N0YXR1cy10ZXh0JyA+PC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPGRpdiBpZD0nfl9Qcm9ncmVzc0JhcicgY2xhc3M9J3Byb2dyZXNzLWJhcic+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgaWQ9J35fUHJvZ3Jlc3NMYWJlbCcgY2xhc3M9J3Byb2dyZXNzLWxhYmVsJyA+PC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L2Rpdj5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkNvbW1vbiB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEJ1bGtTZXJ2aWNlQWN0aW9uIHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGtleXM6IHN0cmluZ1tdO1xyXG4gICAgICAgIHByb3RlY3RlZCBxdWV1ZTogc3RyaW5nW107XHJcbiAgICAgICAgcHJvdGVjdGVkIHF1ZXVlSW5kZXg6IG51bWJlcjtcclxuICAgICAgICBwcm90ZWN0ZWQgcHJvZ3Jlc3NEaWFsb2c6IEJhc2ljUHJvZ3Jlc3NEaWFsb2c7XHJcbiAgICAgICAgcHJvdGVjdGVkIHBlbmRpbmdSZXF1ZXN0czogbnVtYmVyO1xyXG4gICAgICAgIHByb3RlY3RlZCBjb21wbGV0ZWRSZXF1ZXN0czogbnVtYmVyO1xyXG4gICAgICAgIHByb3RlY3RlZCBlcnJvckJ5S2V5OiBRLkRpY3Rpb25hcnk8U2VyZW5pdHkuU2VydmljZUVycm9yPjtcclxuICAgICAgICBwcml2YXRlIHN1Y2Nlc3NDb3VudDtcclxuICAgICAgICBwcml2YXRlIGVycm9yQ291bnQ7XHJcbiAgICAgICAgcHVibGljIGRvbmU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVQcm9ncmVzc0RpYWxvZygpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0RpYWxvZyA9IG5ldyBCYXNpY1Byb2dyZXNzRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRGlhbG9nLm1heCA9IHRoaXMua2V5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cudmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbmZpcm1hdGlvbkZvcm1hdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5Db25maXJtYXRpb25Gb3JtYXQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb25maXJtYXRpb25NZXNzYWdlKHRhcmdldENvdW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdCh0aGlzLmdldENvbmZpcm1hdGlvbkZvcm1hdCgpLCB0YXJnZXRDb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybSh0YXJnZXRDb3VudCwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIFEuY29uZmlybSh0aGlzLmdldENvbmZpcm1hdGlvbk1lc3NhZ2UodGFyZ2V0Q291bnQpLCBhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5vdGhpbmdUb1Byb2Nlc3NNZXNzYWdlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLk5vdGhpbmdUb1Byb2Nlc3MnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBub3RoaW5nVG9Qcm9jZXNzKCkge1xyXG4gICAgICAgICAgICBRLm5vdGlmeUVycm9yKHRoaXMuZ2V0Tm90aGluZ1RvUHJvY2Vzc01lc3NhZ2UoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0UGFyYWxsZWxSZXF1ZXN0cygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QmF0Y2hTaXplKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzdGFydFBhcmFsbGVsRXhlY3V0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2dyZXNzRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VjY2Vzc0NvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lcnJvckNvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZFJlcXVlc3RzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lcnJvckNvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lcnJvckJ5S2V5ID0ge307XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUgPSB0aGlzLmtleXMuc2xpY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgdmFyIHBhcmFsbGVsUmVxdWVzdHMgPSB0aGlzLmdldFBhcmFsbGVsUmVxdWVzdHMoKTtcclxuICAgICAgICAgICAgd2hpbGUgKHBhcmFsbGVsUmVxdWVzdHMtLSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZU5leHRCYXRjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2VydmljZUNhbGxDbGVhbnVwKCkge1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cy0tO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZFJlcXVlc3RzKys7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBRLnRleHQoKHRoaXMucHJvZ3Jlc3NEaWFsb2cuY2FuY2VsbGVkID9cclxuICAgICAgICAgICAgICAgICdTaXRlLkJhc2ljUHJvZ3Jlc3NEaWFsb2cuQ2FuY2VsVGl0bGUnIDogJ1NpdGUuQmFzaWNQcm9ncmVzc0RpYWxvZy5QbGVhc2VXYWl0JykpO1xyXG5cclxuICAgICAgICAgICAgdGl0bGUgKz0gJyAoJztcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3VjY2Vzc0NvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgKz0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLlN1Y2Nlc3NDb3VudCcpLCB0aGlzLnN1Y2Nlc3NDb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWNjZXNzQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgKz0gJywgJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZSArPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uRXJyb3JDb3VudCcpLCB0aGlzLmVycm9yQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzRGlhbG9nLnRpdGxlID0gdGl0bGUgKyAnKSc7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NEaWFsb2cudmFsdWUgPSB0aGlzLnN1Y2Nlc3NDb3VudCArIHRoaXMuZXJyb3JDb3VudDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2dyZXNzRGlhbG9nLmNhbmNlbGxlZCAmJiB0aGlzLnByb2dyZXNzRGlhbG9nLnZhbHVlIDwgdGhpcy5rZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlTmV4dEJhdGNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ1JlcXVlc3RzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzRGlhbG9nLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHRzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGV4ZWN1dGVGb3JCYXRjaChiYXRjaDogc3RyaW5nW10pIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBleGVjdXRlTmV4dEJhdGNoKCkge1xyXG4gICAgICAgICAgICB2YXIgYmF0Y2hTaXplID0gdGhpcy5nZXRCYXRjaFNpemUoKTtcclxuICAgICAgICAgICAgdmFyIGJhdGNoID0gW107XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmF0Y2gubGVuZ3RoID49IGJhdGNoU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnF1ZXVlSW5kZXggPj0gdGhpcy5xdWV1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBiYXRjaC5wdXNoKHRoaXMucXVldWVbdGhpcy5xdWV1ZUluZGV4KytdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJhdGNoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVGb3JCYXRjaChiYXRjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRBbGxIYWRFcnJvcnNGb3JtYXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1NpdGUuQnVsa1NlcnZpY2VBY3Rpb24uQWxsSGFkRXJyb3JzRm9ybWF0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2hvd0FsbEhhZEVycm9ycygpIHtcclxuICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihRLmZvcm1hdCh0aGlzLmdldEFsbEhhZEVycm9yc0Zvcm1hdCgpLCB0aGlzLmVycm9yQ291bnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTb21lSGFkRXJyb3JzRm9ybWF0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdTaXRlLkJ1bGtTZXJ2aWNlQWN0aW9uLlNvbWVIYWRFcnJvcnNGb3JtYXQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzaG93U29tZUhhZEVycm9ycygpIHtcclxuICAgICAgICAgICAgUS5ub3RpZnlXYXJuaW5nKFEuZm9ybWF0KHRoaXMuZ2V0U29tZUhhZEVycm9yc0Zvcm1hdCgpLCB0aGlzLnN1Y2Nlc3NDb3VudCwgdGhpcy5lcnJvckNvdW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QWxsU3VjY2Vzc0Zvcm1hdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnU2l0ZS5CdWxrU2VydmljZUFjdGlvbi5BbGxTdWNjZXNzRm9ybWF0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2hvd0FsbFN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhRLmZvcm1hdCh0aGlzLmdldEFsbFN1Y2Nlc3NGb3JtYXQoKSwgdGhpcy5zdWNjZXNzQ291bnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzaG93UmVzdWx0cygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JDb3VudCA9PT0gMCAmJiB0aGlzLnN1Y2Nlc3NDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RoaW5nVG9Qcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yQ291bnQgPiAwICYmIHRoaXMuc3VjY2Vzc0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dBbGxIYWRFcnJvcnMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NvbWVIYWRFcnJvcnMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93QWxsU3VjY2VzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGV4ZWN1dGUoa2V5czogc3RyaW5nW10pIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlzID0ga2V5cztcclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aGluZ1RvUHJvY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybSh0aGlzLmtleXMubGVuZ3RoLCAoKSA9PiB0aGlzLnN0YXJ0UGFyYWxsZWxFeGVjdXRpb24oKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRfc3VjY2Vzc0NvdW50KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWNjZXNzQ291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRfc3VjY2Vzc0NvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWNjZXNzQ291bnQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldF9lcnJvckNvdW50KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvckNvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0X2Vycm9yQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yQ291bnQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuRGlhbG9nVXRpbHMge1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHBlbmRpbmdDaGFuZ2VzQ29uZmlybWF0aW9uKGVsZW1lbnQ6IEpRdWVyeSwgaGFzUGVuZGluZ0NoYW5nZXM6ICgpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICBlbGVtZW50Lm9uKCdkaWFsb2diZWZvcmVjbG9zZSBwYW5lbGJlZm9yZWNsb3NlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFTZXJlbml0eS5XWC5oYXNPcmlnaW5hbEV2ZW50KGUpIHx8ICFoYXNQZW5kaW5nQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgUS5jb25maXJtKCdZb3UgaGF2ZSBwZW5kaW5nIGNoYW5nZXMuIFNhdmUgdGhlbT8nLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gZWxlbWVudC5maW5kKCdkaXYuc2F2ZS1hbmQtY2xvc2UtYnV0dG9uJykuY2xpY2soKSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbk5vOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKCd1aS1kaWFsb2ctY29udGVudCcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kaWFsb2coJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoJ3MtUGFuZWwnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZy5jbG9zZVBhbmVsKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5Db21tb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRm9ybWF0dGVyKClcclxuICAgIGV4cG9ydCBjbGFzcyBFbnVtU2VsZWN0Rm9ybWF0dGVyIGltcGxlbWVudHMgU2xpY2suRm9ybWF0dGVyIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxvd0NsZWFyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1hdChjdHg6IFNsaWNrLkZvcm1hdHRlckNvbnRleHQpIHtcclxuICAgICAgICAgICAgdmFyIGVudW1UeXBlID0gU2VyZW5pdHkuRW51bVR5cGVSZWdpc3RyeS5nZXQodGhpcy5lbnVtS2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzYiA9IFwiPHNlbGVjdD5cIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dDbGVhcikge1xyXG4gICAgICAgICAgICAgICAgc2IgKz0gJzxvcHRpb24gdmFsdWU9XCJcIj4nO1xyXG4gICAgICAgICAgICAgICAgc2IgKz0gUS5odG1sRW5jb2RlKHRoaXMuZW1wdHlJdGVtVGV4dCB8fCBRLnRleHQoXCJDb250cm9scy5TZWxlY3RFZGl0b3IuRW1wdHlJdGVtVGV4dFwiKSk7XHJcbiAgICAgICAgICAgICAgICBzYiArPSAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgeCBvZiBPYmplY3Qua2V5cyhlbnVtVHlwZSkuZmlsdGVyKHYgPT4gIWlzTmFOKHBhcnNlSW50KHYsIDEwKSkpKSB7XHJcbiAgICAgICAgICAgICAgICBzYiArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyB4ICsgJ1wiJztcclxuICAgICAgICAgICAgICAgIGlmICh4ID09IGN0eC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICBzYiArPSBcIiBzZWxlY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBlbnVtVHlwZVt4XTtcclxuICAgICAgICAgICAgICAgIHNiICs9IFwiPlwiO1xyXG4gICAgICAgICAgICAgICAgc2IgKz0gUS5odG1sRW5jb2RlKFEudHJ5R2V0VGV4dChcIkVudW1zLlwiICsgdGhpcy5lbnVtS2V5ICsgXCIuXCIgKyBuYW1lKSB8fCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIHNiICs9IFwiPC9vcHRpb24+XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNiICs9IFwiPC9zZWxlY3Q+XCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5vcHRpb24oKVxyXG4gICAgICAgIHB1YmxpYyBlbnVtS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLm9wdGlvbigpXHJcbiAgICAgICAgcHVibGljIGFsbG93Q2xlYXI6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLm9wdGlvbigpXHJcbiAgICAgICAgcHVibGljIGVtcHR5SXRlbVRleHQ6IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5Db21tb24ge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRXhjZWxFeHBvcnRPcHRpb25zIHtcclxuICAgICAgICBncmlkOiBTZXJlbml0eS5EYXRhR3JpZDxhbnksIGFueT47XHJcbiAgICAgICAgc2VydmljZTogc3RyaW5nO1xyXG4gICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gYm9vbGVhbjtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgICAgICBoaW50Pzogc3RyaW5nO1xyXG4gICAgICAgIHNlcGFyYXRvcj86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBFeGNlbEV4cG9ydEhlbHBlciB7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb29sQnV0dG9uKG9wdGlvbnM6IEV4Y2VsRXhwb3J0T3B0aW9ucyk6IFNlcmVuaXR5LlRvb2xCdXR0b24ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhpbnQ6IFEuY29hbGVzY2Uob3B0aW9ucy5oaW50LCAnRXhjZWwnKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLmNvYWxlc2NlKG9wdGlvbnMudGl0bGUsICcnKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZXhwb3J0LXhsc3gtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMub25WaWV3U3VibWl0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyaWQgPSBvcHRpb25zLmdyaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gUS5kZWVwQ2xvbmUoZ3JpZC5nZXRWaWV3KCkucGFyYW1zKSBhcyBTZXJlbml0eS5MaXN0UmVxdWVzdDtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LlRha2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuU2tpcCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNvcnRCeSA9IGdyaWQuZ2V0VmlldygpLnNvcnRCeTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydEJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuU29ydCA9IHNvcnRCeTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sdW1ucyA9IGdyaWQuZ2V0R3JpZCgpLmdldENvbHVtbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gb2YgY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LkluY2x1ZGVDb2x1bW5zLnB1c2goY29sdW1uLmlkIHx8IGNvbHVtbi5maWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFEucG9zdFRvU2VydmljZSh7IHNlcnZpY2U6IG9wdGlvbnMuc2VydmljZSwgcmVxdWVzdDogcmVxdWVzdCwgdGFyZ2V0OiAnX2JsYW5rJyB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IG9wdGlvbnMuc2VwYXJhdG9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcyhbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5lZGl0b3IoKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMuZWxlbWVudChcIjxkaXYvPlwiKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdyaWRFZGl0b3JCYXNlPFRFbnRpdHk+IGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxURW50aXR5LCBhbnk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlIHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIl9faWRcIjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbmV4dElkID0gMTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBpZChlbnRpdHk6IFRFbnRpdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChlbnRpdHkgYXMgYW55KVt0aGlzLmdldElkUHJvcGVydHkoKV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmV4dElkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJgXCIgKyB0aGlzLm5leHRJZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNldE5ld0lkKGVudGl0eTogVEVudGl0eSkge1xyXG4gICAgICAgICAgICBlbnRpdHlbdGhpcy5nZXRJZFByb3BlcnR5KCldID0gdGhpcy5nZXROZXh0SWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlKG9wdDogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8YW55PiwgY2FsbGJhY2s6IChyOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBvcHQucmVxdWVzdCBhcyBTZXJlbml0eS5TYXZlUmVxdWVzdDxURW50aXR5PjtcclxuICAgICAgICAgICAgdmFyIHJvdyA9IFEuZGVlcENsb25lKHJlcXVlc3QuRW50aXR5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWQocm93KTtcclxuICAgICAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIChyb3cgYXMgYW55KVt0aGlzLmdldElkUHJvcGVydHkoKV0gPSB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVFbnRpdHkocm93LCBpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy52aWV3LmdldEl0ZW1zKCkuc2xpY2UoKTtcclxuICAgICAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IFEuaW5kZXhPZihpdGVtcywgeCA9PiB0aGlzLmlkKHgpID09PSBpZCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBRLmRlZXBDbG9uZSh7fSBhcyBURW50aXR5LCBpdGVtc1tpbmRleF0sIHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RW50aXRpZXMoaXRlbXMpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayh7fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlRW50aXR5KGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmRlbGV0ZUl0ZW0oaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0ZUVudGl0eShyb3c6IFRFbnRpdHksIGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2V0RW50aXRpZXMoaXRlbXM6IFRFbnRpdHlbXSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5ld0VudGl0eSgpOiBURW50aXR5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIFRFbnRpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgdmFyIGFkZEJ1dHRvbiA9IFEudHJ5Rmlyc3QoYnV0dG9ucywgeCA9PiB4LmNzc0NsYXNzID09ICdhZGQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmIChhZGRCdXR0b24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbnRpdHlEaWFsb2codGhpcy5nZXRJdGVtVHlwZSgpLCBkbGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbG9nID0gZGxnIGFzIEdyaWRFZGl0b3JEaWFsb2c8VEVudGl0eT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5vblNhdmUgPSAob3B0LCBjYWxsYmFjaykgPT4gdGhpcy5zYXZlKG9wdCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyRGlhbG9nUmVhZE9ubHkoZGlhbG9nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmxvYWRFbnRpdHlBbmRPcGVuRGlhbG9nKHRoaXMuZ2V0TmV3RW50aXR5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucy5maWx0ZXIoeCA9PiB4LmNzc0NsYXNzICE9IFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZWRpdEl0ZW0oZW50aXR5T3JJZDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaWQgPSBlbnRpdHlPcklkO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW50aXR5RGlhbG9nKHRoaXMuZ2V0SXRlbVR5cGUoKSwgZGxnID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBkbGcgYXMgR3JpZEVkaXRvckRpYWxvZzxURW50aXR5PjtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5vbkRlbGV0ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGV0ZUVudGl0eShpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7fSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlckRpYWxvZ1JlYWRPbmx5KGRpYWxvZyk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cub25TYXZlID0gKG9wdCwgY2FsbGJhY2spID0+IHRoaXMuc2F2ZShvcHQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5sb2FkRW50aXR5QW5kT3BlbkRpYWxvZyhpdGVtKTtcclxuICAgICAgICAgICAgfSk7O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEVkaXRWYWx1ZShwcm9wZXJ0eSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eS5uYW1lXSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0RWRpdFZhbHVlKHNvdXJjZSwgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHNvdXJjZVtwcm9wZXJ0eS5uYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogVEVudGl0eVtdIHtcclxuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmdldElkUHJvcGVydHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlldy5nZXRJdGVtcygpLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gUS5kZWVwQ2xvbmUoeCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB5W3BdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkICYmIGlkLnRvU3RyaW5nKCkuY2hhckF0KDApID09ICdgJylcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgeVtwXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB5O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IFRFbnRpdHlbXSkge1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2V0SWRQcm9wZXJ0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoKHZhbHVlIHx8IFtdKS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IFEuZGVlcENsb25lKHgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCh5IGFzIGFueSlbcF0gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAoeSBhcyBhbnkpW3BdID0gXCJgXCIgKyB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHk7XHJcbiAgICAgICAgICAgIH0pLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRHcmlkQ2FuTG9hZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5pdGlhbFRpdGxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVRdWlja1NlYXJjaElucHV0KCkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGVuYWJsZURlbGV0ZUNvbHVtbigpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlRGVsZXRlQ29sdW1uKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdEZWxldGUgUm93JyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiAnPGEgY2xhc3M9XCJpbmxpbmUtYWN0aW9uIGRlbGV0ZS1yb3dcIiB0aXRsZT1cImRlbGV0ZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vIHRleHQtcmVkXCI+PC9pPjwvYT4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDI0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcikge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtOiBURW50aXR5ID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdXNlciBjbGlja3MgXCJpXCIgZWxlbWVudCwgZS5nLiBpY29uXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ2lubGluZS1hY3Rpb24nKSlcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzQ2xhc3MoJ2lubGluZS1hY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZURlbGV0ZUNvbHVtbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNDbGFzcygnZGVsZXRlLXJvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0NvbnRyb2xzLkVudGl0eURpYWxvZy5EZWxldGVDb25maXJtYXRpb24nKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRpdHkoaXRlbVt0aGlzLmdldElkUHJvcGVydHkoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBHcmlkRWRpdG9yRGlhbG9nPFRFbnRpdHk+IGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFRFbnRpdHksIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJfX2lkXCI7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG9uU2F2ZTogKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LlNhdmVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIG9uRGVsZXRlOiAob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuRGVsZXRlUmVzcG9uc2U+LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TYXZlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gYXBwbHkgY2hhbmdlcyBidXR0b24gZG9lc24ndCB3b3JrIHByb3Blcmx5IHdpdGggaW4tbWVtb3J5IGdyaWRzIHlldFxyXG4gICAgICAgICAgICBpZiAodGhpcy5hcHBseUNoYW5nZXNCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlDaGFuZ2VzQnV0dG9uLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVIYW5kbGVyKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LlNhdmVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2F2ZSAmJiB0aGlzLm9uU2F2ZShvcHRpb25zLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlSGFuZGxlcihvcHRpb25zOiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxTZXJlbml0eS5EZWxldGVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMub25EZWxldGUgJiYgdGhpcy5vbkRlbGV0ZShvcHRpb25zLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIGFuIGVkaXRvciB3aWRnZXQgYnV0IGl0IG9ubHkgZGlzcGxheXMgYSB0ZXh0LCBub3QgZWRpdHMgaXQuXHJcbiAgICAgKiAgXHJcbiAgICAgKi9cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLmVsZW1lbnQoXCI8ZGl2Lz5cIilcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKFtTZXJlbml0eS5JU2V0RWRpdFZhbHVlXSlcclxuICAgIGV4cG9ydCBjbGFzcyBTdGF0aWNUZXh0QmxvY2sgZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8U3RhdGljVGV4dEJsb2NrT3B0aW9ucz5cclxuICAgICAgICBpbXBsZW1lbnRzIFNlcmVuaXR5LklTZXRFZGl0VmFsdWUge1xyXG5cclxuICAgICAgICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHRpb25zOiBTdGF0aWNUZXh0QmxvY2tPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAvLyBoaWRlIHRoZSBjYXB0aW9uIGxhYmVsIGZvciB0aGlzIGVkaXRvciBpZiBpbiBhIGZvcm0uIHVnbHkgaGFja1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhpZGVMYWJlbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCcuY2FwdGlvbicpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudENvbnRlbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdXBkYXRlRWxlbWVudENvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gUS5jb2FsZXNjZSh0aGlzLm9wdGlvbnMudGV4dCwgdGhpcy52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBpc0xvY2FsVGV4dCBpcyBzZXQsIHRleHQgaXMgYWN0dWFsbHkgYSBsb2NhbCB0ZXh0IGtleVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzTG9jYWxUZXh0KVxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFEudGV4dCh0ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRvbid0IGh0bWwgZW5jb2RlIGlmIGlzSHRtbCBvcHRpb24gaXMgdHJ1ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzSHRtbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5odG1sKHRleHQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQudGV4dCh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJ5IGltcGxlbWVudGluZyBJU2V0RWRpdFZhbHVlIGludGVyZmFjZSwgd2UgYWxsb3cgdGhpcyBlZGl0b3IgdG8gZGlzcGxheSBpdHMgZmllbGQgdmFsdWUuXHJcbiAgICAgICAgICogQnV0IG9ubHkgZG8gdGhpcyB3aGVuIG91ciB0ZXh0IGNvbnRlbnQgaXMgbm90IGV4cGxpY2l0bHkgc2V0IGluIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0RWRpdFZhbHVlKHNvdXJjZTogYW55LCBwcm9wZXJ0eTogU2VyZW5pdHkuUHJvcGVydHlJdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gUS5jb2FsZXNjZSh0aGlzLm9wdGlvbnMudGV4dCwgc291cmNlW3Byb3BlcnR5Lm5hbWVdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudENvbnRlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFN0YXRpY1RleHRCbG9ja09wdGlvbnMge1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICBpc0h0bWw6IGJvb2xlYW47XHJcbiAgICAgICAgaXNMb2NhbFRleHQ6IGJvb2xlYW47XHJcbiAgICAgICAgaGlkZUxhYmVsOiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZWxlY3Rpb24gZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioc2VsZWN0OiBKUXVlcnksIGN1cnJlbnRMYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHNlbGVjdCk7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSBRLmNvYWxlc2NlKGN1cnJlbnRMYW5ndWFnZSwgJ2VuJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXRoID0gUS5Db25maWcuYXBwbGljYXRpb25QYXRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGggJiYgcGF0aCAhPSAnLycgJiYgUS5lbmRzV2l0aChwYXRoLCAnLycpKVxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgJC5jb29raWUoJ0xhbmd1YWdlUHJlZmVyZW5jZScsIHNlbGVjdC52YWwoKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlczogMzY1XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUS5nZXRMb29rdXBBc3luYzxBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdz4oJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJykudGhlbih4ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghUS5hbnkoeC5pdGVtcywgeiA9PiB6Lkxhbmd1YWdlSWQgPT09IGN1cnJlbnRMYW5ndWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gY3VycmVudExhbmd1YWdlLmxhc3RJbmRleE9mKCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9IGN1cnJlbnRMYW5ndWFnZS5zdWJzdHIoMCwgaWR4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFRLmFueSh4Lml0ZW1zLCB5ID0+IHkuTGFuZ3VhZ2VJZCA9PT0gY3VycmVudExhbmd1YWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gJ2VuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gJ2VuJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCBvZiB4Lml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCBsLkxhbmd1YWdlSWQsIGwuTGFuZ3VhZ2VOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QudmFsKGN1cnJlbnRMYW5ndWFnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNpZGViYXJTZWFyY2ggZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBtZW51VUw6IEpRdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5wdXQ6IEpRdWVyeSwgbWVudVVMOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoaW5wdXQsIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnVVTCA9IG1lbnVVTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gdGhpcy5tZW51VUwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0ID0gUS50cmltVG9OdWxsKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gdGV4dC5yZXBsYWNlKCcsJywgJyAnKS5zcGxpdCgnICcpLmZpbHRlcih4ID0+ICFRLmlzVHJpbW1lZEVtcHR5KHgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gUS50cmltVG9OdWxsKFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MocGFydHNbaV0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBsaUxpc3Q7XHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24gKGlkeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCAmJiAhKHRpdGxlLmluZGV4T2YocCkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0l0ZW1zID0gaXRlbXMubm90KCcubm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBUaGVtZVNlbGVjdGlvbiBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxhbnk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihzZWxlY3Q6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihzZWxlY3QpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IFEuQ29uZmlnLmFwcGxpY2F0aW9uUGF0aDtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGggIT0gJy8nICYmIFEuZW5kc1dpdGgocGF0aCwgJy8nKSlcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmNvb2tpZSgnVGhlbWVQcmVmZXJlbmNlJywgc2VsZWN0LnZhbCgpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiAzNjVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0aGVtZSA9IHNlbGVjdC52YWwoKSB8fCAnJztcclxuICAgICAgICAgICAgICAgIHZhciBkYXJrU2lkZWJhciA9IHRoZW1lLmluZGV4T2YoJ2xpZ2h0JykgPCAwO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdza2luLScgKyB0aGlzLmdldEN1cnJlbnRUaGVtZSgpKTtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc2tpbi0nICsgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKCdkYXJrLXNpZGViYXInLCBkYXJrU2lkZWJhcilcclxuICAgICAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoJ2xpZ2h0LXNpZGViYXInLCAhZGFya1NpZGViYXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2JsdWUnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lQmx1ZScpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnYmx1ZS1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVCbHVlTGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ3B1cnBsZScsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVQdXJwbGUnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ3B1cnBsZS1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVQdXJwbGVMaWdodCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAncmVkJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZVJlZCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAncmVkLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZVJlZExpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdncmVlbicsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVHcmVlbicpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnZ3JlZW4tbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lR3JlZW5MaWdodCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAneWVsbG93JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZVllbGxvdycpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAneWVsbG93LWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZVllbGxvd0xpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdibGFjaycsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVCbGFjaycpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnYmxhY2stbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lQmxhY2tMaWdodCcpKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdC52YWwodGhpcy5nZXRDdXJyZW50VGhlbWUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q3VycmVudFRoZW1lKCkge1xyXG4gICAgICAgICAgICB2YXIgc2tpbkNsYXNzID0gUS5maXJzdCgoJCgnYm9keScpLmF0dHIoJ2NsYXNzJykgfHwgJycpLnNwbGl0KCcgJyksIHggPT4gUS5zdGFydHNXaXRoKHgsICdza2luLScpKTtcclxuICAgICAgICAgICAgaWYgKHNraW5DbGFzcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNraW5DbGFzcy5zdWJzdHIoNSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAnYmx1ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZGVjbGFyZSB2YXIganNQREY7XHJcblxyXG5uYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGRmRXhwb3J0T3B0aW9ucyB7XHJcbiAgICAgICAgZ3JpZDogU2VyZW5pdHkuRGF0YUdyaWQ8YW55LCBhbnk+O1xyXG4gICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gYm9vbGVhbjtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgICAgICBoaW50Pzogc3RyaW5nO1xyXG4gICAgICAgIHNlcGFyYXRvcj86IGJvb2xlYW47XHJcbiAgICAgICAgcmVwb3J0VGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgdGl0bGVUb3A/OiBudW1iZXI7XHJcbiAgICAgICAgdGl0bGVGb250U2l6ZT86IG51bWJlcjtcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZztcclxuICAgICAgICBwYWdlTnVtYmVycz86IGJvb2xlYW47XHJcbiAgICAgICAgY29sdW1uVGl0bGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgICAgICB0YWJsZU9wdGlvbnM/OiBqc1BERi5BdXRvVGFibGVPcHRpb25zO1xyXG4gICAgICAgIG91dHB1dD86IHN0cmluZztcclxuICAgICAgICBhdXRvUHJpbnQ/OiBib29sZWFuO1xyXG4gICAgICAgIHByaW50RGF0ZVRpbWVIZWFkZXI/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGRmRXhwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9BdXRvVGFibGVDb2x1bW5zKHNyY0NvbHVtbnM6IFNsaWNrLkNvbHVtbltdLCBjb2x1bW5TdHlsZXM6IHsgW2RhdGFLZXk6IHN0cmluZ106IGpzUERGLkF1dG9UYWJsZVN0eWxlczsgfSxcclxuICAgICAgICAgICAgICAgIGNvbHVtblRpdGxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3JjQ29sdW1ucy5tYXAoc3JjID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2w6IGpzUERGLkF1dG9UYWJsZUNvbHVtbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5OiBzcmMuaWQgfHwgc3JjLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzcmMubmFtZSB8fCAnJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uVGl0bGVzICYmIGNvbHVtblRpdGxlc1tjb2wuZGF0YUtleV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBjb2wudGl0bGUgPSBjb2x1bW5UaXRsZXNbY29sLmRhdGFLZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdHlsZToganNQREYuQXV0b1RhYmxlU3R5bGVzID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoKHNyYy5jc3NDbGFzcyB8fCAnJykuaW5kZXhPZihcImFsaWduLXJpZ2h0XCIpID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuaGFsaWduID0gJ3JpZ2h0JztcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChzcmMuY3NzQ2xhc3MgfHwgJycpLmluZGV4T2YoXCJhbGlnbi1jZW50ZXJcIikgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5oYWxpZ24gPSAnY2VudGVyJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5TdHlsZXNbY29sLmRhdGFLZXldID0gc3R5bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0F1dG9UYWJsZURhdGEoZW50aXRpZXM6IGFueVtdLCBrZXlzOiBzdHJpbmdbXSwgc3JjQ29sdW1uczogU2xpY2suQ29sdW1uW10gKSB7XHJcbiAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdGllcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHN0ID0ge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjZWxsID0gMDsgY2VsbCA8IHNyY0NvbHVtbnMubGVuZ3RoOyBjZWxsKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3JjID0gc3JjQ29sdW1uc1tjZWxsXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmxkID0gc3JjLmZpZWxkIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2NlbGxdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjLmZvcm1hdHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gc3JjLmZvcm1hdHRlcihyb3csIGNlbGwsIGl0ZW1bZmxkXSwgc3JjLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3JjLmZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gc3JjLmZvcm1hdCh7IHJvdzogcm93LCBjZWxsOiBjZWxsLCBpdGVtOiBpdGVtLCB2YWx1ZTogaXRlbVtmbGRdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSBpdGVtW2ZsZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sIHx8IChodG1sLmluZGV4T2YoJzwnKSA8IDAgJiYgaHRtbC5pbmRleE9mKCcmJykgPCAwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWwuY2hpbGRyZW5bMF0pLmlzKFwiOmlucHV0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9ICQoZWwuY2hpbGRyZW5bMF0pLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA9PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsLmNoaWxkcmVuKS5pcygnLmNoZWNrLWJveCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9ICQoZWwuY2hpbGRyZW4pLmhhc0NsYXNzKFwiY2hlY2tlZFwiKSA/IFwiWFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gZWwudGV4dENvbnRlbnQgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZHN0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBleHBvcnRUb1BkZihvcHRpb25zOiBQZGZFeHBvcnRPcHRpb25zKTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZyA9IG9wdGlvbnMuZ3JpZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5vblZpZXdTdWJtaXQoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGluY2x1ZGVBdXRvVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gUS5kZWVwQ2xvbmUoZy52aWV3LnBhcmFtcykgYXMgU2VyZW5pdHkuTGlzdFJlcXVlc3Q7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFrZSA9IDA7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuU2tpcCA9IDA7XHJcblxyXG4gICAgICAgICAgICB2YXIgc29ydEJ5ID0gZy52aWV3LnNvcnRCeTtcclxuICAgICAgICAgICAgaWYgKHNvcnRCeSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Tb3J0ID0gc29ydEJ5O1xyXG5cclxuICAgICAgICAgICAgdmFyIGdyaWRDb2x1bW5zID0gZy5zbGlja0dyaWQuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBncmlkQ29sdW1ucyA9IGdyaWRDb2x1bW5zLmZpbHRlcih4ID0+IHguaWQgIT09IFwiX19zZWxlY3RfX1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3QuSW5jbHVkZUNvbHVtbnMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgY29sdW1uIG9mIGdyaWRDb2x1bW5zKVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5JbmNsdWRlQ29sdW1ucy5wdXNoKGNvbHVtbi5pZCB8fCBjb2x1bW4uZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGcudmlldy51cmwsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRvYyA9IG5ldyBqc1BERignbCcsICdwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcmNDb2x1bW5zID0gZ3JpZENvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtblN0eWxlczogeyBbZGF0YUtleTogc3RyaW5nXToganNQREYuQXV0b1RhYmxlU3R5bGVzOyB9ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSB0b0F1dG9UYWJsZUNvbHVtbnMoc3JjQ29sdW1ucywgY29sdW1uU3R5bGVzLCBvcHRpb25zLmNvbHVtblRpdGxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBjb2x1bW5zLm1hcCh4ID0+IHguZGF0YUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudGl0aWVzID0gKDxTZXJlbml0eS5MaXN0UmVzcG9uc2U8YW55Pj5yZXNwb25zZSkuRW50aXRpZXMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0b0F1dG9UYWJsZURhdGEoZW50aXRpZXMsIGtleXMsIHNyY0NvbHVtbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2Muc2V0Rm9udFNpemUob3B0aW9ucy50aXRsZUZvbnRTaXplIHx8IDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2Muc2V0Rm9udFN0eWxlKCdib2xkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcG9ydFRpdGxlID0gb3B0aW9ucy5yZXBvcnRUaXRsZSB8fCBnLmdldFRpdGxlKCkgfHwgXCJSZXBvcnRcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLmF1dG9UYWJsZVRleHQocmVwb3J0VGl0bGUsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudGl0bGVUb3AgfHwgMjUsIHsgaGFsaWduOiAnY2VudGVyJyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsUGFnZXNFeHAgPSBcInt7VH19XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlTnVtYmVycyA9IG9wdGlvbnMucGFnZU51bWJlcnMgPT0gbnVsbCB8fCBvcHRpb25zLnBhZ2VOdW1iZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdXRvT3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB7IHRvcDogMjUsIGxlZnQ6IDI1LCByaWdodDogMjUsIGJvdHRvbTogcGFnZU51bWJlcnMgPyAyNSA6IDMwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WTogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2xpbmVicmVhaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsUGFkZGluZzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlnbjogJ21pZGRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3R5bGVzOiBjb2x1bW5TdHlsZXNcclxuICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnRhYmxlT3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWdlTnVtYmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9vdGVyID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSBkYXRhLnBhZ2VDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvdGFsIHBhZ2UgbnVtYmVyIHBsdWdpbiBvbmx5IGF2YWlsYWJsZSBpbiBqc3BkZiB2MS4wK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2MucHV0VG90YWxQYWdlcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIFwiIC8gXCIgKyB0b3RhbFBhZ2VzRXhwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmF1dG9UYWJsZVRleHQoc3RyLCBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSBhdXRvT3B0aW9ucy5tYXJnaW4uYm90dG9tLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGlnbjogJ2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b09wdGlvbnMuYWZ0ZXJQYWdlQ29udGVudCA9IGZvb3RlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJpbnQgaGVhZGVyIG9mIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wcmludERhdGVUaW1lSGVhZGVyID09IG51bGwgfHwgb3B0aW9ucy5wcmludERhdGVUaW1lSGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZWZvcmVQYWdlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5zZXRGb250U3R5bGUoJ25vcm1hbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTaXplKDgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGUgYW5kIHRpbWUgb2YgdGhlIHJlcG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmF1dG9UYWJsZVRleHQoUS5mb3JtYXREYXRlKG5ldyBEYXRlKCksIFwiZGQtTU0teXl5eSBISDptbVwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC0gYXV0b09wdGlvbnMubWFyZ2luLnJpZ2h0LCAxMywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxpZ246ICdyaWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b09wdGlvbnMuYmVmb3JlUGFnZUNvbnRlbnQgPSBiZWZvcmVQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLmF1dG9UYWJsZShjb2x1bW5zLCBkYXRhLCBhdXRvT3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jLnB1dFRvdGFsUGFnZXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLnB1dFRvdGFsUGFnZXModG90YWxQYWdlc0V4cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLm91dHB1dCB8fCBvcHRpb25zLm91dHB1dCA9PSBcImZpbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBvcHRpb25zLmZpbGVOYW1lIHx8IG9wdGlvbnMucmVwb3J0VGl0bGUgfHwgXCJ7MH1fezF9LnBkZlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZSA9IFEuZm9ybWF0KGZpbGVOYW1lLCBnLmdldFRpdGxlKCkgfHwgXCJyZXBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpLCBcInl5eXlNTWRkX0hIbW1cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2Muc2F2ZShmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmF1dG9QcmludClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmF1dG9QcmludCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gb3B0aW9ucy5vdXRwdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dCA9PSAnbmV3d2luZG93JyB8fCAnX2JsYW5rJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gJ2RhdGF1cmxuZXd3aW5kb3cnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG91dHB1dCA9PSAnd2luZG93JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gJ2RhdGF1cmknO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2Mub3V0cHV0KG91dHB1dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb29sQnV0dG9uKG9wdGlvbnM6IFBkZkV4cG9ydE9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8U2VyZW5pdHkuVG9vbEJ1dHRvbj57XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogb3B0aW9ucy50aXRsZSB8fCAnJyxcclxuICAgICAgICAgICAgICAgIGhpbnQ6IG9wdGlvbnMuaGludCB8fCAnUERGJyxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZXhwb3J0LXBkZi1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gZXhwb3J0VG9QZGYob3B0aW9ucyksXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IG9wdGlvbnMuc2VwYXJhdG9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbmNsdWRlSnNQREYoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNQREYgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gJChcImpzUERGU2NyaXB0XCIpO1xyXG4gICAgICAgICAgICBpZiAoc2NyaXB0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAkKFwiPHNjcmlwdC8+XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJ0ZXh0L2phdmFzY3JpcHRcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJqc1BERlNjcmlwdFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzcmNcIiwgUS5yZXNvbHZlVXJsKFwifi9TY3JpcHRzL2pzcGRmLm1pbi5qc1wiKSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5oZWFkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluY2x1ZGVBdXRvVGFibGUoKSB7XHJcbiAgICAgICAgICAgIGluY2x1ZGVKc1BERigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc1BERiA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIChqc1BERiBhcyBhbnkpLkFQSSA9PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgKGpzUERGIGFzIGFueSkuQVBJLmF1dG9UYWJsZSAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSAkKFwianNQREZBdXRvVGFibGVTY3JpcHRcIik7XHJcbiAgICAgICAgICAgIGlmIChzY3JpcHQubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICQoXCI8c2NyaXB0Lz5cIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHlwZVwiLCBcInRleHQvamF2YXNjcmlwdFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImpzUERGQXV0b1RhYmxlU2NyaXB0XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInNyY1wiLCBRLnJlc29sdmVVcmwoXCJ+L1NjcmlwdHMvanNwZGYucGx1Z2luLmF1dG90YWJsZS5taW4uanNcIikpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oZG9jdW1lbnQuaGVhZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImRlY2xhcmUgdmFyIGpzUERGO1xyXG5cclxubmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVwb3J0RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFJlcG9ydERpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnQ6IFNlcmVuaXR5LlJlcG9ydGluZy5SZXBvcnRSZXRyaWV2ZVJlc3BvbnNlO1xyXG4gICAgICAgIHByaXZhdGUgcHJvcGVydHlHcmlkOiBTZXJlbml0eS5Qcm9wZXJ0eUdyaWQ7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFJlcG9ydERpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUludGVyZmFjZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXBvcnQodGhpcy5vcHRpb25zLnJlcG9ydEtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nQnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUHJvcGVydHlHcmlkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnR5R3JpZCAmJiB0aGlzLmJ5SWQoJ1Byb3BlcnR5R3JpZCcpLmh0bWwoJycpLmF0dHIoJ2NsYXNzJywgJycpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnR5R3JpZCA9IG5ldyBTZXJlbml0eS5Qcm9wZXJ0eUdyaWQodGhpcy5ieUlkKCdQcm9wZXJ0eUdyaWQnKSwge1xyXG4gICAgICAgICAgICAgICAgaWRQcmVmaXg6IHRoaXMuaWRQcmVmaXgsXHJcbiAgICAgICAgICAgICAgICB1c2VDYXRlZ29yaWVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMucmVwb3J0LlByb3BlcnRpZXNcclxuICAgICAgICAgICAgfSkuaW5pdChudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBsb2FkUmVwb3J0KHJlcG9ydEtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vUmVwb3J0L1JldHJpZXZlJyksXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVwb3J0S2V5OiByZXBvcnRLZXlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydCA9IHJlc3BvbnNlIGFzIFNlcmVuaXR5LlJlcG9ydGluZy5SZXBvcnRSZXRyaWV2ZVJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaWFsb2coKS5kaWFsb2coJ29wdGlvbicsICd0aXRsZScsIHRoaXMucmVwb3J0LlRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnR5R3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHlHcmlkLmxvYWQodGhpcy5yZXBvcnQuSW5pdGlhbFNldHRpbmdzIHx8IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUludGVyZmFjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdwcmludC1wcmV2aWV3LWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlKHRoaXMucmVwb3J0ICYmICF0aGlzLnJlcG9ydC5Jc0RhdGFPbmx5UmVwb3J0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdleHBvcnQtcGRmLWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlKHRoaXMucmVwb3J0ICYmICF0aGlzLnJlcG9ydC5Jc0RhdGFPbmx5UmVwb3J0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdleHBvcnQteGxzeC1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZSh0aGlzLnJlcG9ydCAmJiB0aGlzLnJlcG9ydC5Jc0RhdGFPbmx5UmVwb3J0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4ZWN1dGVSZXBvcnQodGFyZ2V0OiBzdHJpbmcsIGV4dDogc3RyaW5nLCBkb3dubG9hZDogYm9vbGVhbikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdCA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnR5R3JpZC5zYXZlKG9wdCk7XHJcbiAgICAgICAgICAgIFJlcG9ydEhlbHBlci5leGVjdXRlKHtcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkOiBkb3dubG9hZCxcclxuICAgICAgICAgICAgICAgIHJlcG9ydEtleTogdGhpcy5yZXBvcnQuUmVwb3J0S2V5LFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBleHQgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBnZXRUb29sYmFyQnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ByZXZpZXcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAncHJpbnQtcHJldmlldy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuZXhlY3V0ZVJlcG9ydCgnX2JsYW5rJywgbnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUERGJyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC1wZGYtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmV4ZWN1dGVSZXBvcnQoJ19ibGFuaycsICdwZGYnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0V4Y2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC14bHN4LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5leGVjdXRlUmVwb3J0KCdfYmxhbmsnLCAneGxzeCcsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0RGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgcmVwb3J0S2V5OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkNvbW1vbiB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBvcnRFeGVjdXRlT3B0aW9ucyB7XHJcbiAgICAgICAgcmVwb3J0S2V5OiBzdHJpbmc7XHJcbiAgICAgICAgZG93bmxvYWQ/OiBib29sZWFuO1xyXG4gICAgICAgIGV4dGVuc2lvbj86ICdwZGYnIHwgJ2h0bScgfCAnaHRtbCcgfCAneGxzeCcgfCAnZG9jeCc7XHJcbiAgICAgICAgZ2V0UGFyYW1zPzogKCkgPT4gYW55O1xyXG4gICAgICAgIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cclxuICAgICAgICB0YXJnZXQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBvcnRCdXR0b25PcHRpb25zIGV4dGVuZHMgUmVwb3J0RXhlY3V0ZU9wdGlvbnMge1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIGNzc0NsYXNzPzogc3RyaW5nO1xyXG4gICAgICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZXBvcnRIZWxwZXIge1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9vbEJ1dHRvbihvcHRpb25zOiBSZXBvcnRCdXR0b25PcHRpb25zKTogU2VyZW5pdHkuVG9vbEJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS5jb2FsZXNjZShvcHRpb25zLnRpdGxlLCAnUmVwb3J0JyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogUS5jb2FsZXNjZShvcHRpb25zLmNzc0NsYXNzLCAncHJpbnQtYnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBpY29uOiBvcHRpb25zLmljb24sXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVwb3J0SGVscGVyLmV4ZWN1dGUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZXhlY3V0ZShvcHRpb25zOiBSZXBvcnRFeGVjdXRlT3B0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgb3B0ID0gb3B0aW9ucy5nZXRQYXJhbXMgPyBvcHRpb25zLmdldFBhcmFtcygpIDogb3B0aW9ucy5wYXJhbXM7XHJcblxyXG4gICAgICAgICAgICBRLnBvc3RUb1VybCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICd+L1JlcG9ydC8nICsgKG9wdGlvbnMuZG93bmxvYWQgPyAnRG93bmxvYWQnIDogJ1JlbmRlcicpLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBvcHRpb25zLnJlcG9ydEtleSxcclxuICAgICAgICAgICAgICAgICAgICBleHQ6IFEuY29hbGVzY2Uob3B0aW9ucy5leHRlbnNpb24sICdwZGYnKSxcclxuICAgICAgICAgICAgICAgICAgICBvcHQ6IG9wdCA/ICQudG9KU09OKG9wdCkgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogUS5jb2FsZXNjZShvcHRpb25zLnRhcmdldCwgJ19ibGFuaycpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImRlY2xhcmUgdmFyIGpzUERGO1xyXG5cclxubmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVwb3J0UGFnZSBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxhbnk+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnRLZXk6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHByb3BlcnR5SXRlbXM6IFNlcmVuaXR5LlByb3BlcnR5SXRlbVtdO1xyXG4gICAgICAgIHByaXZhdGUgcHJvcGVydHlHcmlkOiBTZXJlbml0eS5Qcm9wZXJ0eUdyaWQ7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5yZXBvcnQtbGluaycsIGVsZW1lbnQpLmNsaWNrKGUgPT4gdGhpcy5yZXBvcnRMaW5rQ2xpY2soZSkpO1xyXG4gICAgICAgICAgICAkKCdkaXYubGluZScsIGVsZW1lbnQpLmNsaWNrKGUgPT4gdGhpcy5jYXRlZ29yeUNsaWNrKGUpKTtcclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoJCgnLnMtUXVpY2tTZWFyY2hCYXIgaW5wdXQnLCBlbGVtZW50KSwge1xyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g6IChmaWVsZCwgdGV4dCwgZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWF0Y2hGbGFncyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gJCgnLnJlcG9ydC1saXN0JywgdGhpcy5lbGVtZW50KS5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgdGV4dCA9IFEudHJpbVRvTnVsbCh0ZXh0KTtcclxuICAgICAgICAgICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3QuY2hpbGRyZW4oJ3VsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3ModGV4dCkudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvcnRJdGVtcyA9IGxpTGlzdC5maWx0ZXIoJy5yZXBvcnQtaXRlbScpO1xyXG4gICAgICAgICAgICByZXBvcnRJdGVtcy5lYWNoKGZ1bmN0aW9uIChpeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUuaW5kZXhPZih0ZXh0KSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWF0Y2hpbmdJdGVtcyA9IHJlcG9ydEl0ZW1zLm5vdCgnLm5vbi1tYXRjaCcpO1xyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG4gICAgICAgICAgICB2YXIgbm9uVmlzaWJsZXMgPSBsaUxpc3Qubm90KHZpc2libGVzKTtcclxuICAgICAgICAgICAgbm9uVmlzaWJsZXMuaGlkZSgpLmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgdmlzaWJsZXMuc2hvdygpO1xyXG4gICAgICAgICAgICBpZiAodmlzaWJsZXMubGVuZ3RoIDw9IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LmNoaWxkcmVuKCd1bCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNhdGVnb3J5Q2xpY2soZSkge1xyXG4gICAgICAgICAgICB2YXIgbGkgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgICAgICBpZiAobGkuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGxpLmZpbmQoJ3VsJykuaGlkZSgnZmFzdCcpO1xyXG4gICAgICAgICAgICAgICAgbGkucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBsaS5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGkuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBsaS5jaGlsZHJlbigndWwnKS5zaG93KCdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGkuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoID09PSAxICYmICFsaS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpLmNoaWxkcmVuKCd1bCcpLmNoaWxkcmVuKCdsaScpLmNoaWxkcmVuKCcubGluZScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCByZXBvcnRMaW5rQ2xpY2soZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG5ldyBSZXBvcnREaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0S2V5OiAkKGUudGFyZ2V0KS5kYXRhKCdrZXknKVxyXG4gICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJQcmVmZXJlbmNlU3RvcmFnZSBpbXBsZW1lbnRzIFNlcmVuaXR5LlNldHRpbmdTdG9yYWdlIHtcclxuICAgICAgICBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBVc2VyUHJlZmVyZW5jZVNlcnZpY2UuUmV0cmlldmUoe1xyXG4gICAgICAgICAgICAgICAgUHJlZmVyZW5jZVR5cGU6IFwiVXNlclByZWZlcmVuY2VTdG9yYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBOYW1lOiBrZXlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4gdmFsdWUgPSByZXNwb25zZS5WYWx1ZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXN5bmM6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0SXRlbShrZXk6IHN0cmluZywgZGF0YTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIFVzZXJQcmVmZXJlbmNlU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgUHJlZmVyZW5jZVR5cGU6IFwiVXNlclByZWZlcmVuY2VTdG9yYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBOYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICBWYWx1ZTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeVxyXG57XHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckZvcm1hdHRlcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUm93SW5kZXhGb3JtYXR0ZXIgaW1wbGVtZW50cyBTbGljay5Gb3JtYXR0ZXJcclxuICAgIHtcclxuICAgICAgICBmb3JtYXQoY3R4OiBTbGljay5Gb3JtYXR0ZXJDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoY3R4LnJvdyArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yeURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDYXRlZ29yeVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDYXRlZ29yeUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXRlZ29yeVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXRlZ29yeVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDYXRlZ29yeUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENhdGVnb3J5R3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q2F0ZWdvcnlSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ0ludmVudG9yeS5DYXRlZ29yeSc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIENhdGVnb3J5RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXRlZ29yeVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yeVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENhdGVnb3J5Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2F0ZWdvcnlTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcbiAgICBcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbWVyRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEN1c3RvbWVyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEN1c3RvbWVyRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEN1c3RvbWVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lclJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEN1c3RvbWVyU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFJlYWRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ3VzdG9tZXJSb3cucmVhZFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEN1c3RvbWVyUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEN1c3RvbWVyUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEN1c3RvbWVyUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgU2VyZW5lX1dlYl9BcHAuQWRtaW5pc3RyYXRpb24uVXNlckZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8IDcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA3IGNoYXJhY3RlcnMhXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSAhPSB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlRoZSBwYXNzd29yZHMgZW50ZXJlZCBkb2Vzbid0IG1hdGNoIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcImVkaXQtcm9sZXMtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLCAxKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDdXN0b21lckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEN1c3RvbWVyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiSW52ZW50b3J5LkN1c3RvbWVyXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEN1c3RvbWVyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElzQWN0aXZlUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEN1c3RvbWVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ3VzdG9tZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0UmVhZFBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lclJvdy5yZWFkUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ3VzdG9tZXJSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ3VzdG9tZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ3VzdG9tZXJSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbQ3VzdG9tZXJSb3cuRmllbGRzLlVzZXJuYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE9yZGVySXRlbURpYWxvZyBleHRlbmRzIENvbW1vbi5HcmlkRWRpdG9yRGlhbG9nPE9yZGVySXRlbVJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gT3JkZXJJdGVtRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBPcmRlckl0ZW1Sb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBPcmRlckl0ZW1Sb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBPcmRlckl0ZW1TZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE9yZGVySXRlbVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBPcmRlckl0ZW1Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gT3JkZXJJdGVtUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm06IE9yZGVySXRlbUZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IE9yZGVySXRlbUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICAvL3RoaXMuZm9ybS5EYXRlLnZhbHVlID0gRGF0ZS5ub3cudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Qcm9kdWN0SWQuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBQcm9kdWN0SWQgPSBRLnRvSWQodGhpcy5mb3JtLlByb2R1Y3RJZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoUHJvZHVjdElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uVW5pdFByaWNlLnZhbHVlID0gUHJvZHVjdFJvdy5nZXRMb29rdXAoKS5pdGVtQnlJZFtQcm9kdWN0SWRdLlByaWNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5RdWFudGl0eS5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgUHJvZHVjdElkID0gUS50b0lkKHRoaXMuZm9ybS5Qcm9kdWN0SWQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFByb2R1Y3RJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSA9IFByb2R1Y3RSb3cuZ2V0TG9va3VwKCkuaXRlbUJ5SWRbUHJvZHVjdElkXS5QcmljZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBPcmRlckl0ZW1HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxPcmRlckl0ZW1Sb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ0ludmVudG9yeS5PcmRlckl0ZW0nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBPcmRlckl0ZW1EaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE9yZGVySXRlbVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBPcmRlckl0ZW1Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBPcmRlckl0ZW1Sb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBPcmRlckl0ZW1TZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgT3JkZXJJdGVtc0VkaXRvciBleHRlbmRzIENvbW1vbi5HcmlkRWRpdG9yQmFzZTxPcmRlckl0ZW1Sb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiSW52ZW50b3J5Lk9yZGVySXRlbVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBPcmRlckl0ZW1EaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gT3JkZXJJdGVtUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFsaWRhdGVFbnRpdHkocm93LCBpZCkge1xyXG4gICAgICAgICAgICByb3cuUHJvZHVjdElkID0gUS50b0lkKHJvdy5Qcm9kdWN0SWQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNhbWVQcm9kdWN0ID0gUS50cnlGaXJzdCh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgeCA9PiB4LlByb2R1Y3RJZCA9PT0gcm93LlByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgIGlmIChzYW1lUHJvZHVjdCAmJiB0aGlzLmlkKHNhbWVQcm9kdWN0KSAhPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIFEuYWxlcnQoJ1RoaXMgcHJvZHVjdCBpcyBhbHJlYWR5IGluIG9yZGVyIGRldGFpbHMhJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJvdy5Qcm9kdWN0TmFtZSA9IFByb2R1Y3RSb3cuZ2V0TG9va3VwKCkuaXRlbUJ5SWRbcm93LlByb2R1Y3RJZF0uTmFtZTtcclxuICAgICAgICAgICAgcm93LkxpbmVUb3RhbCA9IChyb3cuUXVhbnRpdHkgfHwgMCkgKiAocm93LlVuaXRQcmljZSB8fCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucGFuZWwoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3REaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UHJvZHVjdFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBQcm9kdWN0Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQcm9kdWN0Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUHJvZHVjdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFByb2R1Y3RTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFByb2R1Y3RSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0Um93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUHJvZHVjdEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxQcm9kdWN0Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdJbnZlbnRvcnkuUHJvZHVjdCc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFByb2R1Y3REaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3RSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5JbnZlbnRvcnkge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucGFuZWwoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RPcmRlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxQcm9kdWN0T3JkZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUHJvZHVjdE9yZGVyRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQcm9kdWN0T3JkZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQcm9kdWN0T3JkZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0T3JkZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFByb2R1Y3RPcmRlclJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0T3JkZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdE9yZGVyUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm06IFByb2R1Y3RPcmRlckZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFByb2R1Y3RPcmRlckZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICAvL3RoaXMuZm9ybS5EYXRlLnZhbHVlID0gRGF0ZS5ub3cudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Qcm9kdWN0SWQuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBQcm9kdWN0SWQgPSBRLnRvSWQodGhpcy5mb3JtLlByb2R1Y3RJZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoUHJvZHVjdElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IFByb2R1Y3RSb3cuZ2V0TG9va3VwKCkuaXRlbUJ5SWRbUHJvZHVjdElkXS5TdXBwbGllcklkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLlN1cHBsaWVySWQudmFsdWUgPSBQcm9kdWN0Um93LmdldExvb2t1cCgpLml0ZW1CeUlkW1Byb2R1Y3RJZF0uU3VwcGxpZXJJZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5Ub3RhbEFtb3VudC52YWx1ZSA9IFByb2R1Y3RSb3cuZ2V0TG9va3VwKCkuaXRlbUJ5SWRbUHJvZHVjdElkXS5QcmljZSAqIHRoaXMuZm9ybS5RdWFudGl0eS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUXVhbnRpdHkuY2hhbmdlKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIFByb2R1Y3RJZCA9IFEudG9JZCh0aGlzLmZvcm0uUHJvZHVjdElkLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChQcm9kdWN0SWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5Ub3RhbEFtb3VudC52YWx1ZSA9IFByb2R1Y3RSb3cuZ2V0TG9va3VwKCkuaXRlbUJ5SWRbUHJvZHVjdElkXS5QcmljZSAqIHRoaXMuZm9ybS5RdWFudGl0eS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0T3JkZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxQcm9kdWN0T3JkZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ0ludmVudG9yeS5Qcm9kdWN0T3JkZXInOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQcm9kdWN0T3JkZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3RPcmRlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0T3JkZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQcm9kdWN0T3JkZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0T3JkZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCgpXHJcbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxQdXJjaGFzZU9yZGVyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBQdXJjaGFzZU9yZGVyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQdXJjaGFzZU9yZGVyR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UHVyY2hhc2VPcmRlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnSW52ZW50b3J5LlB1cmNoYXNlT3JkZXInOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnBhbmVsKClcclxuICAgIGV4cG9ydCBjbGFzcyBTdXBwbGllckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxTdXBwbGllclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBTdXBwbGllckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gU3VwcGxpZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBTdXBwbGllclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gU3VwcGxpZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBTdXBwbGllclNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gU3VwcGxpZXJSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gU3VwcGxpZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gU3VwcGxpZXJSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBTdXBwbGllckZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgUHJvZHVjdEdyaWQ6IFN1cHBsaWVyUHJvZEdyaWQ7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Qcm9kdWN0R3JpZCA9IG5ldyBTdXBwbGllclByb2RHcmlkKHRoaXMuYnlJZChcIlByb2R1Y3RHcmlkXCIpKTtcclxuICAgICAgICAgICAgdGhpcy50YWJzLm9uKCd0YWJzYWN0aXZhdGUnLCAoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJhbmdlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlByb2R1Y3RHcmlkLnN1cHBsaWVySUQgPSB0aGlzLmVudGl0eUlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZV9XZWJfQXBwLkludmVudG9yeSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU3VwcGxpZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxTdXBwbGllclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnSW52ZW50b3J5LlN1cHBsaWVyJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gU3VwcGxpZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFN1cHBsaWVyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFN1cHBsaWVyUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU3VwcGxpZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBTdXBwbGllclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnBhbmVsKClcclxuICAgIGV4cG9ydCBjbGFzcyBTdXBwbGllclByb2REaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UHJvZHVjdFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBQcm9kdWN0Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQcm9kdWN0Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUHJvZHVjdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFByb2R1Y3RTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFByb2R1Y3RSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0Um93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUHJvZHVjdEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lX1dlYl9BcHAuSW52ZW50b3J5IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTdXBwbGllclByb2RHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxQcm9kdWN0Um93LCBhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkludmVudG9yeS5TdXBwbGllclByb2RcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0R3JpZENhbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1cHBsaWVySUQgIT0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3N1cHBsaWVySUQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgZ2V0IHN1cHBsaWVySUQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdXBwbGllcklEO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHN1cHBsaWVySUQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3VwcGxpZXJJRCAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3VwcGxpZXJJRCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFcXVhbGl0eShQcm9kdWN0Um93LkZpZWxkcy5TdXBwbGllcklkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpblBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxMb2dpblJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIExvZ2luRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAkLmZuWyd2ZWdhcyddICYmICQoJ2JvZHknKVsndmVnYXMnXSh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMzAwMDAsXHJcbiAgICAgICAgICAgICAgICBjb3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBSUFBQUFDQVFNQUFBQkllSjluQUFBQUEzTkNTVlFJQ0FqYjRVXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiL2dBQUFBQmxCTVZFWC8vLzhBQUFCVnd0TitBQUFBQW5SU1RsTUEvMXVSSXJVQUFBQUpjRWhaY3dBQUFzUUFBQUxFQVZ1Um5Rc0FBQUFXZEVWWWRFTnlaV0YwXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYVc5dUlGUnBiV1VBTURRdk1UTXZNVEdyVzBUNkFBQUFISFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JHYVhKbGQyOXlhM01nUTFNMWNiWGpOZ0FBQUF4SlJFRlVDSmxqYUdCZ0FBQUJoQUNCck9OSVBnQUFBQUJKUlU1RXJrSmdnZz09XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzogUS5yZXNvbHZlVXJsKFwifi9Db250ZW50L3NpdGUvc2xpZGVzL3NsaWRlMS5qcGdcIiksIHRyYW5zaXRpb246ICdmYWRlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOiBRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9zbGlkZXMvc2xpZGUyLmpwZ1wiKSwgdHJhbnNpdGlvbjogJ3pvb21PdXQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6IFEucmVzb2x2ZVVybChcIn4vQ29udGVudC9zaXRlL3NsaWRlcy9zbGlkZTMuanBnXCIpLCB0cmFuc2l0aW9uOiAnc3dpcmxMZWZ0JyB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdMb2dpbkJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9SZXR1cm5VcmwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IChyZXNwb25zZTogU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IuQ29kZSA9PSBcIlJlZGlyZWN0VXNlclRvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UuRXJyb3IuQXJndW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmICFRLmlzRW1wdHlPck51bGwocmVzcG9uc2UuRXJyb3IuTWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5RXJyb3IocmVzcG9uc2UuRXJyb3IuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjUGFzc3dvcmQnKS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5FcnJvckhhbmRsaW5nLnNob3dTZXJ2aWNlRXJyb3IocmVzcG9uc2UuRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCByZWRpcmVjdFRvUmV0dXJuVXJsKCkge1xyXG4gICAgICAgICAgICB2YXIgcSA9IFEucGFyc2VRdWVyeVN0cmluZygpO1xyXG4gICAgICAgICAgICB2YXIgcmV0dXJuVXJsID0gcVsncmV0dXJuVXJsJ10gfHwgcVsnUmV0dXJuVXJsJ107XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5VcmwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzaCAhPSBudWxsICYmIGhhc2ggIT0gJyMnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblVybCArPSBoYXNoO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXR1cm5Vcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG48ZGl2IGNsYXNzPVwiZmxleC1sYXlvdXRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PC9kaXY+XHJcbiAgICA8aDM+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkZvcm1UaXRsZVwiKX08L2gzPlxyXG4gICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicy1Gb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNldCB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIn5fUHJvcGVydHlHcmlkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwifl9Mb2dpbkJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduSW5CdXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpfVwiPjxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+Jm5ic3A7JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkZvcmdvdFBhc3N3b3JkXCIpfTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke1EucmVzb2x2ZVVybCgnfi9BY2NvdW50L1NpZ25VcCcpfVwiPjxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+Jm5ic3A7JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25VcEJ1dHRvblwiKX08L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxDaGFuZ2VQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENoYW5nZVBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogQ2hhbmdlUGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IENoYW5nZVBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLncoJ0NvbmZpcm1QYXNzd29yZCcsIFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yKS52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0NoYW5nZVBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxGb3Jnb3RQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEZvcmdvdFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogRm9yZ290UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcmdvdFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFJlc2V0UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXNldFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogUmVzZXRQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUmVzZXRQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5mb3JtYXQoUS50ZXh0KCdWYWxpZGF0aW9uLk1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGgnKSwgNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuVG9rZW4gPSB0aGlzLmJ5SWQoJ1Rva2VuJykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L1Jlc2V0UGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Mb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmVfV2ViX0FwcC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTaWduVXBQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8U2lnblVwUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gU2lnblVwRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogU2lnblVwRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBTaWduVXBGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1FbWFpbC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtRW1haWwudmFsdWUgIT09IHRoaXMuZm9ybS5FbWFpbC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uRW1haWxDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9TaWduVXAnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3BsYXlOYW1lOiB0aGlzLmZvcm0uRGlzcGxheU5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOiB0aGlzLmZvcm0uRW1haWwudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOiB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5TaWduVXAuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=