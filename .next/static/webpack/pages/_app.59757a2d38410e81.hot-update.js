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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [log, setLog] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [dashbod, setDashbod] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [log1, setLog1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [log3, setLog3] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [myid, setById] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [userblg, setUserBlg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [imgUser, setImgUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const signOutHandler = ()=>{\n        setDashbod(false);\n        setLog1(false);\n        setLog3(true);\n        setLog(true);\n        setImgUser(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sticky-top myFlex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            style: {\n                                fontSize: 25\n                            },\n                            children: \"Personal Blogging App\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 26,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \" \",\n                            dashbod ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/dashboard\",\n                                style: {\n                                    marginRight: 20\n                                },\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 23\n                            }, this) : \"\",\n                            \" \",\n                            log1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/Profile\",\n                                style: {\n                                    paddingRight: 20\n                                },\n                                children: log1\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 105\n                            }, this) : \"\",\n                            \" \",\n                            log3 ? log ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                style: {\n                                    fontSize: 18\n                                },\n                                href: \"/signIn\",\n                                onClick: ()=>setLog(false),\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 187\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                style: {\n                                    fontSize: 18\n                                },\n                                href: \"/signUp\",\n                                onClick: ()=>setLog(true),\n                                children: \"Sigup\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 275\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                style: {\n                                    fontSize: 18\n                                },\n                                href: \"/\",\n                                onClick: signOutHandler,\n                                children: \"Signout\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 365\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                setLog1: setLog1,\n                setDashbod: setDashbod,\n                setLog3: setLog3,\n                myid: myid,\n                setById: setById,\n                userblg: userblg,\n                setUserBlg: setUserBlg,\n                log1: log1,\n                imgUser: imgUser,\n                setImgUser: setImgUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, this);\n}\n_s(App, \"i33kw0tbj2VordrO9wtsEnEpsnw=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNEO0FBQ0k7QUFDakIsU0FBU0UsSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdMLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNa0IsaUJBQWlCO1FBQ3JCWCxXQUFXO1FBQ1hFLFFBQVE7UUFDUkUsUUFBUTtRQUNSTixPQUFPO1FBQ1BZLFdBQVc7SUFDYjtJQUVFLHFCQUNBLDhEQUFDRTs7MEJBRUMsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FFZCw4REFBQ0Q7a0NBQUksNEVBQUNFOzRCQUFHQyxPQUFPO2dDQUFDQyxVQUFTOzRCQUFFO3NDQUFHOzs7Ozs7Ozs7OztrQ0FDL0IsOERBQUNKOzs0QkFBSTs0QkFBRWIsd0JBQVUsOERBQUNQLGtEQUFJQTtnQ0FBQ3lCLE1BQU07Z0NBQWNGLE9BQU87b0NBQUNHLGFBQVk7Z0NBQUU7MENBQUc7Ozs7O3VDQUFtQjs0QkFBRzs0QkFBRWpCLHFCQUFPLDhEQUFDVCxrREFBSUE7Z0NBQUN5QixNQUFNO2dDQUFZRixPQUFPO29DQUFDSSxjQUFhO2dDQUFFOzBDQUFJbEI7Ozs7O3VDQUFhOzRCQUFHOzRCQUFFRSxPQUFPTixvQkFBTSw4REFBQ0wsa0RBQUlBO2dDQUFDdUIsT0FBTztvQ0FBQ0MsVUFBUztnQ0FBRTtnQ0FBR0MsTUFBTTtnQ0FBV0csU0FBUyxJQUFLdEIsT0FBTzswQ0FBUTs7Ozs7cURBQWMsOERBQUNOLGtEQUFJQTtnQ0FBQ3VCLE9BQU87b0NBQUNDLFVBQVM7Z0NBQUU7Z0NBQUdDLE1BQU07Z0NBQVdHLFNBQVMsSUFBTXRCLE9BQU87MENBQU87Ozs7O3FEQUFnQiw4REFBQ04sa0RBQUlBO2dDQUFDdUIsT0FBTztvQ0FBQ0MsVUFBUztnQ0FBRTtnQ0FBR0MsTUFBTTtnQ0FBS0csU0FBU1Q7MENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXhhLDhEQUFDaEI7Z0JBQVcsR0FBR0MsU0FBUztnQkFBSU0sU0FBVUE7Z0JBQVVGLFlBQWNBO2dCQUFZSSxTQUFXQTtnQkFBU0MsTUFBTUE7Z0JBQU1DLFNBQVVBO2dCQUFTQyxTQUFVQTtnQkFBU0MsWUFBY0E7Z0JBQVlQLE1BQU9BO2dCQUFNUSxTQUFXQTtnQkFBU0MsWUFBY0E7Ozs7Ozs7Ozs7OztBQUc3TjtHQTlCd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFtsb2csIHNldExvZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZGFzaGJvZCwgc2V0RGFzaGJvZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvZzEsIHNldExvZzFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvZzMsIHNldExvZzNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW215aWQsIHNldEJ5SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1c2VyYmxnLCBzZXRVc2VyQmxnXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaW1nVXNlciwgc2V0SW1nVXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbmNvbnN0IHNpZ25PdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gIHNldERhc2hib2QoZmFsc2UpXHJcbiAgc2V0TG9nMShmYWxzZSlcclxuICBzZXRMb2czKHRydWUpXHJcbiAgc2V0TG9nKHRydWUpXHJcbiAgc2V0SW1nVXNlcihcIlwiKVxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICAgIHsvKiBOYXYtYmFyICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3N0aWNreS10b3AgbXlGbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMyBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LXdoaXRlIHNoYWRvdy1zbSAgZm9jdXMtdmlzaWJsZTpvdXRsaW5lIGZvY3VzLXZpc2libGU6b3V0bGluZS0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtaW5kaWdvLTYwMCcgPlxyXG5cclxuICAgICA8ZGl2PjxoMSBzdHlsZT17e2ZvbnRTaXplOjI1fX0+UGVyc29uYWwgQmxvZ2dpbmcgQXBwPC9oMT48L2Rpdj5cclxuICAgICA8ZGl2PiB7ZGFzaGJvZCA/IDxMaW5rIGhyZWY9e1wiL2Rhc2hib2FyZFwifSBzdHlsZT17e21hcmdpblJpZ2h0OjIwfX0+RGFzaGJvYXJkPC9MaW5rPiA6IFwiXCJ9IHtsb2cxID8gPExpbmsgaHJlZj17XCIvUHJvZmlsZVwifSBzdHlsZT17e3BhZGRpbmdSaWdodDoyMH19Pntsb2cxfTwvTGluaz46XCJcIn0ge2xvZzMgPyBsb2cgPyA8TGluayBzdHlsZT17e2ZvbnRTaXplOjE4fX0gaHJlZj17XCIvc2lnbkluXCJ9IG9uQ2xpY2s9eygpID0+c2V0TG9nKGZhbHNlKX0+TG9naW48L0xpbms+OiA8TGluayBzdHlsZT17e2ZvbnRTaXplOjE4fX0gaHJlZj17XCIvc2lnblVwXCJ9IG9uQ2xpY2s9eygpID0+IHNldExvZyh0cnVlKX0+U2lndXA8L0xpbms+ICA6IDxMaW5rIHN0eWxlPXt7Zm9udFNpemU6MTh9fSBocmVmPXtcIi9cIn0gb25DbGljaz17c2lnbk91dEhhbmRsZXJ9PlNpZ25vdXQ8L0xpbms+IH08L2Rpdj4gXHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzICB9IHNldExvZzEgPXtzZXRMb2cxfSAgc2V0RGFzaGJvZCA9IHtzZXREYXNoYm9kfSBzZXRMb2czID0ge3NldExvZzN9IG15aWQ9e215aWR9IHNldEJ5SWQgPXtzZXRCeUlkfSB1c2VyYmxnID17dXNlcmJsZ30gc2V0VXNlckJsZyA9IHtzZXRVc2VyQmxnfSBsb2cxID17bG9nMX0gaW1nVXNlciA9IHtpbWdVc2VyfSBzZXRJbWdVc2VyID0ge3NldEltZ1VzZXJ9Lz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9nIiwic2V0TG9nIiwiZGFzaGJvZCIsInNldERhc2hib2QiLCJsb2cxIiwic2V0TG9nMSIsImxvZzMiLCJzZXRMb2czIiwibXlpZCIsInNldEJ5SWQiLCJ1c2VyYmxnIiwic2V0VXNlckJsZyIsImltZ1VzZXIiLCJzZXRJbWdVc2VyIiwic2lnbk91dEhhbmRsZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInN0eWxlIiwiZm9udFNpemUiLCJocmVmIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});