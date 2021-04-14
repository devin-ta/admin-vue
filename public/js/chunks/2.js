(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logo.vue */ "./resources/js/src/layouts/components/Logo.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-nav-menu",
  components: {
    Logo: _Logo_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    logo: {
      type: String
    },
    openGroupHover: {
      type: Boolean,
      "default": false
    },
    parent: {
      type: String
    },
    reduceNotRebound: {
      type: Boolean,
      "default": true
    },
    navMenuItems: {
      type: Array,
      required: true
    },
    title: {
      type: String
    }
  },
  data: function data() {
    return {
      clickNotClose: false,
      // disable close navMenu on outside click
      isMouseEnter: false,
      reduce: false,
      // determines if navMenu is reduce - component property
      showCloseButton: false,
      // show close button in smaller devices
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 1,
        swipeEasing: true
      },
      showShadowBottom: false
    };
  },
  computed: {
    isVerticalNavMenuActive: {
      get: function get() {
        return this.$store.state.isVerticalNavMenuActive;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', val);
      }
    },
    verticalNavMenuItemsMin: function verticalNavMenuItemsMin() {
      return this.$store.state.verticalNavMenuItemsMin;
    },
    reduceButton: {
      get: function get() {
        return this.$store.state.reduceButton;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
      }
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    },
    layoutType: function layoutType() {
      return this.$store.state.mainLayoutType;
    },
    isVerticalNavMenuReduced: function isVerticalNavMenuReduced() {
      return Boolean(this.reduce && this.reduceButton);
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    menuItemsUpdated: function menuItemsUpdated() {
      var clone = this.navMenuItems.slice();

      var _iterator = _createForOfIteratorHelper(this.navMenuItems.entries()),
          _step;

      try {
        var _loop = function _loop() {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              item = _step$value[1];

          if (item.header && item.items.length && (index || 1)) {
            var i = clone.findIndex(function (ix) {
              return ix.header === item.header;
            });

            var _iterator2 = _createForOfIteratorHelper(item.items.entries()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                    subIndex = _step2$value[0],
                    subItem = _step2$value[1];

                clone.splice(i + 1 + subIndex, 0, subItem);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return clone;
    }
  },
  watch: {},
  methods: {
    onMenuSwipe: function onMenuSwipe(event) {
      // Swipe Right
      if (event.direction === 4 && this.$vs.rtl) {
        if (this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = false;
      } // Swipe Left
      else if (event.direction === 2 && !this.$vs.rtl) {
          if (this.isVerticalNavMenuActive && this.showCloseButton) this.isVerticalNavMenuActive = false;
        }
    },
    mouseEnter: function mouseEnter() {
      if (this.reduce) this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false);
      this.isMouseEnter = true;
    },
    mouseLeave: function mouseLeave() {
      if (this.reduce) this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', true);
      this.isMouseEnter = false;
    },
    toggleReduce: function toggleReduce(val) {
      this.reduceButton = val;
      this.setVerticalNavMenuWidth();
    },
    setVerticalNavMenuWidth: function setVerticalNavMenuWidth() {
      if (this.windowWidth > 1200) {
        if (this.layoutType === 'vertical') {
          // Set reduce
          this.reduce = !!this.reduceButton; // Open NavMenu

          this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true); // Set Menu Items Only Icon Mode

          var verticalNavMenuItemsMin = !!(this.reduceButton && !this.isMouseEnter);
          this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', verticalNavMenuItemsMin); // Menu Action Buttons

          this.clickNotClose = true;
          this.showCloseButton = false;
          var verticalNavMenuWidth = this.isVerticalNavMenuReduced ? 'reduced' : 'default';
          this.$store.dispatch('updateVerticalNavMenuWidth', verticalNavMenuWidth);
          return;
        }
      } // Close NavMenu


      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false); // Reduce Button

      if (this.reduceButton) this.reduce = false; // Menu Action buttons

      this.showCloseButton = true;
      this.clickNotClose = false; // Update NavMenu Width

      this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu'); // Remove Only Icon in Menu

      this.$store.commit('UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN', false);
    },
    psSectionScroll: function psSectionScroll() {
      var scroll_el = this.$refs.verticalNavMenuPs.$el || this.$refs.verticalNavMenuPs;
      this.showShadowBottom = scroll_el.scrollTop > 0;
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/../themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _layouts_components_vertical_nav_menu_navMenuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/vertical-nav-menu/navMenuItems */ "./resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js");
/* harmony import */ var _layouts_components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/components/vertical-nav-menu/VerticalNavMenu.vue */ "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
// TODO: VxTour plugin set up



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VNavMenu: _layouts_components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      disableCustomizer: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["default"].disableCustomizer,
      disableThemeTour: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["default"].disableThemeTour,
      // TODO: Dynamic watchers
      footerType: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["default"].footerType || 'static',
      hideScrollToTop: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["default"].hideScrollToTop,
      isNavbarDark: false,
      navbarColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["default"].navbarColor || '#fff',
      navbarType: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["default"].navbarType || 'floating',
      navMenuItems: _layouts_components_vertical_nav_menu_navMenuItems__WEBPACK_IMPORTED_MODULE_1__["default"],
      routerTransition: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["default"].routerTransition || 'none',
      routeTitle: this.$route.meta.pageTitle // TODO: Tour Steps

    };
  },
  watch: {},
  computed: {
    mainLayoutType: function mainLayoutType() {
      return this.$store.state.mainLayoutType;
    },
    layoutTypeClass: function layoutTypeClass() {
      return "main-".concat(this.mainLayoutType);
    },
    navbarClasses: function navbarClasses() {
      return {
        'navbar-hidden': this.navbarType === 'hidden',
        'navbar-sticky': this.navbarType === 'sticky',
        'navbar-static': this.navbarType === 'static',
        'navbar-floating': this.navbarType === 'floating'
      };
    },
    footerClasses: function footerClasses() {
      return {
        'footer-hidden': this.footerType === 'hidden',
        'footer-sticky': this.footerType === 'sticky',
        'footer-static': this.footerType === 'static'
      };
    },
    isAppPage: function isAppPage() {
      return this.$route.meta.no_scroll;
    }
  },
  methods: {},
  created: function created() {},
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: verticalNavMenu.scss\n  Description: Styles for v-nav-menu component. Imported in VerticalNavMenu.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.v-nav-menu-swipe-area {\n  position: fixed;\n  height: calc(var(--vh, 1vh) * 100);\n  width: 30px;\n  z-index: 1;\n  top: 0;\n}\n[dir] .v-nav-menu-swipe-area {\n  background: transparent;\n}\n[dir=ltr] .v-nav-menu-swipe-area {\n  left: 0;\n}\n[dir=rtl] .v-nav-menu-swipe-area {\n  right: 0;\n}\n.v-nav-menu {\n  white-space: nowrap;\n}\n.v-nav-menu .vs-sidebar--background {\n  z-index: 51000;\n}\n.v-nav-menu .vs-sidebar {\n  z-index: 51000;\n  position: fixed;\n}\n[dir] .v-nav-menu .vs-sidebar .vs-sidebar--items {\n  padding: 0;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce {\n  max-width: 80px;\n}\n[dir] .v-nav-menu .vs-sidebar.vs-sidebar-reduce:hover {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce:hover:not(.vs-sidebar-reduceNotRebound):not(.vs-sidebar-reduceNotHoverExpand) .vs-sidebar-group .group-header i {\n  display: block;\n}\n.v-nav-menu .vs-sidebar.vs-sidebar-reduce .vs-sidebar-group .group-header i {\n  display: none;\n}\n.v-nav-menu .header-sidebar {\n  width: 100%;\n}\n[dir=ltr] .v-nav-menu .header-sidebar {\n  padding: 20px 19px 16px 23px;\n}\n[dir=rtl] .v-nav-menu .header-sidebar {\n  padding: 20px 23px 16px 19px;\n}\n[dir] .v-nav-menu .header-sidebar .logo img {\n  padding: 4px 0;\n}\n.v-nav-menu .header-sidebar .feather-icon svg {\n  color: #7367F0;\n}\n.v-nav-menu .shadow-bottom {\n  position: absolute;\n  z-index: 2;\n  height: 60px;\n  width: 100%;\n  pointer-events: none;\n  filter: blur(5px);\n}\n[dir] .v-nav-menu .shadow-bottom {\n  margin-top: -1.3rem;\n  background: linear-gradient(white 41%, rgba(255, 255, 255, 0.11) 95%, rgba(255, 255, 255, 0) 100%);\n}\n.v-nav-menu .scroll-area-v-nav-menu {\n  position: relative;\n  width: 100%;\n  height: calc(var(--vh, 1vh) * 100 - 69px);\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu {\n  margin: auto;\n}\n.v-nav-menu .scroll-area-v-nav-menu:not(.ps) {\n  overflow-y: auto;\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu > .vs-sidebar-group {\n  padding: 0 15px;\n}\n[dir] .v-nav-menu .scroll-area-v-nav-menu > .vs-sidebar--item {\n  padding: 0 15px;\n}\n.v-nav-menu .navigation-header {\n  font-size: 0.9rem;\n  display: block;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #999;\n}\n[dir] .v-nav-menu .navigation-header {\n  margin-bottom: 0.8rem;\n}\n[dir=ltr] .v-nav-menu .navigation-header {\n  margin-left: 2.2rem;\n}\n[dir=rtl] .v-nav-menu .navigation-header {\n  margin-right: 2.2rem;\n}\n[dir] .v-nav-menu .navigation-header:not(:first-child) {\n  margin-top: 2rem;\n}\n.v-nav-menu .feather-icon {\n  color: #565656;\n}\n[dir=ltr] .v-nav-menu .feather-icon {\n  margin-right: 14px;\n}\n[dir=rtl] .v-nav-menu .feather-icon {\n  margin-left: 14px;\n}\n.v-nav-menu .feather-icon .feather {\n  width: 20px;\n  height: 20px;\n}\n.v-nav-menu .con-vs-chip {\n  min-height: 24px;\n}\n[dir] .v-nav-menu .con-vs-chip {\n  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);\n}\n.v-nav-menu .con-vs-chip .vs-chip--text {\n  color: #fff;\n  font-size: 0.8rem;\n}\n.v-nav-menu .vs-sidebar--item {\n  transition: none;\n  overflow: visible !important;\n}\n.v-nav-menu .vs-sidebar--item:hover a {\n  color: inherit;\n}\n[dir=ltr] .v-nav-menu .vs-sidebar--item:hover a > * {\n  transform: translateX(5px);\n}\n[dir=rtl] .v-nav-menu .vs-sidebar--item:hover a > * {\n  transform: translateX(-5px);\n}\n.v-nav-menu .vs-sidebar--item.vs-sidebar-item-active {\n  font-weight: 400;\n  z-index: 1;\n  position: relative;\n}\n[dir] .v-nav-menu .vs-sidebar--item.vs-sidebar-item-active {\n  border: none !important;\n}\n.v-nav-menu .vs-sidebar--item a {\n  font-size: 1rem;\n  transition: none;\n  opacity: unset;\n  color: #626262;\n}\n[dir] .v-nav-menu .vs-sidebar--item a {\n  border-radius: 4px;\n  padding: 10px 15px;\n}\n.v-nav-menu .vs-sidebar--item a > * {\n  transition: transform 0.25s ease;\n}\n.v-nav-menu .vs-sidebar--item a span {\n  font-size: 15px;\n}\n.v-nav-menu .vs-sidebar--item.disabled-item a span {\n  color: #e2e2e2;\n}\n.theme-dark .v-nav-menu .vs-sidebar--item.disabled-item a {\n  opacity: 0.3;\n}\n[dir] .v-nav-menu .vs-sidebar--item .router-link-active {\n  box-shadow: 0px 0px 10px 1px rgba(var(--vs-primary), 0.7);\n}\n[dir=ltr] .v-nav-menu .vs-sidebar--item .router-link-active {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7));\n}\n[dir=rtl] .v-nav-menu .vs-sidebar--item .router-link-active {\n  background: linear-gradient(-118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7));\n}\n.v-nav-menu .vs-sidebar--item .router-link-active .feather-icon {\n  color: #fff;\n}\n.v-nav-menu .vs-sidebar--item .router-link-active span {\n  color: #fff;\n}\n#sidebar-demo .vs-sidebar {\n  z-index: 52000;\n}\n#sidebar-demo .vs-sidebar-staticPosition {\n  z-index: 10000;\n}\n#sidebar-demo #parentx-demo-7 .parentx:not(.show-custom-sidebar) .vs-sidebar {\n  display: none;\n  z-index: 1 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        viewBox: "0 0 139 95",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }
    },
    [
      _c(
        "defs",
        [
          _c(
            "linearGradient",
            {
              attrs: {
                x1: "100%",
                y1: "10.5120544%",
                x2: "50%",
                y2: "89.4879456%",
                id: "linearGradient-1"
              }
            },
            [
              _c("stop", { attrs: { "stop-color": "#000000", offset: "0%" } }),
              _vm._v(" "),
              _c("stop", { attrs: { "stop-color": "#FFFFFF", offset: "100%" } })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "linearGradient",
            {
              attrs: {
                x1: "64.0437835%",
                y1: "46.3276743%",
                x2: "37.373316%",
                y2: "100%",
                id: "linearGradient-2"
              }
            },
            [
              _c("stop", {
                attrs: {
                  "stop-color": "#EEEEEE",
                  "stop-opacity": "0",
                  offset: "0%"
                }
              }),
              _vm._v(" "),
              _c("stop", { attrs: { "stop-color": "#FFFFFF", offset: "100%" } })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "g",
        {
          attrs: {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
          }
        },
        [
          _c(
            "g",
            {
              attrs: {
                id: "Artboard",
                transform: "translate(-400.000000, -178.000000)"
              }
            },
            [
              _c(
                "g",
                {
                  attrs: {
                    id: "Group",
                    transform: "translate(400.000000, 178.000000)"
                  }
                },
                [
                  _c("path", {
                    staticClass: "text-primary fill-current",
                    attrs: {
                      d:
                        "M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",
                      id: "Path"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      d:
                        "M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",
                      id: "Path",
                      fill: "url(#linearGradient-1)",
                      opacity: "0.2"
                    }
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-2",
                      fill: "#000000",
                      opacity: "0.049999997",
                      points:
                        "69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                    }
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-2",
                      fill: "#000000",
                      opacity: "0.099999994",
                      points:
                        "69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                    }
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-3",
                      fill: "url(#linearGradient-2)",
                      opacity: "0.099999994",
                      points:
                        "101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                    }
                  })
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "parentx" },
    [
      _c(
        "vs-sidebar",
        {
          directives: [
            {
              name: "hammer",
              rawName: "v-hammer:swipe",
              value: _vm.onMenuSwipe,
              expression: "onMenuSwipe",
              arg: "swipe"
            }
          ],
          ref: "verticalNavMenu",
          staticClass: "v-nav-menu items-no-padding",
          attrs: {
            "default-index": "-1",
            "click-not-close": _vm.clickNotClose,
            "reduce-not-rebound": _vm.reduceNotRebound,
            parent: _vm.parent,
            hiddenBackground: _vm.clickNotClose,
            reduce: _vm.reduce
          },
          model: {
            value: _vm.isVerticalNavMenuActive,
            callback: function($$v) {
              _vm.isVerticalNavMenuActive = $$v
            },
            expression: "isVerticalNavMenuActive"
          }
        },
        [
          _c(
            "div",
            { on: { mouseenter: _vm.mouseEnter, mouseleave: _vm.mouseLeave } },
            [
              _c(
                "div",
                {
                  staticClass: "header-sidebar flex items-end justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "vx-logo cursor-pointer flex items-center",
                      attrs: { tag: "div", to: "/" }
                    },
                    [
                      _c("logo", {
                        staticClass: "w-10 mr-4 fill-current text-primary"
                      }),
                      _vm._v(" "),
                      _vm.title
                        ? _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.isMouseEnter || !_vm.reduce,
                                  expression: "isMouseEnter || !reduce"
                                }
                              ],
                              staticClass: "vx-logo-text text-primary"
                            },
                            [_vm._v(_vm._s(_vm.title))]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _vm.showCloseButton
                        ? [
                            _c("feather-icon", {
                              staticClass: "m-0 cursor-pointer",
                              attrs: { icon: "XIcon" },
                              on: {
                                click: function($event) {
                                  return _vm.$store.commit(
                                    "TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE",
                                    false
                                  )
                                }
                              }
                            })
                          ]
                        : !_vm.showCloseButton && !_vm.verticalNavMenuItemsMin
                        ? [
                            _c("feather-icon", {
                              staticClass: "mr-0 cursor-pointer",
                              attrs: {
                                id: "btnVNavMenuMinToggler",
                                icon: _vm.reduce ? "CircleIcon" : "DiscIcon",
                                "svg-classes": "stroke-current text-primary"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toggleReduce(!_vm.reduce)
                                }
                              }
                            })
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showShadowBottom,
                    expression: "showShadowBottom"
                  }
                ],
                staticClass: "shadow-bottom"
              }),
              _vm._v(" "),
              _c(
                _vm.scrollbarTag,
                {
                  key: _vm.$vs.rtl,
                  ref: "verticalNavMenuPs",
                  tag: "component",
                  staticClass: "scroll-area-v-nav-menu pt-2",
                  attrs: { settings: _vm.settings },
                  on: {
                    "ps-scroll-y": _vm.psSectionScroll,
                    scroll: _vm.psSectionScroll
                  }
                },
                [
                  _vm._l(_vm.menuItemsUpdated, function(item, index) {
                    return [
                      item.header && !_vm.verticalNavMenuItemsMin
                        ? _c(
                            "span",
                            {
                              key: "header-" + index,
                              staticClass: "navigation-header truncate"
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t(item.i18n) || item.header) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  })
                ],
                2
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "layout--main",
      class: [
        _vm.layoutTypeClass,
        _vm.navbarClasses,
        _vm.footerClasses,
        { "no-scroll": _vm.isAppPage }
      ]
    },
    [
      _c("v-nav-menu", {
        attrs: {
          navMenuItems: _vm.navMenuItems,
          title: "Vuexy",
          parent: ".layout--main"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/layouts/components/Logo.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/layouts/components/Logo.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=212d79e5& */ "./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=212d79e5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=template&id=667d9133& */ "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133&");
/* harmony import */ var _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=template&id=667d9133& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=667d9133&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_667d9133___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ([// {
//   url: "/apps/email",
//   name: "Email",
//   slug: "email",
//   icon: "MailIcon",
//   i18n: "Email",
// },
{
  url: null,
  name: "Dashboard",
  tag: "2",
  tagColor: "warning",
  icon: "HomeIcon",
  i18n: "Dashboard",
  submenu: [{
    url: '/dashboard/analytics',
    name: "Analytics",
    slug: "dashboard-analytics",
    i18n: "Analytics"
  }, {
    url: '/dashboard/ecommerce',
    name: "eCommerce",
    slug: "dashboard-ecommerce",
    i18n: "eCommerce"
  }]
}, {
  header: "Apps",
  icon: "PackageIcon",
  i18n: "Apps",
  items: [{
    url: "/apps/email",
    name: "Email",
    slug: "email",
    icon: "MailIcon",
    i18n: "Email"
  }, {
    url: "/apps/chat",
    name: "Chat",
    slug: "chat",
    icon: "MessageSquareIcon",
    i18n: "Chat"
  }, {
    url: "/apps/todo",
    name: "Todo",
    slug: "todo",
    icon: "CheckSquareIcon",
    i18n: "Todo"
  }, {
    url: "/apps/calendar/vue-simple-calendar",
    name: "Calendar",
    slug: "calendar-simple-calendar",
    icon: "CalendarIcon",
    tagColor: "success",
    i18n: "Calendar"
  }, {
    url: null,
    name: "eCommerce",
    icon: "ShoppingCartIcon",
    i18n: "eCommerce",
    submenu: [{
      url: '/apps/eCommerce/shop',
      name: "Shop",
      slug: "ecommerce-shop",
      i18n: "Shop"
    }, {
      url: '/apps/eCommerce/item/',
      name: "Item Details",
      slug: "ecommerce-item-detail-view",
      i18n: "ItemDetails"
    }, {
      url: '/apps/eCommerce/wish-list',
      name: "Wish List",
      slug: "ecommerce-wish-list",
      i18n: "WishList"
    }, {
      url: '/apps/eCommerce/checkout',
      name: "Checkout",
      slug: "ecommerce-checkout",
      i18n: "Checkout"
    }]
  }, {
    url: null,
    name: "User",
    icon: "UserIcon",
    i18n: "User",
    submenu: [{
      url: '/apps/user/user-list',
      name: "List",
      slug: "app-user-list",
      i18n: "List"
    }, {
      url: '/apps/user/user-view/268',
      name: "View",
      slug: "app-user-view",
      i18n: "View"
    }, {
      url: '/apps/user/user-edit/268',
      name: "Edit",
      slug: "app-user-edit",
      i18n: "Edit"
    }]
  }]
}, {
  header: "UI",
  icon: "LayersIcon",
  i18n: "UI",
  items: [{
    url: null,
    name: "Data List",
    tag: "new",
    tagColor: "primary",
    icon: "ListIcon",
    i18n: "DataList",
    submenu: [{
      url: '/ui-elements/data-list/list-view',
      name: "List View",
      slug: "data-list-list-view",
      i18n: "ListView"
    }, {
      url: '/ui-elements/data-list/thumb-view',
      name: "Thumb View",
      slug: "data-list-thumb-view",
      i18n: "ThumbView"
    }]
  }, {
    url: null,
    name: "Grid",
    icon: "LayoutIcon",
    i18n: "Grid",
    submenu: [{
      url: '/ui-elements/grid/vuesax',
      name: "Vuesax",
      slug: "grid-vuesax",
      i18n: "Vuesax"
    }, {
      url: '/ui-elements/grid/tailwind',
      name: "Tailwind",
      slug: "grid-tailwind",
      i18n: "Tailwind"
    }]
  }, {
    url: "/ui-elements/colors",
    name: "Colors",
    slug: "colors",
    icon: "DropletIcon",
    i18n: "Colors"
  }, {
    url: null,
    name: "Card",
    icon: "CreditCardIcon",
    i18n: "Card",
    submenu: [{
      url: '/ui-elements/card/basic',
      name: "Basic",
      slug: "basic-cards",
      i18n: "Basic"
    }, {
      url: '/ui-elements/card/statistics',
      name: "Statistics",
      slug: "statistics-cards",
      i18n: "Statistics"
    }, {
      url: '/ui-elements/card/analytics',
      name: "Analytics",
      slug: "analytics-cards",
      i18n: "Analytics"
    }, {
      url: '/ui-elements/card/card-actions',
      name: "Card Actions",
      slug: "card-actions",
      i18n: "CardActions"
    }, {
      url: '/ui-elements/card/card-colors',
      name: "Card Colors",
      slug: "card-colors",
      i18n: "CardColors"
    }]
  }, {
    url: null,
    name: "Components",
    icon: "ArchiveIcon",
    i18n: "Components",
    submenu: [{
      url: '/components/alert',
      name: "Alert",
      slug: "component-alert",
      i18n: "Alert"
    }, {
      url: '/components/avatar',
      name: "Avatar",
      slug: "component-avatar",
      i18n: "Avatar"
    }, {
      url: '/components/breadcrumb',
      name: "Breadcrumb",
      slug: "component-breadcrumb",
      i18n: "Breadcrumb"
    }, {
      url: '/components/button',
      name: "Button",
      slug: "component-button",
      i18n: "Button"
    }, {
      url: '/components/button-group',
      name: "Button Group",
      slug: "component-button-group",
      i18n: "ButtonGroup"
    }, {
      url: '/components/chip',
      name: "Chip",
      slug: "component-chip",
      i18n: "Chip"
    }, {
      url: '/components/collapse',
      name: "Collapse",
      slug: "component-collapse",
      i18n: "Collapse"
    }, {
      url: '/components/dialogs',
      name: "Dialogs",
      slug: "component-dialog",
      i18n: "Dialogs"
    }, {
      url: '/components/divider',
      name: "Divider",
      slug: "component-divider",
      i18n: "Divider"
    }, {
      url: '/components/dropdown',
      name: "DropDown",
      slug: "component-drop-down",
      i18n: "DropDown"
    }, {
      url: '/components/list',
      name: "List",
      slug: "component-list",
      i18n: "List"
    }, {
      url: '/components/loading',
      name: "Loading",
      slug: "component-loading",
      i18n: "Loading"
    }, {
      url: '/components/navbar',
      name: "Navbar",
      slug: "component-navbar",
      i18n: "Navbar"
    }, {
      url: '/components/notifications',
      name: "Notifications",
      slug: "component-notifications",
      i18n: "Notifications"
    }, {
      url: '/components/pagination',
      name: "Pagination",
      slug: "component-pagination",
      i18n: "Pagination"
    }, {
      url: '/components/popup',
      name: "Popup",
      slug: "component-popup",
      i18n: "Popup"
    }, {
      url: '/components/progress',
      name: "Progress",
      slug: "component-progress",
      i18n: "Progress"
    }, {
      url: '/components/sidebar',
      name: "Sidebar",
      slug: "component-sidebar",
      i18n: "Sidebar"
    }, {
      url: '/components/slider',
      name: "Slider",
      slug: "component-slider",
      i18n: "Slider"
    }, {
      url: '/components/tabs',
      name: "Tabs",
      slug: "component-tabs",
      i18n: "Tabs"
    }, {
      url: '/components/tooltip',
      name: "Tooltip",
      slug: "component-tooltip",
      i18n: "Tooltip"
    }, {
      url: '/components/upload',
      name: "Upload",
      slug: "component-upload",
      i18n: "Upload"
    }]
  }, {
    url: null,
    name: "Extensions",
    icon: "PlusCircleIcon",
    i18n: "Extensions",
    submenu: [{
      url: '/extensions/select',
      name: "Select",
      icon: "PocketIcon",
      slug: "extra-component-select",
      i18n: "Select"
    }, {
      url: '/extensions/quill-editor',
      name: "Quill Editor",
      icon: "EditIcon",
      slug: "extra-component-quill-editor",
      i18n: "QuillEditor"
    }, {
      url: '/extensions/drag-and-drop',
      name: "Drag & Drop",
      icon: "DropletIcon",
      slug: "extra-component-drag-and-drop",
      i18n: "DragAndDrop"
    }, {
      url: '/extensions/datepicker',
      name: "Datepicker",
      icon: "CalendarIcon",
      slug: "extra-component-datepicker",
      i18n: "Datepicker"
    }, {
      url: '/extensions/datetime-picker',
      name: "Datetime Picker",
      icon: "ClockIcon",
      slug: "extra-component-datetime-picker",
      i18n: "DatetimePicker"
    }, {
      url: '/extensions/access-control',
      name: "Access Control",
      slug: "extra-component-access-control",
      i18n: "AccessControl"
    }, {
      url: '/extensions/i18n',
      name: "I18n",
      slug: "extra-component-i18n",
      i18n: "I18n"
    }, {
      url: '/extensions/carousel',
      name: "Carousel",
      icon: "LayersIcon",
      slug: "extra-component-carousel",
      i18n: "Carousel"
    }, {
      url: '/extensions/clipboard',
      name: "Clipboard",
      icon: "CopyIcon",
      slug: "extra-component-clipboard",
      i18n: "Clipboard"
    }, {
      url: '/extensions/context-menu',
      name: "Context Menu",
      icon: "MoreHorizontalIcon",
      slug: "extra-component-context-menu",
      i18n: "ContextMenu"
    }, {
      url: '/extensions/star-ratings',
      name: "Star Ratings",
      icon: "StarIcon",
      slug: "extra-component-star-ratings",
      i18n: "StarRatings"
    }, {
      url: '/extensions/autocomplete',
      name: "Autocomplete",
      icon: "Edit3Icon",
      slug: "extra-component-autocomplete",
      i18n: "Autocomplete"
    }, {
      url: '/extensions/tree',
      name: "Tree",
      icon: "GitPullRequestIcon",
      slug: "extra-component-tree",
      i18n: "Tree"
    }, // {
    //   name: "Import/Export",
    //   i18n: "Import/Export",
    //   submenu: [
    //   ]
    // },
    {
      url: "/import-export/import",
      name: "Import",
      icon: "HomeIcon",
      slug: "import",
      i18n: "Import"
    }, {
      url: "/import-export/export",
      name: "Export",
      icon: "HomeIcon",
      slug: "export",
      i18n: "Export"
    }, {
      url: "/import-export/export-selected",
      name: "Export Selected",
      icon: "HomeIcon",
      slug: "export-selected",
      i18n: "ExportSelected"
    }]
  }]
}, {
  header: "Forms & Table",
  icon: "Edit3Icon",
  i18n: "FormsAndTable",
  items: [{
    url: null,
    name: "Form Elements",
    icon: "CopyIcon",
    i18n: "FormElements",
    submenu: [// {
    //  url: '/forms/form-elements/select',
    //  name: "Select",
    //  slug: "form-element-select",
    //  i18n: "Select",
    // },
    {
      url: '/forms/form-elements/switch',
      name: "Switch",
      slug: "form-element-switch",
      i18n: "Switch"
    }, {
      url: '/forms/form-elements/checkbox',
      name: "Checkbox",
      slug: "form-element-checkbox",
      i18n: "Checkbox"
    }, {
      url: '/forms/form-elements/radio',
      name: "Radio",
      slug: "form-element-radio",
      i18n: "Radio"
    }, {
      url: '/forms/form-elements/input',
      name: "Input",
      slug: "form-element-input",
      i18n: "Input"
    }, {
      url: '/forms/form-elements/number-input',
      name: "Number Input",
      slug: "form-element-number-input",
      i18n: "NumberInput"
    }, {
      url: '/forms/form-elements/textarea',
      name: "Textarea",
      slug: "form-element-textarea",
      i18n: "Textarea"
    }]
  }, {
    url: '/forms/form-layouts',
    name: "Form Layouts",
    icon: "PackageIcon",
    slug: "forms-form-layouts",
    i18n: "FormLayouts"
  }, {
    url: '/forms/form-wizard',
    name: "Form Wizard",
    icon: "PackageIcon",
    slug: "extra-component-form-wizard",
    i18n: "FormWizard"
  }, {
    url: '/forms/form-validation',
    name: "Form Validation",
    icon: "CheckCircleIcon",
    slug: "extra-component-form-validation",
    i18n: "FormValidation"
  }, {
    url: '/forms/form-input-group',
    name: "Form Input Group",
    icon: "MenuIcon",
    slug: "extra-component-form-input-group",
    i18n: "FormInputGroup"
  }, {
    url: "/ui-elements/table",
    name: "Table",
    slug: "table",
    icon: "GridIcon",
    i18n: "Table"
  }, {
    url: "/ui-elements/ag-grid-table",
    name: "agGrid Table",
    slug: "ag-grid-table",
    icon: "GridIcon",
    i18n: "agGridTable"
  }]
}, {
  header: "Pages",
  icon: "FileIcon",
  i18n: "Pages",
  items: [{
    url: '/pages/profile',
    slug: 'page-profile',
    name: "Profile",
    icon: "UserIcon",
    i18n: "Profile"
  }, {
    url: '/pages/user-settings',
    slug: 'page-user-settings',
    name: "User Settings",
    icon: "SettingsIcon",
    i18n: "UserSettings"
  }, {
    url: '/pages/faq',
    slug: 'page-faq',
    name: "FAQ",
    icon: "HelpCircleIcon",
    i18n: "FAQ"
  }, {
    url: '/pages/knowledge-base',
    slug: 'page-knowledge-base',
    name: "Knowledge Base",
    icon: "InfoIcon",
    i18n: "KnowledgeBase"
  }, {
    url: '/pages/search',
    slug: 'page-search',
    name: "Search",
    icon: "SearchIcon",
    i18n: "Search"
  }, {
    url: '/pages/invoice',
    slug: 'page-invoice',
    name: "Invoice",
    icon: "InfoIcon",
    i18n: "Invoice"
  }, {
    url: null,
    name: "Authentication",
    icon: "PieChartIcon",
    i18n: "Authentication",
    submenu: [{
      url: '/pages/login',
      name: "Login",
      slug: "pages-login",
      i18n: "Login",
      target: '_blank'
    }, {
      url: '/pages/register',
      name: "Register",
      slug: "pages-register",
      i18n: "Register",
      target: '_blank'
    }, {
      url: '/pages/forgot-password',
      name: "Forgot Password",
      slug: "pages-forgot-password",
      i18n: "ForgotPassword",
      target: '_blank'
    }, {
      url: '/pages/reset-password',
      name: "Reset Password",
      slug: "pages-reset-password",
      i18n: "ResetPassword",
      target: '_blank'
    }, {
      url: '/pages/lock-screen',
      name: "Lock Screen",
      slug: "pages-lock-screen",
      i18n: "LockScreen",
      target: '_blank'
    }]
  }, {
    url: null,
    name: "Miscellaneous",
    icon: "CoffeeIcon",
    i18n: "Miscellaneous",
    submenu: [{
      url: '/pages/not-authorized',
      name: "Not Authorized",
      slug: "page-not-authorized",
      icon: "XCircleIcon",
      i18n: "NotAuthorized",
      target: '_blank'
    }, {
      url: '/pages/maintenance',
      name: "Maintenance",
      slug: "page-maintenance",
      icon: "AnchorIcon",
      i18n: "Maintenance",
      target: '_blank'
    }, {
      url: '/pages/comingsoon',
      slug: 'page-coming-soon',
      name: "Coming Soon",
      icon: "ClockIcon",
      i18n: "ComingSoon",
      target: '_blank'
    }, {
      url: '/pages/error-404',
      name: "404",
      slug: "page-error-404",
      i18n: "404",
      target: '_blank'
    }, {
      url: '/pages/error-500',
      name: "500",
      slug: "page-error-500",
      i18n: "500",
      target: '_blank'
    }]
  }]
}, {
  header: "Charts & Maps",
  icon: "PieChartIcon",
  i18n: "ChartsAndMaps",
  items: [{
    url: null,
    name: "Charts",
    icon: "PieChartIcon",
    tag: '3',
    tagColor: 'success',
    i18n: "Charts",
    submenu: [{
      url: '/charts-and-maps/charts/apex-charts',
      name: "Apex Charts",
      slug: "extra-component-charts-apex-charts",
      i18n: "ApexCharts"
    }, {
      url: '/charts-and-maps/charts/chartjs',
      name: "chartjs",
      slug: "extra-component-charts-chartjs",
      i18n: "chartjs"
    }, {
      url: '/charts-and-maps/charts/echarts',
      name: "echarts",
      slug: "extra-component-charts-echarts",
      i18n: "echarts"
    }]
  }, {
    url: '/charts-and-maps/maps/google-map',
    name: "Google Map",
    icon: "MapIcon",
    slug: "extra-component-maps-google-map",
    i18n: "GoogleMap"
  }]
}, {
  header: "Others",
  icon: "MoreHorizontalIcon",
  i18n: "Others",
  items: [{
    url: null,
    name: "Menu Levels",
    icon: "MenuIcon",
    i18n: "MenuLevels",
    submenu: [{
      url: null,
      name: "Menu Level 2.1",
      i18n: "MenuLevel2p1"
    }, {
      url: null,
      name: "Menu Level 2.2",
      i18n: "MenuLevel2p2",
      submenu: [{
        url: null,
        name: "Menu Level 3.1",
        i18n: "MenuLevel3p1"
      }, {
        url: null,
        name: "Menu Level 3.2",
        i18n: "MenuLevel3p2"
      }]
    }]
  }, {
    url: null,
    name: "Disabled Menu",
    icon: "EyeOffIcon",
    i18n: "DisabledMenu",
    isDisabled: true
  }, {
    url: null,
    name: "Support",
    icon: "SmileIcon",
    i18n: "Support",
    submenu: [{
      url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/',
      name: "Documentation",
      icon: "BookOpenIcon",
      slug: "external",
      i18n: "Documentation",
      target: "_blank"
    }, {
      url: 'https://pixinvent.ticksy.com/',
      name: "Raise Support",
      icon: "LifeBuoyIcon",
      slug: "external",
      i18n: "RaiseSupport",
      target: "_blank"
    }]
  }]
}]);

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue":
/*!************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=22fa5a70&scoped=true& */ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22fa5a70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/main/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=22fa5a70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);