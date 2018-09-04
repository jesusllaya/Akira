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

module.exports = "<div class=\"header\">\r\n    <app-nav-h-menu></app-nav-h-menu>\r\n</div>\r\n<app-nav-menu></app-nav-menu>\r\n\r\n\r\n"

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

module.exports = "\r\n#sidebar {\r\n    background-color:#1d1d1d ;\r\n    transition: all 0.3s;\r\n    color: #ffffff;\r\n    }\r\n\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/nav-h-menu/nav-h-menu.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/nav-h-menu/nav-h-menu.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <nav id=\"sidebar\" class=\"navbar-fixed-top\">\r\n    <ul class=\"nav justify-content-end\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">\r\n                <i class=\"fa fa-cogs\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Admin User</a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\"><i class=\"fa fa-fw fa-user\"></i> Edit Profile</a></li>\r\n                <li><a href=\"#\"><i class=\"fa fa-fw fa-cog\"></i> Change Password</a></li>\r\n                <li class=\"divider\"></li>\r\n                <li><a href=\"#\"><i class=\"fa fa-fw fa-power-off\"></i> Logout</a></li>\r\n            </ul>\r\n        </li>\r\n\r\n  </ul>\r\n\r\n  \r\n  </nav>\r\n\r\n<!--\r\n<nav class=\"navbar navbar-default navbar-static-top navbar-fixed-top\" id=\"sidebar\">\r\n  <div class=\"container\">\r\n    \r\n     \r\n  </div>\r\n</nav>\r\n-->\r\n\r\n\r\n"

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

