"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/StateContext.js":
/*!*********************************!*\
  !*** ./context/StateContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar StateContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), totalPrice = ref2[0], setTotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), totalQuantities = ref3[0], setTotalQuantities = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qty = ref4[0], setQty = ref4[1];\n    var onAdd = function(product, quantity) {\n        var checkProductInCart = cartItems.find(function(item) {\n            return item._id === product._id;\n        });\n        if (checkProductInCart) {\n            setTotalPrice(function(prevTotalPrice) {\n                return prevTotalPrice + product.price * quantity;\n            });\n            setTotalQuantities(function(prevTotalQuantity) {\n                return prevTotalQuantity + quantity;\n            });\n            var updateCartItems = cartItems.map(cartProduct);\n        }\n    };\n    var incQty = function() {\n        setQty(function(prevQty) {\n            return prevQty + 1;\n        });\n    };\n    var decQty = function() {\n        setQty(function(prevQty) {\n            if (prevQty >= 2) return prevQty - 1;\n            return 1;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            showCart: showCart,\n            cartItems: cartItems,\n            totalPrice: totalPrice,\n            totalQuantities: totalQuantities,\n            qty: qty,\n            incQty: incQty,\n            decQty: decQty\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\context\\\\StateContext.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, _this));\n};\n_s(StateContext, \"p1CYYCNjfhYD1xTRqJtxsYapqoo=\");\n_c = StateContext;\nvar useStateContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n};\n_s1(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StateContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRleHQvU3RhdGVDb250ZXh0LmpzP2IxYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXHJcblxyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dDYXJ0LCBzZXRTaG93Q2FydF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbdG90YWxQcmljZSwgc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbdG90YWxRdWFudGl0aWVzLCBzZXRUb3RhbFF1YW50aXRpZXNdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3F0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gICAgY29uc3Qgb25BZGQgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSBjYXJ0SXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKTtcclxuICAgICAgICBpZiAoY2hlY2tQcm9kdWN0SW5DYXJ0KSB7XHJcbiAgICAgICAgICAgIHNldFRvdGFsUHJpY2UoKHByZXZUb3RhbFByaWNlKSA9PiBwcmV2VG90YWxQcmljZSArIHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eSlcclxuICAgICAgICAgICAgc2V0VG90YWxRdWFudGl0aWVzKChwcmV2VG90YWxRdWFudGl0eSkgPT4gcHJldlRvdGFsUXVhbnRpdHkgKyBxdWFudGl0eSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlQ2FydEl0ZW1zID0gY2FydEl0ZW1zLm1hcCgoY2FydFByb2R1Y3QpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmNRdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UXR5KChwcmV2UXR5KSA9PiBwcmV2UXR5ICsgMSlcclxuICAgIH1cclxuICAgIGNvbnN0IGRlY1F0eSA9ICgpID0+IHtcclxuICAgICAgICBzZXRRdHkoKHByZXZRdHkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZXZRdHkgPj0gMilcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2UXR5IC0gMVxyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2FydCxcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFF1YW50aXRpZXMsXHJcbiAgICAgICAgICAgICAgICBxdHksXHJcbiAgICAgICAgICAgICAgICBpbmNRdHksXHJcbiAgICAgICAgICAgICAgICBkZWNRdHlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCB1c2VTdGF0ZUNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRvYXN0IiwiQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsImNoaWxkcmVuIiwic2hvd0NhcnQiLCJzZXRTaG93Q2FydCIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidG90YWxRdWFudGl0aWVzIiwic2V0VG90YWxRdWFudGl0aWVzIiwicXR5Iiwic2V0UXR5Iiwib25BZGQiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJmaW5kIiwiaXRlbSIsIl9pZCIsInByZXZUb3RhbFByaWNlIiwicHJpY2UiLCJwcmV2VG90YWxRdWFudGl0eSIsInVwZGF0ZUNhcnRJdGVtcyIsIm1hcCIsImNhcnRQcm9kdWN0IiwiaW5jUXR5IiwicHJldlF0eSIsImRlY1F0eSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTdGF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});