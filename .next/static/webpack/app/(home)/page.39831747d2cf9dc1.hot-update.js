"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./src/app/projects/components/ProjectCardList.tsx":
/*!*********************************************************!*\
  !*** ./src/app/projects/components/ProjectCardList.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/projects/components/ProjectCard.tsx\");\n/* harmony import */ var _components_ui_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/Title */ \"(app-pages-browser)/./src/components/ui/Title.tsx\");\n\n\n\n\nconst ProjectCardList = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/suyashparmar/my_portfolio/src/app/projects/components/ProjectCardList.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-2 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10\",\n                children: data.map((project, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        logo: project.logo,\n                        title: project.title,\n                        description: project.description,\n                        techStack: project.techStack,\n                        link: project.link,\n                        source: project.source\n                    }, idx, false, {\n                        fileName: \"/Users/suyashparmar/my_portfolio/src/app/projects/components/ProjectCardList.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/suyashparmar/my_portfolio/src/app/projects/components/ProjectCardList.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/suyashparmar/my_portfolio/src/app/projects/components/ProjectCardList.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectCardList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCardList);\nconst data = [\n    {\n        logo: \"/whiteboard.jpg\",\n        title: \"Notion Clone\",\n        description: \"A full-stack Notion clone with seamless note-taking, page organization, and collaborative features. Built with Next.js and Tailwind CSS for a responsive frontend, and powered by Convex for real-time updates and Clerk for secure authentication. This app supports rich-text editing, user-specific content management, and dynamic page creation, providing a personalized and intuitive user experience.\",\n        techStack: [\n            \"React\",\n            \"JavaScript\",\n            \"Tailwind CSS\",\n            \"Convex\",\n            \"Next js\",\n            \"HTML\",\n            \"CSS\"\n        ],\n        link: \"https://notion-clone-iota-one.vercel.app/\",\n        source: \"https://github.com/SuyashParmar/Notion-Clone\"\n    },\n    {\n        logo: \"/aiportfolio.jpg\",\n        title: \"AI Portfolio\",\n        description: \"Made a chatbot application which gives answers about myself. Used Vector embeddings to store custom data.\",\n        techStack: [\n            \"Next JS\",\n            \"Datastax\",\n            \"TailwindCSS\",\n            \"Framer Motion\"\n        ],\n        link: \"https://ai-portfolio-pi.vercel.app/\",\n        source: \"https://github.com/sSuyashg/ai_portfolio\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"ProjectCardList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvamVjdHMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZExpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEI7QUFDYztBQUNFO0FBRTFDLE1BQU1HLGtCQUFrQjtJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNILDREQUFLQTtnQkFBQ0ksT0FBTTs7Ozs7OzBCQUNiLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDWkUsS0FBS0MsR0FBRyxDQUFDLENBQUNDLFNBQWtCQyxvQkFDM0IsOERBQUNULG9EQUFXQTt3QkFFVlUsTUFBTUYsUUFBUUUsSUFBSTt3QkFDbEJMLE9BQU9HLFFBQVFILEtBQUs7d0JBQ3BCTSxhQUFhSCxRQUFRRyxXQUFXO3dCQUNoQ0MsV0FBV0osUUFBUUksU0FBUzt3QkFDNUJDLE1BQU1MLFFBQVFLLElBQUk7d0JBQ2xCQyxRQUFRTixRQUFRTSxNQUFNO3VCQU5qQkw7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZakI7S0FuQk1QO0FBcUJOLCtEQUFlQSxlQUFlQSxFQUFDO0FBRS9CLE1BQU1JLE9BQWtCO0lBQ3RCO1FBQ0VJLE1BQU07UUFDTkwsT0FBTztRQUNQTSxhQUNFO1FBQ0ZDLFdBQVc7WUFBQztZQUFTO1lBQWM7WUFBZ0I7WUFBVTtZQUFXO1lBQVE7U0FBTTtRQUN0RkMsTUFBTTtRQUNOQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFSixNQUFNO1FBQ05MLE9BQU87UUFDUE0sYUFDRTtRQUNGQyxXQUFXO1lBQUM7WUFBVztZQUFZO1lBQWU7U0FBZ0I7UUFDbEVDLE1BQU07UUFDTkMsUUFBUTtJQUNWO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9qZWN0cy9jb21wb25lbnRzL1Byb2plY3RDYXJkTGlzdC50c3g/ZjA2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIkAvdHlwZXMvcHJvamVjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi9Qcm9qZWN0Q2FyZFwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIkAvY29tcG9uZW50cy91aS9UaXRsZVwiO1xyXG5cclxuY29uc3QgUHJvamVjdENhcmRMaXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC02NCBtYXgtWzEwMjVweF06cHgtNCBtYXgtWzEyODVweF06cHgtNDAgbWF4LWxnOnB4LTAgbWF4LXNtOnB4LTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtNCBwYi04IFwiPlxyXG4gICAgICA8VGl0bGUgdGl0bGU9XCJQcm9qZWN0c1wiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC1jb2wgZ2FwLTQgbGc6ZmxleC1yb3cgbXQtNCBweC0zMiBtYXgtbGc6cHgtMCBtYXgtc206cHgtMiBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIG1sLTE0IG1heC1zbTptbC0wIG1heC1sZzptbC0wIG1heC1bMzUwcHhdOm1yLTUgbWF4LVszMjFweF06bXItMTBcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoKHByb2plY3Q6IFByb2plY3QsIGlkeDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICA8UHJvamVjdENhcmRcclxuICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgIGxvZ289e3Byb2plY3QubG9nb31cclxuICAgICAgICAgICAgdGl0bGU9e3Byb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICB0ZWNoU3RhY2s9e3Byb2plY3QudGVjaFN0YWNrfVxyXG4gICAgICAgICAgICBsaW5rPXtwcm9qZWN0Lmxpbmt9XHJcbiAgICAgICAgICAgIHNvdXJjZT17cHJvamVjdC5zb3VyY2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZExpc3Q7XHJcblxyXG5jb25zdCBkYXRhOiBQcm9qZWN0W10gPSBbXHJcbiAge1xyXG4gICAgbG9nbzogXCIvd2hpdGVib2FyZC5qcGdcIixcclxuICAgIHRpdGxlOiBcIk5vdGlvbiBDbG9uZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQSBmdWxsLXN0YWNrIE5vdGlvbiBjbG9uZSB3aXRoIHNlYW1sZXNzIG5vdGUtdGFraW5nLCBwYWdlIG9yZ2FuaXphdGlvbiwgYW5kIGNvbGxhYm9yYXRpdmUgZmVhdHVyZXMuIEJ1aWx0IHdpdGggTmV4dC5qcyBhbmQgVGFpbHdpbmQgQ1NTIGZvciBhIHJlc3BvbnNpdmUgZnJvbnRlbmQsIGFuZCBwb3dlcmVkIGJ5IENvbnZleCBmb3IgcmVhbC10aW1lIHVwZGF0ZXMgYW5kIENsZXJrIGZvciBzZWN1cmUgYXV0aGVudGljYXRpb24uIFRoaXMgYXBwIHN1cHBvcnRzIHJpY2gtdGV4dCBlZGl0aW5nLCB1c2VyLXNwZWNpZmljIGNvbnRlbnQgbWFuYWdlbWVudCwgYW5kIGR5bmFtaWMgcGFnZSBjcmVhdGlvbiwgcHJvdmlkaW5nIGEgcGVyc29uYWxpemVkIGFuZCBpbnR1aXRpdmUgdXNlciBleHBlcmllbmNlLlwiLFxyXG4gICAgdGVjaFN0YWNrOiBbXCJSZWFjdFwiLCBcIkphdmFTY3JpcHRcIiwgXCJUYWlsd2luZCBDU1NcIiwgXCJDb252ZXhcIiwgXCJOZXh0IGpzXCIsIFwiSFRNTFwiLCBcIkNTU1wiXSxcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9ub3Rpb24tY2xvbmUtaW90YS1vbmUudmVyY2VsLmFwcC9cIixcclxuICAgIHNvdXJjZTogXCJodHRwczovL2dpdGh1Yi5jb20vU3V5YXNoUGFybWFyL05vdGlvbi1DbG9uZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9nbzogXCIvYWlwb3J0Zm9saW8uanBnXCIsXHJcbiAgICB0aXRsZTogXCJBSSBQb3J0Zm9saW9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIk1hZGUgYSBjaGF0Ym90IGFwcGxpY2F0aW9uIHdoaWNoIGdpdmVzIGFuc3dlcnMgYWJvdXQgbXlzZWxmLiBVc2VkIFZlY3RvciBlbWJlZGRpbmdzIHRvIHN0b3JlIGN1c3RvbSBkYXRhLlwiLFxyXG4gICAgdGVjaFN0YWNrOiBbXCJOZXh0IEpTXCIsIFwiRGF0YXN0YXhcIiwgXCJUYWlsd2luZENTU1wiLCBcIkZyYW1lciBNb3Rpb25cIl0sXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vYWktcG9ydGZvbGlvLXBpLnZlcmNlbC5hcHAvXCIsXHJcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NTdXlhc2hnL2FpX3BvcnRmb2xpb1wiLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2plY3RDYXJkIiwiVGl0bGUiLCJQcm9qZWN0Q2FyZExpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRhdGEiLCJtYXAiLCJwcm9qZWN0IiwiaWR4IiwibG9nbyIsImRlc2NyaXB0aW9uIiwidGVjaFN0YWNrIiwibGluayIsInNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/projects/components/ProjectCardList.tsx\n"));

/***/ })

});