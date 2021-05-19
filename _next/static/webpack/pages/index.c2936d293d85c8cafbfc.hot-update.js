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
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-success",
        children: raton.robos.filter(function (robo) {
          return robo.propio && (filtro == "Todos" || robo.from == filtro);
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, _this), "/", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "badge badge-pill badge-danger",
        children: raton.robos.filter(function (robo) {
          return !robo.propio && (filtro == "Todos" || robo.to == filtro);
        }).length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "float-right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [" Propios ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            onChange: cambiaPropios
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 28
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "float-right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          className: "form-control",
          onChange: cambiaFiltro,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            children: "Todos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, _this), owners.filter(function (o) {
            return o !== raton.name;
          }).map(function (o, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              children: o
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 19
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "list-group",
        children: renderRobos(raton.robos)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRvbi5qcyJdLCJuYW1lcyI6WyJSYXRvbiIsInJhdG9uIiwib3duZXJzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJwcm9waW9zIiwic2V0UHJvcGlvcyIsInJlbmRlclJvYm9zIiwicm9ib3MiLCJmaWx0ZXIiLCJyIiwidG8iLCJmcm9tIiwicHJvcGlvIiwibWFwIiwiYSIsImluZGV4Iiwic3JjIiwidGlwbyIsIl9faHRtbCIsImRlc2NyaXBjaW9uIiwiY2FtYmlhRmlsdHJvIiwiZXZ0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY2FtYmlhUHJvcGlvcyIsImNoZWNrZWQiLCJuYW1lIiwicm9ibyIsImxlbmd0aCIsIm8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ1BDLCtDQUFRLENBQUMsT0FBRCxDQUREO0FBQUEsTUFDNUJDLE1BRDRCO0FBQUEsTUFDcEJDLFNBRG9COztBQUFBLG1CQUVMRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGSDtBQUFBLE1BRTVCRyxPQUY0QjtBQUFBLE1BRW5CQyxVQUZtQjs7QUFJbkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLFdBQ2xCQSxLQUFLLENBQ0ZDLE1BREgsQ0FDVSxVQUFDQyxDQUFEO0FBQUEsYUFBTyxDQUFDUCxNQUFNLElBQUksT0FBVixJQUFxQkEsTUFBTSxJQUFJTyxDQUFDLENBQUNDLEVBQWpDLElBQXVDUixNQUFNLElBQUlPLENBQUMsQ0FBQ0UsSUFBcEQsTUFBK0QsQ0FBQ1AsT0FBRCxJQUFZSyxDQUFDLENBQUNHLE1BQTdFLENBQVA7QUFBQSxLQURWLEVBRUdDLEdBRkgsQ0FFTyxVQUFDQyxDQUFELEVBQUlDLEtBQUo7QUFBQSwwQkFDSDtBQUFnQixpQkFBUyxFQUFDLGlCQUExQjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDRTtBQUNFLGlCQUFHLEVBQUVELENBQUMsQ0FBQ0UsR0FEVDtBQUVFLHVCQUFTLEVBQUMsNEJBRlo7QUFHRSxtQkFBSyxFQUFFO0FBQUUsNkJBQWE7QUFBZjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFDRSxxQkFBUyxFQUFFLDRCQUE0QkYsQ0FBQyxDQUFDRyxJQUQzQztBQUVFLG1DQUF1QixFQUFFO0FBQUVDLG9CQUFNLEVBQUVKLENBQUMsQ0FBQ0s7QUFBWjtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVNKLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURHO0FBQUEsS0FGUCxDQURrQjtBQUFBLEdBQXBCOztBQXFCQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQVM7QUFDNUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJGLEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxLQUF2QztBQUNBdEIsYUFBUyxDQUFDa0IsR0FBRyxDQUFDRyxNQUFKLENBQVdDLEtBQVosQ0FBVDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDTCxHQUFELEVBQVM7QUFDM0JoQixjQUFVLENBQUNnQixHQUFHLENBQUNHLE1BQUosQ0FBV0csT0FBWixDQUFWO0FBQ0gsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNFO0FBQUEsa0JBQU81QixLQUFLLENBQUM2QjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdJO0FBQU0saUJBQVMsRUFBQyxnQ0FBaEI7QUFBQSxrQkFFSTdCLEtBQUssQ0FBQ1EsS0FBTixDQUFZQyxNQUFaLENBQ0UsVUFBQ3FCLElBQUQ7QUFBQSxpQkFDRUEsSUFBSSxDQUFDakIsTUFBTCxLQUFnQlYsTUFBTSxJQUFJLE9BQVYsSUFBcUIyQixJQUFJLENBQUNsQixJQUFMLElBQWFULE1BQWxELENBREY7QUFBQSxTQURGLEVBR0U0QjtBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixvQkFZSTtBQUFNLGlCQUFTLEVBQUMsK0JBQWhCO0FBQUEsa0JBRUkvQixLQUFLLENBQUNRLEtBQU4sQ0FBWUMsTUFBWixDQUNFLFVBQUNxQixJQUFEO0FBQUEsaUJBQ0UsQ0FBQ0EsSUFBSSxDQUFDakIsTUFBTixLQUFpQlYsTUFBTSxJQUFJLE9BQVYsSUFBcUIyQixJQUFJLENBQUNuQixFQUFMLElBQVdSLE1BQWpELENBREY7QUFBQSxTQURGLEVBR0U0QjtBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSixlQW9CRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLCtCQUNJO0FBQUEsK0NBQWU7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsb0JBQVEsRUFBRUo7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGLGVBd0JFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsK0JBQ0k7QUFBUSxtQkFBUyxFQUFDLGNBQWxCO0FBQWlDLGtCQUFRLEVBQUVOLFlBQTNDO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR3BCLE1BQU0sQ0FDSlEsTUFERixDQUNTLFVBQUN1QixDQUFEO0FBQUEsbUJBQU9BLENBQUMsS0FBS2hDLEtBQUssQ0FBQzZCLElBQW5CO0FBQUEsV0FEVCxFQUVFZixHQUZGLENBRU0sVUFBQ2tCLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGdDQUNIO0FBQUEsd0JBQWlCRDtBQUFqQixlQUFhQyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREc7QUFBQSxXQUZOLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQW9DRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxrQkFBNEIxQixXQUFXLENBQUNQLEtBQUssQ0FBQ1EsS0FBUDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQTVFRDs7R0FBTVQsSzs7S0FBQUEsSztBQThFTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMjkzNmQyOTNkODVjOGNhZmJmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgUmF0b24gPSAoeyByYXRvbiwgb3duZXJzIH0pID0+IHtcclxuICBjb25zdCBbZmlsdHJvLCBzZXRGaWx0cm9dID0gdXNlU3RhdGUoXCJUb2Rvc1wiKTtcclxuICBjb25zdCBbcHJvcGlvcywgc2V0UHJvcGlvc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlclJvYm9zID0gKHJvYm9zKSA9PlxyXG4gICAgcm9ib3NcclxuICAgICAgLmZpbHRlcigocikgPT4gKGZpbHRybyA9PSBcIlRvZG9zXCIgfHwgZmlsdHJvID09IHIudG8gfHwgZmlsdHJvID09IHIuZnJvbSkgJiYgKCAhcHJvcGlvcyB8fCByLnByb3BpbykgKVxyXG4gICAgICAubWFwKChhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTFcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Euc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy10aHVtYm5haWwgc21cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCJtYXgtd2lkdGhcIjogXCI0MHB4XCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjb2wtbWQtNSB0ZXh0LXdoaXRlIGJnLVwiICsgYS50aXBvfVxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYS5kZXNjcmlwY2lvbiB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKTtcclxuXHJcbiAgY29uc3QgY2FtYmlhRmlsdHJvID0gKGV2dCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjYW1iaWFGaWx0cm9cIiwgZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRGaWx0cm8oZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FtYmlhUHJvcGlvcyA9IChldnQpID0+IHtcclxuICAgICAgc2V0UHJvcGlvcyhldnQudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgPHNwYW4+e3JhdG9uLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByYXRvbi5yb2Jvcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocm9ibykgPT5cclxuICAgICAgICAgICAgICAgICAgcm9iby5wcm9waW8gJiYgKGZpbHRybyA9PSBcIlRvZG9zXCIgfHwgcm9iby5mcm9tID09IGZpbHRybykgXHJcbiAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgL1xyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kYW5nZXJcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJhdG9uLnJvYm9zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChyb2JvKSA9PlxyXG4gICAgICAgICAgICAgICAgICAhcm9iby5wcm9waW8gJiYgKGZpbHRybyA9PSBcIlRvZG9zXCIgfHwgcm9iby50byA9PSBmaWx0cm8pXHJcbiAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zcGFuPiAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPiBQcm9waW9zIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17Y2FtYmlhUHJvcGlvc30gLz48L3NwYW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17Y2FtYmlhRmlsdHJvfT5cclxuICAgICAgICAgICAgICA8b3B0aW9uPlRvZG9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAge293bmVyc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigobykgPT4gbyAhPT0gcmF0b24ubmFtZSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKG8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9PntvfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+e3JlbmRlclJvYm9zKHJhdG9uLnJvYm9zKX08L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==