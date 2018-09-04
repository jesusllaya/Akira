(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"header\">\r\n    <app-nav-h-menu></app-nav-h-menu>\r\n</div>\r\n-->\r\n<app-nav-menu></app-nav-menu>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Globo Project';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/new-project/new-project.component */ "./src/app/components/new-project/new-project.component.ts");
/* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav-menu/nav-menu.component */ "./src/app/components/nav-menu/nav-menu.component.ts");
/* harmony import */ var _components_nav_h_menu_nav_h_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav-h-menu/nav-h-menu.component */ "./src/app/components/nav-h-menu/nav-h-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_9__["NewProjectComponent"],
                _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__["NavMenuComponent"],
                _components_nav_h_menu_nav_h_menu_component__WEBPACK_IMPORTED_MODULE_11__["NavHMenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["appRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _app_components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/components/new-project/new-project.component */ "./src/app/components/new-project/new-project.component.ts");

var appRoutes = [
    { path: 'newProject', component: _app_components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_0__["NewProjectComponent"] }
];


/***/ }),

/***/ "./src/app/components/nav-h-menu/nav-h-menu.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/nav-h-menu/nav-h-menu.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#sidebar {\r\n    background-color: #7386D5;\r\n    transition: all 0.3s;\r\n    color: #ffffff;\r\n    }\r\n\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/nav-h-menu/nav-h-menu.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/nav-h-menu/nav-h-menu.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <nav id=\"sidebar\" class=\"navbar-fixed-top\">\r\n\r\n  <ul class=\"nav justify-content-end\" >\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">Active</a>\r\n    </li>\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n      </div>\r\n    </li>\r\n   \r\n  </ul>\r\n  </nav>\r\n\r\n<!--\r\n<nav class=\"navbar navbar-default navbar-static-top navbar-fixed-top\" id=\"sidebar\">\r\n  <div class=\"container\">\r\n    \r\n     \r\n  </div>\r\n</nav>\r\n-->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/nav-h-menu/nav-h-menu.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/nav-h-menu/nav-h-menu.component.ts ***!
  \***************************************************************/
