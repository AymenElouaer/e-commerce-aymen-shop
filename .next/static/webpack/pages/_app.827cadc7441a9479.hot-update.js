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

/***/ "./components/Cart.jsx":
/*!*****************************!*\
  !*** ./components/Cart.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Cart = function() {\n    var _this1 = _this;\n    _s();\n    var cartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_5__.useStateContext)(), totalPrice = ref.totalPrice, totalQuantities = ref.totalQuantities, cartItems = ref.cartItems, setShowCart = ref.setShowCart;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cart-wrapper\",\n        ref: cartRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cart-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"cart-heading\",\n                    onClick: function() {\n                        return setShowCart(false);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineLeft, {}, void 0, false, {\n                            fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"heading\",\n                            children: \"Your Cart\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"cart-num-items\",\n                            children: [\n                                \"(\",\n                                totalQuantities,\n                                \") items\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, _this),\n                cartItems.length < 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"empty-cart\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineShopping, {\n                            size: 150\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"You have no items in your cart\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: function() {\n                                    return setShowCart(false);\n                                },\n                                className: \"btn\",\n                                children: \"Continue shopping\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"product-container\",\n                    children: cartItems.length >= 1 && cartItems.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"product\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                urlFor: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 29\n                            }, _this1)\n                        }, item._id, false, {\n                            fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\Cart.jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, _this));\n};\n_s(Cart, \"+yPY479fV46QFkJ3SFgJIpUNxTs=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_5__.useStateContext\n    ];\n});\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUNUO0FBQ29FO0FBQ2hEO0FBQ1Q7QUFDRDtBQUNtQjs7O0FBRXpELEdBQUssQ0FBQ1csSUFBSSxHQUFHLFFBQVEsR0FBRixDQUFDOzs7SUFDaEIsR0FBSyxDQUFDQyxPQUFPLEdBQUdYLDZDQUFNO0lBQ3RCLEdBQUssQ0FBMkRTLEdBQWlCLEdBQWpCQSxzRUFBZSxJQUF2RUcsVUFBVSxHQUE4Q0gsR0FBaUIsQ0FBekVHLFVBQVUsRUFBRUMsZUFBZSxHQUE2QkosR0FBaUIsQ0FBN0RJLGVBQWUsRUFBRUMsU0FBUyxHQUFrQkwsR0FBaUIsQ0FBNUNLLFNBQVMsRUFBRUMsV0FBVyxHQUFLTixHQUFpQixDQUFqQ00sV0FBVztJQUMzRCxNQUFNLDZFQUNEQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFjO1FBQUNDLEdBQUcsRUFBRVAsT0FBTzs4RkFDckNLLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWdCOzs0RkFDMUJFLENBQU07b0JBQUNDLElBQUksRUFBQyxDQUFRO29CQUFDSCxTQUFTLEVBQUMsQ0FBYztvQkFBQ0ksT0FBTyxFQUFFLFFBQVE7d0JBQUZOLE1BQU0sQ0FBTkEsV0FBVyxDQUFDLEtBQUs7OztvR0FDMUVYLHlEQUFhOzs7OztvR0FDYmtCLENBQUk7NEJBQUNMLFNBQVMsRUFBQyxDQUFTO3NDQUFDLENBQVM7Ozs7OztvR0FDbENLLENBQUk7NEJBQUNMLFNBQVMsRUFBQyxDQUFnQjs7Z0NBQUMsQ0FBQztnQ0FBQ0osZUFBZTtnQ0FBQyxDQUFPOzs7Ozs7Ozs7Ozs7O2dCQUU3REMsU0FBUyxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxnRkFDaEJQLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFZOztvR0FDdEJaLDZEQUFpQjs0QkFBQ21CLElBQUksRUFBRSxHQUFHOzs7Ozs7b0dBQzNCQyxDQUFFO3NDQUFDLENBQThCOzs7Ozs7b0dBQ2pDeEIsa0RBQUk7NEJBQUN5QixJQUFJLEVBQUMsQ0FBRztrSEFDVFAsQ0FBTTtnQ0FBQ0MsSUFBSSxFQUFDLENBQVE7Z0NBQUNDLE9BQU8sRUFBRSxRQUFRO29DQUFGTixNQUFNLENBQU5BLFdBQVcsQ0FBQyxLQUFLOztnQ0FBR0UsU0FBUyxFQUFDLENBQUs7MENBQUMsQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUtyR0QsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQW1COzhCQUM3QkgsU0FBUyxDQUFDUyxNQUFNLElBQUksQ0FBQyxJQUFLVCxTQUFTLENBQUNhLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7c0NBQzFDLE1BQU0sK0RBQUxaLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFTO2tIQUNuQlksQ0FBRztnQ0FBQ3JCLE1BQU07Ozs7OzsyQkFEZW9CLElBQUksQ0FBQ0UsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU5RCxDQUFDO0dBakNLcEIsSUFBSTs7UUFFMERELGtFQUFlOzs7S0FGN0VDLElBQUk7QUFtQ1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzeD9hMmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBBaU91dGxpbmVNaW51cywgQWlPdXRsaW5lUGx1cywgQWlPdXRsaW5lTGVmdCwgQWlPdXRsaW5lU2hvcHBpbmcgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IHsgVGlEZWxldGVPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvdGknXHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xyXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICcuLi9saWIvY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L1N0YXRlQ29udGV4dCdcclxuXHJcbmNvbnN0IENhcnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjYXJ0UmVmID0gdXNlUmVmKClcclxuICAgIGNvbnN0IHsgdG90YWxQcmljZSwgdG90YWxRdWFudGl0aWVzLCBjYXJ0SXRlbXMsIHNldFNob3dDYXJ0IH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC13cmFwcGVyJyByZWY9e2NhcnRSZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nY2FydC1oZWFkaW5nJyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q2FydChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVMZWZ0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWFkaW5nJz5Zb3VyIENhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0LW51bS1pdGVtcyc+KHt0b3RhbFF1YW50aXRpZXN9KSBpdGVtczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPCAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1wdHktY2FydCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVTaG9wcGluZyBzaXplPXsxNTB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Zb3UgaGF2ZSBubyBpdGVtcyBpbiB5b3VyIGNhcnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q2FydChmYWxzZSl9IGNsYXNzTmFtZT1cImJ0blwiPkNvbnRpbnVlIHNob3BwaW5nPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+PSAxICYmIChjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0JyBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdXJsRm9yIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICApKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkxpbmsiLCJBaU91dGxpbmVNaW51cyIsIkFpT3V0bGluZVBsdXMiLCJBaU91dGxpbmVMZWZ0IiwiQWlPdXRsaW5lU2hvcHBpbmciLCJUaURlbGV0ZU91dGxpbmUiLCJUb2FzdCIsInVybEZvciIsInVzZVN0YXRlQ29udGV4dCIsIkNhcnQiLCJjYXJ0UmVmIiwidG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsImNhcnRJdGVtcyIsInNldFNob3dDYXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJzcGFuIiwibGVuZ3RoIiwic2l6ZSIsImgzIiwiaHJlZiIsIm1hcCIsIml0ZW0iLCJpbWciLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cart.jsx\n");

/***/ })

});