module.exports = "@-webkit-keyframes swing {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: rotate(10deg);\r\n            transform: rotate(10deg);\r\n  }\r\n  30% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  40% {\r\n    -webkit-transform: rotate(-10deg);\r\n            transform: rotate(-10deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  60% {\r\n    -webkit-transform: rotate(5deg);\r\n            transform: rotate(5deg);\r\n  }\r\n  70% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  80% {\r\n    -webkit-transform: rotate(-5deg);\r\n            transform: rotate(-5deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n@keyframes swing {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: rotate(10deg);\r\n            transform: rotate(10deg);\r\n  }\r\n  30% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  40% {\r\n    -webkit-transform: rotate(-10deg);\r\n            transform: rotate(-10deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  60% {\r\n    -webkit-transform: rotate(5deg);\r\n            transform: rotate(5deg);\r\n  }\r\n  70% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  80% {\r\n    -webkit-transform: rotate(-5deg);\r\n            transform: rotate(-5deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes sonar {\r\n  0% {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes sonar {\r\n  0% {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.page-wrapper .sidebar-wrapper,\r\n.sidebar-wrapper .sidebar-brand > a,\r\n.sidebar-wrapper .sidebar-dropdown > a:after,\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before,\r\n.sidebar-wrapper ul li a i,\r\n.page-wrapper .page-content,\r\n.sidebar-wrapper .sidebar-search input.search-menu,\r\n.sidebar-wrapper .sidebar-search .input-group-text,\r\n.sidebar-wrapper .sidebar-menu ul li a,\r\n#show-sidebar,\r\n#close-sidebar {\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n/*----------------page-wrapper----------------*/\r\n\r\n.page-wrapper {\r\n  height: 100vh;\r\n}\r\n\r\n.page-wrapper .theme {\r\n  width: 40px;\r\n  height: 40px;\r\n  display: inline-block;\r\n  border-radius: 4px;\r\n  margin: 2px;\r\n}\r\n\r\n.page-wrapper .theme.chiller-theme {\r\n  background: #1d1d1d;\r\n}\r\n\r\n.page-wrapper .theme.ice-theme {\r\n  background: #2b3a42;\r\n}\r\n\r\n.page-wrapper .theme.light-theme {\r\n  background: #f1f0ed;\r\n}\r\n\r\n.page-wrapper .theme.cool-theme {\r\n  background: #38373d;\r\n}\r\n\r\n.page-wrapper .theme.green-theme {\r\n  background: #2c5e2e;\r\n}\r\n\r\n.page-wrapper .theme.spicy-theme {\r\n  background: #8e2800;\r\n}\r\n\r\n.page-wrapper .theme.purple-theme {\r\n  background: #372049;\r\n}\r\n\r\n/*----------------toggeled sidebar----------------*/\r\n\r\n.page-wrapper.toggled .sidebar-wrapper {\r\n  left: 0px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .page-wrapper.toggled .page-content {\r\n    padding-left: 300px;\r\n  }\r\n}\r\n\r\n/*----------------show sidebar button----------------*/\r\n\r\n#show-sidebar {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 10px;\r\n  border-radius: 0 4px 4px 0px;\r\n  width: 35px;\r\n  transition-delay: 0.3s;\r\n}\r\n\r\n.page-wrapper.toggled #show-sidebar {\r\n  left: -40px;\r\n}\r\n\r\n/*----------------sidebar-wrapper----------------*/\r\n\r\n.sidebar-wrapper {\r\n  width: 260px;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -300px;\r\n  z-index: 999;\r\n}\r\n\r\n.sidebar-wrapper ul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.sidebar-wrapper a {\r\n  text-decoration: none;\r\n}\r\n\r\n/*----------------sidebar-content----------------*/\r\n\r\n.sidebar-content {\r\n  max-height: calc(100% - 30px);\r\n  height: calc(100% - 30px);\r\n  overflow-y: auto;\r\n  position: relative;\r\n}\r\n\r\n.sidebar-content.desktop {\r\n  overflow-y: hidden;\r\n}\r\n\r\n/*--------------------sidebar-brand----------------------*/\r\n\r\n.sidebar-wrapper .sidebar-brand {\r\n  padding: 10px 20px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-brand > a {\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  flex-grow: 1;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-brand #close-sidebar {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n\r\n/*--------------------sidebar-header----------------------*/\r\n\r\n.sidebar-wrapper .sidebar-header {\r\n  padding: 20px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-header .user-pic {\r\n  float: left;\r\n  width: 60px;\r\n  padding: 2px;\r\n  border-radius: 12px;\r\n  margin-right: 15px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-header .user-pic img {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-header .user-info {\r\n  float: left;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-header .user-info > span {\r\n  display: block;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-header .user-info .user-role {\r\n  font-size: 12px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-header .user-info .user-status {\r\n  font-size: 11px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-header .user-info .user-status i {\r\n  font-size: 8px;\r\n  margin-right: 4px;\r\n  color: #5cb85c;\r\n}\r\n\r\n/*-----------------------sidebar-search------------------------*/\r\n\r\n.sidebar-wrapper .sidebar-search > div {\r\n  padding: 10px 20px;\r\n}\r\n\r\n/*----------------------sidebar-menu-------------------------*/\r\n\r\n.sidebar-wrapper .sidebar-menu {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu .header-menu span {\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  padding: 15px 20px 5px 20px;\r\n  display: inline-block;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu ul li a {\r\n  display: inline-block;\r\n  width: 100%;\r\n  text-decoration: none;\r\n  position: relative;\r\n  padding: 8px 30px 8px 20px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu ul li a i {\r\n  margin-right: 10px;\r\n  font-size: 12px;\r\n  width: 30px;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu ul li a:hover > i::before {\r\n  display: inline-block;\r\n  -webkit-animation: swing ease-in-out 0.5s 1 alternate;\r\n          animation: swing ease-in-out 0.5s 1 alternate;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown > a:after {\r\n  font-family: \"Font Awesome 5 Free\";\r\n  font-weight: 900;\r\n  content: \"\\f105\";\r\n  font-style: normal;\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-align: center;\r\n  background: 0 0;\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 14px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {\r\n  padding: 5px 0;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li {\r\n  padding-left: 25px;\r\n  font-size: 13px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {\r\n  content: \"\\f111\";\r\n  font-family: \"Font Awesome 5 Free\";\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  display: inline-block;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  margin-right: 10px;\r\n  font-size: 8px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu ul li a span.label,\r\n.sidebar-wrapper .sidebar-menu ul li a span.badge {\r\n  float: right;\r\n  margin-top: 8px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {\r\n  float: right;\r\n  margin-top: 0px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-submenu {\r\n  display: none;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a:after {\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n  right: 17px;\r\n}\r\n\r\n/*--------------------------side-footer------------------------------*/\r\n\r\n.sidebar-footer {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0;\r\n  display: flex;\r\n}\r\n\r\n.sidebar-footer > a {\r\n  flex-grow: 1;\r\n  text-align: center;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  position: relative;\r\n}\r\n\r\n.sidebar-footer > a .notification {\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.badge-sonar {\r\n  display: inline-block;\r\n  background: #980303;\r\n  border-radius: 50%;\r\n  height: 8px;\r\n  width: 8px;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.badge-sonar:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  border: 2px solid #980303;\r\n  opacity: 0;\r\n  border-radius: 50%;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-animation: sonar 1.5s infinite;\r\n          animation: sonar 1.5s infinite;\r\n}\r\n\r\n/*--------------------------page-content-----------------------------*/\r\n\r\n.page-wrapper .page-content {\r\n  display: inline-block;\r\n  width: 100%;\r\n  padding-left: 0px;\r\n  padding-top: 20px;\r\n}\r\n\r\n.page-wrapper .page-content > div {\r\n  padding: 20px 40px;\r\n}\r\n\r\n.page-wrapper .page-content {\r\n  overflow-x: hidden;\r\n}\r\n\r\n/*------scroll bar---------------------*/\r\n\r\n::-webkit-scrollbar {\r\n  width: 7px;\r\n  height: 7px;\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n  width: 0px;\r\n  height: 0px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #636269;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #636269;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:active {\r\n  background: #636269;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #333238;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n  background: #333238;\r\n}\r\n\r\n::-webkit-scrollbar-track:active {\r\n  background: #333238;\r\n}\r\n\r\n::-webkit-scrollbar-corner {\r\n  background: transparent;\r\n}\r\n\r\n/*-----------------------------chiller-theme-------------------------------------------------*/\r\n\r\n.chiller-theme .sidebar-wrapper {\r\n    background: #1d1d1d;\r\n}\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-header,\r\n.chiller-theme .sidebar-wrapper .sidebar-search,\r\n.chiller-theme .sidebar-wrapper .sidebar-menu {\r\n    border-top: 1px solid #2b2b2b;\r\n}\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\r\n.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {\r\n    border-color: #2b2b2b;\r\n    box-shadow: none;\r\n}\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-role,\r\n.chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-status,\r\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\r\n.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text,\r\n.chiller-theme .sidebar-wrapper .sidebar-brand>a,\r\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li a,\r\n.chiller-theme .sidebar-footer>a {\r\n    color: #bdbdbd;\r\n}\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li:hover>a,\r\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active>a,\r\n.chiller-theme .sidebar-wrapper .sidebar-header .user-info,\r\n.chiller-theme .sidebar-wrapper .sidebar-brand>a:hover,\r\n.chiller-theme .sidebar-footer>a:hover i {\r\n    color: #ffffff;\r\n}\r\n\r\n.page-wrapper.chiller-theme.toggled #toggle-sidebar div {\r\n    background: #bdbdbd;\r\n}\r\n\r\n.page-wrapper.chiller-theme.toggled #toggle-sidebar:hover div {\r\n    background: #ffffff;\r\n}\r\n\r\n.chiller-theme .sidebar-wrapper ul li:hover a i,\r\n.chiller-theme .sidebar-wrapper .sidebar-dropdown .sidebar-submenu li a:hover:before,\r\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu:focus+span,\r\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active a i {\r\n    color: #ffffff;\r\n}\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li a i,\r\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown div,\r\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\r\n.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {\r\n    background: #2b2b2b;\r\n}\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-menu .header-menu span {\r\n    color: #6c7b88;\r\n}\r\n\r\n.chiller-theme .sidebar-footer {\r\n    background: #2b2b2b;\r\n    box-shadow: 0px -1px 5px #131212;\r\n    border-top: 1px solid #3a3a3a;\r\n}\r\n\r\n.chiller-theme .sidebar-footer>a:first-child {\r\n    border-left: none;\r\n}\r\n\r\n.chiller-theme .sidebar-footer>a:last-child {\r\n    border-right: none;\r\n}\r\n\r\n.chiller-theme .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,\r\n.chiller-theme .mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,\r\n.chiller-theme .mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {\r\n    background: #636363;\r\n}\r\n\r\n.chiller-theme .mCSB_scrollTools .mCSB_draggerRail {\r\n    background-color: transparent;\r\n}"

