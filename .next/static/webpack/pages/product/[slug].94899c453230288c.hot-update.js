"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Product */ \"./components/Product.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductDetails = function(param) {\n    var product = param.product, products = param.products;\n    var _this1 = _this;\n    _s();\n    var image = product.image, name = product.name, details = product.details, price = product.price;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), index = ref[0], setIndex = ref[1];\n    var ref1 = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext)(), decQty = ref1.decQty, incQty = ref1.incQty, qty = ref1.qty;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-detail-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(image && image[index]),\n                                    className: \"product-detail-image\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 17,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 16,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"small-images-container\",\n                                children: image === null || image === void 0 ? void 0 : image.map(function(item, i) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(item),\n                                        className: i === index ? 'small-image selected-image' : 'small-image',\n                                        onMouseEnter: function() {\n                                            return setIndex(i);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 21,\n                                        columnNumber: 29\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-desc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"reviews\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 32,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 33,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 34,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 35,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineStar, {}, void 0, false, {\n                                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 36,\n                                                columnNumber: 29\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 31,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"20\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Details:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: details\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: [\n                                    \"$\",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"quantity\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Quantity:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"quantity-desc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"minus\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMinus, {}, void 0, false, {\n                                                    fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 53\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 46,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"num\",\n                                                children: \"0\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 47,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"plus\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlinePlus, {}, void 0, false, {\n                                                    fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 52\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                                lineNumber: 48,\n                                                columnNumber: 29\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"add-to-cart\",\n                                        onClick: \"\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"buy-now\",\n                                        onClick: \"\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"maylike-products-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"You may also like\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"marquee\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"maylike-products-container track\",\n                            children: products.map(function(item) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    product: item\n                                }, item._id, false, {\n                                    fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\pages\\\\product\\\\[slug].js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, _this));\n};\n_s(ProductDetails, \"EK3wu9TgN+1kdQUb7IFILBmp53U=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext\n    ];\n});\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Z0hBQ25CWSxDQUFNO3dDQUFDQyxJQUFJLEVBQUMsQ0FBUTt3Q0FBQ2IsU0FBUyxFQUFDLENBQWE7d0NBQUNjLE9BQU8sRUFBQyxDQUFFO2tEQUFDLENBRXpEOzs7Ozs7Z0hBQ0NGLENBQU07d0NBQUNDLElBQUksRUFBQyxDQUFRO3dDQUFDYixTQUFTLEVBQUMsQ0FBUzt3Q0FBQ2MsT0FBTyxFQUFDLENBQUU7a0RBQUMsQ0FFckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLWGYsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTBCOztnR0FDcENlLENBQUU7a0NBQUMsQ0FBaUI7Ozs7OztnR0FDcEJoQixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBUzs4R0FDbkJELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFrQztzQ0FDNUNYLFFBQVEsQ0FBQ2MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTs4Q0FDZixNQUFNLCtEQUFMcEIsMkRBQU87b0NBQWdCSSxPQUFPLEVBQUVnQixJQUFJO21DQUF2QkEsSUFBSSxDQUFDWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xELENBQUM7R0F0RUs3QixjQUFjOztRQUdlRCxrRUFBZTs7O0tBSDVDQyxjQUFjOztBQXNHcEIsK0RBQWVBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanM/ZGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQsIHVybEZvciB9IGZyb20gJy4uLy4uL2xpYi9jbGllbnQnXHJcbmltcG9ydCB7IEFpT3V0bGluZU1pbnVzLCBBaU91dGxpbmVQbHVzLCBBaUZpbGxTdGFyLCBBaU91dGxpbmVTdGFyIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnXHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9ICh7IHByb2R1Y3QsIHByb2R1Y3RzIH0pID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2UsIG5hbWUsIGRldGFpbHMsIHByaWNlIH0gPSBwcm9kdWN0O1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHsgZGVjUXR5LCBpbmNRdHksIHF0eX0gPSB1c2VTdGF0ZUNvbnRleHQoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGV0YWlsLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZS1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKGltYWdlICYmIGltYWdlW2luZGV4XSl9IGNsYXNzTmFtZT0ncHJvZHVjdC1kZXRhaWwtaW1hZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLWltYWdlcy1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2U/Lm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IGluZGV4ID8gJ3NtYWxsLWltYWdlIHNlbGVjdGVkLWltYWdlJyA6ICdzbWFsbC1pbWFnZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJbmRleChpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjIwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5EZXRhaWxzOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2RldGFpbHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncHJpY2UnPiR7cHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdxdWFudGl0eSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5RdWFudGl0eTo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3F1YW50aXR5LWRlc2MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtaW51cyc+PEFpT3V0bGluZU1pbnVzIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdudW0nPjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BsdXMnPjxBaU91dGxpbmVQbHVzIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYWRkLXRvLWNhcnQnIG9uQ2xpY2s9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXktbm93JyBvbkNsaWNrPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXkgTm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21heWxpa2UtcHJvZHVjdHMtd3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICA8aDI+WW91IG1heSBhbHNvIGxpa2U8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21hcnF1ZWUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXlsaWtlLXByb2R1Y3RzLWNvbnRhaW5lciB0cmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IGtleT17aXRlbS5faWR9IHByb2R1Y3Q9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInByb2R1Y3RcIl1cclxuICAgIHtcclxuICAgICAgICBzbHVne1xyXG4gICAgICAgICAgICBjdXJyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gYDtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuICAgIGNvbnN0IHBhdGhzID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoe1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0LnNsdWcuY3VycmVudFxyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZydcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicHJvZHVjdFwiICYmIHNsdWcuY3VycmVudCA9PScke3NsdWd9J11bMF1gO1xyXG4gICAgY29uc3QgcHJvZHVjdHNRdWVyeSA9ICcqW190eXBlID09IFwicHJvZHVjdFwiXSc7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHByb2R1Y3RzUXVlcnkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgcHJvZHVjdCwgcHJvZHVjdHMgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsc1xyXG4iXSwibmFtZXMiOlsidXJsRm9yIiwiQWlPdXRsaW5lTWludXMiLCJBaU91dGxpbmVQbHVzIiwiQWlGaWxsU3RhciIsIkFpT3V0bGluZVN0YXIiLCJQcm9kdWN0IiwidXNlU3RhdGUiLCJ1c2VTdGF0ZUNvbnRleHQiLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImltYWdlIiwibmFtZSIsImRldGFpbHMiLCJwcmljZSIsImluZGV4Iiwic2V0SW5kZXgiLCJkZWNRdHkiLCJpbmNRdHkiLCJxdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJtYXAiLCJpdGVtIiwiaSIsIm9uTW91c2VFbnRlciIsImgxIiwicCIsImg0IiwiaDMiLCJzcGFuIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJoMiIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});