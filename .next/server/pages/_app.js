(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SignInButton */ "./src/components/SignInButton/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\vinic\\OneDrive\\Documentos\\Vinicius\\Ignite\\ignews\\src\\components\\Header\\index.tsx";


function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/images/logo.svg",
        alt: "ig.news"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active),
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignInButton__WEBPACK_IMPORTED_MODULE_1__.SignInButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInButton": function() { return /* binding */ SignInButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SignInButton/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\vinic\\OneDrive\\Documentos\\Vinicius\\Ignite\\ignews\\src\\components\\SignInButton\\index.tsx";



function SignInButton() {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),
    type: "button",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {
      color: "#04d361"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), "Vinicius Faleiros", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {
      color: "#737380",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeIcon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),
    type: "button",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {
      color: "#eba417"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), "Sign In with Github"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\vinic\\OneDrive\\Documentos\\Vinicius\\Ignite\\ignews\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/components/Header/styles.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/styles.module.scss ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__3jyUX",
	"headerContent": "styles_headerContent__2P--I",
	"active": "styles_active__3zqNB"
};


/***/ }),

/***/ "./src/components/SignInButton/styles.module.scss":
/*!********************************************************!*\
  !*** ./src/components/SignInButton/styles.module.scss ***!
  \********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"signInButton": "styles_signInButton__2cB0N",
	"closeIcon": "styles_closeIcon__ZQtRZ"
};


/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-icons/fa");;

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-icons/fi");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL1NpZ25JbkJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU2lnbkluQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZpXCIiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVzIiwiU2lnbkluQnV0dG9uIiwiaXNVc2VyTG9nZ2VkSW4iLCJjbG9zZUljb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLFNBQVNBLE1BQVQsR0FBa0I7QUFDdkIsc0JBQ0U7QUFBUSxhQUFTLEVBQUVDLDRFQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSwwRUFBaEI7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxrQkFBVDtBQUE0QixXQUFHLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUVBLG1FQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFNRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUNBO0FBQ0E7QUFFTyxTQUFTQyxZQUFULEdBQXdCO0FBQzdCLFFBQU1DLGNBQWMsR0FBRyxJQUF2QjtBQUVBLFNBQU9BLGNBQWMsZ0JBQ25CO0FBQVEsYUFBUyxFQUFFRix5RUFBbkI7QUFBd0MsUUFBSSxFQUFDLFFBQTdDO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLG9DQUdFLDhEQUFDLCtDQUFEO0FBQUssV0FBSyxFQUFDLFNBQVg7QUFBcUIsZUFBUyxFQUFFQSxzRUFBZ0JHO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEbUIsZ0JBT25CO0FBQVEsYUFBUyxFQUFFSCx5RUFBbkI7QUFBd0MsUUFBSSxFQUFDLFFBQTdDO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVBGO0FBWUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7O0FBRUEsU0FBU0ksS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQW1EO0FBQ2pELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQU1EOztBQUVELCtEQUFlRixLQUFmLEU7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLDRDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWduSW5CdXR0b24gfSBmcm9tIFwiLi4vU2lnbkluQnV0dG9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGVudH0+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiaWcubmV3c1wiIC8+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX0+SG9tZTwvYT5cclxuICAgICAgICAgIDxhPlBvc3RzPC9hPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxTaWduSW5CdXR0b24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEZhR2l0aHViIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEZpWCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbigpIHtcclxuICBjb25zdCBpc1VzZXJMb2dnZWRJbiA9IHRydWU7XHJcblxyXG4gIHJldHVybiBpc1VzZXJMb2dnZWRJbiA/IChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2lnbkluQnV0dG9ufSB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgIDxGYUdpdGh1YiBjb2xvcj1cIiMwNGQzNjFcIiAvPlxyXG4gICAgICBWaW5pY2l1cyBGYWxlaXJvc1xyXG4gICAgICA8RmlYIGNvbG9yPVwiIzczNzM4MFwiIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlSWNvbn0gLz5cclxuICAgIDwvYnV0dG9uPlxyXG4gICkgOiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25JbkJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICA8RmFHaXRodWIgY29sb3I9XCIjZWJhNDE3XCIgLz5cclxuICAgICAgU2lnbiBJbiB3aXRoIEdpdGh1YlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5zY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlckNvbnRhaW5lclwiOiBcInN0eWxlc19oZWFkZXJDb250YWluZXJfXzNqeVVYXCIsXG5cdFwiaGVhZGVyQ29udGVudFwiOiBcInN0eWxlc19oZWFkZXJDb250ZW50X18yUC0tSVwiLFxuXHRcImFjdGl2ZVwiOiBcInN0eWxlc19hY3RpdmVfXzN6cU5CXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzaWduSW5CdXR0b25cIjogXCJzdHlsZXNfc2lnbkluQnV0dG9uX18yY0IwTlwiLFxuXHRcImNsb3NlSWNvblwiOiBcInN0eWxlc19jbG9zZUljb25fX1pRdFJaXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==