require("source-map-support").install();
exports.id = 3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8zLjY2ZjY5YzI0OTgxYTc1ZTY5OWRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcz8zNjRlKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0hlYWRlci5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9OYXZpZ2F0aW9uJztcbmltcG9ydCBsb2dvVXJsIGZyb20gJy4vbG9nby5wbmcnO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NuYW1lPXtzLmhlYWRlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5icmFuZH0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzLmJyYW5kX19sb2dvSW1nfVxuICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvVXJsfVxuICAgICAgICAgICAgICAgICAgYWx0PVwid2VhdGVyIHRvZGF5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYmFubmVyfT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17cy5iYW5uZXJfX3RpdGxlfT5XZWF0aGVyIHRvZGF5PC9oMT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLmJhbm5lcl9fZGVzY30+Q3VycmVudCB3ZWF0aGVyIGZvcmVjYXN0IGZvciBldmVyeSBkYXk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhY3RzfT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLmNvbnRhY3RzX190aXRsZX0+Q29udGFjdCB1czo8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrTmFtZX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY29udGFjdHNfX2Jsb2NrTmFtZVRleHR9PnBob25lOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2tDb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2tDb250ZW50VGV4dH0+KzcgKDk5OSkgOTk5LTk5LTk4PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja0NvbnRlbnRUZXh0fT4rNyAoOTk5KSA5OTktOTktOTk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c19fYmxvY2t9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja05hbWV9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja05hbWVUZXh0fT5lLW1haWw6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja0NvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNvbnRhY3RzX19ibG9ja0NvbnRlbnRUZXh0fT5zdXBwb3J0QGFwcC5jb208L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSkE7QUFYQTtBQWRBO0FBREE7QUFEQTtBQXdDQTtBQTNDQTtBQUNBO0FBNkNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=