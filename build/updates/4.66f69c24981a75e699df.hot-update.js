require("source-map-support").install();
exports.id = 4;
exports.modules = {

/***/ "./src/components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__("./src/components/Header/Header.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation__ = __webpack_require__("./src/components/Navigation/Navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_png__ = __webpack_require__("./src/components/Header/logo.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__logo_png__);
var _jsxFileName = '/home/kit/IdeaProjects/weather-app/src/components/Header/Header.js';








class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { classname: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.header, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brand, __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
              { to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brand__logoImg,
                src: __WEBPACK_IMPORTED_MODULE_5__logo_png___default.a,
                alt: 'weater today',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.banner, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.banner__title, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              'Weather today'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.banner__desc, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              },
              'Current weather forecast for every day'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__title, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              },
              'Contact us:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__block, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__blockName, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__blockNameText, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    },
                    __self: this
                  },
                  'phone:'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__blockContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__blockContentText, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    },
                    __self: this
                  },
                  '+7 (999) 999-99-98'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__blockContentText, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36
                    },
                    __self: this
                  },
                  '+7 (999) 999-99-99'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__block, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__blockName, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__blockNameText, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    },
                    __self: this
                  },
                  'e-mail:'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__blockContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.contacts__blockContentText, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    },
                    __self: this
                  },
                  'support@app.com'
                )
              )
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_2__Header_css___default.a)(Header));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy80LjY2ZjY5YzI0OTgxYTc1ZTY5OWRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcz8zNjRlKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9IZWFkZXIuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vTmF2aWdhdGlvbic7XG5pbXBvcnQgbG9nb1VybCBmcm9tICcuL2xvZ28ucG5nJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzbmFtZT17cy5oZWFkZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYnJhbmR9PlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17cy5icmFuZF9fbG9nb0ltZ31cbiAgICAgICAgICAgICAgICAgIHNyYz17bG9nb1VybH1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIndlYXRlciB0b2RheVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJhbm5lcn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3MuYmFubmVyX190aXRsZX0+V2VhdGhlciB0b2RheTwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5iYW5uZXJfX2Rlc2N9PkN1cnJlbnQgd2VhdGhlciBmb3JlY2FzdCBmb3IgZXZlcnkgZGF5PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c30+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5jb250YWN0c19fdGl0bGV9PkNvbnRhY3QgdXM6PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2t9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja05hbWV9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja05hbWVUZXh0fT5waG9uZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrQ29udGVudFRleHR9Pis3ICg5OTkpIDk5OS05OS05ODwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2tDb250ZW50VGV4dH0+KzcgKDk5OSkgOTk5LTk5LTk5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2tOYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2tOYW1lVGV4dH0+ZS1tYWlsOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2tDb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2tDb250ZW50VGV4dH0+c3VwcG9ydEBhcHAuY29tPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShIZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUpBO0FBWEE7QUFkQTtBQURBO0FBREE7QUF3Q0E7QUEzQ0E7QUFDQTtBQTZDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9