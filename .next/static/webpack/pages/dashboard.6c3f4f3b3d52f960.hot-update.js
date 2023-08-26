"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard/index.js":
/*!**************************************!*\
  !*** ./src/pages/dashboard/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_blogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db_blogCard */ \"./src/pages/db_blogCard/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Dashboard(param) {\n    let { myid, imgUser, userblg } = param;\n    _s();\n    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/user_blog/\").then((res)=>res.json()).then((p)=>setBlogs(p.userId));\n    }, []);\n    const handleDelete1 = (id)=>{\n        const updatedData = blogs.filter((item)=>item.id !== id);\n        setBlogs(updatedData);\n        return function oneBlogsDellete(bid) {\n            const blg = blogs.filter((i)=>i.id !== bid);\n            setBlogs(blg);\n        };\n    };\n    const headingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const descriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const checkHandler = (event)=>{\n        event.preventDefault();\n        const heading = headingRef.current.value;\n        const description = descriptionRef.current.value;\n        const newBlogs = JSON.stringify({\n            myid,\n            heading,\n            description\n        });\n        // POST method\n        fetch(\"/api/user_blog/\", {\n            method: \"POST\",\n            body: newBlogs,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json()).then((json)=>console.log(json));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sign-header\",\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 bg-white sm:mx-auto sm:w-full sm:max-w-lg formBorder userAddingblog\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: checkHandler,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"heading\",\n                                name: \"heading\",\n                                type: \"text\",\n                                ref: headingRef,\n                                placeholder: \"heading\",\n                                autoComplete: \"heading\",\n                                required: true,\n                                className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            style: {\n                                marginTop: 20\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"description\",\n                                name: \"description\",\n                                type: \"textareat\",\n                                ref: descriptionRef,\n                                placeholder: \"What is in your mind\",\n                                autoComplete: \"description\",\n                                required: true,\n                                className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                textAlign: \"start\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"btnBlog w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                children: \"Publish blog\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dashboardblogs\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"My Blogs\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                    lineNumber: 86,\n                    columnNumber: 45\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            blogs.map((users)=>users.blogs.map((usr)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_db_blogCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        heading: usr.heading,\n                        idkey: usr.id,\n                        description: usr.description,\n                        handleDelete1: handleDelete1\n                    }, Math.random(), false, {\n                        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                        lineNumber: 91,\n                        columnNumber: 44\n                    }, this)))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"6J7nN/CfoxtLUquKAxhj/fh4PV8=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUFJekU7R0EzRndCNUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcz9mZThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBEYl9CbG9nQ2FyZHMgZnJvbSBcIi4uL2RiX2Jsb2dDYXJkXCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiYW50ZFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoe215aWQsaW1nVXNlciwgdXNlcmJsZyB9KXtcclxuICAgIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChcIi9hcGkvdXNlcl9ibG9nL1wiKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChwKSA9PiBzZXRCbG9ncyhwLnVzZXJJZCkpO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgIGNvbnN0IGhhbmRsZURlbGV0ZTEgPSAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IGJsb2dzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpXHJcbiAgICAgICAgc2V0QmxvZ3ModXBkYXRlZERhdGEpXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uZUJsb2dzRGVsbGV0ZShiaWQpIHtcclxuICAgICAgICAgICBjb25zdCBibGcgPSAgYmxvZ3MuZmlsdGVyKChpKSA9PiBpLmlkICE9PSBiaWQpO1xyXG4gICAgICAgICAgIHNldEJsb2dzKGJsZylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdCBoZWFkaW5nUmVmID0gdXNlUmVmKClcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUmVmID0gdXNlUmVmKClcclxuXHJcbiAgICBjb25zdCBjaGVja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBoZWFkaW5nUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPWRlc2NyaXB0aW9uUmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0Jsb2dzID0gSlNPTi5zdHJpbmdpZnkoe215aWQsaGVhZGluZyxkZXNjcmlwdGlvbiB9KTtcclxuXHJcbiAgICAgICAgLy8gUE9TVCBtZXRob2RcclxuICAgICAgICBmZXRjaChcIi9hcGkvdXNlcl9ibG9nL1wiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgYm9keTogbmV3QmxvZ3MsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IGNvbnNvbGUubG9nKGpzb24pKTtcclxuXHJcbiAgICB9ICBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24taGVhZGVyXCI+RGFzaGJvYXJkPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGJnLXdoaXRlIHNtOm14LWF1dG8gc206dy1mdWxsIHNtOm1heC13LWxnIGZvcm1Cb3JkZXIgdXNlckFkZGluZ2Jsb2dcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtjaGVja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhlYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2hlYWRpbmdSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJoZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJoZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTEuNSB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWF0XCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9uUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyBpbiB5b3VyIG1pbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTEuNSB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcInN0YXJ0XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bkJsb2cgdy1mdWxsIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctaW5kaWdvLTYwMCBweC0zIHB5LTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWluZGlnby01MDAgZm9jdXMtdmlzaWJsZTpvdXRsaW5lIGZvY3VzLXZpc2libGU6b3V0bGluZS0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtaW5kaWdvLTYwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFB1Ymxpc2ggYmxvZ1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZGJsb2dzXCI+PGgxPk15IEJsb2dzPC9oMT48L2Rpdj5cclxuICAgICAgICAgey8qIHsgT2JqZWN0LmtleXModXNlcmJsZykubGVuZ3RoICE9PSAwID8gIDxkaXYgY2xhc3NOYW1lPVwiYWxsQ2FyZHNCbG9nXCI+XHJcbiAgICAgICAgICAgICAge3VzZXJibGcuYmxvZ3MubWFwKGJsZyA9PiA8RGJfQmxvZ0NhcmRzIGtleT17TWF0aC5yYW5kb20oKX0gaW1nVXNlciA9e2ltZ1VzZXJ9IGhlYWRpbmcgPSB7YmxnLmhlYWRpbmd9ICBkZXNjcmlwdGlvbiA9IHtibGcuZGVzY3JpcHRpb259IGJsZz17YmxnfSBoYW5kbGVEZWxldGUxID17aGFuZGxlRGVsZXRlMX0gdGltZSA9IHtibGcuZ2V0VGltZX0+PC9EYl9CbG9nQ2FyZHM+KX1cclxuICAgICAgICAgICAgPC9kaXY+IDogPENhcmQ+PGgxPlBsZWFzZSBsb2dpbiBGcmlzdC4uLjwvaDE+PC9DYXJkPn0gKi99XHJcblxyXG57YmxvZ3MubWFwKHVzZXJzID0+IHVzZXJzLmJsb2dzLm1hcCh1c3IgPT4gPERiX0Jsb2dDYXJkcyBrZXk9e01hdGgucmFuZG9tKCl9IGhlYWRpbmcgPSB7dXNyLmhlYWRpbmd9IGlka2V5ID0ge3Vzci5pZH0gZGVzY3JpcHRpb249e3Vzci5kZXNjcmlwdGlvbn0gaGFuZGxlRGVsZXRlMSA9e2hhbmRsZURlbGV0ZTF9PjwvRGJfQmxvZ0NhcmRzPikpfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRiX0Jsb2dDYXJkcyIsIkNhcmQiLCJEYXNoYm9hcmQiLCJteWlkIiwiaW1nVXNlciIsInVzZXJibGciLCJibG9ncyIsInNldEJsb2dzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInAiLCJ1c2VySWQiLCJoYW5kbGVEZWxldGUxIiwiaWQiLCJ1cGRhdGVkRGF0YSIsImZpbHRlciIsIml0ZW0iLCJvbmVCbG9nc0RlbGxldGUiLCJiaWQiLCJibGciLCJpIiwiaGVhZGluZ1JlZiIsImRlc2NyaXB0aW9uUmVmIiwiY2hlY2tIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWRpbmciLCJjdXJyZW50IiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsIm5ld0Jsb2dzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwibmFtZSIsInR5cGUiLCJyZWYiLCJwbGFjZWhvbGRlciIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJ0ZXh0YXJlYSIsInRleHRBbGlnbiIsImJ1dHRvbiIsImgxIiwibWFwIiwidXNlcnMiLCJ1c3IiLCJpZGtleSIsIk1hdGgiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});