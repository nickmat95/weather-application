require("source-map-support").install();
exports.id = 6;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy82LjY2ZjY5YzI0OTgxYTc1ZTY5OWRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcz8zNjRlKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vSGVhZGVyLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL05hdmlnYXRpb24nO1xuaW1wb3J0IGxvZ29VcmwgZnJvbSAnLi9sb2dvLnBuZyc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc25hbWU9e3MuaGVhZGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJyYW5kfT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3MuYnJhbmRfX2xvZ29JbWd9XG4gICAgICAgICAgICAgICAgICBzcmM9e2xvZ29Vcmx9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJ3ZWF0ZXIgdG9kYXlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5iYW5uZXJ9PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzLmJhbm5lcl9fdGl0bGV9PldlYXRoZXIgdG9kYXk8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3MuYmFubmVyX19kZXNjfT5DdXJyZW50IHdlYXRoZXIgZm9yZWNhc3QgZm9yIGV2ZXJ5IGRheTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFjdHN9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3MuY29udGFjdHNfX3RpdGxlfT5Db250YWN0IHVzOjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2tOYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2tOYW1lVGV4dH0+cGhvbmU6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja0NvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja0NvbnRlbnRUZXh0fT4rNyAoOTk5KSA5OTktOTktOTg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrQ29udGVudFRleHR9Pis3ICg5OTkpIDk5OS05OS05OTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrTmFtZX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrTmFtZVRleHR9PmUtbWFpbDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrQ29udGVudFRleHR9PnN1cHBvcnRAYXBwLmNvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoSGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFKQTtBQVhBO0FBZEE7QUFEQTtBQURBO0FBd0NBO0FBM0NBO0FBQ0E7QUE2Q0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==