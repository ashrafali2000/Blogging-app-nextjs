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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_blogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db_blogCard */ \"./src/pages/db_blogCard/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ \"./node_modules/antd/lib/card/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Dashboard(param) {\n    let { myid, userblg } = param;\n    _s();\n    // const [blogs, setBlogs] = useState([]);\n    // useEffect(() => {\n    //     fetch(\"/api/user_blog/\")\n    //       .then((res) => res.json())\n    //       .then((p) => setBlogs(p.userId));\n    //   }, []);\n    const handleDelete1 = (id)=>{\n        const updatedData = blogs.filter((item)=>item.id !== id);\n        setBlogs(updatedData);\n    };\n    const headingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const descriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const checkHandler = (event)=>{\n        event.preventDefault();\n        const heading = headingRef.current.value;\n        const description = descriptionRef.current.value;\n        const newBlogs = JSON.stringify({\n            myid,\n            heading,\n            description\n        });\n        // POST method\n        // fetch(\"/api/user_blog/\", {\n        //   method: \"POST\",\n        //   body: newBlogs,\n        //   headers: {\n        //     \"Content-Type\": \"application/json\",\n        //   },\n        // })\n        // .then((res) => res.json())\n        // .then((json) => console.log(json));\n        fetch(\"/api/user_blog/\", {\n            method: \"POST\",\n            body: newBlogs,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json()).then((json)=>console.log(json));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sign-header\",\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 bg-white sm:mx-auto sm:w-full sm:max-w-lg formBorder userAddingblog\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: checkHandler,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"heading\",\n                                name: \"heading\",\n                                type: \"text\",\n                                ref: headingRef,\n                                placeholder: \"heading\",\n                                autoComplete: \"heading\",\n                                required: true,\n                                className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                            lineNumber: 63,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            style: {\n                                marginTop: 20\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"description\",\n                                name: \"description\",\n                                type: \"textareat\",\n                                ref: descriptionRef,\n                                placeholder: \"What is in your mind\",\n                                autoComplete: \"description\",\n                                required: true,\n                                className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                                lineNumber: 78,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                textAlign: \"start\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"btnBlog w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                children: \"Publish blog\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                            lineNumber: 89,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dashboardblogs\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"My Blogs\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                    lineNumber: 99,\n                    columnNumber: 45\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Avatar, {\n                src: myImg\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, this),\n            userblg ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"allCardsBlog\",\n                children: userblg.blogs.map((blg)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_db_blogCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        heading: blg.heading,\n                        myImg: blg.imgUrl,\n                        description: blg.description,\n                        blg: blg,\n                        handleDelete1: handleDelete1,\n                        time: blg.getTime\n                    }, Math.random(), false, {\n                        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                        lineNumber: 102,\n                        columnNumber: 43\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                lineNumber: 101,\n                columnNumber: 23\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Please login Frist...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                    lineNumber: 103,\n                    columnNumber: 28\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n                lineNumber: 103,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ORASOFT\\\\Desktop\\\\8-22-2023\\\\src\\\\pages\\\\dashboard\\\\index.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"M48vOnMTq7/T7EfQVZWBYToJOGY=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUFHL0I7R0F0R3dCL0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcz9mZThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBEYl9CbG9nQ2FyZHMgZnJvbSBcIi4uL2RiX2Jsb2dDYXJkXCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiYW50ZFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoe215aWQsIHVzZXJibGcgfSl7XHJcbiAgICAvLyBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgZmV0Y2goXCIvYXBpL3VzZXJfYmxvZy9cIilcclxuICAgIC8vICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAvLyAgICAgICAudGhlbigocCkgPT4gc2V0QmxvZ3MocC51c2VySWQpKTtcclxuICAgIC8vICAgfSwgW10pO1xyXG5cclxuICAgICBjb25zdCBoYW5kbGVEZWxldGUxID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBibG9ncy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKVxyXG4gICAgICAgIHNldEJsb2dzKHVwZGF0ZWREYXRhKVxyXG4gICAgICB9XHJcblxyXG4gICAgY29uc3QgaGVhZGluZ1JlZiA9IHVzZVJlZigpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblJlZiA9IHVzZVJlZigpXHJcblxyXG4gICAgY29uc3QgY2hlY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nID0gaGVhZGluZ1JlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID1kZXNjcmlwdGlvblJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdCbG9ncyA9IEpTT04uc3RyaW5naWZ5KHtteWlkLGhlYWRpbmcsZGVzY3JpcHRpb24gfSk7XHJcbiAgICAgICAgLy8gUE9TVCBtZXRob2RcclxuICAgICAgICAvLyBmZXRjaChcIi9hcGkvdXNlcl9ibG9nL1wiLCB7XHJcbiAgICAgICAgLy8gICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIC8vICAgYm9keTogbmV3QmxvZ3MsXHJcbiAgICAgICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLy8gLnRoZW4oKGpzb24pID0+IGNvbnNvbGUubG9nKGpzb24pKTtcclxuICAgXHJcblxyXG4gICAgICAgIGZldGNoKFwiL2FwaS91c2VyX2Jsb2cvXCIsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBib2R5OiBuZXdCbG9ncyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigoanNvbikgPT4gY29uc29sZS5sb2coanNvbikpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSAgXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWhlYWRlclwiPkRhc2hib2FyZDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBiZy13aGl0ZSBzbTpteC1hdXRvIHNtOnctZnVsbCBzbTptYXgtdy1sZyBmb3JtQm9yZGVyIHVzZXJBZGRpbmdibG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y2hlY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImhlYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtoZWFkaW5nUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS0xLjUgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvblJlZn1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgaXMgaW4geW91ciBtaW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS0xLjUgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJzdGFydFwifX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5CbG9nIHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMyBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWluZGlnby02MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQdWJsaXNoIGJsb2dcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRibG9nc1wiPjxoMT5NeSBCbG9nczwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgc3JjID0ge215SW1nfT48L0F2YXRhcj5cclxuICAgICAgICAgeyB1c2VyYmxnID8gIDxkaXYgY2xhc3NOYW1lPVwiYWxsQ2FyZHNCbG9nXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlcmJsZy5ibG9ncy5tYXAoYmxnID0+IDxEYl9CbG9nQ2FyZHMga2V5PXtNYXRoLnJhbmRvbSgpfSBoZWFkaW5nID0ge2JsZy5oZWFkaW5nfSBteUltZyA9IHtibGcuaW1nVXJsfSBkZXNjcmlwdGlvbiA9IHtibGcuZGVzY3JpcHRpb259IGJsZz17YmxnfSBoYW5kbGVEZWxldGUxID17aGFuZGxlRGVsZXRlMX0gdGltZSA9IHtibGcuZ2V0VGltZX0+PC9EYl9CbG9nQ2FyZHM+KX1cclxuICAgICAgICAgICAgPC9kaXY+IDogPENhcmQ+PGgxPlBsZWFzZSBsb2dpbiBGcmlzdC4uLjwvaDE+PC9DYXJkPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRiX0Jsb2dDYXJkcyIsIkNhcmQiLCJEYXNoYm9hcmQiLCJteWlkIiwidXNlcmJsZyIsImhhbmRsZURlbGV0ZTEiLCJpZCIsInVwZGF0ZWREYXRhIiwiYmxvZ3MiLCJmaWx0ZXIiLCJpdGVtIiwic2V0QmxvZ3MiLCJoZWFkaW5nUmVmIiwiZGVzY3JpcHRpb25SZWYiLCJjaGVja0hhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGVhZGluZyIsImN1cnJlbnQiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwibmV3QmxvZ3MiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwibmFtZSIsInR5cGUiLCJyZWYiLCJwbGFjZWhvbGRlciIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJ0ZXh0YXJlYSIsInRleHRBbGlnbiIsImJ1dHRvbiIsImgxIiwiQXZhdGFyIiwic3JjIiwibXlJbWciLCJtYXAiLCJibGciLCJpbWdVcmwiLCJ0aW1lIiwiZ2V0VGltZSIsIk1hdGgiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});