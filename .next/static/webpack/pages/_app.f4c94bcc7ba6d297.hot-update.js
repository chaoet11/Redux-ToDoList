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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./src/styles/globals.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./src/styles/globals.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: rgb(248, 243, 203);\\n}\\n\\n.to-do-list {\\n  font-family: Arial, sans-serif;\\n  text-align: center;\\n  margin-top: 100px;\\n}\\n\\ninput[type=\\\"text\\\"] {\\n  font-size: 16px;\\n  padding: 5px;\\n  margin: 10px;\\n  border: 2px solid hsla(0, 0%, 80%, 0.5);\\n  border-radius: 5px;\\n  color: hsla(0, 0%, 0%, 0.5);\\n}\\n\\ninput[type=\\\"checkbox\\\"] {\\n  font-size: 18px;\\n  margin-right: 50px;\\n  border: 2px solid hsla(0, 0%, 80%, 0.5);\\n  border-radius: 5px;\\n  color: hsla(0, 0%, 0%, 0.5);\\n}\\nol {\\n  padding: 20px;\\n}\\nli {\\n  font-size: 16px;\\n  font-weight: bold;\\n  padding: 10px;\\n  background-color: hsl(0, 0%, 97%);\\n  /* margin-bottom: 10px; */\\n\\n  border: 3px solid hsla(0, 0%, 85%, 0.75);\\n  border-radius: 5px;\\n  display: flex;\\n  align-items: center;\\n  /* justify-content: center; */\\n}\\n\\nbutton {\\n  font-size: 16px;\\n  font-weight: bold;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\n.move-button {\\n  padding: 8px 12px;\\n  font-size: 18px;\\n  margin-right: 50px;\\n}\\n\\n.add-button {\\n  background-color: rgb(129, 203, 162);\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, \\\"Cascadia Mono\\\", \\\"Segoe UI Mono\\\",\\n    \\\"Roboto Mono\\\", \\\"Oxygen Mono\\\", \\\"Ubuntu Monospace\\\", \\\"Source Code Pro\\\",\\n    \\\"Fira Mono\\\", \\\"Droid Sans Mono\\\", \\\"Courier New\\\", monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,uCAAuC;EACvC,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,uCAAuC;EACvC,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,iCAAiC;EACjC,yBAAyB;;EAEzB,wCAAwC;EACxC,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA0GG\",\"sourcesContent\":[\"body {\\n  background-color: rgb(248, 243, 203);\\n}\\n\\n.to-do-list {\\n  font-family: Arial, sans-serif;\\n  text-align: center;\\n  margin-top: 100px;\\n}\\n\\ninput[type=\\\"text\\\"] {\\n  font-size: 16px;\\n  padding: 5px;\\n  margin: 10px;\\n  border: 2px solid hsla(0, 0%, 80%, 0.5);\\n  border-radius: 5px;\\n  color: hsla(0, 0%, 0%, 0.5);\\n}\\n\\ninput[type=\\\"checkbox\\\"] {\\n  font-size: 18px;\\n  margin-right: 50px;\\n  border: 2px solid hsla(0, 0%, 80%, 0.5);\\n  border-radius: 5px;\\n  color: hsla(0, 0%, 0%, 0.5);\\n}\\nol {\\n  padding: 20px;\\n}\\nli {\\n  font-size: 16px;\\n  font-weight: bold;\\n  padding: 10px;\\n  background-color: hsl(0, 0%, 97%);\\n  /* margin-bottom: 10px; */\\n\\n  border: 3px solid hsla(0, 0%, 85%, 0.75);\\n  border-radius: 5px;\\n  display: flex;\\n  align-items: center;\\n  /* justify-content: center; */\\n}\\n\\nbutton {\\n  font-size: 16px;\\n  font-weight: bold;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\n.move-button {\\n  padding: 8px 12px;\\n  font-size: 18px;\\n  margin-right: 50px;\\n}\\n\\n.add-button {\\n  background-color: rgb(129, 203, 162);\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, \\\"Cascadia Mono\\\", \\\"Segoe UI Mono\\\",\\n    \\\"Roboto Mono\\\", \\\"Oxygen Mono\\\", \\\"Ubuntu Monospace\\\", \\\"Source Code Pro\\\",\\n    \\\"Fira Mono\\\", \\\"Droid Sans Mono\\\", \\\"Courier New\\\", monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxnREFBZ0QseUNBQXlDLEdBQUcsaUJBQWlCLG1DQUFtQyx1QkFBdUIsc0JBQXNCLEdBQUcsMEJBQTBCLG9CQUFvQixpQkFBaUIsaUJBQWlCLDRDQUE0Qyx1QkFBdUIsZ0NBQWdDLEdBQUcsOEJBQThCLG9CQUFvQix1QkFBdUIsNENBQTRDLHVCQUF1QixnQ0FBZ0MsR0FBRyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sb0JBQW9CLHNCQUFzQixrQkFBa0Isc0NBQXNDLDRCQUE0QixpREFBaUQsdUJBQXVCLGtCQUFrQix3QkFBd0IsZ0NBQWdDLEtBQUssWUFBWSxvQkFBb0Isc0JBQXNCLDhCQUE4QixpQkFBaUIsdUJBQXVCLG9CQUFvQixHQUFHLGtCQUFrQixzQkFBc0Isb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQix5Q0FBeUMsR0FBRyxjQUFjLHdCQUF3QiwwQkFBMEIsME9BQTBPLGdDQUFnQywwQ0FBMEMsd0NBQXdDLHlMQUF5TCxxR0FBcUcsc0NBQXNDLGtDQUFrQyx1SkFBdUosbUNBQW1DLHdDQUF3Qyw4QkFBOEIscUNBQXFDLEdBQUcseUNBQXlDLFdBQVcsc0NBQXNDLHNDQUFzQyxvQ0FBb0Msb0ZBQW9GLDZKQUE2SixvQ0FBb0MsK0JBQStCLHlLQUF5SyxrQ0FBa0MsMENBQTBDLGdDQUFnQyx1Q0FBdUMsS0FBSyxHQUFHLE9BQU8sMkJBQTJCLGVBQWUsY0FBYyxHQUFHLGlCQUFpQixxQkFBcUIsdUJBQXVCLEdBQUcsVUFBVSxzQ0FBc0MsMEpBQTBKLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcseUNBQXlDLFVBQVUseUJBQXlCLEtBQUssSUFBSSxXQUFXLHVGQUF1RixZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sOEdBQThHLGdDQUFnQyx5Q0FBeUMsR0FBRyxpQkFBaUIsbUNBQW1DLHVCQUF1QixzQkFBc0IsR0FBRywwQkFBMEIsb0JBQW9CLGlCQUFpQixpQkFBaUIsNENBQTRDLHVCQUF1QixnQ0FBZ0MsR0FBRyw4QkFBOEIsb0JBQW9CLHVCQUF1Qiw0Q0FBNEMsdUJBQXVCLGdDQUFnQyxHQUFHLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxvQkFBb0Isc0JBQXNCLGtCQUFrQixzQ0FBc0MsNEJBQTRCLGlEQUFpRCx1QkFBdUIsa0JBQWtCLHdCQUF3QixnQ0FBZ0MsS0FBSyxZQUFZLG9CQUFvQixzQkFBc0IsOEJBQThCLGlCQUFpQix1QkFBdUIsb0JBQW9CLEdBQUcsa0JBQWtCLHNCQUFzQixvQkFBb0IsdUJBQXVCLEdBQUcsaUJBQWlCLHlDQUF5QyxHQUFHLGNBQWMsd0JBQXdCLDBCQUEwQiwwT0FBME8sZ0NBQWdDLDBDQUEwQyx3Q0FBd0MseUxBQXlMLHFHQUFxRyxzQ0FBc0Msa0NBQWtDLHVKQUF1SixtQ0FBbUMsd0NBQXdDLDhCQUE4QixxQ0FBcUMsR0FBRyx5Q0FBeUMsV0FBVyxzQ0FBc0Msc0NBQXNDLG9DQUFvQyxvRkFBb0YsNkpBQTZKLG9DQUFvQywrQkFBK0IseUtBQXlLLGtDQUFrQywwQ0FBMEMsZ0NBQWdDLHVDQUF1QyxLQUFLLEdBQUcsT0FBTywyQkFBMkIsZUFBZSxjQUFjLEdBQUcsaUJBQWlCLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLHNDQUFzQywwSkFBMEosR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyx5Q0FBeUMsVUFBVSx5QkFBeUIsS0FBSyxJQUFJLHVCQUF1QjtBQUN6aVA7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzPzUxNDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQzLCAyMDMpO1xcbn1cXG5cXG4udG8tZG8tbGlzdCB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbGEoMCwgMCUsIDgwJSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC41KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2xhKDAsIDAlLCA4MCUsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNSk7XFxufVxcbm9sIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbmxpIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTclKTtcXG4gIC8qIG1hcmdpbi1ib3R0b206IDEwcHg7ICovXFxuXFxuICBib3JkZXI6IDNweCBzb2xpZCBoc2xhKDAsIDAlLCA4NSUsIDAuNzUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vdmUtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAyMDMsIDE2Mik7XFxufVxcblxcbi8qIDpyb290IHtcXG4gIC0tbWF4LXdpZHRoOiAxMTAwcHg7XFxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAtLWZvbnQtbW9ubzogdWktbW9ub3NwYWNlLCBNZW5sbywgTW9uYWNvLCBcXFwiQ2FzY2FkaWEgTW9ub1xcXCIsIFxcXCJTZWdvZSBVSSBNb25vXFxcIixcXG4gICAgXFxcIlJvYm90byBNb25vXFxcIiwgXFxcIk94eWdlbiBNb25vXFxcIiwgXFxcIlVidW50dSBNb25vc3BhY2VcXFwiLCBcXFwiU291cmNlIENvZGUgUHJvXFxcIixcXG4gICAgXFxcIkZpcmEgTW9ub1xcXCIsIFxcXCJEcm9pZCBTYW5zIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuXFxuICAtLWZvcmVncm91bmQtcmdiOiAwLCAwLCAwO1xcbiAgLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYjogMjE0LCAyMTksIDIyMDtcXG4gIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcblxcbiAgLS1wcmltYXJ5LWdsb3c6IGNvbmljLWdyYWRpZW50KFxcbiAgICBmcm9tIDE4MGRlZyBhdCA1MCUgNTAlLFxcbiAgICAjMTZhYmZmMzMgMGRlZyxcXG4gICAgIzA4ODVmZjMzIDU1ZGVnLFxcbiAgICAjNTRkNmZmMzMgMTIwZGVnLFxcbiAgICAjMDA3MWZmMzMgMTYwZGVnLFxcbiAgICB0cmFuc3BhcmVudCAzNjBkZWdcXG4gICk7XFxuICAtLXNlY29uZGFyeS1nbG93OiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXG4gICk7XFxuXFxuICAtLXRpbGUtc3RhcnQtcmdiOiAyMzksIDI0NSwgMjQ5O1xcbiAgLS10aWxlLWVuZC1yZ2I6IDIyOCwgMjMyLCAyMzM7XFxuICAtLXRpbGUtYm9yZGVyOiBjb25pYy1ncmFkaWVudChcXG4gICAgIzAwMDAwMDgwLFxcbiAgICAjMDAwMDAwNDAsXFxuICAgICMwMDAwMDAzMCxcXG4gICAgIzAwMDAwMDIwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDAxMCxcXG4gICAgIzAwMDAwMDgwXFxuICApO1xcblxcbiAgLS1jYWxsb3V0LXJnYjogMjM4LCAyNDAsIDI0MTtcXG4gIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxNzIsIDE3NSwgMTc2O1xcbiAgLS1jYXJkLXJnYjogMTgwLCAxODUsIDE4ODtcXG4gIC0tY2FyZC1ib3JkZXItcmdiOiAxMzEsIDEzNCwgMTM1O1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6cm9vdCB7XFxuICAgIC0tZm9yZWdyb3VuZC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuICAgIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDAsIDAsIDA7XFxuICAgIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAwLCAwLCAwO1xcblxcbiAgICAtLXByaW1hcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KHJnYmEoMSwgNjUsIDI1NSwgMC40KSwgcmdiYSgxLCA2NSwgMjU1LCAwKSk7XFxuICAgIC0tc2Vjb25kYXJ5LWdsb3c6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20gcmlnaHQsXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDApLFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMC4zKVxcbiAgICApO1xcblxcbiAgICAtLXRpbGUtc3RhcnQtcmdiOiAyLCAxMywgNDY7XFxuICAgIC0tdGlsZS1lbmQtcmdiOiAyLCA1LCAxOTtcXG4gICAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICAgI2ZmZmZmZjgwLFxcbiAgICAgICNmZmZmZmY0MCxcXG4gICAgICAjZmZmZmZmMzAsXFxuICAgICAgI2ZmZmZmZjIwLFxcbiAgICAgICNmZmZmZmYxMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjgwXFxuICAgICk7XFxuXFxuICAgIC0tY2FsbG91dC1yZ2I6IDIwLCAyMCwgMjA7XFxuICAgIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxMDgsIDEwOCwgMTA4O1xcbiAgICAtLWNhcmQtcmdiOiAxMDAsIDEwMCwgMTAwO1xcbiAgICAtLWNhcmQtYm9yZGVyLXJnYjogMjAwLCAyMDAsIDIwMDtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IHJnYih2YXIoLS1mb3JlZ3JvdW5kLXJnYikpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIGJvdHRvbSxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1lbmQtcmdiKSlcXG4gICAgKVxcbiAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1zdGFydC1yZ2IpKTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgaHRtbCB7XFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXG4gIH1cXG59ICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMseUJBQXlCOztFQUV6Qix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwR0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDMsIDIwMyk7XFxufVxcblxcbi50by1kby1saXN0IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgaHNsYSgwLCAwJSwgODAlLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1yaWdodDogNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbGEoMCwgMCUsIDgwJSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC41KTtcXG59XFxub2wge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxubGkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NyUpO1xcbiAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkIGhzbGEoMCwgMCUsIDg1JSwgMC43NSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW92ZS1idXR0b24ge1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjksIDIwMywgMTYyKTtcXG59XFxuXFxuLyogOnJvb3Qge1xcbiAgLS1tYXgtd2lkdGg6IDExMDBweDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIC0tZm9udC1tb25vOiB1aS1tb25vc3BhY2UsIE1lbmxvLCBNb25hY28sIFxcXCJDYXNjYWRpYSBNb25vXFxcIiwgXFxcIlNlZ29lIFVJIE1vbm9cXFwiLFxcbiAgICBcXFwiUm9ib3RvIE1vbm9cXFwiLCBcXFwiT3h5Z2VuIE1vbm9cXFwiLCBcXFwiVWJ1bnR1IE1vbm9zcGFjZVxcXCIsIFxcXCJTb3VyY2UgQ29kZSBQcm9cXFwiLFxcbiAgICBcXFwiRmlyYSBNb25vXFxcIiwgXFxcIkRyb2lkIFNhbnMgTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG5cXG4gIC0tZm9yZWdyb3VuZC1yZ2I6IDAsIDAsIDA7XFxuICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAyMTQsIDIxOSwgMjIwO1xcbiAgLS1iYWNrZ3JvdW5kLWVuZC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuXFxuICAtLXByaW1hcnktZ2xvdzogY29uaWMtZ3JhZGllbnQoXFxuICAgIGZyb20gMTgwZGVnIGF0IDUwJSA1MCUsXFxuICAgICMxNmFiZmYzMyAwZGVnLFxcbiAgICAjMDg4NWZmMzMgNTVkZWcsXFxuICAgICM1NGQ2ZmYzMyAxMjBkZWcsXFxuICAgICMwMDcxZmYzMyAxNjBkZWcsXFxuICAgIHRyYW5zcGFyZW50IDM2MGRlZ1xcbiAgKTtcXG4gIC0tc2Vjb25kYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgKTtcXG5cXG4gIC0tdGlsZS1zdGFydC1yZ2I6IDIzOSwgMjQ1LCAyNDk7XFxuICAtLXRpbGUtZW5kLXJnYjogMjI4LCAyMzIsIDIzMztcXG4gIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcbiAgICAjMDAwMDAwODAsXFxuICAgICMwMDAwMDA0MCxcXG4gICAgIzAwMDAwMDMwLFxcbiAgICAjMDAwMDAwMjAsXFxuICAgICMwMDAwMDAxMCxcXG4gICAgIzAwMDAwMDEwLFxcbiAgICAjMDAwMDAwODBcXG4gICk7XFxuXFxuICAtLWNhbGxvdXQtcmdiOiAyMzgsIDI0MCwgMjQxO1xcbiAgLS1jYWxsb3V0LWJvcmRlci1yZ2I6IDE3MiwgMTc1LCAxNzY7XFxuICAtLWNhcmQtcmdiOiAxODAsIDE4NSwgMTg4O1xcbiAgLS1jYXJkLWJvcmRlci1yZ2I6IDEzMSwgMTM0LCAxMzU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIDpyb290IHtcXG4gICAgLS1mb3JlZ3JvdW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gICAgLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYjogMCwgMCwgMDtcXG4gICAgLS1iYWNrZ3JvdW5kLWVuZC1yZ2I6IDAsIDAsIDA7XFxuXFxuICAgIC0tcHJpbWFyeS1nbG93OiByYWRpYWwtZ3JhZGllbnQocmdiYSgxLCA2NSwgMjU1LCAwLjQpLCByZ2JhKDEsIDY1LCAyNTUsIDApKTtcXG4gICAgLS1zZWNvbmRhcnktZ2xvdzogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIGJvdHRvbSByaWdodCxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDApLFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwLjMpXFxuICAgICk7XFxuXFxuICAgIC0tdGlsZS1zdGFydC1yZ2I6IDIsIDEzLCA0NjtcXG4gICAgLS10aWxlLWVuZC1yZ2I6IDIsIDUsIDE5O1xcbiAgICAtLXRpbGUtYm9yZGVyOiBjb25pYy1ncmFkaWVudChcXG4gICAgICAjZmZmZmZmODAsXFxuICAgICAgI2ZmZmZmZjQwLFxcbiAgICAgICNmZmZmZmYzMCxcXG4gICAgICAjZmZmZmZmMjAsXFxuICAgICAgI2ZmZmZmZjEwLFxcbiAgICAgICNmZmZmZmYxMCxcXG4gICAgICAjZmZmZmZmODBcXG4gICAgKTtcXG5cXG4gICAgLS1jYWxsb3V0LXJnYjogMjAsIDIwLCAyMDtcXG4gICAgLS1jYWxsb3V0LWJvcmRlci1yZ2I6IDEwOCwgMTA4LCAxMDg7XFxuICAgIC0tY2FyZC1yZ2I6IDEwMCwgMTAwLCAxMDA7XFxuICAgIC0tY2FyZC1ib3JkZXItcmdiOiAyMDAsIDIwMCwgMjAwO1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogcmdiKHZhcigtLWZvcmVncm91bmQtcmdiKSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tLFxcbiAgICAgIHRyYW5zcGFyZW50LFxcbiAgICAgIHJnYih2YXIoLS1iYWNrZ3JvdW5kLWVuZC1yZ2IpKVxcbiAgICApXFxuICAgIHJnYih2YXIoLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYikpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICBodG1sIHtcXG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbiAgfVxcbn0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./src/styles/globals.css\n"));

/***/ })

});