/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"page-wrapper chiller-theme toggled\">\r\n        <nav id=\"sidebar\" class=\"sidebar-wrapper\">\r\n            \r\n            <div class=\"sidebar-content\">\r\n                <div id=\"toggle-sidebar\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n                <div class=\"sidebar-brand\">\r\n                    <a href=\"#\">pro sidebar</a>\r\n                </div>\r\n                <div class=\"sidebar-header\">\r\n                    <div class=\"user-pic\">\r\n                        <img class=\"img-responsive img-rounded\" src=\"https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/bootstrap4/assets/img/user.jpg\" alt=\"User picture\">\r\n                    </div>\r\n                    <div class=\"user-info\">\r\n                        <span class=\"user-name\">Jesus\r\n                            <strong>Llaya</strong>\r\n                        </span>\r\n                        <span class=\"user-role\">Administrador</span>\r\n                        <span class=\"user-status\">\r\n                            <i class=\"fa fa-circle\"></i>\r\n                            <span>Online</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <!-- sidebar-header \r\n                <div class=\"sidebar-search\">\r\n                    <div>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control search-menu\" placeholder=\"Search...\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <!-- sidebar-search  -->\r\n                <div class=\"sidebar-menu\">\r\n                    <ul>\r\n                            <li><a href=\"#\">\r\n                                    <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\r\n                                    <span>Home</span>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                    <a href=\"#projectSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\r\n                                            <i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>\r\n                                        Mis Proyectos\r\n                                    </a>\r\n                                    <ul class=\"collapse list-unstyled\" id=\"projectSubmenu\">\r\n                                        <li>\r\n                                            <a href=\"newProject\">Nuevo Proyecto</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\">Proyectos Aceptados</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#\">Proyectos en Bandeja</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                                <li>\r\n                                        <a href=\"#taskSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\r\n                                                <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i>\r\n                                            Mis Tareas\r\n                                        </a>\r\n                                        <ul class=\"collapse list-unstyled\" id=\"taskSubmenu\">\r\n                                            <li>\r\n                                                <a href=\"newProject\">Nuevo Proyecto</a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\">Proyectos Aceptados</a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\">Proyectos en Bandeja</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                    <li>\r\n                                            <a href=\"#resourceSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\r\n                                                    <i class=\"fa fa-gavel\" aria-hidden=\"true\"></i>\r\n                                                Mis Recursos\r\n                                            </a>\r\n                                            <ul class=\"collapse list-unstyled\" id=\"resourceSubmenu\">\r\n                                                <li>\r\n                                                    <a href=\"newProject\">Nuevo Proyecto</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"#\">Proyectos Aceptados</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"#\">Proyectos en Bandeja</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <li>\r\n                                                <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">\r\n                                                        <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\r\n                                                    Mis Estadisticas\r\n                                                </a>\r\n                                                <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\r\n                                                    <li>\r\n                                                        <a href=\"newProject\">Nuevo Proyecto</a>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <a href=\"#\">Proyectos Aceptados</a>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <a href=\"#\">Proyectos en Bandeja</a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </li>\r\n                         \r\n                                \r\n                            \r\n                        <li class=\"header-menu\">\r\n                            <span>Extra</span>\r\n                        </li>\r\n                        \r\n                        <li>\r\n                            <a href=\"#\">\r\n                                <i class=\"fa fa-folder\"></i>\r\n                                <span>Examples</span>\r\n                            </a>\r\n                        </li>\r\n                        \r\n                    </ul>\r\n                </div>\r\n                <!-- sidebar-menu  -->\r\n            </div>\r\n            <!-- sidebar-content  -->\r\n            <div class=\"sidebar-footer\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-bell\"></i>\r\n                    <span class=\"badge badge-pill badge-warning notification\">3</span>\r\n                </a>\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-envelope\"></i>\r\n                    <span class=\"badge badge-pill badge-success notification\">7</span>\r\n                </a>\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-cog\"></i>\r\n                    <span class=\"badge-sonar\"></span>\r\n                </a>\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-power-off\"></i>\r\n                </a>\r\n            </div>\r\n        </nav>\r\n    <!-- page-content\" -->\r\n    </div>\r\n\r\n   \r\n   \r\n<script>\r\n jQuery(function ($) {\r\n\r\n$(\".sidebar-dropdown > a\").click(function () {\r\n    $(\".sidebar-submenu\").slideUp(200);\r\n    if ($(this).parent().hasClass(\"active\")) {\r\n        $(\".sidebar-dropdown\").removeClass(\"active\");\r\n        $(this).parent().removeClass(\"active\");\r\n    } else {\r\n        $(\".sidebar-dropdown\").removeClass(\"active\");\r\n        $(this).next(\".sidebar-submenu\").slideDown(200);\r\n        $(this).parent().addClass(\"active\");\r\n    }\r\n\r\n});\r\n\r\n$(\"#toggle-sidebar\").click(function () {\r\n    $(\".page-wrapper\").toggleClass(\"toggled\");\r\n});\r\n\r\n\r\n});\r\n</script>\r\n"

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

