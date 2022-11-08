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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar StateContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), showsCart = ref1[0], setShowsCart = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = ref2[0], setCartItems = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), totalPrice = ref3[0], setTotalPrice = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalQuantities = ref4[0], setTotalQuantities = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qty = ref5[0], setQty = ref5[1];\n    var onAdd = function(product, quantity) {\n        var checkProductInCart = cartItems.find(function(item) {\n            return item._id === product._id;\n        });\n        setTotalPrice(function(prevTotalPrice) {\n            return prevTotalPrice + product.price * quantity;\n        });\n        setTotalQuantities(function(prevTotalQuantity) {\n            return prevTotalQuantity + quantity;\n        });\n        // if the item already exist in the cart\n        if (checkProductInCart) {\n            var updateCartItems = cartItems.map(function(cartProduct) {\n                if (cartProduct._id === product._id) return _objectSpread({}, cartProduct, {\n                    quantity: cartProduct.quantity + quantity\n                });\n            });\n            setCartItems(updateCartItems);\n        } else {\n            product.quantity = quantity;\n            setCartItems(_toConsumableArray(cartItems).concat([\n                _objectSpread({}, product)\n            ]));\n        }\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"\".concat(qty, \" \").concat(product.name, \" added to the cart.\"));\n    };\n    var incQty = function() {\n        setQty(function(prevQty) {\n            return prevQty + 1;\n        });\n    };\n    var decQty = function() {\n        setQty(function(prevQty) {\n            if (prevQty >= 2) return prevQty - 1;\n            return 1;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            showCart: showCart,\n            setShowCart: setShowCart,\n            cartItems: cartItems,\n            totalPrice: totalPrice,\n            totalQuantities: totalQuantities,\n            qty: qty,\n            incQty: incQty,\n            decQty: decQty,\n            onAdd: onAdd\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\context\\\\StateContext.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, _this));\n};\n_s(StateContext, \"PfoY8YHZfoo7kKvm4xu7yAKWofo=\");\n_c = StateContext;\nvar useStateContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n};\n_s1(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StateContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixDQUFDO1FBQ2xCbEIsTUFBTSxDQUFDLFFBQVEsQ0FBUGlCLE9BQU8sRUFBSyxDQUFDO1lBQ2pCLEVBQUUsRUFBRUEsT0FBTyxJQUFJLENBQUMsRUFDWixNQUFNLENBQUNBLE9BQU8sR0FBRyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxDQUFDO1FBR1osQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLDZFQUNEL0IsT0FBTyxDQUFDaUMsUUFBUTtRQUNiQyxLQUFLLEVBQUUsQ0FBQztZQUNKL0IsUUFBUSxFQUFSQSxRQUFRO1lBQ1JDLFdBQVcsRUFBWEEsV0FBVztZQUNYRyxTQUFTLEVBQVRBLFNBQVM7WUFDVEUsVUFBVSxFQUFWQSxVQUFVO1lBQ1ZFLGVBQWUsRUFBZkEsZUFBZTtZQUNmRSxHQUFHLEVBQUhBLEdBQUc7WUFDSGlCLE1BQU0sRUFBTkEsTUFBTTtZQUNORSxNQUFNLEVBQU5BLE1BQU07WUFDTmpCLEtBQUssRUFBTEEsS0FBSztRQUNULENBQUM7a0JBRUFiLFFBQVE7Ozs7OztBQUlyQixDQUFDO0dBaEVZRCxZQUFZO0tBQVpBLFlBQVk7QUFpRWxCLEdBQUssQ0FBQ2tDLGVBQWUsR0FBRyxRQUFRLEdBQUZ2QyxDQUFDOztJQUFEQSxNQUFNLENBQU5BLGlEQUFVLENBQUNJLE9BQU87QUFBQSxDQUFDO0lBQTNDbUMsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcz9iMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93Q2FydCwgc2V0U2hvd0NhcnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc2hvd3NDYXJ0LCBzZXRTaG93c0NhcnRdID0gIHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0b3RhbFByaWNlLCBzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt0b3RhbFF1YW50aXRpZXMsIHNldFRvdGFsUXVhbnRpdGllc10gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3F0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gICAgY29uc3Qgb25BZGQgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSBjYXJ0SXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkKTtcclxuXHJcbiAgICAgICAgc2V0VG90YWxQcmljZSgocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlICsgcHJvZHVjdC5wcmljZSAqIHF1YW50aXR5KVxyXG4gICAgICAgIHNldFRvdGFsUXVhbnRpdGllcygocHJldlRvdGFsUXVhbnRpdHkpID0+IHByZXZUb3RhbFF1YW50aXR5ICsgcXVhbnRpdHkpXHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBpdGVtIGFscmVhZHkgZXhpc3QgaW4gdGhlIGNhcnRcclxuICAgICAgICBpZiAoY2hlY2tQcm9kdWN0SW5DYXJ0KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlQ2FydEl0ZW1zID0gY2FydEl0ZW1zLm1hcCgoY2FydFByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXJ0UHJvZHVjdC5faWQgPT09IHByb2R1Y3QuX2lkKSByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNhcnRQcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBjYXJ0UHJvZHVjdC5xdWFudGl0eSArIHF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVDYXJ0SXRlbXMpO1xyXG5cclxuICAgICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgaXRlbSBkb2Vzbid0IGFscmVhZHkgZXhpc3QgaW4gdGhlIGNhcnRcclxuICAgICAgICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHF1YW50aXR5XHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCB7IC4uLnByb2R1Y3QgfV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoYCR7cXR5fSAke3Byb2R1Y3QubmFtZX0gYWRkZWQgdG8gdGhlIGNhcnQuYClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmNRdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UXR5KChwcmV2UXR5KSA9PiBwcmV2UXR5ICsgMSlcclxuICAgIH1cclxuICAgIGNvbnN0IGRlY1F0eSA9ICgpID0+IHtcclxuICAgICAgICBzZXRRdHkoKHByZXZRdHkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZXZRdHkgPj0gMilcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2UXR5IC0gMVxyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2FydCxcclxuICAgICAgICAgICAgICAgIHNldFNob3dDYXJ0LFxyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsUXVhbnRpdGllcyxcclxuICAgICAgICAgICAgICAgIHF0eSxcclxuICAgICAgICAgICAgICAgIGluY1F0eSxcclxuICAgICAgICAgICAgICAgIGRlY1F0eSxcclxuICAgICAgICAgICAgICAgIG9uQWRkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgdXNlU3RhdGVDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsIkNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsInNob3dDYXJ0Iiwic2V0U2hvd0NhcnQiLCJzaG93c0NhcnQiLCJzZXRTaG93c0NhcnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsInNldFRvdGFsUXVhbnRpdGllcyIsInF0eSIsInNldFF0eSIsIm9uQWRkIiwicHJvZHVjdCIsInF1YW50aXR5IiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwiZmluZCIsIml0ZW0iLCJfaWQiLCJwcmV2VG90YWxQcmljZSIsInByaWNlIiwicHJldlRvdGFsUXVhbnRpdHkiLCJ1cGRhdGVDYXJ0SXRlbXMiLCJtYXAiLCJjYXJ0UHJvZHVjdCIsInN1Y2Nlc3MiLCJuYW1lIiwiaW5jUXR5IiwicHJldlF0eSIsImRlY1F0eSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTdGF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});