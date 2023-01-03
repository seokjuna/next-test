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
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ErrorPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nErrorPage.getInitialProps = ({ res , err  })=>{\n    // 에러 코드를 페이지 컴포넌트의 속성값으로 전달\n    const statusCode = res ? res.statusCode : err ? err.statusCode : null;\n    return {\n        statusCode\n    };\n};\nfunction ErrorPage({ statusCode  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            statusCode === 404 && \"페이지를 찾을 수 없습니다.\",\n            statusCode === 500 && \"알 수 없는 에러가 발생했습니다.\",\n            !statusCode && \"클라이언트에서 에러가 발생했습니다.\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naseokju/next-test/pages/_error.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZXJyb3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBO0FBQUFBLFVBQVVDLGVBQWUsR0FBRyxDQUFDLEVBQUVDLElBQUcsRUFBRUMsSUFBRyxFQUFFLEdBQUs7SUFDMUMsNEJBQTRCO0lBQzVCLE1BQU1DLGFBQWFGLE1BQU1BLElBQUlFLFVBQVUsR0FBR0QsTUFBTUEsSUFBSUMsVUFBVSxHQUFHLElBQUk7SUFDckUsT0FBTztRQUFFQTtJQUFXO0FBQ3hCO0FBRWUsU0FBU0osVUFBVSxFQUFFSSxXQUFVLEVBQUUsRUFBRTtJQUM5QyxxQkFDSSw4REFBQ0M7O1lBRUlELGVBQWUsT0FBTztZQUN0QkEsZUFBZSxPQUFPO1lBQ3RCLENBQUNBLGNBQWM7Ozs7Ozs7QUFHNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdGVzdC8uL3BhZ2VzL19lcnJvci5qcz8yMDEwIl0sInNvdXJjZXNDb250ZW50IjpbIkVycm9yUGFnZS5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIGVyciB9KSA9PiB7XG4gICAgLy8g7JeQ65+sIOy9lOuTnOulvCDtjpjsnbTsp4Ag7Lu07Y+s64SM7Yq47J2YIOyGjeyEseqwkuycvOuhnCDsoITri6xcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IG51bGxcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvclBhZ2UoeyBzdGF0dXNDb2RlIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgey8qIHN0YXR1c0NvZGUg67OA7IiY7J2YIOqwkuyXkCDrlLDrnbwg64uk66W4IOyXkOufrCDrqZTsi5zsp4Drpbwg7Lac66ClICovfVxuICAgICAgICAgICAge3N0YXR1c0NvZGUgPT09IDQwNCAmJiAn7Y6Y7J207KeA66W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukLid9XG4gICAgICAgICAgICB7c3RhdHVzQ29kZSA9PT0gNTAwICYmICfslYwg7IiYIOyXhuuKlCDsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLid9XG4gICAgICAgICAgICB7IXN0YXR1c0NvZGUgJiYgJ+2BtOudvOydtOyWuO2KuOyXkOyEnCDsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLid9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkVycm9yUGFnZSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_error.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_error.js"));
module.exports = __webpack_exports__;

})();