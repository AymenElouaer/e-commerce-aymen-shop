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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar StateContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalPrice = ref2[0], setTotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalQuantities = ref3[0], setTotalQuantities = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qty = ref4[0], setQty = ref4[1];\n    var foundProduct;\n    var index;\n    var onAdd = function(product, quantity) {\n        var checkProductInCart = cartItems.find(function(item) {\n            return item._id === product._id;\n        });\n        setTotalPrice(function(prevTotalPrice) {\n            return prevTotalPrice + product.price * quantity;\n        });\n        setTotalQuantities(function(prevTotalQuantity) {\n            return prevTotalQuantity + quantity;\n        });\n        // if the item already exist in the cart\n        if (checkProductInCart) {\n            var updateCartItems = cartItems.map(function(cartProduct) {\n                if (cartProduct._id === product._id) return _objectSpread({}, cartProduct, {\n                    quantity: cartProduct.quantity + quantity\n                });\n            });\n            setCartItems(updateCartItems);\n        } else {\n            product.quantity = quantity;\n            setCartItems(_toConsumableArray(cartItems).concat([\n                _objectSpread({}, product)\n            ]));\n        }\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"\".concat(qty, \" \").concat(product.name, \" added to the cart.\"));\n    };\n    var toggleCartItemQuantity = function(id, value) {\n        foundProduct = cartItems.find(function(item) {\n            return item._id === id;\n        });\n        index = cartItems.findIndex(function(product) {\n            return product._id === id;\n        });\n        if (value === 'inc') {\n            var newCartItems = _toConsumableArray(cartItems).concat([\n                _objectSpread({}, product, {\n                    quantity: product.quantity += 1\n                })\n            ]);\n            setCartItems();\n        }\n    };\n    var incQty = function() {\n        setQty(function(prevQty) {\n            return prevQty + 1;\n        });\n    };\n    var decQty = function() {\n        setQty(function(prevQty) {\n            if (prevQty >= 2) return prevQty - 1;\n            return 1;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            showCart: showCart,\n            setShowCart: setShowCart,\n            cartItems: cartItems,\n            totalPrice: totalPrice,\n            totalQuantities: totalQuantities,\n            qty: qty,\n            incQty: incQty,\n            decQty: decQty,\n            onAdd: onAdd\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\context\\\\StateContext.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, _this));\n};\n_s(StateContext, \"KihS6PmrKTQEzGuhoGAbmjGjdWo=\");\n_c = StateContext;\nvar useStateContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n};\n_s1(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StateContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRFbEIsR0FBSyxDQUFDc0MsZUFBZSxHQUFHLFFBQVEsR0FBRjNDLENBQUM7O0lBQURBLE1BQU0sQ0FBTkEsaURBQVUsQ0FBQ0ksT0FBTztBQUFBLENBQUM7SUFBM0N1QyxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvU3RhdGVDb250ZXh0LmpzP2IxYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXHJcblxyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dDYXJ0LCBzZXRTaG93Q2FydF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0b3RhbFByaWNlLCBzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbdG90YWxRdWFudGl0aWVzLCBzZXRUb3RhbFF1YW50aXRpZXNdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtxdHksIHNldFF0eV0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICAgIGxldCBmb3VuZFByb2R1Y3Q7XHJcbiAgICBsZXQgaW5kZXg7XHJcblxyXG4gICAgY29uc3Qgb25BZGQgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSBjYXJ0SXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKTtcclxuXHJcbiAgICAgICAgc2V0VG90YWxQcmljZSgocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlICsgcHJvZHVjdC5wcmljZSAqIHF1YW50aXR5KVxyXG4gICAgICAgIHNldFRvdGFsUXVhbnRpdGllcygocHJldlRvdGFsUXVhbnRpdHkpID0+IHByZXZUb3RhbFF1YW50aXR5ICsgcXVhbnRpdHkpXHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBpdGVtIGFscmVhZHkgZXhpc3QgaW4gdGhlIGNhcnRcclxuICAgICAgICBpZiAoY2hlY2tQcm9kdWN0SW5DYXJ0KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlQ2FydEl0ZW1zID0gY2FydEl0ZW1zLm1hcCgoY2FydFByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXJ0UHJvZHVjdC5faWQgPT09IHByb2R1Y3QuX2lkKSByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNhcnRQcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBjYXJ0UHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVDYXJ0SXRlbXMpO1xyXG5cclxuICAgICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgaXRlbSBkb2Vzbid0IGFscmVhZHkgZXhpc3QgaW4gdGhlIGNhcnRcclxuICAgICAgICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHF1YW50aXR5XHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCB7IC4uLnByb2R1Y3QgfV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoYCR7cXR5fSAke3Byb2R1Y3QubmFtZX0gYWRkZWQgdG8gdGhlIGNhcnQuYClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVDYXJ0SXRlbVF1YW50aXR5ID0gKGlkLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGZvdW5kUHJvZHVjdCA9IGNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gaWQpXHJcbiAgICAgICAgaW5kZXggPSBjYXJ0SXRlbXMuZmluZEluZGV4KChwcm9kdWN0KSA9PiBwcm9kdWN0Ll9pZCA9PT0gaWQpXHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ2luYycpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0NhcnRJdGVtcz0gWy4uLmNhcnRJdGVtcywgey4uLnByb2R1Y3QsIHF1YW50aXR5OiBwcm9kdWN0LnF1YW50aXR5ICs9MX1dXHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5jUXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFF0eSgocHJldlF0eSkgPT4gcHJldlF0eSArIDEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWNRdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UXR5KChwcmV2UXR5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2UXR5ID49IDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlF0eSAtIDFcclxuICAgICAgICAgICAgcmV0dXJuIDFcclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgc2hvd0NhcnQsXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93Q2FydCxcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFF1YW50aXRpZXMsXHJcbiAgICAgICAgICAgICAgICBxdHksXHJcbiAgICAgICAgICAgICAgICBpbmNRdHksXHJcbiAgICAgICAgICAgICAgICBkZWNRdHksXHJcbiAgICAgICAgICAgICAgICBvbkFkZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9hc3QiLCJDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwidG90YWxQcmljZSIsInNldFRvdGFsUHJpY2UiLCJ0b3RhbFF1YW50aXRpZXMiLCJzZXRUb3RhbFF1YW50aXRpZXMiLCJxdHkiLCJzZXRRdHkiLCJmb3VuZFByb2R1Y3QiLCJpbmRleCIsIm9uQWRkIiwicHJvZHVjdCIsInF1YW50aXR5IiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwiZmluZCIsIml0ZW0iLCJfaWQiLCJwcmV2VG90YWxQcmljZSIsInByaWNlIiwicHJldlRvdGFsUXVhbnRpdHkiLCJ1cGRhdGVDYXJ0SXRlbXMiLCJtYXAiLCJjYXJ0UHJvZHVjdCIsInN1Y2Nlc3MiLCJuYW1lIiwidG9nZ2xlQ2FydEl0ZW1RdWFudGl0eSIsImlkIiwidmFsdWUiLCJmaW5kSW5kZXgiLCJuZXdDYXJ0SXRlbXMiLCJpbmNRdHkiLCJwcmV2UXR5IiwiZGVjUXR5IiwiUHJvdmlkZXIiLCJ1c2VTdGF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});