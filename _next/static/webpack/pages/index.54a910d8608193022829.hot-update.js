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

  var renderRobos = function renderRobos(robos) {
    return robos.filter(function (r) {
      return filtro == "Todos" || filtro == r.to || filtro == r.from;
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
              lineNumber: 12,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-5 text-white bg-" + a.tipo,
            dangerouslySetInnerHTML: {
              __html: a.descripcion
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
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
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-success",
        children: raton.robos.filter(function (robo) {
          return robo.propio && (filtro == "Todos" || robo.from == filtro);
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, _this), "/", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-danger",
        children: raton.robos.filter(function (robo) {
          return !robo.propio && (filtro == "Todos" || robo.to == filtro);
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
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
            lineNumber: 56,
            columnNumber: 15
          }, _this), owners.filter(function (o) {
            return o !== raton.name;
          }).map(function (o, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              children: o
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 19
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "list-group",
        children: renderRobos(raton.robos)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(Raton, "8pnD2/LZ/DgrgEzxOPDBm0IRcJQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRvbi5qcyJdLCJuYW1lcyI6WyJSYXRvbiIsInJhdG9uIiwib3duZXJzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJyZW5kZXJSb2JvcyIsInJvYm9zIiwiZmlsdGVyIiwiciIsInRvIiwiZnJvbSIsIm1hcCIsImEiLCJpbmRleCIsInNyYyIsInRpcG8iLCJfX2h0bWwiLCJkZXNjcmlwY2lvbiIsImNhbWJpYUZpbHRybyIsImV2dCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJyb2JvIiwicHJvcGlvIiwibGVuZ3RoIiwibyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDUEMsK0NBQVEsQ0FBQyxPQUFELENBREQ7QUFBQSxNQUM1QkMsTUFENEI7QUFBQSxNQUNwQkMsU0FEb0I7O0FBR25DLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxXQUNsQkEsS0FBSyxDQUNGQyxNQURILENBQ1UsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9MLE1BQU0sSUFBSSxPQUFWLElBQXFCQSxNQUFNLElBQUlLLENBQUMsQ0FBQ0MsRUFBakMsSUFBdUNOLE1BQU0sSUFBSUssQ0FBQyxDQUFDRSxJQUExRDtBQUFBLEtBRFYsRUFFR0MsR0FGSCxDQUVPLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLDBCQUNIO0FBQWdCLGlCQUFTLEVBQUMsaUJBQTFCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG1DQUNFO0FBQ0UsaUJBQUcsRUFBRUQsQ0FB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L2luZGV4LjU0YTkxMGQ4NjA4MTkzMDIyODI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBSYXRvbiA9ICh7IHJhdG9uLCBvd25lcnMgfSkgPT4ge1xyXG4gIGNvbnN0IFtmaWx0cm8sIHNldEZpbHRyb10gPSB1c2VTdGF0ZShcIlRvZG9zXCIpO1xyXG5cclxuICBjb25zdCByZW5kZXJSb2JvcyA9IChyb2JvcykgPT5cclxuICAgIHJvYm9zXHJcbiAgICAgIC5maWx0ZXIoKHIpID0+IGZpbHRybyA9PSBcIlRvZG9zXCIgfHwgZmlsdHJvID09IHIudG8gfHwgZmlsdHJvID09IHIuZnJvbSlcclxuICAgICAgLm1hcCgoYSwgaW5kZXgpID0+IChcclxuICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthLnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctdGh1bWJuYWlsIHNtXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwibWF4LXdpZHRoXCI6IFwiNDBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY29sLW1kLTUgdGV4dC13aGl0ZSBiZy1cIiArIGEudGlwb31cclxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGEuZGVzY3JpcGNpb24gfX1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSk7XHJcblxyXG4gIGNvbnN0IGNhbWJpYUZpbHRybyA9IChldnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FtYmlhRmlsdHJvXCIsIGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0RmlsdHJvKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgIDxzcGFuPntyYXRvbi5uYW1lfTwvc3Bhbj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmF0b24ucm9ib3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHJvYm8pID0+XHJcbiAgICAgICAgICAgICAgICAgIHJvYm8ucHJvcGlvICYmIChmaWx0cm8gPT0gXCJUb2Rvc1wiIHx8IHJvYm8uZnJvbSA9PSBmaWx0cm8pXHJcbiAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgL1xyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kYW5nZXJcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJhdG9uLnJvYm9zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChyb2JvKSA9PlxyXG4gICAgICAgICAgICAgICAgICAhcm9iby5wcm9waW8gJiYgKGZpbHRybyA9PSBcIlRvZG9zXCIgfHwgcm9iby50byA9PSBmaWx0cm8pXHJcbiAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zcGFuPiAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2NhbWJpYUZpbHRyb30+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5Ub2Rvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtvd25lcnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG8pID0+IG8gIT09IHJhdG9uLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAubWFwKChvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfT57b308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPntyZW5kZXJSb2JvcyhyYXRvbi5yb2Jvcyl9PC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=