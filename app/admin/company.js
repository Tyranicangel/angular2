System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Company;
    return {
        setters:[],
        execute: function() {
            Company = (function () {
                function Company(role) {
                    this.id = role.id;
                    this.name = role.role;
                    this.addess = role.link;
                }
                return Company;
            }());
            exports_1("Company", Company);
        }
    }
});
//# sourceMappingURL=company.js.map