/*! exports provided: NavHMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavHMenuComponent", function() { return NavHMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavHMenuComponent = /** @class */ (function () {
    function NavHMenuComponent() {
    }
    NavHMenuComponent.prototype.ngOnInit = function () {
    };
    NavHMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-h-menu',
            template: __webpack_require__(/*! ./nav-h-menu.component.html */ "./src/app/components/nav-h-menu/nav-h-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-h-menu.component.css */ "./src/app/components/nav-h-menu/nav-h-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavHMenuComponent);
    return NavHMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\ni,\r\nspan {\r\n    display: inline-block;\r\n}\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    background: #7386D5;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n#sidebar.active {\r\n    min-width: 80px;\r\n    max-width: 80px;\r\n    text-align: center;\r\n}\r\n#sidebar.active .sidebar-header h3,\r\n#sidebar.active .CTAs {\r\n    display: none;\r\n}\r\n#sidebar.active .sidebar-header strong {\r\n    display: block;\r\n}\r\n#sidebar ul li a {\r\n    text-align: left;\r\n}\r\n#sidebar.active ul li a {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    font-size: 0.85em;\r\n}\r\n#sidebar.active ul li a i {\r\n    margin-right: 0;\r\n    display: block;\r\n    font-size: 1.8em;\r\n    margin-bottom: 5px;\r\n}\r\n#sidebar.active ul ul a {\r\n    padding: 10px !important;\r\n}\r\n#sidebar.active .dropdown-toggle::after {\r\n    top: auto;\r\n    bottom: 10px;\r\n    right: 50%;\r\n    -webkit-transform: translateX(50%);\r\n    transform: translateX(50%);\r\n}\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #6d7fcc;\r\n}\r\n#sidebar .sidebar-header strong {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n#sidebar ul li a:hover {\r\n    color: #7386D5;\r\n    background: #fff;\r\n}\r\n#sidebar ul li a i {\r\n    margin-right: 10px;\r\n}\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #6d7fcc;\r\n}\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\na.article,\r\na.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n}\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important;\r\n    }\r\n    .dropdown-toggle::after {\r\n        top: auto;\r\n        bottom: 10px;\r\n        right: 50%;\r\n        -webkit-transform: translateX(50%);\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0 !important;\r\n    }\r\n    #sidebar .sidebar-header h3,\r\n    #sidebar .CTAs {\r\n        display: none;\r\n    }\r\n    #sidebar .sidebar-header strong {\r\n        display: block;\r\n    }\r\n    #sidebar ul li a {\r\n        padding: 20px 10px;\r\n    }\r\n    #sidebar ul li a span {\r\n        font-size: 0.85em;\r\n    }\r\n    #sidebar ul li a i {\r\n        margin-right: 0;\r\n        display: block;\r\n    }\r\n    #sidebar ul ul a {\r\n        padding: 10px !important;\r\n    }\r\n    #sidebar ul li a i {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div class=\"wrapper\">\r\n    <!-- Sidebar  -->\r\n    <nav id=\"sidebar\">\r\n        <div class=\"sidebar-header\">\r\n            <h3>Globo Project</h3>\r\n            <strong>BS</strong>\r\n        </div>\r\n\r\n        <ul class=\"list-unstyled components\">\r\n                <li class=\"active\">\r\n                        <a href=\"#\">\r\n                            <i class=\"fas fa-briefcase\"></i>\r\n                            Home\r\n                        </a>\r\n                    </li>\r\n            <li>\r\n                \r\n                <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\r\n                    <i class=\"fas fa-home\"></i>\r\n                    Mis Proyectos\r\n                </a>\r\n                <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\r\n                    <li>\r\n                        <a href=\"newProject\">Nuevo Proyecto</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Proyectos Aceptados</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Proyectos en Bandeja</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                <a href=\"#\">\r\n                    <i class=\"fas fa-briefcase\"></i>\r\n                    Mis Tareas\r\n                </a>\r\n                <a href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\r\n                    <i class=\"fas fa-copy\"></i>\r\n                    Mis Recursos\r\n                </a>\r\n                <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">\r\n                    <li>\r\n                        <a href=\"miJuan\">JUAN</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Page 2</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Page 3</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n\r\n    </nav>\r\n\r\n    <!-- Page Content  -->\r\n    \r\n    <div id=\"content\">\r\n\r\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n            <div class=\"container-fluid\">\r\n                    <div>\r\n                            <router-outlet></router-outlet>\r\n                    </div>      \r\n            </div>\r\n        </nav>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/components/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/components/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/new-project/new-project.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-project/new-project.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-project/new-project.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-project/new-project.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"projectForm\" (ngSubmit)=\"onSubmit()\">\r\n  <h1>New Project</h1>\r\n\r\n  <div class=\"form-group\">\r\n      <label>Name:\r\n          <input type=\"text\" formControlName=\"nameProject\" class=\"form-control\" placeholder=\"Write a name\" required>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Description:\r\n          <input type=\"text\" formControlName=\"description\" class=\"form-control\" placeholder=\"Write a description\" required>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Project Type:\r\n          <select class=\"form-control\" required>\r\n              <option>Add new Project Type</option>\r\n              <option>OutDoor</option>\r\n              <option>InDoor</option>\r\n              <option>Drive Test</option>\r\n            </select>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Client select:\r\n          <select class=\"form-control\" required>\r\n              <option>Add new Client</option>\r\n              <option>Claro</option>\r\n              <option>Movistar</option>\r\n              <option>Personal</option>\r\n            </select>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Project Leader:\r\n          <select class=\"form-control\" required>\r\n              <option>Add new Project Leader</option>\r\n              <option>Llaya Jesus</option>\r\n              <option>Pra Adolfo</option>\r\n          </select>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Estimated Start Date:\r\n          <input type=\"date\" formControlName=\"estimatedStartDate\" class=\"form-control\" required>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Estimated Finish Date:\r\n          <input type=\"date\" formControlName=\"estimatedFinishDate\" class=\"form-control\" required>\r\n      </label>\r\n  </div>\r\n  <div formGroupName=\"location\" class=\"form-group\">\r\n      <label>\r\n          Street:\r\n          <input type=\"text\" formControlName=\"street\" required class=\"form-control\" required>\r\n      </label>\r\n      <label>\r\n          City:\r\n          <select class=\"form-control\" required>\r\n              <option>Capital</option>\r\n              <option>Rio Cuarto</option>\r\n          </select>\r\n      </label>\r\n      <label>\r\n          State:\r\n          <select class=\"form-control\" required>\r\n              <option>Cordoba</option>\r\n              <option>Salta</option>\r\n          </select>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <button type=\"submit\" [disabled]=\"!projectForm.valid\" class=\"btn btn-primary\">Save</button>\r\n  </div>\r\n       \r\n\r\n\r\n            \r\n  </form>\r\n\r\n  <p>\r\n    Estado del Formulario: {{projectForm.status}}\r\n  </p>\r\n\r\n  <!--\r\n  <div formArrayName=\"alias\">\r\n      <h3>Aliases</h3> <button (click)=\"addAlias()\">Add Alias</button>\r\n    \r\n      <div *ngFor=\"let address of alias.controls; let i=index\">\r\n      \r\n        <label>\r\n          Alias:\r\n          <input type=\"text\" [formControlName]=\"i\">\r\n        </label>\r\n      </div>\r\n    </div>\r\n  -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/new-project/new-project.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-project/new-project.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectComponent", function() { return NewProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewProjectComponent = /** @class */ (function () {
    function NewProjectComponent(fb) {
        this.fb = fb;
        this.projectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nameProject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            projectType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            client: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            projectLeader: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            estimatedStartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            estimatedFinishDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            location: this.fb.group({
                street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                city: [''],
                state: ['']
            }),
            alias: this.fb.array([
                this.fb.control('')
            ])
        });
    }
    NewProjectComponent.prototype.ngOnInit = function () {
    };
    NewProjectComponent.prototype.updateName = function () {
        //this.name.setValue('Coloque un nombre');
    };
    NewProjectComponent.prototype.onSubmit = function () {
        console.warn(this.projectForm.value);
    };
    Object.defineProperty(NewProjectComponent.prototype, "alias", {
        get: function () {
            return this.projectForm.get('alias');
        },
        enumerable: true,
        configurable: true
    });
    NewProjectComponent.prototype.addAlias = function () {
        this.alias.push(this.fb.control(''));
    };
    NewProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-project',
            template: __webpack_require__(/*! ./new-project.component.html */ "./src/app/components/new-project/new-project.component.html"),
            styles: [__webpack_require__(/*! ./new-project.component.css */ "./src/app/components/new-project/new-project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NewProjectComponent);
    return NewProjectComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jesus Llaya\Desktop\Angular\GP-Prototipos-VersionFinal\globo-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map