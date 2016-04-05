System.register(['angular2/core', 'angular2/router', 'angular2/http', '../default', '../mainuser', './home.component', './createuser.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, default_1, mainuser_1, home_component_1, createuser_component_1;
    var AdminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (default_1_1) {
                default_1 = default_1_1;
            },
            function (mainuser_1_1) {
                mainuser_1 = mainuser_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (createuser_component_1_1) {
                createuser_component_1 = createuser_component_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent(http, _router) {
                    this.http = http;
                    this._router = _router;
                }
                AdminComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var def;
                    def = new default_1.Default;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('JWT-AuthToken', localStorage.getItem('bugtoken'));
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(def.requestUrl() + 'user_details', options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.mainuser = new mainuser_1.MainUser(data); }, function (err) { return console.log(err); });
                };
                AdminComponent.prototype.logout = function () {
                    localStorage.removeItem('bugtoken');
                    this._router.navigate(["Login"]);
                };
                AdminComponent = __decorate([
                    core_1.Component({
                        selector: 'user',
                        templateUrl: 'app/templates/admin/admin.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([{
                            path: '/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/createuser',
                            name: 'CreateUser',
                            component: createuser_component_1.CreateUserComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
//# sourceMappingURL=admin.component.js.map