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

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ \"./components/index.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NavBar = function() {\n    _s();\n    var ref = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext)(), showCart = ref.showCart, setShowCart = ref.setShowCart, totalQuantities = ref.totalQuantities;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: \"Shop\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\NavBar.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\NavBar.jsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"cart-icon\",\n                onClick: function() {\n                    return setShowCart = true;\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineShopping, {}, void 0, false, {\n                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\NavBar.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"cart-item-qty\",\n                        children: totalQuantities\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\NavBar.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\NavBar.jsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, _this),\n            showCart && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.Cart, {}, void 0, false, {\n                fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\NavBar.jsx\",\n                lineNumber: 19,\n                columnNumber: 26\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\components\\\\NavBar.jsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, _this));\n};\n_s(NavBar, \"mFEP3A/tk0dXv1fU+iqaINU4OQM=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUNzQjtBQUN6QjtBQUNnQzs7O0FBR3pELEdBQUssQ0FBQ0ssTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNsQixHQUFLLENBQThDRCxHQUFpQixHQUFqQkEsc0VBQWUsSUFBMURFLFFBQVEsR0FBbUNGLEdBQWlCLENBQTVERSxRQUFRLEVBQUVDLFdBQVcsR0FBc0JILEdBQWlCLENBQWxERyxXQUFXLEVBQUVDLGVBQWUsR0FBS0osR0FBaUIsQ0FBckNJLGVBQWU7SUFDOUMsTUFBTSw2RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBa0I7O3dGQUM1QkMsQ0FBQztnQkFBQ0QsU0FBUyxFQUFDLENBQU07c0dBQ2RULGtEQUFJO29CQUFDVyxJQUFJLEVBQUMsQ0FBRzs4QkFBQyxDQUFJOzs7Ozs7Ozs7Ozt3RkFFdEJDLENBQU07Z0JBQUNDLElBQUksRUFBQyxDQUFRO2dCQUFDSixTQUFTLEVBQUMsQ0FBVztnQkFBQ0ssT0FBTyxFQUFFLFFBQVE7b0JBQUZSLE1BQU0sQ0FBTkEsV0FBVyxHQUFHLElBQUk7OztnR0FDeEVMLDZEQUFpQjs7Ozs7Z0dBQ2pCYyxDQUFJO3dCQUFDTixTQUFTLEVBQUMsQ0FBZTtrQ0FBRUYsZUFBZTs7Ozs7Ozs7Ozs7O1lBRW5ERixRQUFRLGdGQUFLSCxtQ0FBSTs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztHQWRLRSxNQUFNOztRQUMyQ0Qsa0VBQWU7OztLQURoRUMsTUFBTTtBQWdCWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci5qc3g/ZmIxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQWlPdXRsaW5lU2hvcHBpbmcgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4vJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L1N0YXRlQ29udGV4dCdcclxuXHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHNob3dDYXJ0LCBzZXRTaG93Q2FydCwgdG90YWxRdWFudGl0aWVzIH0gPSB1c2VTdGF0ZUNvbnRleHQoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xvZ28nPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5TaG9wPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2NhcnQtaWNvbicgb25DbGljaz17KCkgPT4gc2V0U2hvd0NhcnQgPSB0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVTaG9wcGluZyAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJ0LWl0ZW0tcXR5Jz57dG90YWxRdWFudGl0aWVzfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtzaG93Q2FydCAmJiA8Q2FydCAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJBaU91dGxpbmVTaG9wcGluZyIsIkNhcnQiLCJ1c2VTdGF0ZUNvbnRleHQiLCJOYXZCYXIiLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwidG90YWxRdWFudGl0aWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImhyZWYiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.jsx\n");

/***/ })

});