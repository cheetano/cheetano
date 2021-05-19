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
  var raton = _ref.raton,
      owners = _ref.owners;
  var to = "Shark";

  var renderRobos = function renderRobos(robos) {
    return robos.filter(function (r) {
      return to == null || to == r.to || to == r.from;
    }).map(function (a, index) {
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
              lineNumber: 10,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-5 text-white bg-" + a.tipo,
            dangerouslySetInnerHTML: {
              __html: a.descripcion
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 15
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, _this);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: raton.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 12
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-success",
        children: raton.robos.filter(function (robo) {
          return robo.propio;
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 12
      }, _this), "/", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-danger",
        children: raton.robos.filter(function (robo) {
          return !robo.propio;
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "list-group",
        children: renderRobos(raton.robos, to)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRvbi5qcyJdLCJuYW1lcyI6WyJSYXRvbiIsInJhdG9uIiwib3duZXJzIiwidG8iLCJyZW5kZXJSb2JvcyIsInJvYm9zIiwiZmlsdGVyIiwiciIsImZyb20iLCJtYXAiLCJhIiwiaW5kZXgiLCJzcmMiLCJ0aXBvIiwiX19odG1sIiwiZGVzY3JpcGNpb24iLCJuYW1lIiwicm9ibyIsInByb3BpbyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBcUI7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBRS9CLE1BQUlDLEVBQUUsR0FBRyxPQUFUOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxXQUNoQkEsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQUMsQ0FBQztBQUFBLGFBQUdKLEVBQUUsSUFBSSxJQUFOLElBQWVBLEVBQUUsSUFBSUksQ0FBQyxDQUFDSixFQUFSLElBQWNBLEVBQUUsSUFBSUksQ0FBQyxDQUFDQyxJQUF4QztBQUFBLEtBQWQsRUFBOERDLEdBQTlELENBQWtFLFVBQUNDLENBQUQsRUFBR0MsS0FBSDtBQUFBLDBCQUM5RDtBQUFnQixpQkFBUyxFQUFDLGlCQUExQjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVELENBQUMsQ0FBQ0UsR0FBWjtBQUFpQix1QkFBUyxFQUFDLDRCQUEzQjtBQUF3RCxtQkFBSyxFQUFFO0FBQUMsNkJBQVk7QUFBYjtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQ0UscUJBQVMsRUFBRSw0QkFBNEJGLENBQUMsQ0FBQ0csSUFEM0M7QUFFRSxtQ0FBdUIsRUFBRTtBQUFFQyxvQkFBTSxFQUFFSixDQUFDLENBQUNLO0FBQVo7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFTSixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEOEQ7QUFBQSxLQUFsRSxDQURnQjtBQUFBLEdBQXBCOztBQWdCQSxzQkFDQTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ007QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNDO0FBQUEsa0JBQU9WLEtBQUssQ0FBQ2U7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUFNLGlCQUFTLEVBQUMsZ0NBQWhCO0FBQUEsa0JBQWtEZixLQUFLLENBQUNJLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixVQUFBVyxJQUFJO0FBQUEsaUJBQUVBLElBQUksQ0FBQ0MsTUFBUDtBQUFBLFNBQXZCLEVBQXNDQztBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQsb0JBR0M7QUFBTSxpQkFBUyxFQUFDLCtCQUFoQjtBQUFBLGtCQUFpRGxCLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxNQUFaLENBQW1CLFVBQUFXLElBQUk7QUFBQSxpQkFBRSxDQUFDQSxJQUFJLENBQUNDLE1BQVI7QUFBQSxTQUF2QixFQUF1Q0M7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUROLGVBTU07QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsa0JBQ0dmLFdBQVcsQ0FBQ0gsS0FBSyxDQUFDSSxLQUFQLEVBQWNGLEVBQWQ7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBY0gsQ0FsQ0Q7O0tBQU1ILEs7QUFvQ04sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWU3MGE1ZDA1MTRhOGM3ZmE0ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJhdG9uID0gKHtyYXRvbiwgb3duZXJzfSkgPT4ge1xyXG5cclxuICAgIGxldCB0byA9IFwiU2hhcmtcIjtcclxuXHJcbiAgICBjb25zdCByZW5kZXJSb2JvcyA9IChyb2JvcykgPT4gKFxyXG4gICAgICAgIHJvYm9zLmZpbHRlcihyPT4gdG8gPT0gbnVsbCB8fCAodG8gPT0gci50byB8fCB0byA9PSByLmZyb20pICkubWFwKChhLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YS5zcmN9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctdGh1bWJuYWlsIHNtXCIgc3R5bGU9e3tcIm1heC13aWR0aFwiOlwiNDBweFwifX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY29sLW1kLTUgdGV4dC13aGl0ZSBiZy1cIiArIGEudGlwb31cclxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhLmRlc2NyaXBjaW9uIH19XHJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICA8c3Bhbj57cmF0b24ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1zdWNjZXNzXCI+e3JhdG9uLnJvYm9zLmZpbHRlcihyb2JvPT5yb2JvLnByb3BpbykubGVuZ3RofTwvc3Bhbj4vXHJcbiAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kYW5nZXJcIj57cmF0b24ucm9ib3MuZmlsdGVyKHJvYm89PiFyb2JvLnByb3BpbykubGVuZ3RofTwvc3Bhbj4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJSb2JvcyhyYXRvbi5yb2JvcywgdG8pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdG9uOyJdLCJzb3VyY2VSb290IjoiIn0=