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
            className: "badge badge-pill badge-success",
            children: r.robos.filter(function (robo) {
              return robo.propio;
            }).length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 12
          }, _this), "/", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "badge badge-pill badge-danger",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJzYWxpZGEiLCJtYXAiLCJyIiwiaSIsIm5hbWUiLCJyb2JvcyIsImZpbHRlciIsInJvYm8iLCJwcm9waW8iLCJsZW5ndGgiLCJhIiwiaW5kZXgiLCJzcmMiLCJ0aXBvIiwiX19odG1sIiwiZGVzY3JpcGNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWUsU0FBU0EsS0FBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUl4QyxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUdBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDBCQUNWO0FBQWEsaUJBQVMsRUFBQyxNQUF2QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBQ0M7QUFBQSxzQkFBT0QsQ0FBQyxDQUFDRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUFNLHFCQUFTLEVBQUMsZ0NBQWhCO0FBQUEsc0JBQWtERixDQUFDLENBQUNHLEtBQUYsQ0FBUUMsTUFBUixDQUFlLFVBQUFDLElBQUk7QUFBQSxxQkFBRUEsSUFBSSxDQUFDQyxNQUFQO0FBQUEsYUFBbkIsRUFBa0NDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQsb0JBR0M7QUFBTSxxQkFBUyxFQUFDLCtCQUFoQjtBQUFBLHNCQUFpRFAsQ0FBQyxDQUFDRyxLQUFGLENBQVFDLE1BQVIsQ0FBZSxVQUFBQyxJQUFJO0FBQUEscUJBQUUsQ0FBQ0EsSUFBSSxDQUFDQyxNQUFSO0FBQUEsYUFBbkIsRUFBbUNDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDRTtBQUFJLHFCQUFTLEVBQUMsWUFBZDtBQUFBLHNCQUNHUCxDQUFDLENBQUNHLEtBQUYsQ0FBUUosR0FBUixDQUFZLFVBQUNTLENBQUQsRUFBR0MsS0FBSDtBQUFBLGtDQUNYO0FBQWdCLHlCQUFTLEVBQUMsaUJBQTFCO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLEtBQWY7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsVUFBZjtBQUFBLDJDQUNFO0FBQUsseUJBQUcsRUFBRUQsQ0FBQyxDQUFDRSxHQUFaO0FBQWlCLCtCQUFTLEVBQUMsNEJBQTNCO0FBQXdELDJCQUFLLEVBQUU7QUFBQyxxQ0FBWTtBQUFiO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBSUU7QUFDRSw2QkFBUyxFQUFFLDRCQUE0QkYsQ0FBQyxDQUFDRyxJQUQzQztBQUVFLDJDQUF1QixFQUFFO0FBQUVDLDRCQUFNLEVBQUVKLENBQUMsQ0FBQ0s7QUFBWjtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTSixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFc7QUFBQSxhQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQSxTQUFVUixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVTtBQUFBLEtBQVgsQ0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRDtLQXJDdUJKLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTZlYWJlMjJiZGEyZmYxNmQ0YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVzdGFibGVjZXJDb25leGlvbiB9IGZyb20gXCIuLi9zZXJ2ZXIvREJcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi9tb2RlbHMvcGxheWVyXCI7XHJcbmltcG9ydCBSYXRvbk1vZGVsIGZyb20gXCIuLi9tb2RlbHMvcmF0b25cIjtcclxuaW1wb3J0IHsgY29udmVydGlyRGVzY3JpcGNpb25BRmVjaGEgfSBmcm9tIFwiLi4vc2VydmVyL3V0aWxzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBzYWxpZGEgfSkge1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5ST0JPUyE8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NhbGlkYS5tYXAoKHIsIGkpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgIDxzcGFuPntyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc3VjY2Vzc1wiPntyLnJvYm9zLmZpbHRlcihyb2JvPT5yb2JvLnByb3BpbykubGVuZ3RofTwvc3Bhbj4vXHJcbiAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kYW5nZXJcIj57ci5yb2Jvcy5maWx0ZXIocm9ibz0+IXJvYm8ucHJvcGlvKS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIHtyLnJvYm9zLm1hcCgoYSxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthLnNyY30gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy10aHVtYm5haWwgc21cIiBzdHlsZT17e1wibWF4LXdpZHRoXCI6XCI0MHB4XCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjb2wtbWQtNSB0ZXh0LXdoaXRlIGJnLVwiICsgYS50aXBvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhLmRlc2NyaXBjaW9uIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgYXdhaXQgZXN0YWJsZWNlckNvbmV4aW9uKCk7XHJcbiAgY29uc3QgcmF0b25lcyA9IGF3YWl0IFJhdG9uTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gIGNvbnN0IGp1Z2Fkb3JlcyA9IGF3YWl0IFBsYXllck1vZGVsLmZpbmQoeyAkd2hlcmU6IFwidGhpcy5vd25lcnMubGVuZ3RoPjFcIiB9KTtcclxuICBsZXQgc2FsaWRhID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXRvbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgcmF0b24gPSB7IG5hbWU6IHJhdG9uZXNbaV0ubmFtZSwgcm9ib3M6IFtdIH07XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGp1Z2Fkb3Jlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICBsZXQganVnYWRvciA9IGp1Z2Fkb3Jlc1tqXTtcclxuICAgICAgbGV0IG93bmVyc0RlbFJhdG9uID0ganVnYWRvci5vd25lcnMuZmlsdGVyKFxyXG4gICAgICAgIChvKSA9PiBvLnR5cGUgPT0gXCJjbGF1c2VcIiAmJiBvLnRvID09IHJhdG9uLm5hbWVcclxuICAgICAgKTtcclxuICAgICAgbGV0IG93bmVyc0FsUmF0b24gPSBqdWdhZG9yLm93bmVycy5maWx0ZXIoXHJcbiAgICAgICAgKG8pID0+IG8udHlwZSA9PSBcImNsYXVzZVwiICYmIG8uZnJvbSA9PSByYXRvbi5uYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgb3duZXJzRGVsUmF0b24ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICByYXRvbi5yb2Jvcy5wdXNoKHtcclxuICAgICAgICAgIHNyYzogYGh0dHBzOi8vZDEuZ29taXN0ZXIuY29tL2ltZy9wbGF5ZXJzLyR7anVnYWRvci5faWR9LnBuZz8xNjEzNTc2ODA2YCxcclxuICAgICAgICAgIHRpcG86IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgcHJvcGlvOiB0cnVlLFxyXG4gICAgICAgICAgZGVzY3JpcGNpb246IGBMZSByb2JhcyAke2p1Z2Fkb3IucGxheWVyLm5hbWV9IGEgPGI+JHtvd25lcnNEZWxSYXRvbltrXS5mcm9tfTwvYj4gZWwgJHtvd25lcnNEZWxSYXRvbltrXS5kYXRlfWAsXHJcbiAgICAgICAgICBmZWNoYTogb3duZXJzRGVsUmF0b25ba10uZGF0ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG93bmVyc0FsUmF0b24ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICByYXRvbi5yb2Jvcy5wdXNoKHtcclxuICAgICAgICAgIHNyYzogYGh0dHBzOi8vZDEuZ29taXN0ZXIuY29tL2ltZy9wbGF5ZXJzLyR7anVnYWRvci5faWR9LnBuZz8xNjEzNTc2ODA2YCxcclxuICAgICAgICAgIHRpcG86IFwiZGFuZ2VyXCIsXHJcbiAgICAgICAgICBwcm9waW86ZmFsc2UsXHJcbiAgICAgICAgICBkZXNjcmlwY2lvbjogYDxiPiR7b3duZXJzQWxSYXRvbltrXS50b308L2I+IHRlIHJvYmEgYSAke2p1Z2Fkb3IucGxheWVyLm5hbWV9IGVsICR7b3duZXJzQWxSYXRvbltrXS5kYXRlfWAsXHJcbiAgICAgICAgICBmZWNoYTogb3duZXJzQWxSYXRvbltrXS5kYXRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByYXRvbi5yb2Jvcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgY29udmVydGlyRGVzY3JpcGNpb25BRmVjaGEoYS5mZWNoYSkgLVxyXG4gICAgICAgIGNvbnZlcnRpckRlc2NyaXBjaW9uQUZlY2hhKGIuZmVjaGEpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHNhbGlkYS5wdXNoKHJhdG9uKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJTQUxJREFcIiwgc2FsaWRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgc2FsaWRhIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9