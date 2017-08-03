require("source-map-support").install();
exports.id = 5;
exports.modules = {

/***/ "./src/components/Feedback/Feedback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Feedback_css__ = __webpack_require__("./src/components/Feedback/Feedback.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Feedback_css__);
var _jsxFileName = '/home/kit/IdeaProjects/weather-app/src/components/Feedback/Feedback.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Feedback extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          {
            className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.link,
            href: 'https://gitter.im/kriasoft/react-starter-kit',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          'Ask a question'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.spacer, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          '|'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          {
            className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.link,
            href: 'https://github.com/kriasoft/react-starter-kit/issues/new',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          'Report an issue'
        )
      )
    );
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a)(Feedback));

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__("./node_modules/normalize.css/normalize.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__("./src/components/Layout/Layout.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__("./src/components/Header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Feedback__ = __webpack_require__("./src/components/Feedback/Feedback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Footer__ = __webpack_require__("./src/components/Footer/Footer.js");
var _jsxFileName = '/home/kit/IdeaProjects/weather-app/src/components/Layout/Layout.js';











class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }),
      this.props.children,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })
    );
  }
}

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a)(Layout));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy81LjExYWE1ZjE0NDRhODZhNTljZDNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRmVlZGJhY2svRmVlZGJhY2suanM/N2Y1MCoqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanM/Mzk1YyoqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9GZWVkYmFjay5jc3MnO1xuXG5jbGFzcyBGZWVkYmFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cy5saW5rfVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0dGVyLmltL2tyaWFzb2Z0L3JlYWN0LXN0YXJ0ZXIta2l0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBc2sgYSBxdWVzdGlvblxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc3BhY2VyfT58PC9zcGFuPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3MubGlua31cbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va3JpYXNvZnQvcmVhY3Qtc3RhcnRlci1raXQvaXNzdWVzL25ld1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVwb3J0IGFuIGlzc3VlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShGZWVkYmFjayk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvRmVlZGJhY2svRmVlZGJhY2suanMiLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuXG5pbXBvcnQgbm9ybWFsaXplQ3NzIGZyb20gJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0IHMgZnJvbSAnLi9MYXlvdXQuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcbmltcG9ydCBGZWVkYmFjayBmcm9tICcuLi9GZWVkYmFjayc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMobm9ybWFsaXplQ3NzLCBzKShMYXlvdXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQURBO0FBa0JBO0FBckJBO0FBQ0E7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQWJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFlQTs7OztBIiwic291cmNlUm9vdCI6IiJ9