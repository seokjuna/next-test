"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/page2";
exports.ids = ["pages/page2"];
exports.modules = {

/***/ "./pages/page2.js":
/*!************************!*\
  !*** ./pages/page2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/api */ \"./src/api.js\");\n\n\nPage2.getInitialProps = async ({ query  })=>{\n    const text = query.text || \"none\"; // 쿼리 파라미터로부터 text 변수 생성\n    const data = await (0,_src_api__WEBPACK_IMPORTED_MODULE_1__.callApi)(); // 데이터를 가져오기 위해 API 호출\n    return {\n        text,\n        data\n    }; // getInitialProps 함수가 반환하는 값은 페이지 컴포넌트의 속성값으로 전달됨\n};\nfunction Page2({ text , data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"this is home page2\"\n            }, void 0, false, {\n                fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: `text: ${text}`\n            }, void 0, false, {\n                fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: `data is ${data}`\n            }, void 0, false, {\n                fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWdlMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBcUM7QUFFckNDLE1BQU1DLGVBQWUsR0FBRyxPQUFPLEVBQUVDLE1BQUssRUFBRSxHQUFLO0lBQ3pDLE1BQU1DLE9BQU9ELE1BQU1DLElBQUksSUFBSSxRQUFRLHdCQUF3QjtJQUMzRCxNQUFNQyxPQUFPLE1BQU1MLGlEQUFPQSxJQUFJLHNCQUFzQjtJQUNwRCxPQUFPO1FBQUVJO1FBQU1DO0lBQUssR0FBRyxrREFBa0Q7QUFDN0U7QUFFZSxTQUFTSixNQUFNLEVBQUVHLEtBQUksRUFBRUMsS0FBSSxFQUFFLEVBQUU7SUFDMUMscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0E7MEJBQUcsQ0FBQyxNQUFNLEVBQUVILEtBQUssQ0FBQzs7Ozs7OzBCQUNuQiw4REFBQ0c7MEJBQUcsQ0FBQyxRQUFRLEVBQUVGLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7O0FBR2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRlc3QvLi9wYWdlcy9wYWdlMi5qcz85ZTU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbGxBcGkgfSBmcm9tIFwiLi4vc3JjL2FwaVwiO1xuXG5QYWdlMi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7IC8vIGdldEluaXRpYWxQcm9wcyDtlajsiJgg7KCV7J2YXG4gICAgY29uc3QgdGV4dCA9IHF1ZXJ5LnRleHQgfHwgJ25vbmUnOyAvLyDsv7zrpqwg7YyM652866+47YSw66Gc67aA7YSwIHRleHQg67OA7IiYIOyDneyEsVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjYWxsQXBpKCk7IC8vIOuNsOydtO2EsOulvCDqsIDsoLjsmKTquLAg7JyE7ZW0IEFQSSDtmLjstpxcbiAgICByZXR1cm4geyB0ZXh0LCBkYXRhIH07IC8vIGdldEluaXRpYWxQcm9wcyDtlajsiJjqsIAg67CY7ZmY7ZWY64qUIOqwkuydgCDtjpjsnbTsp4Ag7Lu07Y+s64SM7Yq47J2YIOyGjeyEseqwkuycvOuhnCDsoITri6zrkKhcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UyKHsgdGV4dCwgZGF0YSB9KSB7IC8vIO2OmOydtOyngCDsu7Ttj6zrhIztirjsl5DshJwgZ2V0SW5pdGlhbFByb3BzIO2VqOyImOqwgCDrsJjtmZjtlZwg6rCS7J2EIOyCrOyaqVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD50aGlzIGlzIGhvbWUgcGFnZTI8L3A+XG4gICAgICAgICAgICA8cD57YHRleHQ6ICR7dGV4dH1gfTwvcD5cbiAgICAgICAgICAgIDxwPntgZGF0YSBpcyAke2RhdGF9YH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbImNhbGxBcGkiLCJQYWdlMiIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwidGV4dCIsImRhdGEiLCJkaXYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/page2.js\n");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callApi\": () => (/* binding */ callApi)\n/* harmony export */ });\nfunction callApi() {\n    return Promise.resolve(123);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxVQUFVO0lBQ3RCLE9BQU9DLFFBQVFDLE9BQU8sQ0FBQztBQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10ZXN0Ly4vc3JjL2FwaS5qcz9kY2FmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjYWxsQXBpKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoMTIzKTtcbn0iXSwibmFtZXMiOlsiY2FsbEFwaSIsIlByb21pc2UiLCJyZXNvbHZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/page2.js"));
module.exports = __webpack_exports__;

})();