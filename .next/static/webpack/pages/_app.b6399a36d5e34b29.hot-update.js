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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar StateContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalPrice = ref2[0], setTotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalQuantities = ref3[0], setTotalQuantities = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qty = ref4[0], setQty = ref4[1];\n    var foundProduct;\n    var index;\n    var onAdd = function(product, quantity) {\n        var checkProductInCart = cartItems.find(function(item) {\n            return item._id === product._id;\n        });\n        setTotalPrice(function(prevTotalPrice) {\n            return prevTotalPrice + product.price * quantity;\n        });\n        setTotalQuantities(function(prevTotalQuantity) {\n            return prevTotalQuantity + quantity;\n        });\n        // if the item already exist in the cart\n        if (checkProductInCart) {\n            var updateCartItems = cartItems.map(function(cartProduct) {\n                if (cartProduct._id === product._id) return _objectSpread({}, cartProduct, {\n                    quantity: cartProduct.quantity + quantity\n                });\n            });\n            setCartItems(updateCartItems);\n        } else {\n            product.quantity = quantity;\n            setCartItems(_toConsumableArray(cartItems).concat([\n                _objectSpread({}, product)\n            ]));\n        }\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"\".concat(qty, \" \").concat(product.name, \" added to the cart.\"));\n    };\n    var onRemove = function(product) {\n        foundProduct = cartItems.find(function(item) {\n            return item._id === id;\n        });\n        var newCartItem = cartItems.filter(function(item) {\n            return item._id !== id;\n        });\n        setTotalPrice(function(prevTotalPrice) {\n            return prevTotalPrice - foundProduct.price * foundProduct.quantity;\n        });\n        setTotalQuantities();\n    };\n    var toggleCartItemQuantity = function(id, value) {\n        foundProduct = cartItems.find(function(item) {\n            return item._id === id;\n        });\n        index = cartItems.findIndex(function(product) {\n            return product._id === id;\n        });\n        var newCartItem = cartItems.filter(function(item) {\n            return item._id !== id;\n        });\n        if (value === 'inc') {\n            var newCartItems = _toConsumableArray(newCartItem).concat([\n                _objectSpread({}, foundProduct, {\n                    quantity: foundProduct.quantity += 1\n                })\n            ]);\n            setCartItems(newCartItems);\n            setTotalPrice(function(prevTotalPrice) {\n                return prevTotalPrice + foundProduct.price;\n            });\n            setTotalQuantities(function(prevTotalQuantity) {\n                return prevTotalQuantity + 1;\n            });\n        } else if (value === 'dec') {\n            if (foundProduct.quantity > 1) {\n                var newCartItems1 = _toConsumableArray(newCartItem).concat([\n                    _objectSpread({}, foundProduct, {\n                        quantity: foundProduct.quantity -= 1\n                    })\n                ]);\n                setCartItems(newCartItems1);\n                setTotalPrice(function(prevTotalPrice) {\n                    return prevTotalPrice - foundProduct.price;\n                });\n                setTotalQuantities(function(prevTotalQuantity) {\n                    return prevTotalQuantity - 1;\n                });\n            }\n        }\n    };\n    var incQty = function() {\n        setQty(function(prevQty) {\n            return prevQty + 1;\n        });\n    };\n    var decQty = function() {\n        setQty(function(prevQty) {\n            if (prevQty >= 2) return prevQty - 1;\n            return 1;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            showCart: showCart,\n            setShowCart: setShowCart,\n            cartItems: cartItems,\n            totalPrice: totalPrice,\n            totalQuantities: totalQuantities,\n            qty: qty,\n            incQty: incQty,\n            decQty: decQty,\n            onAdd: onAdd,\n            toggleCartItemQuantity: toggleCartItemQuantity\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\context\\\\StateContext.js\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, _this));\n};\n_s(StateContext, \"KihS6PmrKTQEzGuhoGAbmjGjdWo=\");\n_c = StateContext;\nvar useStateContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n};\n_s1(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StateContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxVQUFVO1lBQ1ZFLGVBQWUsRUFBZkEsZUFBZTtZQUNmRSxHQUFHLEVBQUhBLEdBQUc7WUFDSDJCLE1BQU0sRUFBTkEsTUFBTTtZQUNORSxNQUFNLEVBQU5BLE1BQU07WUFDTnpCLEtBQUssRUFBTEEsS0FBSztZQUNMbUIsc0JBQXNCLEVBQXRCQSxzQkFBc0I7UUFDMUIsQ0FBQztrQkFFQWhDLFFBQVE7Ozs7OztBQUlyQixDQUFDO0dBN0ZZRCxZQUFZO0tBQVpBLFlBQVk7QUE4RmxCLEdBQUssQ0FBQ3lDLGVBQWUsR0FBRyxRQUFRLEdBQUY5QyxDQUFDOztJQUFEQSxNQUFNLENBQU5BLGlEQUFVLENBQUNJLE9BQU87QUFBQSxDQUFDO0lBQTNDMEMsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcz9iMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93Q2FydCwgc2V0U2hvd0NhcnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdG90YWxQcmljZSwgc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3RvdGFsUXVhbnRpdGllcywgc2V0VG90YWxRdWFudGl0aWVzXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcXR5LCBzZXRRdHldID0gdXNlU3RhdGUoMSlcclxuXHJcbiAgICBsZXQgZm91bmRQcm9kdWN0O1xyXG4gICAgbGV0IGluZGV4O1xyXG5cclxuICAgIGNvbnN0IG9uQWRkID0gKHByb2R1Y3QsIHF1YW50aXR5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tQcm9kdWN0SW5DYXJ0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBwcm9kdWN0Ll9pZCk7XHJcblxyXG4gICAgICAgIHNldFRvdGFsUHJpY2UoKHByZXZUb3RhbFByaWNlKSA9PiBwcmV2VG90YWxQcmljZSArIHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eSlcclxuICAgICAgICBzZXRUb3RhbFF1YW50aXRpZXMoKHByZXZUb3RhbFF1YW50aXR5KSA9PiBwcmV2VG90YWxRdWFudGl0eSArIHF1YW50aXR5KVxyXG5cclxuICAgICAgICAvLyBpZiB0aGUgaXRlbSBhbHJlYWR5IGV4aXN0IGluIHRoZSBjYXJ0XHJcbiAgICAgICAgaWYgKGNoZWNrUHJvZHVjdEluQ2FydCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUNhcnRJdGVtcyA9IGNhcnRJdGVtcy5tYXAoKGNhcnRQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FydFByb2R1Y3QuX2lkID09PSBwcm9kdWN0Ll9pZCkgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jYXJ0UHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogY2FydFByb2R1Y3QucXVhbnRpdHkgKyBxdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRDYXJ0SXRlbXModXBkYXRlQ2FydEl0ZW1zKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHsgLy8gaWYgdGhlIGl0ZW0gZG9lc24ndCBhbHJlYWR5IGV4aXN0IGluIHRoZSBjYXJ0XHJcbiAgICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSBxdWFudGl0eVxyXG4gICAgICAgICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgeyAuLi5wcm9kdWN0IH1dKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b2FzdC5zdWNjZXNzKGAke3F0eX0gJHtwcm9kdWN0Lm5hbWV9IGFkZGVkIHRvIHRoZSBjYXJ0LmApXHJcbiAgICB9XHJcbiAgICBjb25zdCBvblJlbW92ZSA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgZm91bmRQcm9kdWN0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBpZClcclxuICAgICAgICBjb25zdCBuZXdDYXJ0SXRlbSA9IGNhcnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBpZClcclxuXHJcbiAgICAgICAgc2V0VG90YWxQcmljZSgocHJldlRvdGFsUHJpY2UpID0+IHByZXZUb3RhbFByaWNlIC0gZm91bmRQcm9kdWN0LnByaWNlICogZm91bmRQcm9kdWN0LnF1YW50aXR5KTtcclxuICAgICAgICBzZXRUb3RhbFF1YW50aXRpZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUNhcnRJdGVtUXVhbnRpdHkgPSAoaWQsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgZm91bmRQcm9kdWN0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBpZClcclxuICAgICAgICBpbmRleCA9IGNhcnRJdGVtcy5maW5kSW5kZXgoKHByb2R1Y3QpID0+IHByb2R1Y3QuX2lkID09PSBpZClcclxuICAgICAgICBjb25zdCBuZXdDYXJ0SXRlbSA9IGNhcnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBpZClcclxuICAgICAgICBpZiAodmFsdWUgPT09ICdpbmMnKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3Q2FydEl0ZW1zID0gWy4uLm5ld0NhcnRJdGVtLCB7IC4uLmZvdW5kUHJvZHVjdCwgcXVhbnRpdHk6IGZvdW5kUHJvZHVjdC5xdWFudGl0eSArPSAxIH1dXHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyhuZXdDYXJ0SXRlbXMpXHJcbiAgICAgICAgICAgIHNldFRvdGFsUHJpY2UoKHByZXZUb3RhbFByaWNlKSA9PiBwcmV2VG90YWxQcmljZSArIGZvdW5kUHJvZHVjdC5wcmljZSlcclxuICAgICAgICAgICAgc2V0VG90YWxRdWFudGl0aWVzKHByZXZUb3RhbFF1YW50aXR5ID0+IHByZXZUb3RhbFF1YW50aXR5ICsgMSlcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZGVjJykge1xyXG4gICAgICAgICAgICBpZiAoZm91bmRQcm9kdWN0LnF1YW50aXR5ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0NhcnRJdGVtcyA9IFsuLi5uZXdDYXJ0SXRlbSwgeyAuLi5mb3VuZFByb2R1Y3QsIHF1YW50aXR5OiBmb3VuZFByb2R1Y3QucXVhbnRpdHkgLT0gMSB9XVxyXG4gICAgICAgICAgICAgICAgc2V0Q2FydEl0ZW1zKG5ld0NhcnRJdGVtcylcclxuICAgICAgICAgICAgICAgIHNldFRvdGFsUHJpY2UoKHByZXZUb3RhbFByaWNlKSA9PiBwcmV2VG90YWxQcmljZSAtIGZvdW5kUHJvZHVjdC5wcmljZSlcclxuICAgICAgICAgICAgICAgIHNldFRvdGFsUXVhbnRpdGllcyhwcmV2VG90YWxRdWFudGl0eSA9PiBwcmV2VG90YWxRdWFudGl0eSAtIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbmNRdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UXR5KChwcmV2UXR5KSA9PiBwcmV2UXR5ICsgMSlcclxuICAgIH1cclxuICAgIGNvbnN0IGRlY1F0eSA9ICgpID0+IHtcclxuICAgICAgICBzZXRRdHkoKHByZXZRdHkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZXZRdHkgPj0gMilcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2UXR5IC0gMVxyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2FydCxcclxuICAgICAgICAgICAgICAgIHNldFNob3dDYXJ0LFxyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsUXVhbnRpdGllcyxcclxuICAgICAgICAgICAgICAgIHF0eSxcclxuICAgICAgICAgICAgICAgIGluY1F0eSxcclxuICAgICAgICAgICAgICAgIGRlY1F0eSxcclxuICAgICAgICAgICAgICAgIG9uQWRkLFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2FydEl0ZW1RdWFudGl0eVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9hc3QiLCJDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwidG90YWxQcmljZSIsInNldFRvdGFsUHJpY2UiLCJ0b3RhbFF1YW50aXRpZXMiLCJzZXRUb3RhbFF1YW50aXRpZXMiLCJxdHkiLCJzZXRRdHkiLCJmb3VuZFByb2R1Y3QiLCJpbmRleCIsIm9uQWRkIiwicHJvZHVjdCIsInF1YW50aXR5IiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwiZmluZCIsIml0ZW0iLCJfaWQiLCJwcmV2VG90YWxQcmljZSIsInByaWNlIiwicHJldlRvdGFsUXVhbnRpdHkiLCJ1cGRhdGVDYXJ0SXRlbXMiLCJtYXAiLCJjYXJ0UHJvZHVjdCIsInN1Y2Nlc3MiLCJuYW1lIiwib25SZW1vdmUiLCJpZCIsIm5ld0NhcnRJdGVtIiwiZmlsdGVyIiwidG9nZ2xlQ2FydEl0ZW1RdWFudGl0eSIsInZhbHVlIiwiZmluZEluZGV4IiwibmV3Q2FydEl0ZW1zIiwiaW5jUXR5IiwicHJldlF0eSIsImRlY1F0eSIsIlByb3ZpZGVyIiwidXNlU3RhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});