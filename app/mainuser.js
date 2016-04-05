System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MainUser;
    return {
        setters:[],
        execute: function() {
            MainUser = (function () {
                function MainUser(user) {
                    this.id = user.id;
                    this.name = user.name;
                    this.designation = user.designation;
                    this.link = user.link;
                }
                return MainUser;
            }());
            exports_1("MainUser", MainUser);
        }
    }
});
//# sourceMappingURL=mainuser.js.map