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
    setPropios(ect.targe.checked);
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
          children: ["Mios ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            onChange: cambiaPropios
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 24
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRvbi5qcyJdLCJuYW1lcyI6WyJSYXRvbiIsInJhdG9uIiwib3duZXJzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJwcm9waW9zIiwic2V0UHJvcGlvcyIsInJlbmRlclJvYm9zIiwicm9ib3MiLCJmaWx0ZXIiLCJyIiwidG8iLCJmcm9tIiwicHJvcGlvIiwibWFwIiwiYSIsImluZGV4Iiwic3JjIiwidGlwbyIsIl9faHRtbCIsImRlc2NyaXBjaW9uIiwiY2FtYmlhRmlsdHJvIiwiZXZ0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY2FtYmlhUHJvcGlvcyIsImVjdCIsInRhcmdlIiwiY2hlY2tlZCIsIm5hbWUiLCJyb2JvIiwibGVuZ3RoIiwibyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDUEMsK0NBQVEsQ0FBQyxPQUFELENBREQ7QUFBQSxNQUM1QkMsTUFENEI7QUFBQSxNQUNwQkMsU0FEb0I7O0FBQUEsbUJBRUxGLCtDQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFFNUJHLE9BRjRCO0FBQUEsTUFFbkJDLFVBRm1COztBQUluQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsV0FDbEJBLEtBQUssQ0FDRkMsTUFESCxDQUNVLFVBQUNDLENBQUQ7QUFBQSxhQUFPLENBQUNQLE1BQU0sSUFBSSxPQUFWLElBQXFCQSxNQUFNLElBQUlPLENBQUMsQ0FBQ0MsRUFBakMsSUFBdUNSLE1BQU0sSUFBSU8sQ0FBQyxDQUFDRSxJQUFwRCxNQUErRCxDQUFDUCxPQUFELElBQVlLLENBQUMsQ0FBQ0csTUFBN0Us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QURULEVBRUVqQixHQUZGLENBRU0sVUFBQ29CLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGdDQUNIO0FBQUEsd0JBQWlCRDtBQUFqQixlQUFhQyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREc7QUFBQSxXQUZOLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQW9DRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxrQkFBNEI1QixXQUFXLENBQUNQLEtBQUssQ0FBQ1EsS0FBUDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQTVFRDs7R0FBTVQsSzs7S0FBQUEsSztBQThFTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NTJiMjMyMTM5YTEzZTU0ZWM3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgUmF0b24gPSAoeyByYXRvbiwgb3duZXJzIH0pID0+IHtcclxuICBjb25zdCBbZmlsdHJvLCBzZXRGaWx0cm9dID0gdXNlU3RhdGUoXCJUb2Rvc1wiKTtcclxuICBjb25zdCBbcHJvcGlvcywgc2V0UHJvcGlvc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlclJvYm9zID0gKHJvYm9zKSA9PlxyXG4gICAgcm9ib3NcclxuICAgICAgLmZpbHRlcigocikgPT4gKGZpbHRybyA9PSBcIlRvZG9zXCIgfHwgZmlsdHJvID09IHIudG8gfHwgZmlsdHJvID09IHIuZnJvbSkgJiYgKCAhcHJvcGlvcyB8fCByLnByb3BpbykgKVxyXG4gICAgICAubWFwKChhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTFcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Euc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy10aHVtYm5haWwgc21cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCJtYXgtd2lkdGhcIjogXCI0MHB4XCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjb2wtbWQtNSB0ZXh0LXdoaXRlIGJnLVwiICsgYS50aXBvfVxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYS5kZXNjcmlwY2lvbiB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKTtcclxuXHJcbiAgY29uc3QgY2FtYmlhRmlsdHJvID0gKGV2dCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjYW1iaWFGaWx0cm9cIiwgZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRGaWx0cm8oZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FtYmlhUHJvcGlvcyA9IChldnQpID0+IHtcclxuICAgICAgc2V0UHJvcGlvcyhlY3QudGFyZ2UuY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICA8c3Bhbj57cmF0b24ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJhdG9uLnJvYm9zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChyb2JvKSA9PlxyXG4gICAgICAgICAgICAgICAgICByb2JvLnByb3BpbyAmJiAoZmlsdHJvID09IFwiVG9kb3NcIiB8fCByb2JvLmZyb20gPT0gZmlsdHJvKSBcclxuICAgICAgICAgICAgICApLmxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAvXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRhbmdlclwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmF0b24ucm9ib3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHJvYm8pID0+XHJcbiAgICAgICAgICAgICAgICAgICFyb2JvLnByb3BpbyAmJiAoZmlsdHJvID09IFwiVG9kb3NcIiB8fCByb2JvLnRvID09IGZpbHRybylcclxuICAgICAgICAgICAgICApLmxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3NwYW4+ICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHNwYW4+TWlvcyA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e2NhbWJpYVByb3Bpb3N9IC8+PC9zcGFuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2NhbWJpYUZpbHRyb30+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5Ub2Rvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtvd25lcnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG8pID0+IG8gIT09IHJhdG9uLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAubWFwKChvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfT57b308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPntyZW5kZXJSb2JvcyhyYXRvbi5yb2Jvcyl9PC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=