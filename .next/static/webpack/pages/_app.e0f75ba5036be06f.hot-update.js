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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar StateContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), totalPrice = ref2[0], setTotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), totalQuantities = ref3[0], setTotalQuantities = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qty = ref4[0], setQty = ref4[1];\n    var onAdd = function(product, quantity) {\n        var checkProductInCart = cartItems.find(function(item) {\n            return item._id === product._id;\n        });\n        // if the item already exist in the cart\n        if (checkProductInCart) {\n            setTotalPrice(function(prevTotalPrice) {\n                return prevTotalPrice + product.price * quantity;\n            });\n            setTotalQuantities(function(prevTotalQuantity) {\n                return prevTotalQuantity + quantity;\n            });\n            var updateCartItems = cartItems.map(function(cartProduct) {\n                if (cartProduct._id === product._id) return _objectSpread({}, cartProduct, {\n                    quantity: cartProduct.quantity + quantity\n                });\n            });\n            setCartItems(updateCartItems);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"\".concat(qty, \" \").concat(product.name, \" added to the cart.\"));\n        } else {}\n    };\n    var incQty = function() {\n        setQty(function(prevQty) {\n            return prevQty + 1;\n        });\n    };\n    var decQty = function() {\n        setQty(function(prevQty) {\n            if (prevQty >= 2) return prevQty - 1;\n            return 1;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            showCart: showCart,\n            cartItems: cartItems,\n            totalPrice: totalPrice,\n            totalQuantities: totalQuantities,\n            qty: qty,\n            incQty: incQty,\n            decQty: decQty\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\context\\\\StateContext.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, _this));\n};\n_s(StateContext, \"p1CYYCNjfhYD1xTRqJtxsYapqoo=\");\n_c = StateContext;\nvar useStateContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n};\n_s1(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StateContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO1lBQ1JFLFNBQVMsRUFBVEEsU0FBUztZQUNURSxVQUFVLEVBQVZBLFVBQVU7WUFDVkUsZUFBZSxFQUFmQSxlQUFlO1lBQ2ZFLEdBQUcsRUFBSEEsR0FBRztZQUNIaUIsTUFBTSxFQUFOQSxNQUFNO1lBQ05FLE1BQU0sRUFBTkEsTUFBTTtRQUNWLENBQUM7a0JBRUE1QixRQUFROzs7Ozs7QUFJckIsQ0FBQztHQXhEWUQsWUFBWTtLQUFaQSxZQUFZO0FBeURsQixHQUFLLENBQUNnQyxlQUFlLEdBQUcsUUFBUSxHQUFGckMsQ0FBQzs7SUFBREEsTUFBTSxDQUFOQSxpREFBVSxDQUFDSSxPQUFPO0FBQUEsQ0FBQztJQUEzQ2lDLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9TdGF0ZUNvbnRleHQuanM/YjFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd0NhcnQsIHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt0b3RhbFByaWNlLCBzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt0b3RhbFF1YW50aXRpZXMsIHNldFRvdGFsUXVhbnRpdGllc10gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbcXR5LCBzZXRRdHldID0gdXNlU3RhdGUoMSlcclxuXHJcbiAgICBjb25zdCBvbkFkZCA9IChwcm9kdWN0LCBxdWFudGl0eSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrUHJvZHVjdEluQ2FydCA9IGNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gcHJvZHVjdC5faWQpO1xyXG4gICAgICAgLy8gaWYgdGhlIGl0ZW0gYWxyZWFkeSBleGlzdCBpbiB0aGUgY2FydFxyXG4gICAgICAgIGlmIChjaGVja1Byb2R1Y3RJbkNhcnQpIHtcclxuICAgICAgICAgICAgc2V0VG90YWxQcmljZSgocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlICsgcHJvZHVjdC5wcmljZSAqIHF1YW50aXR5KVxyXG4gICAgICAgICAgICBzZXRUb3RhbFF1YW50aXRpZXMoKHByZXZUb3RhbFF1YW50aXR5KSA9PiBwcmV2VG90YWxRdWFudGl0eSArIHF1YW50aXR5KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlQ2FydEl0ZW1zID0gY2FydEl0ZW1zLm1hcCgoY2FydFByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXJ0UHJvZHVjdC5faWQgPT09IHByb2R1Y3QuX2lkKSByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNhcnRQcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBjYXJ0UHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVDYXJ0SXRlbXMpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKGAke3F0eX0gJHtwcm9kdWN0Lm5hbWV9IGFkZGVkIHRvIHRoZSBjYXJ0LmApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluY1F0eSA9ICgpID0+IHtcclxuICAgICAgICBzZXRRdHkoKHByZXZRdHkpID0+IHByZXZRdHkgKyAxKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGVjUXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFF0eSgocHJldlF0eSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJldlF0eSA+PSAyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZRdHkgLSAxXHJcbiAgICAgICAgICAgIHJldHVybiAxXHJcblxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIHNob3dDYXJ0LFxyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsUXVhbnRpdGllcyxcclxuICAgICAgICAgICAgICAgIHF0eSxcclxuICAgICAgICAgICAgICAgIGluY1F0eSxcclxuICAgICAgICAgICAgICAgIGRlY1F0eVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9hc3QiLCJDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwidG90YWxQcmljZSIsInNldFRvdGFsUHJpY2UiLCJ0b3RhbFF1YW50aXRpZXMiLCJzZXRUb3RhbFF1YW50aXRpZXMiLCJxdHkiLCJzZXRRdHkiLCJvbkFkZCIsInByb2R1Y3QiLCJxdWFudGl0eSIsImNoZWNrUHJvZHVjdEluQ2FydCIsImZpbmQiLCJpdGVtIiwiX2lkIiwicHJldlRvdGFsUHJpY2UiLCJwcmljZSIsInByZXZUb3RhbFF1YW50aXR5IiwidXBkYXRlQ2FydEl0ZW1zIiwibWFwIiwiY2FydFByb2R1Y3QiLCJzdWNjZXNzIiwibmFtZSIsImluY1F0eSIsInByZXZRdHkiLCJkZWNRdHkiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU3RhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});