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
              lineNumber: 17,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-5 text-white bg-" + a.tipo,
            dangerouslySetInnerHTML: {
              __html: a.descripcion
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this);
    });
  };

  var cambiaFiltro = function cambiaFiltro(evt) {
    console.log("cambiaFiltro", evt.target.value);
    setFiltro(evt.target.value);
  };

  var cambiaPropios = function cambiaPropios(evt) {
    setPropios(evt.target.checked);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: raton.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-success",
        children: raton.robos.filter(function (robo) {
          return robo.propio && (filtro == "Todos" || robo.from == filtro);
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), "/", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-danger",
        children: raton.robos.filter(function (robo) {
          return !robo.propio && (filtro == "Todos" || robo.to == filtro);
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "float-right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: [" ", "Propios ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                onChange: cambiaPropios
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 25
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            className: "form-control",
            onChange: cambiaFiltro,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              children: "Todos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this), owners.filter(function (o) {
              return o !== raton.name;
            }).map(function (o, i) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                children: o
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "list-group",
        children: renderRobos(raton.robos)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRvbi5qcyJdLCJuYW1lcyI6WyJSYXRvbiIsInJhdG9uIiwib3duZXJzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJwcm9waW9zIiwic2V0UHJvcGlvcyIsInJlbmRlclJvYm9zIiwicm9ib3MiLCJmaWx0ZXIiLCJyIiwidG8iLCJmcm9tIiwicHJvcGlvIiwibWFwIiwiYSIsImluZGV4Iiwic3JjIiwidGlwbyIsIl9faHRtbCIsImRlc2NyaXBjaW9uIiwiY2FtYmlhRmlsdHJvIiwiZXZ0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY2FtYmlhUHJvcGlvcyIsImNoZWNrZWQiLCJuYW1lIiwicm9ibyIsImxlbmd0aCIsIm8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ1BDLCtDQUFRLENBQUMsT0FBRCxDQUREO0FBQUEsTUFDNUJDLE1BRDRCO0FBQUEsTUFDcEJDLFNBRG9COztBQUFBLG1CQUVMRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGSDtBQUFBLE1BRTVCRyxPQUY0QjtBQUFBLE1BRW5CQyxVQUZtQjs7QUFJbkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLFdBQ2xCQSxLQUFLLENBQ0ZDLE1BREgsQ0FFSSxVQUFDQyxDQUFEO0FBQUEsYUFDRSxDQUFDUCxNQUFNLElBQUksT0FBVixJQUFxQkEsTUFBTSxJQUFJTyxDQUFDLENBQUNDLEVBQWpDLElBQXVDUixNQUFNLElBQUlPLENBQUMsQ0FBQ0UsSUFBcEQsTUFDQyxDQUFDUCxPQUFELElBQVlLLENBQUMsQ0FBQ0csTUFEZixDQURGO0FBQUEsS0FGSixF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TSxDQUNKUSxNQURGLENBQ1MsVUFBQ3VCLENBQUQ7QUFBQSxxQkFBT0EsQ0FBQyxLQUFLaEMsS0FBSyxDQUFDNkIsSUFBbkI7QUFBQSxhQURULEVBRUVmLEdBRkYsQ0FFTSxVQUFDa0IsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsa0NBQ0g7QUFBQSwwQkFBaUJEO0FBQWpCLGlCQUFhQyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREc7QUFBQSxhQUZOLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF1Q0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsa0JBQTRCMUIsV0FBVyxDQUFDUCxLQUFLLENBQUNRLEtBQVA7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2Q0QsQ0FuRkQ7O0dBQU1ULEs7O0tBQUFBLEs7QUFxRk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzIwNDFhNWRmYmQzNGY2YjYyNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFJhdG9uID0gKHsgcmF0b24sIG93bmVycyB9KSA9PiB7XHJcbiAgY29uc3QgW2ZpbHRybywgc2V0RmlsdHJvXSA9IHVzZVN0YXRlKFwiVG9kb3NcIik7XHJcbiAgY29uc3QgW3Byb3Bpb3MsIHNldFByb3Bpb3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByZW5kZXJSb2JvcyA9IChyb2JvcykgPT5cclxuICAgIHJvYm9zXHJcbiAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgKHIpID0+XHJcbiAgICAgICAgICAoZmlsdHJvID09IFwiVG9kb3NcIiB8fCBmaWx0cm8gPT0gci50byB8fCBmaWx0cm8gPT0gci5mcm9tKSAmJlxyXG4gICAgICAgICAgKCFwcm9waW9zIHx8IHIucHJvcGlvKVxyXG4gICAgICApXHJcbiAgICAgIC5tYXAoKGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMVwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YS5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXRodW1ibmFpbCBzbVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBcIm1heC13aWR0aFwiOiBcIjQwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNvbC1tZC01IHRleHQtd2hpdGUgYmctXCIgKyBhLnRpcG99XHJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhLmRlc2NyaXBjaW9uIH19XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpO1xyXG5cclxuICBjb25zdCBjYW1iaWFGaWx0cm8gPSAoZXZ0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbWJpYUZpbHRyb1wiLCBldnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldEZpbHRybyhldnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYW1iaWFQcm9waW9zID0gKGV2dCkgPT4ge1xyXG4gICAgc2V0UHJvcGlvcyhldnQudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgIDxzcGFuPntyYXRvbi5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmF0b24ucm9ib3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChyb2JvKSA9PlxyXG4gICAgICAgICAgICAgICAgcm9iby5wcm9waW8gJiYgKGZpbHRybyA9PSBcIlRvZG9zXCIgfHwgcm9iby5mcm9tID09IGZpbHRybylcclxuICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgL1xyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGFuZ2VyXCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJhdG9uLnJvYm9zLmZpbHRlcihcclxuICAgICAgICAgICAgICAocm9ibykgPT4gIXJvYm8ucHJvcGlvICYmIChmaWx0cm8gPT0gXCJUb2Rvc1wiIHx8IHJvYm8udG8gPT0gZmlsdHJvKVxyXG4gICAgICAgICAgICApLmxlbmd0aFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBQcm9waW9zIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17Y2FtYmlhUHJvcGlvc30gLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2NhbWJpYUZpbHRyb30+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5Ub2Rvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtvd25lcnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG8pID0+IG8gIT09IHJhdG9uLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAubWFwKChvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfT57b308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPntyZW5kZXJSb2JvcyhyYXRvbi5yb2Jvcyl9PC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=