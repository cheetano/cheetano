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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: ["Mios ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            onChange: cambiaPropios
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 24
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
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
            lineNumber: 60,
            columnNumber: 15
          }, _this), owners.filter(function (o) {
            return o !== raton.name;
          }).map(function (o, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              children: o
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 19
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
        lineNumber: 70,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRvbi5qcyJdLCJuYW1lcyI6WyJSYXRvbiIsInJhdG9uIiwib3duZXJzIiwidXNlU3RhdGUiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJwcm9waW9zIiwic2V0UHJvcGlvcyIsInJlbmRlclJvYm9zIiwicm9ib3MiLCJmaWx0ZXIiLCJyIiwidG8iLCJmcm9tIiwicHJvcGlvIiwibWFwIiwiYSIsImluZGV4Iiwic3JjIiwidGlwbyIsIl9faHRtbCIsImRlc2NyaXBjaW9uIiwiY2FtYmlhRmlsdHJvIiwiZXZ0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInJvYm8iLCJsZW5ndGgiLCJjYW1iaWFQcm9waW9zIiwibyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDUEMsK0NBQVEsQ0FBQyxPQUFELENBREQ7QUFBQSxNQUM1QkMsTUFENEI7QUFBQSxNQUNwQkMsU0FEb0I7O0FBQUEsbUJBRUxGLCtDQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFFNUJHLE9BRjRCO0FBQUEsTUFFbkJDLFVBRm1COztBQUluQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsV0FDbEJBLEtBQUssQ0FDRkMsTUFESCxDQUNVLFVBQUNDLENBQUQ7QUFBQSxhQUFPLENBQUNQLE1BQU0sSUFBSSxPQUFWLElBQXFCQSxNQUFNLElBQUlPLENBQUMsQ0FBQ0MsRUFBakMsSUFBdUNSLE1BQU0sSUFBSU8sQ0FBQyxDQUFDRSxJQUFwRCxNQUErRCxDQUFDUCxPQUFELElBQVlLLENBQUMsQ0FBQ0csTUFBN0UsQ0FBUDtBQUFBLEtBRFYsRUFFR0MsR0FG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O0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFvQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsa0JBQTRCekIsV0FBVyxDQUFDUCxLQUFLLENBQUNRLEtBQVA7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0F4RUQ7O0dBQU1ULEs7O0tBQUFBLEs7QUEwRU4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGNlZmJjNmEyM2Q1MzkzNmI4OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFJhdG9uID0gKHsgcmF0b24sIG93bmVycyB9KSA9PiB7XHJcbiAgY29uc3QgW2ZpbHRybywgc2V0RmlsdHJvXSA9IHVzZVN0YXRlKFwiVG9kb3NcIik7XHJcbiAgY29uc3QgW3Byb3Bpb3MsIHNldFByb3Bpb3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByZW5kZXJSb2JvcyA9IChyb2JvcykgPT5cclxuICAgIHJvYm9zXHJcbiAgICAgIC5maWx0ZXIoKHIpID0+IChmaWx0cm8gPT0gXCJUb2Rvc1wiIHx8IGZpbHRybyA9PSByLnRvIHx8IGZpbHRybyA9PSByLmZyb20pICYmICggIXByb3Bpb3MgfHwgci5wcm9waW8pIClcclxuICAgICAgLm1hcCgoYSwgaW5kZXgpID0+IChcclxuICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXthLnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctdGh1bWJuYWlsIHNtXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwibWF4LXdpZHRoXCI6IFwiNDBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY29sLW1kLTUgdGV4dC13aGl0ZSBiZy1cIiArIGEudGlwb31cclxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGEuZGVzY3JpcGNpb24gfX1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSk7XHJcblxyXG4gIGNvbnN0IGNhbWJpYUZpbHRybyA9IChldnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FtYmlhRmlsdHJvXCIsIGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0RmlsdHJvKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgIDxzcGFuPntyYXRvbi5uYW1lfTwvc3Bhbj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmF0b24ucm9ib3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHJvYm8pID0+XHJcbiAgICAgICAgICAgICAgICAgIHJvYm8ucHJvcGlvICYmIChmaWx0cm8gPT0gXCJUb2Rvc1wiIHx8IHJvYm8uZnJvbSA9PSBmaWx0cm8pIFxyXG4gICAgICAgICAgICAgICkubGVuZ3RoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIC9cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByYXRvbi5yb2Jvcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocm9ibykgPT5cclxuICAgICAgICAgICAgICAgICAgIXJvYm8ucHJvcGlvICYmIChmaWx0cm8gPT0gXCJUb2Rvc1wiIHx8IHJvYm8udG8gPT0gZmlsdHJvKVxyXG4gICAgICAgICAgICAgICkubGVuZ3RoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvc3Bhbj4gICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5NaW9zIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17Y2FtYmlhUHJvcGlvc30gLz48L3NwYW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17Y2FtYmlhRmlsdHJvfT5cclxuICAgICAgICAgICAgICA8b3B0aW9uPlRvZG9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAge293bmVyc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigobykgPT4gbyAhPT0gcmF0b24ubmFtZSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKG8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9PntvfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+e3JlbmRlclJvYm9zKHJhdG9uLnJvYm9zKX08L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==