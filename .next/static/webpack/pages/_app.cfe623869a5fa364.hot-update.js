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

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [log, setLog] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [dashbod, setDashbod] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [log1, setLog1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [log3, setLog3] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [myid, setById] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [userblg, setUserBlg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [imgUser, setImgUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const signOutHandler = ()=>{\n        setDashbod(false);\n        setLog1(false);\n        setLog3(true);\n        setLog(true);\n        set;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sticky-top myFlex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            style: {\n                                fontSize: 25\n                            },\n                            children: \"Personal Blogging App\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 26,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \" \",\n                            dashbod ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/dashboard\",\n                                style: {\n                                    marginRight: 20\n                                },\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 23\n                            }, this) : \"\",\n                            \" \",\n                            log1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/Profile\",\n                                style: {\n                                    paddingRight: 20\n                                },\n                                children: log1\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 105\n                            }, this) : \"\",\n                            \" \",\n                            log3 ? log ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                style: {\n                                    fontSize: 18\n                                },\n                                href: \"/signIn\",\n                                onClick: ()=>setLog(false),\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 187\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                style: {\n                                    fontSize: 18\n                                },\n                                href: \"/signUp\",\n                                onClick: ()=>setLog(true),\n                                children: \"Sigup\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 275\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                style: {\n                                    fontSize: 18\n                                },\n                                href: \"/\",\n                                onClick: signOutHandler,\n                                children: \"Signout\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 365\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                setLog1: setLog1,\n                setDashbod: setDashbod,\n                setLog3: setLog3,\n                myid: myid,\n                setById: setById,\n                userblg: userblg,\n                setUserBlg: setUserBlg,\n                log1: log1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, this);\n}\n_s(App, \"i33kw0tbj2VordrO9wtsEnEpsnw=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNEO0FBQ0k7QUFDakIsU0FBU0UsSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdMLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNa0IsaUJBQWlCO1FBQ3JCWCxXQUFXO1FBQ1hFLFFBQVE7UUFDUkUsUUFBUTtRQUNSTixPQUFPO1FBQ1BjO0lBQ0Y7SUFFRSxxQkFDQSw4REFBQ0M7OzBCQUVDLDhEQUFDQTtnQkFBSUMsV0FBVTs7a0NBRWQsOERBQUNEO2tDQUFJLDRFQUFDRTs0QkFBR0MsT0FBTztnQ0FBQ0MsVUFBUzs0QkFBRTtzQ0FBRzs7Ozs7Ozs7Ozs7a0NBQy9CLDhEQUFDSjs7NEJBQUk7NEJBQUVkLHdCQUFVLDhEQUFDUCxrREFBSUE7Z0NBQUMwQixNQUFNO2dDQUFjRixPQUFPO29DQUFDRyxhQUFZO2dDQUFFOzBDQUFHOzs7Ozt1Q0FBbUI7NEJBQUc7NEJBQUVsQixxQkFBTyw4REFBQ1Qsa0RBQUlBO2dDQUFDMEIsTUFBTTtnQ0FBWUYsT0FBTztvQ0FBQ0ksY0FBYTtnQ0FBRTswQ0FBSW5COzs7Ozt1Q0FBYTs0QkFBRzs0QkFBRUUsT0FBT04sb0JBQU0sOERBQUNMLGtEQUFJQTtnQ0FBQ3dCLE9BQU87b0NBQUNDLFVBQVM7Z0NBQUU7Z0NBQUdDLE1BQU07Z0NBQVdHLFNBQVMsSUFBS3ZCLE9BQU87MENBQVE7Ozs7O3FEQUFjLDhEQUFDTixrREFBSUE7Z0NBQUN3QixPQUFPO29DQUFDQyxVQUFTO2dDQUFFO2dDQUFHQyxNQUFNO2dDQUFXRyxTQUFTLElBQU12QixPQUFPOzBDQUFPOzs7OztxREFBZ0IsOERBQUNOLGtEQUFJQTtnQ0FBQ3dCLE9BQU87b0NBQUNDLFVBQVM7Z0NBQUU7Z0NBQUdDLE1BQU07Z0NBQUtHLFNBQVNWOzBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl4YSw4REFBQ2hCO2dCQUFXLEdBQUdDLFNBQVM7Z0JBQUlNLFNBQVVBO2dCQUFVRixZQUFjQTtnQkFBWUksU0FBV0E7Z0JBQVNDLE1BQU1BO2dCQUFNQyxTQUFVQTtnQkFBU0MsU0FBVUE7Z0JBQVNDLFlBQWNBO2dCQUFZUCxNQUFPQTs7Ozs7Ozs7Ozs7O0FBR3JMO0dBOUJ3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbbG9nLCBzZXRMb2ddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Rhc2hib2QsIHNldERhc2hib2RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2cxLCBzZXRMb2cxXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2czLCBzZXRMb2czXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtteWlkLCBzZXRCeUlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcmJsZywgc2V0VXNlckJsZ10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2ltZ1VzZXIsIHNldEltZ1VzZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5jb25zdCBzaWduT3V0SGFuZGxlciA9ICgpID0+IHtcclxuICBzZXREYXNoYm9kKGZhbHNlKVxyXG4gIHNldExvZzEoZmFsc2UpXHJcbiAgc2V0TG9nMyh0cnVlKVxyXG4gIHNldExvZyh0cnVlKVxyXG4gIHNldFxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICAgIHsvKiBOYXYtYmFyICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3N0aWNreS10b3AgbXlGbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMyBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LXdoaXRlIHNoYWRvdy1zbSAgZm9jdXMtdmlzaWJsZTpvdXRsaW5lIGZvY3VzLXZpc2libGU6b3V0bGluZS0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtaW5kaWdvLTYwMCcgPlxyXG5cclxuICAgICA8ZGl2PjxoMSBzdHlsZT17e2ZvbnRTaXplOjI1fX0+UGVyc29uYWwgQmxvZ2dpbmcgQXBwPC9oMT48L2Rpdj5cclxuICAgICA8ZGl2PiB7ZGFzaGJvZCA/IDxMaW5rIGhyZWY9e1wiL2Rhc2hib2FyZFwifSBzdHlsZT17e21hcmdpblJpZ2h0OjIwfX0+RGFzaGJvYXJkPC9MaW5rPiA6IFwiXCJ9IHtsb2cxID8gPExpbmsgaHJlZj17XCIvUHJvZmlsZVwifSBzdHlsZT17e3BhZGRpbmdSaWdodDoyMH19Pntsb2cxfTwvTGluaz46XCJcIn0ge2xvZzMgPyBsb2cgPyA8TGluayBzdHlsZT17e2ZvbnRTaXplOjE4fX0gaHJlZj17XCIvc2lnbkluXCJ9IG9uQ2xpY2s9eygpID0+c2V0TG9nKGZhbHNlKX0+TG9naW48L0xpbms+OiA8TGluayBzdHlsZT17e2ZvbnRTaXplOjE4fX0gaHJlZj17XCIvc2lnblVwXCJ9IG9uQ2xpY2s9eygpID0+IHNldExvZyh0cnVlKX0+U2lndXA8L0xpbms+ICA6IDxMaW5rIHN0eWxlPXt7Zm9udFNpemU6MTh9fSBocmVmPXtcIi9cIn0gb25DbGljaz17c2lnbk91dEhhbmRsZXJ9PlNpZ25vdXQ8L0xpbms+IH08L2Rpdj4gXHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzICB9IHNldExvZzEgPXtzZXRMb2cxfSAgc2V0RGFzaGJvZCA9IHtzZXREYXNoYm9kfSBzZXRMb2czID0ge3NldExvZzN9IG15aWQ9e215aWR9IHNldEJ5SWQgPXtzZXRCeUlkfSB1c2VyYmxnID17dXNlcmJsZ30gc2V0VXNlckJsZyA9IHtzZXRVc2VyQmxnfSBsb2cxID17bG9nMX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2ciLCJzZXRMb2ciLCJkYXNoYm9kIiwic2V0RGFzaGJvZCIsImxvZzEiLCJzZXRMb2cxIiwibG9nMyIsInNldExvZzMiLCJteWlkIiwic2V0QnlJZCIsInVzZXJibGciLCJzZXRVc2VyQmxnIiwiaW1nVXNlciIsInNldEltZ1VzZXIiLCJzaWduT3V0SGFuZGxlciIsInNldCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3R5bGUiLCJmb250U2l6ZSIsImhyZWYiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdSaWdodCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});