"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signIn",{

/***/ "./src/pages/signIn/index.js":
/*!***********************************!*\
  !*** ./src/pages/signIn/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction SingIn(param) {\n    let { setLog1, setDashbod, setLog3, setById, setUserBlg, setImgUser } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [check, setCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let userName = \"\";\n    let id;\n    let user;\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const checkHandler = (event)=>{\n        event.preventDefault();\n        const name = nameRef.current.value;\n        const password = passwordRef.current.value;\n        console.log(name, password);\n        fetch(\"/api/signin\").then((res)=>res.json()).then((json)=>{\n            const users = json.userId;\n            let val = false;\n            for(let a = 0; a < users.length; a++){\n                if (users[a].name === name && users[a].password === password) {\n                    userName = name;\n                    id = users[a].id;\n                    user = users[a];\n                    usrImg = users[a].imageUrl;\n                    setUserBlg(user);\n                    val = true;\n                    break;\n                }\n            }\n            if (val) {\n                setImgUser();\n                setCheck(true);\n                setLog1(userName);\n                setDashbod(true);\n                setLog3(false);\n                setById(id);\n                console.log(user);\n                router.replace(\"/dashboard\");\n            } else {\n                setCheck(false);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sign-header\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 sm:mx-auto sm:w-full sm:max-w-sm formBorder bg-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"space-y-6\",\n                        onSubmit: checkHandler,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"name\",\n                                    name: \"name\",\n                                    type: \"text\",\n                                    ref: nameRef,\n                                    placeholder: \"Name\",\n                                    autoComplete: \"name\",\n                                    required: true,\n                                    className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"password\",\n                                    name: \"password\",\n                                    type: \"password\",\n                                    ref: passwordRef,\n                                    placeholder: \"password\",\n                                    autoComplete: \"current-password\",\n                                    required: true,\n                                    className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, this),\n                            check ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#10781a\",\n                                    fontWeight: 500\n                                },\n                                children: \"Login Successfully\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 26\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#f00\"\n                                },\n                                children: \"Please enter a valid email and password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 98\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    textAlign: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"btn w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\signIn\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SingIn, \"Q5UwvP1VYyvo0e1ZB3hMCSUkL70=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SingIn;\nvar _c;\n$RefreshReg$(_c, \"SingIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2lnbkluL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNEO0FBRXpCLFNBQVNHLE9BQU8sS0FBNEQ7UUFBNUQsRUFBQ0MsT0FBTyxFQUFFQyxVQUFVLEVBQUNDLE9BQU8sRUFBQ0MsT0FBTyxFQUFFQyxVQUFVLEVBQUNDLFVBQVUsRUFBQyxHQUE1RDs7SUFDN0IsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3RCLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNwQyxJQUFJWSxXQUFXO0lBQ2YsSUFBSUM7SUFDSixJQUFJQztJQUNILE1BQU1DLFVBQVVoQiw2Q0FBTUE7SUFDdEIsTUFBTWlCLGNBQWNqQiw2Q0FBTUE7SUFFMUIsTUFBTWtCLGVBQWUsQ0FBQ0M7UUFDcEJBLE1BQU1DLGNBQWM7UUFDcEIsTUFBTUMsT0FBT0wsUUFBUU0sT0FBTyxDQUFDQyxLQUFLO1FBQ2xDLE1BQU1DLFdBQVdQLFlBQVlLLE9BQU8sQ0FBQ0MsS0FBSztRQUMxQ0UsUUFBUUMsR0FBRyxDQUFDTCxNQUFLRztRQUVqQkcsTUFBTSxlQUNMQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0UsQ0FBQUE7WUFDUCxNQUFNQyxRQUFVRCxLQUFLRSxNQUFNO1lBQzFCLElBQUlDLE1BQU07WUFDVixJQUFJLElBQUlDLElBQUksR0FBR0EsSUFBSUgsTUFBTUksTUFBTSxFQUFFRCxJQUFLO2dCQUNwQyxJQUFJSCxLQUFLLENBQUNHLEVBQUUsQ0FBQ2IsSUFBSSxLQUFLQSxRQUFRVSxLQUFLLENBQUNHLEVBQUUsQ0FBQ1YsUUFBUSxLQUFLQSxVQUFTO29CQUN6RFgsV0FBV1E7b0JBQ1hQLEtBQUtpQixLQUFLLENBQUNHLEVBQUUsQ0FBQ3BCLEVBQUU7b0JBQ2hCQyxPQUFPZ0IsS0FBSyxDQUFDRyxFQUFFO29CQUNmRSxTQUFTTCxLQUFLLENBQUNHLEVBQUUsQ0FBQ0csUUFBUTtvQkFDMUI3QixXQUFXTztvQkFDWGtCLE1BQU07b0JBQ047Z0JBQ0Y7WUFDRjtZQUNBLElBQUdBLEtBQUk7Z0JBQ0x4QjtnQkFDQUcsU0FBUztnQkFDVFIsUUFBUVM7Z0JBQ1JSLFdBQVc7Z0JBQ1hDLFFBQVE7Z0JBQ1JDLFFBQVFPO2dCQUNSVyxRQUFRQyxHQUFHLENBQUNYO2dCQUNqQkwsT0FBTzRCLE9BQU8sQ0FBQztZQUVkLE9BQ0U7Z0JBQ0YxQixTQUFTO1lBQ1Q7UUFFQTtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDMkI7Z0JBQUlDLFdBQVU7MEJBQWM7Ozs7OzswQkFDN0IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUtELFdBQVU7d0JBQVlFLFVBQVV4Qjs7MENBQ3RDLDhEQUFDcUI7Z0NBQUlDLFdBQVU7MENBQ1QsNEVBQUNHO29DQUNDN0IsSUFBRztvQ0FDSE8sTUFBSztvQ0FDTHVCLE1BQUs7b0NBQ0xDLEtBQUs3QjtvQ0FDTDhCLGFBQVk7b0NBQ1pDLGNBQWE7b0NBQ2JDLFFBQVE7b0NBQ1JSLFdBQVU7Ozs7Ozs7Ozs7OzBDQUtkLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0c7b0NBQ0M3QixJQUFHO29DQUNITyxNQUFLO29DQUNMdUIsTUFBSztvQ0FDTEMsS0FBSzVCO29DQUNMNkIsYUFBWTtvQ0FDWkMsY0FBYTtvQ0FDYkMsUUFBUTtvQ0FDUlIsV0FBVTs7Ozs7Ozs7Ozs7NEJBS2I3QixzQkFBUSw4REFBQ3NDO2dDQUFFQyxPQUFPO29DQUFDQyxPQUFPO29DQUFXQyxZQUFZO2dDQUFHOzBDQUFHOzs7OztxREFBeUIsOERBQUNIO2dDQUFFQyxPQUFPO29DQUFDQyxPQUFPO2dDQUFNOzBDQUFHOzs7Ozs7MENBQzlHLDhEQUFDWjtnQ0FBSVcsT0FBTztvQ0FBQ0csV0FBVTtnQ0FBUTswQ0FDN0IsNEVBQUNDO29DQUNDVixNQUFLO29DQUNMSixXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBakdzQnJDOztRQUNQRCxrREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2lnbkluL2luZGV4LmpzP2U1OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdJbih7c2V0TG9nMSwgc2V0RGFzaGJvZCxzZXRMb2czLHNldEJ5SWQsIHNldFVzZXJCbGcsc2V0SW1nVXNlcn0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgIGxldCB1c2VyTmFtZSA9IFwiXCI7XHJcbiAgIGxldCBpZDtcclxuICAgbGV0IHVzZXI7XHJcbiAgICBjb25zdCBuYW1lUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZigpO1xyXG4gIFxyXG4gICAgY29uc3QgY2hlY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgY29uc29sZS5sb2cobmFtZSxwYXNzd29yZClcclxuICBcclxuICAgICAgZmV0Y2goJy9hcGkvc2lnbmluJylcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgIGNvbnN0IHVzZXJzID0gICBqc29uLnVzZXJJZDtcclxuICAgICAgbGV0IHZhbCA9IGZhbHNlO1xyXG4gICAgICBmb3IobGV0IGEgPSAwOyBhIDwgdXNlcnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICBpZiggdXNlcnNbYV0ubmFtZSA9PT0gbmFtZSAmJiB1c2Vyc1thXS5wYXNzd29yZCA9PT0gcGFzc3dvcmQpe1xyXG4gICAgICAgICAgICB1c2VyTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIGlkID0gdXNlcnNbYV0uaWQ7XHJcbiAgICAgICAgICAgIHVzZXIgPSB1c2Vyc1thXTtcclxuICAgICAgICAgICAgdXNySW1nID0gdXNlcnNbYV0uaW1hZ2VVcmw7XHJcbiAgICAgICAgICAgIHNldFVzZXJCbGcodXNlcilcclxuICAgICAgICAgICAgdmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHZhbCl7XHJcbiAgICAgICAgICBzZXRJbWdVc2VyKClcclxuICAgICAgICAgIHNldENoZWNrKHRydWUpO1xyXG4gICAgICAgICAgc2V0TG9nMSh1c2VyTmFtZSlcclxuICAgICAgICAgIHNldERhc2hib2QodHJ1ZSlcclxuICAgICAgICAgIHNldExvZzMoZmFsc2UpXHJcbiAgICAgICAgICBzZXRCeUlkKGlkKVxyXG4gICAgICAgICAgY29uc29sZS5sb2codXNlcilcclxuICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XHJcblxyXG4gICAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzZXRDaGVjayhmYWxzZSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbi1oZWFkZXJcIj5Mb2dpbjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1mdWxsIGZsZXgtMSBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTEyIGxnOnB4LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgc206bXgtYXV0byBzbTp3LWZ1bGwgc206bWF4LXctc20gZm9ybUJvcmRlciBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIiBvblN1Ym1pdD17Y2hlY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e25hbWVSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTEuNSB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtwYXNzd29yZFJlZn1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTEuNSB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7Y2hlY2sgPyA8cCBzdHlsZT17e2NvbG9yOiBcIiMxMDc4MWFcIiwgZm9udFdlaWdodDogNTAwfX0+TG9naW4gU3VjY2Vzc2Z1bGx5PC9wPiA6IDxwIHN0eWxlPXt7Y29sb3I6IFwiI2YwMFwifX0+UGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYW5kIHBhc3N3b3JkPC9wPn1cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB3LWZ1bGwganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1pbmRpZ28tNjAwIHB4LTMgcHktMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9Il0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiU2luZ0luIiwic2V0TG9nMSIsInNldERhc2hib2QiLCJzZXRMb2czIiwic2V0QnlJZCIsInNldFVzZXJCbGciLCJzZXRJbWdVc2VyIiwicm91dGVyIiwiY2hlY2siLCJzZXRDaGVjayIsInVzZXJOYW1lIiwiaWQiLCJ1c2VyIiwibmFtZVJlZiIsInBhc3N3b3JkUmVmIiwiY2hlY2tIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJjdXJyZW50IiwidmFsdWUiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidXNlcnMiLCJ1c2VySWQiLCJ2YWwiLCJhIiwibGVuZ3RoIiwidXNySW1nIiwiaW1hZ2VVcmwiLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicmVmIiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsInAiLCJzdHlsZSIsImNvbG9yIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/signIn/index.js\n"));

/***/ })

});