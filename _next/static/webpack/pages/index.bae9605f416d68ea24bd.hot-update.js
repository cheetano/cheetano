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
              lineNumber: 11,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-5 text-white bg-" + a.tipo,
            dangerouslySetInnerHTML: {
              __html: a.descripcion
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 15
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
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
        lineNumber: 30,
        columnNumber: 12
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "float-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "badge badge-pill badge-success",
          children: raton.robos.filter(function (robo) {
            return robo.propio && (filtro == "Todos" || robo.from == filtro);
          }).length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 12
        }, _this), "/", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "badge badge-pill badge-danger",
          children: raton.robos.filter(function (robo) {
            return !robo.propio && (filtro == "Todos" || robo.to == filtro);
          }).length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 12
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "float-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            className: "form-control",
            onChange: cambiaFiltro,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              children: "Todos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 16
            }, _this), owners.filter(function (o) {
              return o !== raton.name;
            }).map(function (o, i) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                children: o
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 64
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 12
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "list-group",
        children: renderRobos(raton.robos)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRvbi5qcyJdLCJuYW1lcyI6WyJSYXRvbiIsInJhdG9uIiwib3duZXJzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJyZW5kZXJSb2JvcyIsInJvYm9zIiwiZmlsdGVyIiwiciIsInRvIiwiZnJvbSIsIm1hcCIsImEiLCJpbmRleCIsInNyYyIsInRpcG8iLCJfX2h0bWwiLCJkZXNjcmlwY2lvbiIsImNhbWJpYUZpbHRybyIsImV2dCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJyb2JvIiwicHJvcGlvIiwibGVuZ3RoIiwibyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXFCO0FBQUE7O0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFBQSxrQkFFSEMsK0NBQVEsQ0FBQyxPQUFELENBRkw7QUFBQSxNQUV4QkMsTUFGd0I7QUFBQSxNQUVoQkMsU0FGZ0I7O0FBSS9CLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxXQUNoQkEsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQUMsQ0FBQztBQUFBLGFBQUdMLE1BQU0sSUFBSSxPQUFWLElBQXNCQSxNQUFNLElBQUlLLENBQUMsQ0FBQ0MsRUFBWixJQUFrQk4sTUFBTSxJQUFJSyxDQUFDLENBQUNFLElBQXZEO0FBQUEsS0FBZCxFQUE2RUMsR0FBN0UsQ0FBaUYsVUFBQ0MsQ0FBRCxFQUFHQyxLQUFIO0FBQUEsMEJBQzdFO0FBQWdCLGlCQUFTLEVBQUMsaUJBQTFCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRUQs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V0FEQTtBQXNCSCxDQS9DRDs7R0FBTVAsSzs7S0FBQUEsSztBQWlETiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYWU5NjA1ZjQxNmQ2OGVhMjRiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFJhdG9uID0gKHtyYXRvbiwgb3duZXJzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmaWx0cm8sIHNldEZpbHRyb10gPSB1c2VTdGF0ZShcIlRvZG9zXCIpO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclJvYm9zID0gKHJvYm9zKSA9PiAoXHJcbiAgICAgICAgcm9ib3MuZmlsdGVyKHI9PiBmaWx0cm8gPT0gXCJUb2Rvc1wiIHx8IChmaWx0cm8gPT0gci50byB8fCBmaWx0cm8gPT0gci5mcm9tKSApLm1hcCgoYSxpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Euc3JjfSBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXRodW1ibmFpbCBzbVwiIHN0eWxlPXt7XCJtYXgtd2lkdGhcIjpcIjQwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNvbC1tZC01IHRleHQtd2hpdGUgYmctXCIgKyBhLnRpcG99XHJcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYS5kZXNjcmlwY2lvbiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSlcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBjYW1iaWFGaWx0cm8gPSAoZXZ0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW1iaWFGaWx0cm9cIiwgIGV2dC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgc2V0RmlsdHJvKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICA8c3Bhbj57cmF0b24ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc3VjY2Vzc1wiPntyYXRvbi5yb2Jvcy5maWx0ZXIocm9ibz0+cm9iby5wcm9waW8gJiYgKGZpbHRybyA9PSBcIlRvZG9zXCIgIHx8IHJvYm8uZnJvbSA9PSBmaWx0cm8gICkpLmxlbmd0aH08L3NwYW4+L1xyXG4gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGFuZ2VyXCI+e3JhdG9uLnJvYm9zLmZpbHRlcihyb2JvPT4hcm9iby5wcm9waW8gJiYgKGZpbHRybyA9PSBcIlRvZG9zXCIgIHx8IHJvYm8udG8gPT0gZmlsdHJvICApKS5sZW5ndGh9PC9zcGFuPiAgXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2NhbWJpYUZpbHRyb30+XHJcbiAgICAgICAgICAgICAgIDxvcHRpb24+VG9kb3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHtvd25lcnMuZmlsdGVyKG89Pm8hPT1yYXRvbi5uYW1lKS5tYXAoKG8saSkgPT4gPG9wdGlvbiBrZXk9e2l9PntvfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAge3JlbmRlclJvYm9zKHJhdG9uLnJvYm9zKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRvbjsiXSwic291cmNlUm9vdCI6IiJ9