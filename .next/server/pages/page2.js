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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/api */ \"./src/api.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nPage2.getInitialProps = async ({ query  })=>{\n    const text = query.text || \"none\"; // 쿼리 파라미터로부터 text 변수 생성\n    const data = await (0,_src_api__WEBPACK_IMPORTED_MODULE_1__.callApi)(); // 데이터를 가져오기 위해 API 호출\n    return {\n        text,\n        data\n    }; // getInitialProps 함수가 반환하는 값은 페이지 컴포넌트의 속성값으로 전달됨\n};\nfunction Page2({ text , data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"this is home page2\"\n            }, void 0, false, {\n                fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: `text: ${text}`\n            }, void 0, false, {\n                fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: `data is ${data}`\n            }, void 0, false, {\n                fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWdlMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFxQztBQUNKO0FBRWpDRSxNQUFNQyxlQUFlLEdBQUcsT0FBTyxFQUFFQyxNQUFLLEVBQUUsR0FBSztJQUN6QyxNQUFNQyxPQUFPRCxNQUFNQyxJQUFJLElBQUksUUFBUSx3QkFBd0I7SUFDM0QsTUFBTUMsT0FBTyxNQUFNTixpREFBT0EsSUFBSSxzQkFBc0I7SUFDcEQsT0FBTztRQUFFSztRQUFNQztJQUFLLEdBQUcsa0RBQWtEO0FBQzdFO0FBRWUsU0FBU0osTUFBTSxFQUFFRyxLQUFJLEVBQUVDLEtBQUksRUFBRSxFQUFFO0lBQzFDLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNBOzBCQUFHLENBQUMsTUFBTSxFQUFFSCxLQUFLLENBQUM7Ozs7OzswQkFDbkIsOERBQUNHOzBCQUFHLENBQUMsUUFBUSxFQUFFRixLQUFLLENBQUM7Ozs7Ozs7Ozs7OztBQUdqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10ZXN0Ly4vcGFnZXMvcGFnZTIuanM/OWU1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsQXBpIH0gZnJvbSBcIi4uL3NyYy9hcGlcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblBhZ2UyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHsgLy8gZ2V0SW5pdGlhbFByb3BzIO2VqOyImCDsoJXsnZhcbiAgICBjb25zdCB0ZXh0ID0gcXVlcnkudGV4dCB8fCAnbm9uZSc7IC8vIOy/vOumrCDtjIzrnbzrr7jthLDroZzrtoDthLAgdGV4dCDrs4DsiJgg7IOd7ISxXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhbGxBcGkoKTsgLy8g642w7J207YSw66W8IOqwgOyguOyYpOq4sCDsnITtlbQgQVBJIO2YuOy2nFxuICAgIHJldHVybiB7IHRleHQsIGRhdGEgfTsgLy8gZ2V0SW5pdGlhbFByb3BzIO2VqOyImOqwgCDrsJjtmZjtlZjripQg6rCS7J2AIO2OmOydtOyngCDsu7Ttj6zrhIztirjsnZgg7IaN7ISx6rCS7Jy866GcIOyghOuLrOuQqFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZTIoeyB0ZXh0LCBkYXRhIH0pIHsgLy8g7Y6Y7J207KeAIOy7tO2PrOuEjO2KuOyXkOyEnCBnZXRJbml0aWFsUHJvcHMg7ZWo7IiY6rCAIOuwmO2ZmO2VnCDqsJLsnYQg7IKs7JqpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPnRoaXMgaXMgaG9tZSBwYWdlMjwvcD5cbiAgICAgICAgICAgIDxwPntgdGV4dDogJHt0ZXh0fWB9PC9wPlxuICAgICAgICAgICAgPHA+e2BkYXRhIGlzICR7ZGF0YX1gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiY2FsbEFwaSIsIlJvdXRlciIsIlBhZ2UyIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJ0ZXh0IiwiZGF0YSIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/page2.js\n");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callApi\": () => (/* binding */ callApi)\n/* harmony export */ });\nfunction callApi() {\n    return Promise.resolve(123);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxVQUFVO0lBQ3RCLE9BQU9DLFFBQVFDLE9BQU8sQ0FBQztBQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10ZXN0Ly4vc3JjL2FwaS5qcz9kY2FmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjYWxsQXBpKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoMTIzKTtcbn0iXSwibmFtZXMiOlsiY2FsbEFwaSIsIlByb21pc2UiLCJyZXNvbHZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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