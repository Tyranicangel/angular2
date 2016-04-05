System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Default;
    return {
        setters:[],
        execute: function() {
            Default = (function () {
                function Default() {
                }
                Default.prototype.requestUrl = function () {
                    return Default.url;
                };
                Default.url = "http://localhost/bugapi/public/";
                return Default;
            }());
            exports_1("Default", Default);
        }
    }
});
//# sourceMappingURL=default.js.map