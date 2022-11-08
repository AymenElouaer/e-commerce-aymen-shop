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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar StateContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), totalPrice = ref2[0], settotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), totalQuantities = ref3[0], setTotalQuantities = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qty = ref4[0], setQty = ref4[1];\n    var onAdd = function(product, quantity) {\n        var checkProductInCart = cartItems.find(function(item) {\n            return item._id === product._id;\n        });\n    };\n    var incQty = function() {\n        setQty(function(prevQty) {\n            return prevQty + 1;\n        });\n    };\n    var decQty = function() {\n        setQty(function(prevQty) {\n            if (prevQty >= 2) return prevQty - 1;\n            return 1;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            showCart: showCart,\n            cartItems: cartItems,\n            totalPrice: totalPrice,\n            totalQuantities: totalQuantities,\n            qty: qty,\n            incQty: incQty,\n            decQty: decQty\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\React\\\\shop\\\\shop\\\\context\\\\StateContext.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this));\n};\n_s(StateContext, \"p1CYYCNjfhYD1xTRqJtxsYapqoo=\");\n_c = StateContext;\nvar useStateContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n};\n_s1(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StateContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2RTtBQUN0Qzs7O0FBRXZDLEdBQUssQ0FBQ00sT0FBTyxpQkFBR0wsb0RBQWE7QUFFdEIsR0FBSyxDQUFDTSxZQUFZLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbkMsR0FBSyxDQUEyQkwsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBdkNNLFFBQVEsR0FBaUJOLEdBQWUsS0FBOUJPLFdBQVcsR0FBSVAsR0FBZTtJQUMvQyxHQUFLLENBQTZCQSxJQUFVLEdBQVZBLCtDQUFRLElBQW5DUSxTQUFTLEdBQWtCUixJQUFVLEtBQTFCUyxZQUFZLEdBQUlULElBQVU7SUFDNUMsR0FBSyxDQUErQkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUFyQ1UsVUFBVSxHQUFtQlYsSUFBVSxLQUEzQlcsYUFBYSxHQUFJWCxJQUFVO0lBQzlDLEdBQUssQ0FBeUNBLElBQVUsR0FBVkEsK0NBQVEsSUFBL0NZLGVBQWUsR0FBd0JaLElBQVUsS0FBaENhLGtCQUFrQixHQUFJYixJQUFVO0lBQ3hELEdBQUssQ0FBaUJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXpCYyxHQUFHLEdBQVlkLElBQVcsS0FBckJlLE1BQU0sR0FBSWYsSUFBVztJQUVqQyxHQUFLLENBQUNnQixLQUFLLEdBQUcsUUFBUSxDQUFQQyxPQUFPLEVBQUVDLFFBQVEsRUFBSSxDQUFDO1FBQ3pDLEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUdYLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDLFFBQVEsQ0FBUEMsSUFBSTtZQUFLQSxNQUFNLENBQU5BLElBQUksQ0FBQ0MsR0FBRyxLQUFLTCxPQUFPLENBQUNLLEdBQUc7O0lBQ3hFLENBQUM7SUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxRQUFRLEdBQUYsQ0FBQztRQUNsQlIsTUFBTSxDQUFDLFFBQVEsQ0FBUFMsT0FBTztZQUFLQSxNQUFNLENBQU5BLE9BQU8sR0FBRyxDQUFDOztJQUNuQyxDQUFDO0lBQ0QsR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDbEJWLE1BQU0sQ0FBQyxRQUFRLENBQVBTLE9BQU8sRUFBSyxDQUFDO1lBQ2pCLEVBQUUsRUFBRUEsT0FBTyxJQUFJLENBQUMsRUFDWixNQUFNLENBQUNBLE9BQU8sR0FBRyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxDQUFDO1FBR1osQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLDZFQUNEckIsT0FBTyxDQUFDdUIsUUFBUTtRQUNiQyxLQUFLLEVBQUUsQ0FBQztZQUNKckIsUUFBUSxFQUFSQSxRQUFRO1lBQ1JFLFNBQVMsRUFBVEEsU0FBUztZQUNURSxVQUFVLEVBQVZBLFVBQVU7WUFDVkUsZUFBZSxFQUFmQSxlQUFlO1lBQ2ZFLEdBQUcsRUFBSEEsR0FBRztZQUNIUyxNQUFNLEVBQU5BLE1BQU07WUFDTkUsTUFBTSxFQUFOQSxNQUFNO1FBQ1YsQ0FBQztrQkFFQXBCLFFBQVE7Ozs7OztBQUlyQixDQUFDO0dBeENZRCxZQUFZO0tBQVpBLFlBQVk7QUF5Q2xCLEdBQUssQ0FBQ3dCLGVBQWUsR0FBRyxRQUFRLEdBQUY3QixDQUFDOztJQUFEQSxNQUFNLENBQU5BLGlEQUFVLENBQUNJLE9BQU87QUFBQSxDQUFDO0lBQTNDeUIsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcz9iMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93Q2FydCwgc2V0U2hvd0NhcnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RvdGFsUHJpY2UsIHNldHRvdGFsUHJpY2VdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RvdGFsUXVhbnRpdGllcywgc2V0VG90YWxRdWFudGl0aWVzXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtxdHksIHNldFF0eV0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICAgIGNvbnN0IG9uQWRkID0gKHByb2R1Y3QsIHF1YW50aXR5KSA9PntcclxuY29uc3QgY2hlY2tQcm9kdWN0SW5DYXJ0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBwcm9kdWN0Ll9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5jUXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFF0eSgocHJldlF0eSkgPT4gcHJldlF0eSArIDEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWNRdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UXR5KChwcmV2UXR5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2UXR5ID49IDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlF0eSAtIDFcclxuICAgICAgICAgICAgcmV0dXJuIDFcclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgc2hvd0NhcnQsXHJcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgdG90YWxRdWFudGl0aWVzLFxyXG4gICAgICAgICAgICAgICAgcXR5LFxyXG4gICAgICAgICAgICAgICAgaW5jUXR5LFxyXG4gICAgICAgICAgICAgICAgZGVjUXR5XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgdXNlU3RhdGVDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsIkNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsInNob3dDYXJ0Iiwic2V0U2hvd0NhcnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJ0b3RhbFByaWNlIiwic2V0dG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsInNldFRvdGFsUXVhbnRpdGllcyIsInF0eSIsInNldFF0eSIsIm9uQWRkIiwicHJvZHVjdCIsInF1YW50aXR5IiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwiZmluZCIsIml0ZW0iLCJfaWQiLCJpbmNRdHkiLCJwcmV2UXR5IiwiZGVjUXR5IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVN0YXRlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});