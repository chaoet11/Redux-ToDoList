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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: rgb(248, 243, 203);\\n}\\n\\n.to-do-list {\\n  font-family: Arial, sans-serif;\\n  text-align: center;\\n  margin-top: 100px;\\n}\\n\\ninput[type=\\\"text\\\"] {\\n  font-size: 16px;\\n  padding: 5px;\\n  margin: 10px;\\n  border: 2px solid hsla(0, 0%, 80%, 0.5);\\n  border-radius: 5px;\\n  color: hsla(0, 0%, 0%, 0.5);\\n}\\n\\ninput[type=\\\"checkbox\\\"] {\\n  font-size: 18px;\\n  margin-right: 50px;\\n  border: 2px solid hsla(0, 0%, 80%, 0.5);\\n  border-radius: 5px;\\n  color: hsla(0, 0%, 0%, 0.5);\\n}\\nol {\\n  padding: 20px;\\n}\\nli {\\n  font-size: 16px;\\n  font-weight: bold;\\n  padding: 10px;\\n  background-color: hsl(0, 0%, 97%);\\n  /* margin-bottom: 10px; */\\n\\n  border: 3px solid hsla(0, 0%, 85%, 0.75);\\n  border-radius: 5px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\nbutton {\\n  font-size: 16px;\\n  font-weight: bold;\\n  padding: 5px;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\n.move-button {\\n  padding: 8px 12px;\\n  font-size: 18px;\\n  margin-left: 100px;\\n}\\n\\n.add-button {\\n  background-color: rgb(129, 203, 162);\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, \\\"Cascadia Mono\\\", \\\"Segoe UI Mono\\\",\\n    \\\"Roboto Mono\\\", \\\"Oxygen Mono\\\", \\\"Ubuntu Monospace\\\", \\\"Source Code Pro\\\",\\n    \\\"Fira Mono\\\", \\\"Droid Sans Mono\\\", \\\"Courier New\\\", monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,uCAAuC;EACvC,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,uCAAuC;EACvC,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,iCAAiC;EACjC,yBAAyB;;EAEzB,wCAAwC;EACxC,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA0GG\",\"sourcesContent\":[\"body {\\n  background-color: rgb(248, 243, 203);\\n}\\n\\n.to-do-list {\\n  font-family: Arial, sans-serif;\\n  text-align: center;\\n  margin-top: 100px;\\n}\\n\\ninput[type=\\\"text\\\"] {\\n  font-size: 16px;\\n  padding: 5px;\\n  margin: 10px;\\n  border: 2px solid hsla(0, 0%, 80%, 0.5);\\n  border-radius: 5px;\\n  color: hsla(0, 0%, 0%, 0.5);\\n}\\n\\ninput[type=\\\"checkbox\\\"] {\\n  font-size: 18px;\\n  margin-right: 50px;\\n  border: 2px solid hsla(0, 0%, 80%, 0.5);\\n  border-radius: 5px;\\n  color: hsla(0, 0%, 0%, 0.5);\\n}\\nol {\\n  padding: 20px;\\n}\\nli {\\n  font-size: 16px;\\n  font-weight: bold;\\n  padding: 10px;\\n  background-color: hsl(0, 0%, 97%);\\n  /* margin-bottom: 10px; */\\n\\n  border: 3px solid hsla(0, 0%, 85%, 0.75);\\n  border-radius: 5px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\nbutton {\\n  font-size: 16px;\\n  font-weight: bold;\\n  padding: 5px;\\n  color: rgb(255, 255, 255);\\n  border: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\n.move-button {\\n  padding: 8px 12px;\\n  font-size: 18px;\\n  margin-left: 100px;\\n}\\n\\n.add-button {\\n  background-color: rgb(129, 203, 162);\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, \\\"Cascadia Mono\\\", \\\"Segoe UI Mono\\\",\\n    \\\"Roboto Mono\\\", \\\"Oxygen Mono\\\", \\\"Ubuntu Monospace\\\", \\\"Source Code Pro\\\",\\n    \\\"Fira Mono\\\", \\\"Droid Sans Mono\\\", \\\"Courier New\\\", monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxnREFBZ0QseUNBQXlDLEdBQUcsaUJBQWlCLG1DQUFtQyx1QkFBdUIsc0JBQXNCLEdBQUcsMEJBQTBCLG9CQUFvQixpQkFBaUIsaUJBQWlCLDRDQUE0Qyx1QkFBdUIsZ0NBQWdDLEdBQUcsOEJBQThCLG9CQUFvQix1QkFBdUIsNENBQTRDLHVCQUF1QixnQ0FBZ0MsR0FBRyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sb0JBQW9CLHNCQUFzQixrQkFBa0Isc0NBQXNDLDRCQUE0QixpREFBaUQsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsWUFBWSxvQkFBb0Isc0JBQXNCLGlCQUFpQiw4QkFBOEIsaUJBQWlCLHVCQUF1QixvQkFBb0IsR0FBRyxrQkFBa0Isc0JBQXNCLG9CQUFvQix1QkFBdUIsR0FBRyxpQkFBaUIseUNBQXlDLEdBQUcsY0FBYyx3QkFBd0IsMEJBQTBCLDBPQUEwTyxnQ0FBZ0MsMENBQTBDLHdDQUF3Qyx5TEFBeUwscUdBQXFHLHNDQUFzQyxrQ0FBa0MsdUpBQXVKLG1DQUFtQyx3Q0FBd0MsOEJBQThCLHFDQUFxQyxHQUFHLHlDQUF5QyxXQUFXLHNDQUFzQyxzQ0FBc0Msb0NBQW9DLG9GQUFvRiw2SkFBNkosb0NBQW9DLCtCQUErQix5S0FBeUssa0NBQWtDLDBDQUEwQyxnQ0FBZ0MsdUNBQXVDLEtBQUssR0FBRyxPQUFPLDJCQUEyQixlQUFlLGNBQWMsR0FBRyxpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsc0NBQXNDLDBKQUEwSixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLHlDQUF5QyxVQUFVLHlCQUF5QixLQUFLLElBQUksV0FBVyx1RkFBdUYsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sOEdBQThHLGdDQUFnQyx5Q0FBeUMsR0FBRyxpQkFBaUIsbUNBQW1DLHVCQUF1QixzQkFBc0IsR0FBRywwQkFBMEIsb0JBQW9CLGlCQUFpQixpQkFBaUIsNENBQTRDLHVCQUF1QixnQ0FBZ0MsR0FBRyw4QkFBOEIsb0JBQW9CLHVCQUF1Qiw0Q0FBNEMsdUJBQXVCLGdDQUFnQyxHQUFHLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxvQkFBb0Isc0JBQXNCLGtCQUFrQixzQ0FBc0MsNEJBQTRCLGlEQUFpRCx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxZQUFZLG9CQUFvQixzQkFBc0IsaUJBQWlCLDhCQUE4QixpQkFBaUIsdUJBQXVCLG9CQUFvQixHQUFHLGtCQUFrQixzQkFBc0Isb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQix5Q0FBeUMsR0FBRyxjQUFjLHdCQUF3QiwwQkFBMEIsME9BQTBPLGdDQUFnQywwQ0FBMEMsd0NBQXdDLHlMQUF5TCxxR0FBcUcsc0NBQXNDLGtDQUFrQyx1SkFBdUosbUNBQW1DLHdDQUF3Qyw4QkFBOEIscUNBQXFDLEdBQUcseUNBQXlDLFdBQVcsc0NBQXNDLHNDQUFzQyxvQ0FBb0Msb0ZBQW9GLDZKQUE2SixvQ0FBb0MsK0JBQStCLHlLQUF5SyxrQ0FBa0MsMENBQTBDLGdDQUFnQyx1Q0FBdUMsS0FBSyxHQUFHLE9BQU8sMkJBQTJCLGVBQWUsY0FBYyxHQUFHLGlCQUFpQixxQkFBcUIsdUJBQXVCLEdBQUcsVUFBVSxzQ0FBc0MsMEpBQTBKLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcseUNBQXlDLFVBQVUseUJBQXlCLEtBQUssSUFBSSx1QkFBdUI7QUFDemtQO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz81MTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0MywgMjAzKTtcXG59XFxuXFxuLnRvLWRvLWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2xhKDAsIDAlLCA4MCUsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgaHNsYSgwLCAwJSwgODAlLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xcbn1cXG5vbCB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5saSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk3JSk7XFxuICAvKiBtYXJnaW4tYm90dG9tOiAxMHB4OyAqL1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgaHNsYSgwLCAwJSwgODUlLCAwLjc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb3ZlLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMjAzLCAxNjIpO1xcbn1cXG5cXG4vKiA6cm9vdCB7XFxuICAtLW1heC13aWR0aDogMTEwMHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgTWVubG8sIE1vbmFjbywgXFxcIkNhc2NhZGlhIE1vbm9cXFwiLCBcXFwiU2Vnb2UgVUkgTW9ub1xcXCIsXFxuICAgIFxcXCJSb2JvdG8gTW9ub1xcXCIsIFxcXCJPeHlnZW4gTW9ub1xcXCIsIFxcXCJVYnVudHUgTW9ub3NwYWNlXFxcIiwgXFxcIlNvdXJjZSBDb2RlIFByb1xcXCIsXFxuICAgIFxcXCJGaXJhIE1vbm9cXFwiLCBcXFwiRHJvaWQgU2FucyBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcblxcbiAgLS1mb3JlZ3JvdW5kLXJnYjogMCwgMCwgMDtcXG4gIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDIxNCwgMjE5LCAyMjA7XFxuICAtLWJhY2tncm91bmQtZW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXG5cXG4gIC0tcHJpbWFyeS1nbG93OiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAxODBkZWcgYXQgNTAlIDUwJSxcXG4gICAgIzE2YWJmZjMzIDBkZWcsXFxuICAgICMwODg1ZmYzMyA1NWRlZyxcXG4gICAgIzU0ZDZmZjMzIDEyMGRlZyxcXG4gICAgIzAwNzFmZjMzIDE2MGRlZyxcXG4gICAgdHJhbnNwYXJlbnQgMzYwZGVnXFxuICApO1xcbiAgLS1zZWNvbmRhcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICApO1xcblxcbiAgLS10aWxlLXN0YXJ0LXJnYjogMjM5LCAyNDUsIDI0OTtcXG4gIC0tdGlsZS1lbmQtcmdiOiAyMjgsIDIzMiwgMjMzO1xcbiAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICMwMDAwMDA4MCxcXG4gICAgIzAwMDAwMDQwLFxcbiAgICAjMDAwMDAwMzAsXFxuICAgICMwMDAwMDAyMCxcXG4gICAgIzAwMDAwMDEwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDA4MFxcbiAgKTtcXG5cXG4gIC0tY2FsbG91dC1yZ2I6IDIzOCwgMjQwLCAyNDE7XFxuICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTcyLCAxNzUsIDE3NjtcXG4gIC0tY2FyZC1yZ2I6IDE4MCwgMTg1LCAxODg7XFxuICAtLWNhcmQtYm9yZGVyLXJnYjogMTMxLCAxMzQsIDEzNTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgOnJvb3Qge1xcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWJhY2tncm91bmQtZW5kLXJnYjogMCwgMCwgMDtcXG5cXG4gICAgLS1wcmltYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDEsIDY1LCAyNTUsIDAuNCksIHJnYmEoMSwgNjUsIDI1NSwgMCkpO1xcbiAgICAtLXNlY29uZGFyeS1nbG93OiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tIHJpZ2h0LFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDAuMylcXG4gICAgKTtcXG5cXG4gICAgLS10aWxlLXN0YXJ0LXJnYjogMiwgMTMsIDQ2O1xcbiAgICAtLXRpbGUtZW5kLXJnYjogMiwgNSwgMTk7XFxuICAgIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcbiAgICAgICNmZmZmZmY4MCxcXG4gICAgICAjZmZmZmZmNDAsXFxuICAgICAgI2ZmZmZmZjMwLFxcbiAgICAgICNmZmZmZmYyMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjEwLFxcbiAgICAgICNmZmZmZmY4MFxcbiAgICApO1xcblxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxuICB9XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiByZ2IodmFyKC0tZm9yZWdyb3VuZC1yZ2IpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20sXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgcmdiKHZhcigtLWJhY2tncm91bmQtZW5kLXJnYikpXFxuICAgIClcXG4gICAgcmdiKHZhcigtLWJhY2tncm91bmQtc3RhcnQtcmdiKSk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIGh0bWwge1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICB9XFxufSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLHlCQUF5Qjs7RUFFekIsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBHR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0MywgMjAzKTtcXG59XFxuXFxuLnRvLWRvLWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2xhKDAsIDAlLCA4MCUsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgaHNsYSgwLCAwJSwgODAlLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xcbn1cXG5vbCB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5saSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk3JSk7XFxuICAvKiBtYXJnaW4tYm90dG9tOiAxMHB4OyAqL1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgaHNsYSgwLCAwJSwgODUlLCAwLjc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb3ZlLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMjAzLCAxNjIpO1xcbn1cXG5cXG4vKiA6cm9vdCB7XFxuICAtLW1heC13aWR0aDogMTEwMHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgTWVubG8sIE1vbmFjbywgXFxcIkNhc2NhZGlhIE1vbm9cXFwiLCBcXFwiU2Vnb2UgVUkgTW9ub1xcXCIsXFxuICAgIFxcXCJSb2JvdG8gTW9ub1xcXCIsIFxcXCJPeHlnZW4gTW9ub1xcXCIsIFxcXCJVYnVudHUgTW9ub3NwYWNlXFxcIiwgXFxcIlNvdXJjZSBDb2RlIFByb1xcXCIsXFxuICAgIFxcXCJGaXJhIE1vbm9cXFwiLCBcXFwiRHJvaWQgU2FucyBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcblxcbiAgLS1mb3JlZ3JvdW5kLXJnYjogMCwgMCwgMDtcXG4gIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDIxNCwgMjE5LCAyMjA7XFxuICAtLWJhY2tncm91bmQtZW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXG5cXG4gIC0tcHJpbWFyeS1nbG93OiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAxODBkZWcgYXQgNTAlIDUwJSxcXG4gICAgIzE2YWJmZjMzIDBkZWcsXFxuICAgICMwODg1ZmYzMyA1NWRlZyxcXG4gICAgIzU0ZDZmZjMzIDEyMGRlZyxcXG4gICAgIzAwNzFmZjMzIDE2MGRlZyxcXG4gICAgdHJhbnNwYXJlbnQgMzYwZGVnXFxuICApO1xcbiAgLS1zZWNvbmRhcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICApO1xcblxcbiAgLS10aWxlLXN0YXJ0LXJnYjogMjM5LCAyNDUsIDI0OTtcXG4gIC0tdGlsZS1lbmQtcmdiOiAyMjgsIDIzMiwgMjMzO1xcbiAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICMwMDAwMDA4MCxcXG4gICAgIzAwMDAwMDQwLFxcbiAgICAjMDAwMDAwMzAsXFxuICAgICMwMDAwMDAyMCxcXG4gICAgIzAwMDAwMDEwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDA4MFxcbiAgKTtcXG5cXG4gIC0tY2FsbG91dC1yZ2I6IDIzOCwgMjQwLCAyNDE7XFxuICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTcyLCAxNzUsIDE3NjtcXG4gIC0tY2FyZC1yZ2I6IDE4MCwgMTg1LCAxODg7XFxuICAtLWNhcmQtYm9yZGVyLXJnYjogMTMxLCAxMzQsIDEzNTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgOnJvb3Qge1xcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWJhY2tncm91bmQtZW5kLXJnYjogMCwgMCwgMDtcXG5cXG4gICAgLS1wcmltYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDEsIDY1LCAyNTUsIDAuNCksIHJnYmEoMSwgNjUsIDI1NSwgMCkpO1xcbiAgICAtLXNlY29uZGFyeS1nbG93OiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tIHJpZ2h0LFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDAuMylcXG4gICAgKTtcXG5cXG4gICAgLS10aWxlLXN0YXJ0LXJnYjogMiwgMTMsIDQ2O1xcbiAgICAtLXRpbGUtZW5kLXJnYjogMiwgNSwgMTk7XFxuICAgIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcbiAgICAgICNmZmZmZmY4MCxcXG4gICAgICAjZmZmZmZmNDAsXFxuICAgICAgI2ZmZmZmZjMwLFxcbiAgICAgICNmZmZmZmYyMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjEwLFxcbiAgICAgICNmZmZmZmY4MFxcbiAgICApO1xcblxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxuICB9XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiByZ2IodmFyKC0tZm9yZWdyb3VuZC1yZ2IpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20sXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgcmdiKHZhcigtLWJhY2tncm91bmQtZW5kLXJnYikpXFxuICAgIClcXG4gICAgcmdiKHZhcigtLWJhY2tncm91bmQtc3RhcnQtcmdiKSk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIGh0bWwge1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICB9XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./src/styles/globals.css\n"));

/***/ })

});