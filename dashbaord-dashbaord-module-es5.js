function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashbaord-dashbaord-module"], {
  /***/
  "./src/app/dashbaord/dashbaord.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashbaord/dashbaord.module.ts ***!
    \***********************************************/

  /*! exports provided: DashbaordModule */

  /***/
  function srcAppDashbaordDashbaordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashbaordModule", function () {
      return DashbaordModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/dashbaord/home-page/home-page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashbaord_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashbaord.routing */
    "./src/app/dashbaord/dashbaord.routing.ts");
    /* harmony import */


    var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared/shared.module */
    "./src/app/shared/shared/shared.module.ts");

    var DashbaordModule = /*@__PURE__*/function () {
      var DashbaordModule = function DashbaordModule() {
        _classCallCheck(this, DashbaordModule);
      };

      DashbaordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashbaordModule
      });
      DashbaordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashbaordModule_Factory(t) {
          return new (t || DashbaordModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashbaord_routing__WEBPACK_IMPORTED_MODULE_4__["dashboardRoute"])]]
      });
      return DashbaordModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashbaordModule, {
        declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dashbaord/dashbaord.routing.ts":
  /*!************************************************!*\
    !*** ./src/app/dashbaord/dashbaord.routing.ts ***!
    \************************************************/

  /*! exports provided: dashboardRoute */

  /***/
  function srcAppDashbaordDashbaordRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dashboardRoute", function () {
      return dashboardRoute;
    });
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/dashbaord/home-page/home-page.component.ts");

    var dashboardRoute = [{
      path: '',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__["HomePageComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/dashbaord/home-page/home-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/dashbaord/home-page/home-page.component.ts ***!
    \************************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppDashbaordHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_tanslation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/tanslation.service */
    "./src/app/services/tanslation.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "text-right": a0
      };
    };

    var HomePageComponent = /*@__PURE__*/function () {
      var HomePageComponent = /*#__PURE__*/function () {
        function HomePageComponent(translate) {
          _classCallCheck(this, HomePageComponent);

          this.translate = translate;
        }

        _createClass(HomePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomePageComponent;
      }();

      HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
        return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_tanslation_service__WEBPACK_IMPORTED_MODULE_1__["TanslationService"]));
      };

      HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePageComponent,
        selectors: [["app-home-page"]],
        decls: 2,
        vars: 3,
        consts: [[3, "ngClass"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to Dashbaord");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.translate.currentLang == "ar"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hiYW9yZC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      return HomePageComponent;
    }();
    /***/

  }
}]);
//# sourceMappingURL=dashbaord-dashbaord-module-es5.js.map