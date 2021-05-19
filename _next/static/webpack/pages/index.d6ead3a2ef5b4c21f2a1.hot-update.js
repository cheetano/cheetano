self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Raton.js":
/*!*****************************!*\
  !*** ./components/Raton.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\2021\\Chorradas\\cheetanoscore\\components\\Raton.js",
    _this = undefined;

var Raton = function Raton(_ref) {
  var raton = _ref.raton;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: raton.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 12
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-success",
        children: raton.robos.filter(function (robo) {
          return robo.propio;
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }, _this), "/", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-danger",
        children: raton.robos.filter(function (robo) {
          return !robo.propio;
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "list-group",
        children: raton.robos.map(function (a, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "list-group-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-md-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: a.src,
                  className: "img-fluid img-thumbnail sm",
                  style: {
                    "max-width": "40px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-md-5 text-white bg-" + a.tipo,
                dangerouslySetInnerHTML: {
                  __html: a.descripcion
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 19
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = Raton;
/* harmony default export */ __webpack_exports__["default"] = (Raton);

var _c;

$RefreshReg$(_c, "Raton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Raton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Raton */ "./components/Raton.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "F:\\2021\\Chorradas\\cheetanoscore\\pages\\index.js";

var __N_SSG = true;
function Index(_ref) {
  var _this = this;

  var salida = _ref.salida;
  var owners = salida.map(function (r) {
    return r.name;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jumbotron",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "display-4",
        children: "ROBOS!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), salida.map(function (r, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Raton__WEBPACK_IMPORTED_MODULE_1__.default, {
        raton: r
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = Index;

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUmF0b24iLCJyYXRvbiIsIm5hbWUiLCJyb2JvcyIsImZpbHRlciIsInJvYm8iLCJwcm9waW8iLCJsZW5ndGgiLCJtYXAiLCJhIiwiaW5kZXgiLCJzcmMiLCJ0aXBvIiwiX19odG1sIiwiZGVzY3JpcGNpb24iLCJJbmRleCIsInNhbGlkYSIsIm93bmVycyIsInIiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFhO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBRXZCLHNCQUNBO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDTTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0M7QUFBQSxrQkFBT0EsS0FBSyxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQU0saUJBQVMsRUFBQyxnQ0FBaEI7QUFBQSxrQkFBa0RELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CLFVBQUFDLElBQUk7QUFBQSxpQkFBRUEsSUFBSSxDQUFDQyxNQUFQO0FBQUEsU0FBdkIsRUFBc0NDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRCxvQkFHQztBQUFNLGlCQUFTLEVBQUMsK0JBQWhCO0FBQUEsa0JBQWlETixLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixVQUFBQyxJQUFJO0FBQUEsaUJBQUUsQ0FBQ0EsSUFBSSxDQUFDQyxNQUFSO0FBQUEsU0FBdkIsRUFBdUNDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETixlQU1NO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGtCQUNHTixLQUFLLENBQUNFLEtBQU4sQ0FBWUssR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQUdDLEtBQUg7QUFBQSw4QkFDZjtBQUFnQixxQkFBUyxFQUFDLGlCQUExQjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxLQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLFVBQWY7QUFBQSx1Q0FDRTtBQUFLLHFCQUFHLEVBQUVELENBQUMsQ0FBQ0UsR0FBWjtBQUFpQiwyQkFBUyxFQUFDLDRCQUEzQjtBQUF3RCx1QkFBSyxFQUFFO0FBQUMsaUNBQVk7QUFBYjtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQ0UseUJBQVMsRUFBRSw0QkFBNEJGLENBQUMsQ0FBQ0csSUFEM0M7QUFFRSx1Q0FBdUIsRUFBRTtBQUFFQyx3QkFBTSxFQUFFSixDQUFDLENBQUNLO0FBQVo7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFTSixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREE7QUEwQkgsQ0E1QkQ7O0tBQU1WLEs7QUE4Qk4sK0RBQWVBLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7O0FBRWUsU0FBU2UsS0FBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUV4QyxNQUFNQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ1IsR0FBUCxDQUFXLFVBQUFVLENBQUM7QUFBQSxXQUFFQSxDQUFDLENBQUNoQixJQUFKO0FBQUEsR0FBWixDQUFmO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlHYyxNQUFNLENBQUNSLEdBQVAsQ0FBVyxVQUFDVSxDQUFELEVBQUlDLENBQUo7QUFBQSwwQkFDViw4REFBQyxzREFBRDtBQUFlLGFBQUssRUFBRUQ7QUFBdEIsU0FBWUMsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFU7QUFBQSxLQUFYLENBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDtLQWR1QkosSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNmVhZDNhMmVmNWI0YzIxZjJhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmF0b24gPSAoe3JhdG9ufSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICA8c3Bhbj57cmF0b24ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1zdWNjZXNzXCI+e3JhdG9uLnJvYm9zLmZpbHRlcihyb2JvPT5yb2JvLnByb3BpbykubGVuZ3RofTwvc3Bhbj4vXHJcbiAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kYW5nZXJcIj57cmF0b24ucm9ib3MuZmlsdGVyKHJvYm89PiFyb2JvLnByb3BpbykubGVuZ3RofTwvc3Bhbj4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIHtyYXRvbi5yb2Jvcy5tYXAoKGEsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YS5zcmN9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctdGh1bWJuYWlsIHNtXCIgc3R5bGU9e3tcIm1heC13aWR0aFwiOlwiNDBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY29sLW1kLTUgdGV4dC13aGl0ZSBiZy1cIiArIGEudGlwb31cclxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYS5kZXNjcmlwY2lvbiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdG9uOyIsImltcG9ydCB7IGVzdGFibGVjZXJDb25leGlvbiB9IGZyb20gXCIuLi9zZXJ2ZXIvREJcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi9tb2RlbHMvcGxheWVyXCI7XHJcbmltcG9ydCBSYXRvbk1vZGVsIGZyb20gXCIuLi9tb2RlbHMvcmF0b25cIjtcclxuaW1wb3J0IHsgY29udmVydGlyRGVzY3JpcGNpb25BRmVjaGEgfSBmcm9tIFwiLi4vc2VydmVyL3V0aWxzXCI7XHJcbmltcG9ydCBSYXRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9SYXRvblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IHNhbGlkYSB9KSB7XHJcblxyXG4gIGNvbnN0IG93bmVycyA9IHNhbGlkYS5tYXAocj0+ci5uYW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPlJPQk9TITwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2FsaWRhLm1hcCgociwgaSkgPT4gKFxyXG4gICAgICAgIDxSYXRvbiBrZXk9e2l9IHJhdG9uPXtyfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBhd2FpdCBlc3RhYmxlY2VyQ29uZXhpb24oKTtcclxuICBjb25zdCByYXRvbmVzID0gYXdhaXQgUmF0b25Nb2RlbC5maW5kKHt9KS5sZWFuKCk7XHJcbiAgY29uc3QganVnYWRvcmVzID0gYXdhaXQgUGxheWVyTW9kZWwuZmluZCh7ICR3aGVyZTogXCJ0aGlzLm93bmVycy5sZW5ndGg+MVwiIH0pO1xyXG4gIGxldCBzYWxpZGEgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhdG9uZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCByYXRvbiA9IHsgbmFtZTogcmF0b25lc1tpXS5uYW1lLCByb2JvczogW10gfTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwganVnYWRvcmVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGxldCBqdWdhZG9yID0ganVnYWRvcmVzW2pdO1xyXG4gICAgICBsZXQgb3duZXJzRGVsUmF0b24gPSBqdWdhZG9yLm93bmVycy5maWx0ZXIoXHJcbiAgICAgICAgKG8pID0+IG8udHlwZSA9PSBcImNsYXVzZVwiICYmIG8udG8gPT0gcmF0b24ubmFtZVxyXG4gICAgICApO1xyXG4gICAgICBsZXQgb3duZXJzQWxSYXRvbiA9IGp1Z2Fkb3Iub3duZXJzLmZpbHRlcihcclxuICAgICAgICAobykgPT4gby50eXBlID09IFwiY2xhdXNlXCIgJiYgby5mcm9tID09IHJhdG9uLm5hbWVcclxuICAgICAgKTtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBvd25lcnNEZWxSYXRvbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHJhdG9uLnJvYm9zLnB1c2goe1xyXG4gICAgICAgICAgc3JjOiBgaHR0cHM6Ly9kMS5nb21pc3Rlci5jb20vaW1nL3BsYXllcnMvJHtqdWdhZG9yLl9pZH0ucG5nPzE2MTM1NzY4MDZgLFxyXG4gICAgICAgICAgdGlwbzogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICBwcm9waW86IHRydWUsXHJcbiAgICAgICAgICBkZXNjcmlwY2lvbjogYExlIHJvYmFzICR7anVnYWRvci5wbGF5ZXIubmFtZX0gYSA8Yj4ke293bmVyc0RlbFJhdG9uW2tdLmZyb219PC9iPiBlbCAke293bmVyc0RlbFJhdG9uW2tdLmRhdGV9YCxcclxuICAgICAgICAgIGZlY2hhOiBvd25lcnNEZWxSYXRvbltrXS5kYXRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgb3duZXJzQWxSYXRvbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHJhdG9uLnJvYm9zLnB1c2goe1xyXG4gICAgICAgICAgc3JjOiBgaHR0cHM6Ly9kMS5nb21pc3Rlci5jb20vaW1nL3BsYXllcnMvJHtqdWdhZG9yLl9pZH0ucG5nPzE2MTM1NzY4MDZgLFxyXG4gICAgICAgICAgdGlwbzogXCJkYW5nZXJcIixcclxuICAgICAgICAgIHByb3BpbzpmYWxzZSxcclxuICAgICAgICAgIGRlc2NyaXBjaW9uOiBgPGI+JHtvd25lcnNBbFJhdG9uW2tdLnRvfTwvYj4gdGUgcm9iYSBhICR7anVnYWRvci5wbGF5ZXIubmFtZX0gZWwgJHtvd25lcnNBbFJhdG9uW2tdLmRhdGV9YCxcclxuICAgICAgICAgIGZlY2hhOiBvd25lcnNBbFJhdG9uW2tdLmRhdGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJhdG9uLnJvYm9zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBjb252ZXJ0aXJEZXNjcmlwY2lvbkFGZWNoYShhLmZlY2hhKSAtXHJcbiAgICAgICAgY29udmVydGlyRGVzY3JpcGNpb25BRmVjaGEoYi5mZWNoYSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgc2FsaWRhLnB1c2gocmF0b24pO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcIlNBTElEQVwiLCBzYWxpZGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBzYWxpZGEgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=