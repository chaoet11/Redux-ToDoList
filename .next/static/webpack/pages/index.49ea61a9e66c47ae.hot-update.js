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

/***/ "./src/components/TodoItem.js":
/*!************************************!*\
  !*** ./src/components/TodoItem.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/actions */ \"./src/redux/actions/index.js\");\n// 單個 To-Do 項目\n\nvar _s = $RefreshSig$();\n\n\n\n// TodoList 傳遞過來的 task\nconst TodoItem = (param)=>{\n    let { task } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    checked: task.completed,\n                    onClick: ()=>dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.completeTask)(task.id))\n                }, void 0, false, {\n                    fileName: \"/Users/chao/Desktop/Redux-ToDoList/src/components/TodoItem.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        textDecoration: task.completed ? \"line-through\" : \"none\",\n                        color: task.completed ? \"gray\" : \"black\"\n                    },\n                    children: task.text\n                }, void 0, false, {\n                    fileName: \"/Users/chao/Desktop/Redux-ToDoList/src/components/TodoItem.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"move-button\",\n                    onClick: ()=>dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.removeTask)(task.id)),\n                    children: \"Remove\"\n                }, void 0, false, {\n                    fileName: \"/Users/chao/Desktop/Redux-ToDoList/src/components/TodoItem.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chao/Desktop/Redux-ToDoList/src/components/TodoItem.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/chao/Desktop/Redux-ToDoList/src/components/TodoItem.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoItem, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = TodoItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsY0FBYzs7O0FBQ1k7QUFDZ0I7QUFDaUI7QUFFM0Qsc0JBQXNCO0FBQ3RCLE1BQU1JLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3hCLE1BQU1DLFdBQVdMLHdEQUFXQTtJQUU1QixxQkFDRSw4REFBQ007a0JBQ0MsNEVBQUNDOzs4QkFDQyw4REFBQ0M7b0JBQ0NDLE1BQUs7b0JBQ0xDLFNBQVNOLEtBQUtPLFNBQVM7b0JBQ3ZCQyxTQUFTLElBQU1QLFNBQVNILDREQUFZQSxDQUFDRSxLQUFLUyxFQUFFOzs7Ozs7OEJBRTlDLDhEQUFDQztvQkFDQ0MsT0FBTzt3QkFDTEMsZ0JBQWdCWixLQUFLTyxTQUFTLEdBQUcsaUJBQWlCO3dCQUNsRE0sT0FBT2IsS0FBS08sU0FBUyxHQUFHLFNBQVM7b0JBQ25DOzhCQUVDUCxLQUFLYyxJQUFJOzs7Ozs7OEJBRVosOERBQUNDO29CQUNDQyxXQUFVO29CQUNWUixTQUFTLElBQU1QLFNBQVNKLDBEQUFVQSxDQUFDRyxLQUFLUyxFQUFFOzhCQUMzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPVDtHQTdCTVY7O1FBQ2FILG9EQUFXQTs7O0tBRHhCRztBQStCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS5qcz9kNTIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOWWruWAiyBUby1EbyDpoIXnm65cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyByZW1vdmVUYXNrLCBjb21wbGV0ZVRhc2sgfSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zXCI7XG5cbi8vIFRvZG9MaXN0IOWCs+mBnumBjuS+hueahCB0YXNrXG5jb25zdCBUb2RvSXRlbSA9ICh7IHRhc2sgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2hlY2tlZD17dGFzay5jb21wbGV0ZWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goY29tcGxldGVUYXNrKHRhc2suaWQpKX0gLy8g55W2IGNoZWNrYm94IOiiq+m7nuaTiuaZgu+8jOa0vueZvCBjb21wbGV0ZVRhc2sgYWN0aW9u77yM5YiH5o+b5Lu75YuZ54uA5oWLXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiB0YXNrLmNvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGNvbG9yOiB0YXNrLmNvbXBsZXRlZCA/IFwiZ3JheVwiIDogXCJibGFja1wiLFxuICAgICAgICAgIH19IC8vIOWIqumZpOe3mlxuICAgICAgICA+XG4gICAgICAgICAge3Rhc2sudGV4dH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW92ZS1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHJlbW92ZVRhc2sodGFzay5pZCkpfVxuICAgICAgICA+XG4gICAgICAgICAgUmVtb3ZlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7Lyog55W25oyJ6YiV6KKr6bue5pOK77yM5rS+55m8IHJlbW92ZVRhc2sgYWN0aW9u77yM5Yiq6ZmkIFRvLURvIOmgheebruOAgiAqL31cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRGlzcGF0Y2giLCJyZW1vdmVUYXNrIiwiY29tcGxldGVUYXNrIiwiVG9kb0l0ZW0iLCJ0YXNrIiwiZGlzcGF0Y2giLCJvbCIsImxpIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsImNvbXBsZXRlZCIsIm9uQ2xpY2siLCJpZCIsInNwYW4iLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJ0ZXh0IiwiYnV0dG9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TodoItem.js\n"));

/***/ })

});