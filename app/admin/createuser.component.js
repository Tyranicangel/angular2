System.register(['angular2/core', '../default', 'angular2/http', './user'], function(exports_1, context_1) {
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
    var core_1, default_1, http_1, user_1;
    var CreateUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (default_1_1) {
                default_1 = default_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            CreateUserComponent = (function () {
                function CreateUserComponent(http) {
                    this.http = http;
                }
                CreateUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.user = new user_1.User;
                    var def;
                    def = new default_1.Default;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('JWT-AuthToken', localStorage.getItem('bugtoken'));
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(def.requestUrl() + 'role_list', options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.rolelist = data; }, function (err) { return console.log(err); });
                };
                CreateUserComponent.prototype.createuser = function () {
                    console.log(this.user);
                };
                CreateUserComponent = __decorate([
                    core_1.Component({
                        selector: 'content',
                        templateUrl: 'app/templates/admin/createuser.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CreateUserComponent);
                return CreateUserComponent;
            }());
            exports_1("CreateUserComponent", CreateUserComponent);
        }
    }
});
//# sourceMappingURL=createuser.component.js.map