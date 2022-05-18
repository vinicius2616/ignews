(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeButton": function() { return /* binding */ SubscribeButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SubscribeButton/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\vinic\\OneDrive\\Documentos\\Vinicius\\Ignite\\ignews\\src\\components\\SubscribeButton\\index.tsx";

function SubscribeButton({
  priceId
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subscribeButton),
    children: "Subscribe now"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ "./src/components/SubscribeButton/index.tsx");
/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ "./src/services/stripe.ts");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\vinic\\OneDrive\\Documentos\\Vinicius\\Ignite\\ignews\\src\\pages\\index.tsx";




function Home({
  product
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Home | ig.news "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: " \uD83D\uDC4F Hey, welcome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["News about the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "React"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 28
          }, this), " world."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Get acess to all the publications ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 47
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: ["for ", product.amount, " month"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {
          priceId: product.priceId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/images/avatar.svg",
        alt: "Girl coding"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticProps = async () => {
  const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve("price_1L0aNbJOSbWPIEdsHKE4cRuW");
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price.unit_amount / 100)
  };
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours

  };
};

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripe": function() { return /* binding */ stripe; }
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ "stripe");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");


const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews",
    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version
  }
});

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"subscribeButton": "styles_subscribeButton__1uQAs"
};


/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"contentContainer": "home_contentContainer__21EWl",
	"hero": "home_hero__3Za5I"
};


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start"},"dependencies":{"next":"10.2.0","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.2.0","sass":"^1.32.12","stripe":"^9.1.0"},"devDependencies":{"@types/node":"^15.0.2","@types/react":"^17.0.5","typescript":"^4.2.4"}}');

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cyIsIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9ob21lLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcInN0cmlwZVwiIl0sIm5hbWVzIjpbIlN1YnNjcmliZUJ1dHRvbiIsInByaWNlSWQiLCJzdHlsZXMiLCJIb21lIiwicHJvZHVjdCIsImFtb3VudCIsImdldFN0YXRpY1Byb3BzIiwicHJpY2UiLCJzdHJpcGUiLCJpZCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwidW5pdF9hbW91bnQiLCJwcm9wcyIsInJldmFsaWRhdGUiLCJTdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX0FQSV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTU8sU0FBU0EsZUFBVCxDQUF5QjtBQUFFQztBQUFGLENBQXpCLEVBQTREO0FBQ2pFLHNCQUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFQyw0RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEO0FBQ0E7QUFDQTtBQUNBO0FBU2UsU0FBU0MsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUFzQztBQUNuRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFNLGVBQVMsRUFBRUYsMkVBQWpCO0FBQUEsOEJBQ0U7QUFBUyxpQkFBUyxFQUFFQSwrREFBcEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEscURBQ2lCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFLRTtBQUFBLHdFQUNvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURwQyxlQUVFO0FBQUEsK0JBQVdFLE9BQU8sQ0FBQ0MsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFLDhEQUFDLHdFQUFEO0FBQWlCLGlCQUFPLEVBQUVELE9BQU8sQ0FBQ0g7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVlFO0FBQUssV0FBRyxFQUFDLG9CQUFUO0FBQThCLFdBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQXNCRDtBQUVNLE1BQU1LLGNBQThCLEdBQUcsWUFBWTtBQUN4RCxRQUFNQyxLQUFLLEdBQUcsTUFBTUMsb0VBQUEsQ0FBdUIsZ0NBQXZCLENBQXBCO0FBRUEsUUFBTUosT0FBTyxHQUFHO0FBQ2RILFdBQU8sRUFBRU0sS0FBSyxDQUFDRSxFQUREO0FBRWRKLFVBQU0sRUFBRSxJQUFJSyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDckNDLFdBQUssRUFBRSxVQUQ4QjtBQUVyQ0MsY0FBUSxFQUFFO0FBRjJCLEtBQS9CLEVBR0xDLE1BSEssQ0FHRVAsS0FBSyxDQUFDUSxXQUFOLEdBQW9CLEdBSHRCO0FBRk0sR0FBaEI7QUFRQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMWjtBQURLLEtBREY7QUFJTGEsY0FBVSxFQUFFLEtBQUssRUFBTCxHQUFVLEVBSmpCLENBSXFCOztBQUpyQixHQUFQO0FBTUQsQ0FqQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENQO0FBQ0E7QUFFTyxNQUFNVCxNQUFNLEdBQUcsSUFBSVUsK0NBQUosQ0FBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBQXZCLEVBQXVDO0FBQzNEQyxZQUFVLEVBQUUsWUFEK0M7QUFFM0RDLFNBQU8sRUFBRTtBQUNQQyxRQUFJLEVBQUUsUUFEQztBQUVQQyxXQUFPQTtBQUZBO0FBRmtELENBQXZDLENBQWYsQzs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgU3Vic2NyaWJlQnV0dG9uUHJvcHMge1xuICBwcmljZUlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdWJzY3JpYmVCdXR0b24oeyBwcmljZUlkIH06IFN1YnNjcmliZUJ1dHRvblByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuc3Vic2NyaWJlQnV0dG9ufT5cbiAgICAgIFN1YnNjcmliZSBub3dcbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFN1YnNjcmliZUJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvblwiO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0cmlwZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ob21lLm1vZHVsZS5zY3NzXCI7XG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICBwcm9kdWN0OiB7XG4gICAgcHJpY2VJZDogc3RyaW5nO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdCB9OiBIb21lUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHwgaWcubmV3cyA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgICAgPHNwYW4+IPCfkY8gSGV5LCB3ZWxjb21lPC9zcGFuPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIE5ld3MgYWJvdXQgdGhlIDxzcGFuPlJlYWN0PC9zcGFuPiB3b3JsZC5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgR2V0IGFjZXNzIHRvIGFsbCB0aGUgcHVibGljYXRpb25zIDxiciAvPlxuICAgICAgICAgICAgPHNwYW4+Zm9yIHtwcm9kdWN0LmFtb3VudH0gbW9udGg8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxTdWJzY3JpYmVCdXR0b24gcHJpY2VJZD17cHJvZHVjdC5wcmljZUlkfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hdmF0YXIuc3ZnXCIgYWx0PVwiR2lybCBjb2RpbmdcIiAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUoXCJwcmljZV8xTDBhTmJKT1NiV1BJRWRzSEtFNGNSdVdcIik7XG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIsIHtcbiAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQgLyAxMDApLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsIC8vIDI0IGhvdXJzXG4gIH07XG59O1xuIiwiaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4uLy4uL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSwge1xuICBhcGlWZXJzaW9uOiBcIjIwMjAtMDgtMjdcIixcbiAgYXBwSW5mbzoge1xuICAgIG5hbWU6IFwiSWduZXdzXCIsXG4gICAgdmVyc2lvbixcbiAgfSxcbn0pO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3Vic2NyaWJlQnV0dG9uXCI6IFwic3R5bGVzX3N1YnNjcmliZUJ1dHRvbl9fMXVRQXNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRDb250YWluZXJcIjogXCJob21lX2NvbnRlbnRDb250YWluZXJfXzIxRVdsXCIsXG5cdFwiaGVyb1wiOiBcImhvbWVfaGVyb19fM1phNUlcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpcGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=