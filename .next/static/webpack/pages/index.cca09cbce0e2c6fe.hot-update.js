"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Snackbar */ \"./node_modules/@mui/material/esm/Snackbar/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    var sendSMS = function sendSMS() {\n        axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://2factor.in/API/R1/?module=TRANS_SMS&apikey=e22905d7-a75a-11ec-a4c2-0200cd936042&to=\".concat(mobileNumber, \"&from=DTDTDT&templatename=DTDTDT&var1=\").concat(collection)).then(function(response) {\n            console.log(response);\n        });\n    // fetch(`https://2factor.in/API/R1/?module=TRANS_SMS&apikey=e22905d7-a75a-11ec-a4c2-0200cd936042&to=${mobileNumber}&from=DTDTDT&templatename=DTDTDT&var1=${collection}`,{\n    //     method: 'GET',\n    //     headers: {\n    //       'Content-Type': 'application/json',\n    //     }}).then((result) => {\n    //         console.log(result);\n    // return false;\n    // result.json().then((resp) => {\n    //     if (resp.Status === \"success\") {\n    //         setAlertMessageBg('success')\n    //         setAlertMessage(\"SMS Sent!\")\n    //         handleClick()\n    //     } else {\n    //         setAlertMessageBg('danger')\n    //         setAlertMessage(resp.Details)\n    //         handleClick()\n    //     }\n    // })\n    // })\n    };\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), open = ref[0], setOpen = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\"), 2), collection = ref1[0], setCollection = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\"), 2), mobileNumber = ref2[0], setMobileNumber = ref2[1];\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\"), 2), AlertMessage = ref3[0], setAlertMessage = ref3[1];\n    var ref4 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\"), 2), AlertMessageBg = ref4[0], setAlertMessageBg = ref4[1];\n    var handleClick = function() {\n        setOpen(true);\n    };\n    var handleClose = function(reason) {\n        if (reason === \"clickaway\") {\n            return;\n        }\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                open: open,\n                autoHideDuration: 2000,\n                onClose: handleClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Alert, {\n                    onClose: handleClose,\n                    className: \"text-white bg-\".concat(AlertMessageBg),\n                    children: AlertMessage\n                }, void 0, false, {\n                    fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://www.pngitem.com/pimgs/m/485-4852378_sample-logo-png-transparent-png.png\",\n                                alt: \"#ImgNotFound\",\n                                width: \"100px\",\n                                height: \"70px\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"mt-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"mobile_number\",\n                                        className: \"form-label\",\n                                        style: {\n                                            fontSize: \"18px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Mobile Number\"\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 108\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"form-control mb-3\",\n                                        id: \"mobile_number\",\n                                        autoFocus: true,\n                                        style: {\n                                            width: \"100%\",\n                                            fontSize: \"18px\"\n                                        },\n                                        minLength: \"10\",\n                                        maxLength: \"10\",\n                                        required: true,\n                                        value: mobileNumber,\n                                        onChange: function(e) {\n                                            return setMobileNumber(e.target.value);\n                                        },\n                                        autoComplete: \"off\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"new_password\",\n                                        className: \"form-label\",\n                                        style: {\n                                            fontSize: \"18px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Select Collection\"\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 107\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-select\",\n                                        \"aria-label\": \"Default select example\",\n                                        required: true,\n                                        onChange: function(e) {\n                                            return setCollection(e.target.value);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"\",\n                                                children: \"Select Collection\"\n                                            }, void 0, false, {\n                                                fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"ST\",\n                                                children: \"ST\"\n                                            }, void 0, false, {\n                                                fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"FTV\",\n                                                children: \"FTV\"\n                                            }, void 0, false, {\n                                                fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"MF\",\n                                                children: \"MF\"\n                                            }, void 0, false, {\n                                                fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: sendSMS,\n                                        className: \"btn btn-primary w-100 mt-3\",\n                                        children: \"Continue\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/Client/India/adysoft/OtherProjects/sms-project/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"5gGykzhUI3XEQlVdW2Lk7AodOz8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7OzBEQUN2SCw4REFBQ08sUUFBTTtnREFBQ1AsS0FBSyxFQUFDLEVBQUU7MERBQUMsbUJBQWlCOzs7OztvREFBUzswREFDM0MsOERBQUNPLFFBQU07Z0RBQUNQLEtBQUssRUFBQyxJQUFJOzBEQUFDLElBQUU7Ozs7O29EQUFTOzBEQUM5Qiw4REFBQ08sUUFBTTtnREFBQ1AsS0FBSyxFQUFDLEtBQUs7MERBQUMsS0FBRzs7Ozs7b0RBQVM7MERBQ2hDLDhEQUFDTyxRQUFNO2dEQUFDUCxLQUFLLEVBQUMsSUFBSTswREFBQyxJQUFFOzs7OztvREFBUzs7Ozs7OzRDQUN6QjtrREFDVCw4REFBQ1EsUUFBTTt3Q0FBQ2QsSUFBSSxFQUFDLFFBQVE7d0NBQUNlLE9BQU8sRUFBRW5ELE9BQU87d0NBQUVzQixTQUFTLEVBQUMsNEJBQTRCO2tEQUFDLFVBQVE7Ozs7OzRDQUFTOzs7Ozs7b0NBQzdGOzs7OztnQ0FDTDs7Ozs7O3dCQUNKOzs7OztvQkFDSjs7b0JBQ1AsQ0FDTDtBQUNOLENBQUM7R0E5RVF2QixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFnRmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbXVpL21hdGVyaWFsL1NuYWNrYmFyJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NvbGxlY3Rpb24sIHNldENvbGxlY3Rpb25dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW21vYmlsZU51bWJlciwgc2V0TW9iaWxlTnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtBbGVydE1lc3NhZ2UsIHNldEFsZXJ0TWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbQWxlcnRNZXNzYWdlQmcsIHNldEFsZXJ0TWVzc2FnZUJnXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZW5kU01TKCkge1xuXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly8yZmFjdG9yLmluL0FQSS9SMS8/bW9kdWxlPVRSQU5TX1NNUyZhcGlrZXk9ZTIyOTA1ZDctYTc1YS0xMWVjLWE0YzItMDIwMGNkOTM2MDQyJnRvPSR7bW9iaWxlTnVtYmVyfSZmcm9tPURURFREVCZ0ZW1wbGF0ZW5hbWU9RFREVERUJnZhcjE9JHtjb2xsZWN0aW9ufWApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgICAgIFxuICAgICAgICAvLyBmZXRjaChgaHR0cHM6Ly8yZmFjdG9yLmluL0FQSS9SMS8/bW9kdWxlPVRSQU5TX1NNUyZhcGlrZXk9ZTIyOTA1ZDctYTc1YS0xMWVjLWE0YzItMDIwMGNkOTM2MDQyJnRvPSR7bW9iaWxlTnVtYmVyfSZmcm9tPURURFREVCZ0ZW1wbGF0ZW5hbWU9RFREVERUJnZhcjE9JHtjb2xsZWN0aW9ufWAse1xuICAgICAgICAvLyAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgLy8gICAgIH19KS50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAvLyByZXN1bHQuanNvbigpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgIC8vICAgICBpZiAocmVzcC5TdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHNldEFsZXJ0TWVzc2FnZUJnKCdzdWNjZXNzJylcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiU01TIFNlbnQhXCIpXG4gICAgICAgICAgICAvLyAgICAgICAgIGhhbmRsZUNsaWNrKClcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICBzZXRBbGVydE1lc3NhZ2VCZygnZGFuZ2VyJylcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKHJlc3AuRGV0YWlscylcbiAgICAgICAgICAgIC8vICAgICAgICAgaGFuZGxlQ2xpY2soKVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTbmFja2JhciBvcGVuPXtvcGVufSBhdXRvSGlkZUR1cmF0aW9uPXsyMDAwfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIGJnLSR7QWxlcnRNZXNzYWdlQmd9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtBbGVydE1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgIDwvU25hY2tiYXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cucG5naXRlbS5jb20vcGltZ3MvbS80ODUtNDg1MjM3OF9zYW1wbGUtbG9nby1wbmctdHJhbnNwYXJlbnQtcG5nLnBuZ1wiIGFsdD1cIiNJbWdOb3RGb3VuZFwiIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCI3MHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSAgY2xhc3NOYW1lPSdtdC01Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibW9iaWxlX251bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+PGI+TW9iaWxlIE51bWJlcjwvYj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCIgaWQ9XCJtb2JpbGVfbnVtYmVyXCIgYXV0b0ZvY3VzIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgZm9udFNpemU6IFwiMThweFwiIH19IG1pbkxlbmd0aD1cIjEwXCIgbWF4TGVuZ3RoPVwiMTBcIiByZXF1aXJlZCB2YWx1ZT17bW9iaWxlTnVtYmVyfSBvbkNoYW5nZT17KGUpID0+IHNldE1vYmlsZU51bWJlcihlLnRhcmdldC52YWx1ZSl9IGF1dG9Db21wbGV0ZT0nb2ZmJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXdfcGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiIH19PjxiPlNlbGVjdCBDb2xsZWN0aW9uPC9iPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCIgcmVxdWlyZWQgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2xsZWN0aW9uKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgQ29sbGVjdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU1RcIj5TVDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRlRWXCI+RlRWPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNRlwiPk1GPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17c2VuZFNNU30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwIG10LTNcIj5Db250aW51ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWxlcnQiLCJTbmFja2JhciIsImF4aW9zIiwiSG9tZSIsInNlbmRTTVMiLCJnZXQiLCJjb2xsZWN0aW9uIiwibW9iaWxlTnVtYmVyIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJzZXRDb2xsZWN0aW9uIiwic2V0TW9iaWxlTnVtYmVyIiwiQWxlcnRNZXNzYWdlIiwic2V0QWxlcnRNZXNzYWdlIiwiQWxlcnRNZXNzYWdlQmciLCJzZXRBbGVydE1lc3NhZ2VCZyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ2xvc2UiLCJyZWFzb24iLCJhdXRvSGlkZUR1cmF0aW9uIiwib25DbG9zZSIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9ybSIsImxhYmVsIiwiZm9yIiwic3R5bGUiLCJmb250U2l6ZSIsImIiLCJpbnB1dCIsInR5cGUiLCJpZCIsImF1dG9Gb2N1cyIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJhdXRvQ29tcGxldGUiLCJzZWxlY3QiLCJhcmlhLWxhYmVsIiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});