module.exports = "\r\n<form [formGroup]=\"projectForm\" (ngSubmit)=\"onSubmit()\">\r\n  <h1>New Project</h1>\r\n\r\n  <div class=\"form-group\">\r\n      <label>Name:\r\n          <input type=\"text\" formControlName=\"nameProject\" class=\"form-control\" placeholder=\"Write a name\" required>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Description:\r\n          <input type=\"text\" formControlName=\"description\" class=\"form-control\" placeholder=\"Write a description\" required>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Project Type:\r\n          <select class=\"form-control\" required>\r\n              <option>Add new Project Type</option>\r\n              <option>OutDoor</option>\r\n              <option>InDoor</option>\r\n              <option>Drive Test</option>\r\n            </select>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Client select:\r\n          <select class=\"form-control\" required>\r\n              <option>Add new Client</option>\r\n              <option>Claro</option>\r\n              <option>Movistar</option>\r\n              <option>Personal</option>\r\n            </select>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Project Leader:\r\n          <select class=\"form-control\" required>\r\n              <option>Add new Project Leader</option>\r\n              <option>Llaya Jesus</option>\r\n              <option>Pra Adolfo</option>\r\n          </select>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Estimated Start Date:\r\n          <input type=\"date\" formControlName=\"estimatedStartDate\" class=\"form-control\" required>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label>\r\n          Estimated Finish Date:\r\n          <input type=\"date\" formControlName=\"estimatedFinishDate\" class=\"form-control\" required>\r\n      </label>\r\n  </div>\r\n  <div formGroupName=\"location\" class=\"form-group\">\r\n      <label>\r\n          Street:\r\n          <input type=\"text\" formControlName=\"street\" required class=\"form-control\" required>\r\n      </label>\r\n      <label>\r\n          City:\r\n          <select class=\"form-control\" required>\r\n              <option>Capital</option>\r\n              <option>Rio Cuarto</option>\r\n          </select>\r\n      </label>\r\n      <label>\r\n          State:\r\n          <select class=\"form-control\" required>\r\n              <option>Cordoba</option>\r\n              <option>Salta</option>\r\n          </select>\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <button type=\"submit\" [disabled]=\"!projectForm.valid\" class=\"btn btn-primary\">Save</button>\r\n  </div>\r\n       \r\n\r\n\r\n            \r\n  </form>\r\n\r\n  <p>\r\n    Estado del Formulario: {{projectForm.status}}\r\n  </p>\r\n\r\n  <!--\r\n  <div formArrayName=\"alias\">\r\n      <h3>Aliases</h3> <button (click)=\"addAlias()\">Add Alias</button>\r\n    \r\n      <div *ngFor=\"let address of alias.controls; let i=index\">\r\n      \r\n        <label>\r\n          Alias:\r\n          <input type=\"text\" [formControlName]=\"i\">\r\n        </label>\r\n      </div>\r\n    </div>\r\n  -->\r\n\r\n  <script type=\"text/javascript\">\r\n      console.log(\"ENTRA\");\r\n  </script>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

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

module.exports = __webpack_require__(/*! C:\Users\Fofi Pra\Documents\GitHub\Akira\globo-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map