self["webpackHotUpdate_N_E"]("pages/index",{

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
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "F:\\2021\\Chorradas\\cheetanoscore\\pages\\index.js";
var __N_SSG = true;
function Index(_ref) {
  var _this = this;

  var salida = _ref.salida;
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
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: r.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 12
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "badge badge-pill badge-danger",
            children: [r.robos.filter(function (robo) {
              return robo.propio;
            }).length, " /"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 12
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "badge badge-danger",
            children: r.robos.filter(function (robo) {
              return !robo.propio;
            }).length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 12
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "list-group",
            children: r.robos.map(function (a, index) {
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
                      lineNumber: 29,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "col-md-5 text-white bg-" + a.tipo,
                    dangerouslySetInnerHTML: {
                      __html: a.descripcion
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, _this)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)]
      }, i, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJzYWxpZGEiLCJtYXAiLCJyIiwiaSIsIm5hbWUiLCJyb2JvcyIsImZpbHRlciIsInJvYm8iLCJwcm9waW8iLCJsZW5ndGgiLCJhIiwiaW5kZXgiLCJzcmMiLCJ0aXBvIiwiX19odG1sIiwiZGVzY3JpcGNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWUsU0FBU0EsS0FBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUl4QyxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUdBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDBCQUNWO0FBQWEsaUJBQVMsRUFBQyxNQUF2QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBQ0M7QUFBQSxzQkFBT0QsQ0FBQyxDQUFDRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUFNLHFCQUFTLEVBQUMsK0JBQWhCO0FBQUEsdUJBQWlERixDQUFDLENBQUNHLEtBQUYsQ0FBUUMsTUFBUixDQUFlLFVBQUFDLElBQUk7QUFBQSxxQkFBRUEsSUFBSSxDQUFDQyxNQUFQO0FBQUEsYUFBbkIsRUFBa0NDLE1BQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUdDO0FBQU0scUJBQVMsRUFBQyxvQkFBaEI7QUFBQSxzQkFBc0NQLENBQUMsQ0FBQ0csS0FBRixDQUFRQyxNQUFSLENBQWUsVUFBQUMsSUFBSTtBQUFBLHFCQUFFLENBQUNBLElBQUksQ0FBQ0MsTUFBUjtBQUFBLGFBQW5CLEVBQW1DQztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0U7QUFBSSxxQkFBUyxFQUFDLFlBQWQ7QUFBQSxzQkFDR1AsQ0FBQyxDQUFDRyxLQUFGLENBQVFKLEdBQVIsQ0FBWSxVQUFDUyxDQUFELEVBQUdDLEtBQUg7QUFBQSxrQ0FDWDtBQUFnQix5QkFBUyxFQUFDLGlCQUExQjtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQyxLQUFmO0FBQUEsMENBQ0U7QUFBSyw2QkFBUyxFQUFDLFVBQWY7QUFBQSwyQ0FDRTtBQUFLLHlCQUFHLEVBQUVELENBQUMsQ0FBQ0UsR0FBWjtBQUFpQiwrQkFBUyxFQUFDLDRCQUEzQjtBQUF3RCwyQkFBSyxFQUFFO0FBQUMscUNBQVk7QUFBYjtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUlFO0FBQ0UsNkJBQVMsRUFBRSw0QkFBNEJGLENBQUMsQ0FBQ0csSUFEM0M7QUFFRSwyQ0FBdUIsRUFBRTtBQUFFQyw0QkFBTSxFQUFFSixDQUFDLENBQUNLO0FBQVo7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBU0osS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURXO0FBQUEsYUFBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUEsU0FBVVIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFU7QUFBQSxLQUFYLENBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7S0FyQ3VCSixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIwOTMzMzllZTY4NmVhYmY5ODAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlc3RhYmxlY2VyQ29uZXhpb24gfSBmcm9tIFwiLi4vc2VydmVyL0RCXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3BsYXllclwiO1xyXG5pbXBvcnQgUmF0b25Nb2RlbCBmcm9tIFwiLi4vbW9kZWxzL3JhdG9uXCI7XHJcbmltcG9ydCB7IGNvbnZlcnRpckRlc2NyaXBjaW9uQUZlY2hhIH0gZnJvbSBcIi4uL3NlcnZlci91dGlsc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgc2FsaWRhIH0pIHtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+Uk9CT1MhPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzYWxpZGEubWFwKChyLCBpKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICA8c3Bhbj57ci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRhbmdlclwiPntyLnJvYm9zLmZpbHRlcihyb2JvPT5yb2JvLnByb3BpbykubGVuZ3RofSAvPC9zcGFuPlxyXG4gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntyLnJvYm9zLmZpbHRlcihyb2JvPT4hcm9iby5wcm9waW8pLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAge3Iucm9ib3MubWFwKChhLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Euc3JjfSBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXRodW1ibmFpbCBzbVwiIHN0eWxlPXt7XCJtYXgtd2lkdGhcIjpcIjQwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNvbC1tZC01IHRleHQtd2hpdGUgYmctXCIgKyBhLnRpcG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGEuZGVzY3JpcGNpb24gfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBhd2FpdCBlc3RhYmxlY2VyQ29uZXhpb24oKTtcclxuICBjb25zdCByYXRvbmVzID0gYXdhaXQgUmF0b25Nb2RlbC5maW5kKHt9KS5sZWFuKCk7XHJcbiAgY29uc3QganVnYWRvcmVzID0gYXdhaXQgUGxheWVyTW9kZWwuZmluZCh7ICR3aGVyZTogXCJ0aGlzLm93bmVycy5sZW5ndGg+MVwiIH0pO1xyXG4gIGxldCBzYWxpZGEgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhdG9uZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCByYXRvbiA9IHsgbmFtZTogcmF0b25lc1tpXS5uYW1lLCByb2JvczogW10gfTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwganVnYWRvcmVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGxldCBqdWdhZG9yID0ganVnYWRvcmVzW2pdO1xyXG4gICAgICBsZXQgb3duZXJzRGVsUmF0b24gPSBqdWdhZG9yLm93bmVycy5maWx0ZXIoXHJcbiAgICAgICAgKG8pID0+IG8udHlwZSA9PSBcImNsYXVzZVwiICYmIG8udG8gPT0gcmF0b24ubmFtZVxyXG4gICAgICApO1xyXG4gICAgICBsZXQgb3duZXJzQWxSYXRvbiA9IGp1Z2Fkb3Iub3duZXJzLmZpbHRlcihcclxuICAgICAgICAobykgPT4gby50eXBlID09IFwiY2xhdXNlXCIgJiYgby5mcm9tID09IHJhdG9uLm5hbWVcclxuICAgICAgKTtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBvd25lcnNEZWxSYXRvbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHJhdG9uLnJvYm9zLnB1c2goe1xyXG4gICAgICAgICAgc3JjOiBgaHR0cHM6Ly9kMS5nb21pc3Rlci5jb20vaW1nL3BsYXllcnMvJHtqdWdhZG9yLl9pZH0ucG5nPzE2MTM1NzY4MDZgLFxyXG4gICAgICAgICAgdGlwbzogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICBwcm9waW86IHRydWUsXHJcbiAgICAgICAgICBkZXNjcmlwY2lvbjogYExlIHJvYmFzICR7anVnYWRvci5wbGF5ZXIubmFtZX0gYSA8Yj4ke293bmVyc0RlbFJhdG9uW2tdLmZyb219PC9iPiBlbCAke293bmVyc0RlbFJhdG9uW2tdLmRhdGV9YCxcclxuICAgICAgICAgIGZlY2hhOiBvd25lcnNEZWxSYXRvbltrXS5kYXRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgb3duZXJzQWxSYXRvbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHJhdG9uLnJvYm9zLnB1c2goe1xyXG4gICAgICAgICAgc3JjOiBgaHR0cHM6Ly9kMS5nb21pc3Rlci5jb20vaW1nL3BsYXllcnMvJHtqdWdhZG9yLl9pZH0ucG5nPzE2MTM1NzY4MDZgLFxyXG4gICAgICAgICAgdGlwbzogXCJkYW5nZXJcIixcclxuICAgICAgICAgIHByb3BpbzpmYWxzZSxcclxuICAgICAgICAgIGRlc2NyaXBjaW9uOiBgPGI+JHtvd25lcnNBbFJhdG9uW2tdLnRvfTwvYj4gdGUgcm9iYSBhICR7anVnYWRvci5wbGF5ZXIubmFtZX0gZWwgJHtvd25lcnNBbFJhdG9uW2tdLmRhdGV9YCxcclxuICAgICAgICAgIGZlY2hhOiBvd25lcnNBbFJhdG9uW2tdLmRhdGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJhdG9uLnJvYm9zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBjb252ZXJ0aXJEZXNjcmlwY2lvbkFGZWNoYShhLmZlY2hhKSAtXHJcbiAgICAgICAgY29udmVydGlyRGVzY3JpcGNpb25BRmVjaGEoYi5mZWNoYSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgc2FsaWRhLnB1c2gocmF0b24pO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcIlNBTElEQVwiLCBzYWxpZGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBzYWxpZGEgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=