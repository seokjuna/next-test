"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page2",{

/***/ "./pages/page2.js":
/*!************************!*\
  !*** ./pages/page2.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/api */ \"./src/api.js\");\n\n\nPage2.getInitialProps = async (param)=>{\n    let { query  } = param;\n    const text = query.text || \"none\"; // 쿼리 파라미터로부터 text 변수 생성\n    const data = await (0,_src_api__WEBPACK_IMPORTED_MODULE_1__.callApi)(); // 데이터를 가져오기 위해 API 호출\n    return {\n        text,\n        data\n    }; // getInitialProps 함수가 반환하는 값은 페이지 컴포넌트의 속성값으로 전달됨\n};\nfunction Page2(param) {\n    let { text , data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"this is home page2\"\n            }, void 0, false, {\n                fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"text: \".concat(text)\n            }, void 0, false, {\n                fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"data is \".concat(data)\n            }, void 0, false, {\n                fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naseokju/next-test/pages/page2.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = Page2;\nvar _c;\n$RefreshReg$(_c, \"Page2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWdlMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBcUM7QUFFckNDLE1BQU1DLGVBQWUsR0FBRyxlQUFxQjtRQUFkLEVBQUVDLE1BQUssRUFBRTtJQUNwQyxNQUFNQyxPQUFPRCxNQUFNQyxJQUFJLElBQUksUUFBUSx3QkFBd0I7SUFDM0QsTUFBTUMsT0FBTyxNQUFNTCxpREFBT0EsSUFBSSxzQkFBc0I7SUFDcEQsT0FBTztRQUFFSTtRQUFNQztJQUFLLEdBQUcsa0RBQWtEO0FBQzdFO0FBRWUsU0FBU0osTUFBTSxLQUFjLEVBQUU7UUFBaEIsRUFBRUcsS0FBSSxFQUFFQyxLQUFJLEVBQUUsR0FBZDtJQUMxQixxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQTswQkFBRyxTQUFjLE9BQUxIOzs7Ozs7MEJBQ2IsOERBQUNHOzBCQUFHLFdBQWdCLE9BQUxGOzs7Ozs7Ozs7Ozs7QUFHM0IsQ0FBQztLQVJ1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZTIuanM/OWU1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsQXBpIH0gZnJvbSBcIi4uL3NyYy9hcGlcIjtcblxuUGFnZTIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4geyAvLyBnZXRJbml0aWFsUHJvcHMg7ZWo7IiYIOygleydmFxuICAgIGNvbnN0IHRleHQgPSBxdWVyeS50ZXh0IHx8ICdub25lJzsgLy8g7L+866asIO2MjOudvOuvuO2EsOuhnOu2gO2EsCB0ZXh0IOuzgOyImCDsg53shLFcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbEFwaSgpOyAvLyDrjbDsnbTthLDrpbwg6rCA7KC47Jik6riwIOychO2VtCBBUEkg7Zi47LacXG4gICAgcmV0dXJuIHsgdGV4dCwgZGF0YSB9OyAvLyBnZXRJbml0aWFsUHJvcHMg7ZWo7IiY6rCAIOuwmO2ZmO2VmOuKlCDqsJLsnYAg7Y6Y7J207KeAIOy7tO2PrOuEjO2KuOydmCDsho3shLHqsJLsnLzroZwg7KCE64us65CoXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlMih7IHRleHQsIGRhdGEgfSkgeyAvLyDtjpjsnbTsp4Ag7Lu07Y+s64SM7Yq47JeQ7IScIGdldEluaXRpYWxQcm9wcyDtlajsiJjqsIAg67CY7ZmY7ZWcIOqwkuydhCDsgqzsmqlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+dGhpcyBpcyBob21lIHBhZ2UyPC9wPlxuICAgICAgICAgICAgPHA+e2B0ZXh0OiAke3RleHR9YH08L3A+XG4gICAgICAgICAgICA8cD57YGRhdGEgaXMgJHtkYXRhfWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJjYWxsQXBpIiwiUGFnZTIiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInRleHQiLCJkYXRhIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/page2.js\n"));

/***/ })

});