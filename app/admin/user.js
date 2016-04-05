System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                    this.username = "";
                    this.name = "";
                    this.email = "";
                    this.address = "";
                    this.phoneno = "";
                    this.designation = "";
                    this.password = "";
                    this.role = "";
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map