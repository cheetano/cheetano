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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\2021\\Chorradas\\cheetanoscore\\components\\Raton.js",
    _this = undefined,
    _s = $RefreshSig$();



var Raton = function Raton(_ref) {
  _s();

  var raton = _ref.raton,
      owners = _ref.owners;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Todos"),
      filtro = _useState[0],
      setFiltro = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      propios = _useState2[0],
      setPropios = _useState2[1];

  var renderRobos = function renderRobos(robos) {
    return robos.filter(function (r) {
      return (filtro == "Todos" || filtro == r.to || filtro == r.from) && (!propios || r.propio);
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
              lineNumber: 13,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-5 text-white bg-" + a.tipo,
            dangerouslySetInnerHTML: {
              __html: a.descripcion
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this);
    });
  };

  var cambiaFiltro = function cambiaFiltro(evt) {
    console.log("cambiaFiltro", evt.target.value);
    setFiltro(evt.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: raton.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-success",
        children: raton.robos.filter(function (robo) {
          return robo.propio && (filtro == "Todos" || robo.from == filtro);
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, _this), "/", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-danger",
        children: raton.robos.filter(function (robo) {
          return !robo.propio && (filtro == "Todos" || robo.to == filtro);
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "float-right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          className: "form-control",
          onChange: cambiaFiltro,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            children: "Todos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, _this), owners.filter(function (o) {
            return o !== raton.name;
          }).map(function (o, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              children: o
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 19
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "list-group",
        children: renderRobos(raton.robos)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(Raton, "nN3/jUKarTTbHc4amLCXebnKXeQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRvbi5qcyJdLCJuYW1lcyI6WyJSYXRvbiIsInJhdG9uIiwib3duZXJzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJwcm9waW9zIiwic2V0UHJvcGlvcyIsInJlbmRlclJvYm9zIiwicm9ib3MiLCJmaWx0ZXIiLCJyIiwidG8iLCJmcm9tIiwicHJvcGlvIiwibWFwIiwiYSIsImluZGV4Iiwic3JjIiwidGlwbyIsIl9faHRtbCIsImRlc2NyaXBjaW9uIiwiY2FtYmlhRmlsdHJvIiwiZXZ0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInJvYm8iLCJsZW5ndGgiLCJvIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNQQywrQ0FBUSxDQUFDLE9BQUQsQ0FERDtBQUFBLE1BQzVCQyxNQUQ0QjtBQUFBLE1BQ3BCQyxTQURvQjs7QUFBQSxtQkFFTEYsK0NBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUU1QkcsT0FGNEI7QUFBQSxNQUVuQkMsVUFGbUI7O0FBSW5DLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxXQUNsQkEsS0FBSyxDQUNGQyxNQURILENBQ1UsVUFBQ0MsQ0FBRDtBQUFBLGFBQU8sQ0FBQ1AsTUFBTSxJQUFJLE9BQVYsSUFBcUJBLE1BQU0sSUFBSU8sQ0FBQyxDQUFDQyxFQUFqQyxJQUF1Q1IsTUFBTSxJQUFJTyxDQUFDLENBQUNFLElBQXBELE1BQStELENBQUNQLE9BQUQsSUFBWUssQ0FBQyxDQUFDRyxNQUE3RSxDQUFQO0FBQUEsS0FEVixFQUVHQyxHQUZILENBRU8sVUFBQ0MsQ0FB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QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1Q0QsQ0FyRUQ7O0dBQU1ULEs7O0tBQUFBLEs7QUF1RU4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjNkNjc0NzFhMDYxMjM1OTc3OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFJhdG9uID0gKHsgcmF0b24sIG93bmVycyB9KSA9PiB7XHJcbiAgY29uc3QgW2ZpbHRybywgc2V0RmlsdHJvXSA9IHVzZVN0YXRlKFwiVG9kb3NcIik7XHJcbiAgY29uc3QgW3Byb3Bpb3MsIHNldFByb3Bpb3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByZW5kZXJSb2JvcyA9IChyb2JvcykgPT5cclxuICAgIHJvYm9zXHJcbiAgICAgIC5maWx0ZXIoKHIpID0+IChmaWx0cm8gPT0gXCJUb2Rvc1wiIHx8IGZpbHRybyA9PSByLnRvIHx8IGZpbHRybyA9PSByLmZyb20pICYmICggIXByb3Bpb3MgfHwgci5wcm9waW8pIClcclxuICAgICAgLm1hcCgoYSwgaW5kZXgpID0+IChcclxuICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthLnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctdGh1bWJuYWlsIHNtXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwibWF4LXdpZHRoXCI6IFwiNDBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY29sLW1kLTUgdGV4dC13aGl0ZSBiZy1cIiArIGEudGlwb31cclxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGEuZGVzY3JpcGNpb24gfX1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSk7XHJcblxyXG4gIGNvbnN0IGNhbWJpYUZpbHRybyA9IChldnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FtYmlhRmlsdHJvXCIsIGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0RmlsdHJvKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgIDxzcGFuPntyYXRvbi5uYW1lfTwvc3Bhbj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmF0b24ucm9ib3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHJvYm8pID0+XHJcbiAgICAgICAgICAgICAgICAgIHJvYm8ucHJvcGlvICYmIChmaWx0cm8gPT0gXCJUb2Rvc1wiIHx8IHJvYm8uZnJvbSA9PSBmaWx0cm8pXHJcbiAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgL1xyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kYW5nZXJcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJhdG9uLnJvYm9zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChyb2JvKSA9PlxyXG4gICAgICAgICAgICAgICAgICAhcm9iby5wcm9waW8gJiYgKGZpbHRybyA9PSBcIlRvZG9zXCIgfHwgcm9iby50byA9PSBmaWx0cm8pXHJcbiAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zcGFuPiAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2NhbWJpYUZpbHRyb30+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5Ub2Rvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtvd25lcnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG8pID0+IG8gIT09IHJhdG9uLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAubWFwKChvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfT57b308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPntyZW5kZXJSb2JvcyhyYXRvbi5yb2Jvcyl9PC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=