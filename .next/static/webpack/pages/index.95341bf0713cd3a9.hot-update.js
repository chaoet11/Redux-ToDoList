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

/***/ "./src/components/TodoForm.js":
/*!************************************!*\
  !*** ./src/components/TodoForm.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/actions */ \"./src/redux/actions/index.js\");\n// 新增 To-Do 項目的表單\n\nvar _s = $RefreshSig$();\n\n\n\nconst TodoForm = ()=>{\n    _s();\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // 輸入框中的內容\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(); // 派發 actions\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (task.trim() !== \"\") {\n            dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.addTask)(task)); // 如果輸入框中有內容，派發 `addTask` action，將 task 作為參數傳遞給 Redux\n            setTask(\"\"); // 清空輸入框\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: task,\n                    onChange: (e)=>setTask(e.target.value),\n                    placeholder: \"Add a new task...\"\n                }, void 0, false, {\n                    fileName: \"/Users/chao/Desktop/Redux-ToDoList/src/components/TodoForm.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Add Task\"\n                }, void 0, false, {\n                    fileName: \"/Users/chao/Desktop/Redux-ToDoList/src/components/TodoForm.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chao/Desktop/Redux-ToDoList/src/components/TodoForm.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/chao/Desktop/Redux-ToDoList/src/components/TodoForm.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoForm, \"i1LQVA+6mBto8M8yTwIVzYVUP44=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = TodoForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoForm);\nvar _c;\n$RefreshReg$(_c, \"TodoForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RvRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsaUJBQWlCOzs7QUFDdUI7QUFDRTtBQUNBO0FBRTFDLE1BQU1JLFdBQVc7O0lBQ2YsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUssVUFBVTtJQUNoRCxNQUFNTSxXQUFXTCx3REFBV0EsSUFBSSxhQUFhO0lBRTdDLE1BQU1NLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSUwsS0FBS00sSUFBSSxPQUFPLElBQUk7WUFDdEJKLFNBQVNKLHVEQUFPQSxDQUFDRSxRQUFRLHFEQUFxRDtZQUM5RUMsUUFBUSxLQUFLLFFBQVE7UUFDdkI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFLQyxVQUFVUDs7OEJBQ2QsOERBQUNRO29CQUNDQyxNQUFLO29CQUNMQyxPQUFPYjtvQkFDUGMsVUFBVSxDQUFDVixJQUFNSCxRQUFRRyxFQUFFVyxNQUFNLENBQUNGLEtBQUs7b0JBQ3ZDRyxhQUFZOzs7Ozs7OEJBRWQsOERBQUNDO29CQUFPTCxNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQXpCTWI7O1FBRWFGLG9EQUFXQTs7O0tBRnhCRTtBQTJCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub2RvRm9ybS5qcz9iYzYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOaWsOWiniBUby1EbyDpoIXnm67nmoTooajllq5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiQC9yZWR1eC9hY3Rpb25zXCI7XG5cbmNvbnN0IFRvZG9Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBbdGFzaywgc2V0VGFza10gPSB1c2VTdGF0ZShcIlwiKTsgLy8g6Ly45YWl5qGG5Lit55qE5YWn5a65XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTsgLy8g5rS+55m8IGFjdGlvbnNcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGFzay50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgIGRpc3BhdGNoKGFkZFRhc2sodGFzaykpOyAvLyDlpoLmnpzovLjlhaXmoYbkuK3mnInlhaflrrnvvIzmtL7nmbwgYGFkZFRhc2tgIGFjdGlvbu+8jOWwhyB0YXNrIOS9nOeCuuWPg+aVuOWCs+mBnue1piBSZWR1eFxuICAgICAgc2V0VGFzayhcIlwiKTsgLy8g5riF56m66Ly45YWl5qGGXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3Rhc2t9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyB0YXNrLi4uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9Gb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsImFkZFRhc2siLCJUb2RvRm9ybSIsInRhc2siLCJzZXRUYXNrIiwiZGlzcGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TodoForm.js\n"));

/***/ })

});