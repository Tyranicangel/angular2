System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Role;
    return {
        setters:[],
        execute: function() {
            Role = (function () {
                function Role(role) {
                    this.id = role.id;
                    this.role = role.role;
                    this.link = role.link;
                }
                return Role;
            }());
            exports_1("Role", Role);
        }
    }
});
//# sourceMappingURL=role.js.map