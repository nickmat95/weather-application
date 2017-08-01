require("source-map-support").install();
exports.id = 5;
exports.modules = {

/***/ "./src/routes/home/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home_css__ = __webpack_require__("./src/routes/home/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Home_css__);
var _jsxFileName = '/home/kit/IdeaProjects/weather-app/src/routes/home/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






let weatherForecast = [{
  id: 11,
  town: 'Saint-Petersburg',
  regionId: 1,
  temperatureDay: '+14',
  temperatureNight: '+10',
  temperatureWater: '+6',
  cloudiness: 'cloudy',
  precipitation: 'rain',
  pressure: '745 mmHg',
  humidity: '50%',
  windSpeed: '2 m/s',
  image: ''
}, {
  id: 12,
  town: 'Pavlovsk',
  regionId: 1,
  temperatureDay: '+15',
  temperatureNight: '+11',
  temperatureWater: '+6',
  cloudiness: 'cloudy',
  precipitation: 'rain',
  pressure: '745 mmHg',
  humidity: '50%',
  windSpeed: '2 m/s',
  image: ''
}, {
  id: 13,
  town: 'Pushkin',
  regionId: 1,
  temperatureDay: '+14',
  temperatureNight: '+10',
  temperatureWater: '+6',
  cloudiness: 'cloudy',
  precipitation: 'rain',
  pressure: '745 mmHg',
  humidity: '50%',
  windSpeed: '2 m/s',
  image: ''
}, {
  id: 21,
  town: 'Zheleznogorsk',
  regionId: 2,
  temperatureDay: '+14',
  temperatureNight: '+10',
  temperatureWater: '+6',
  cloudiness: 'cloudy',
  precipitation: 'rain',
  pressure: '745 mmHg',
  humidity: '50%',
  windSpeed: '2 m/s',
  image: ''
}, {
  id: 22,
  town: 'Sosnovoborsk',
  regionId: 2,
  temperatureDay: '+14',
  temperatureNight: '+10',
  temperatureWater: '+6',
  cloudiness: 'cloudy',
  precipitation: 'rain',
  pressure: '745 mmHg',
  humidity: '50%',
  windSpeed: '2 m/s',
  image: ''
}];

class TownWeather extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherVisual, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.town, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        },
        this.props.town
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.tempDay, title: 'day temperature', __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        },
        this.props.temperatureDay
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.tempNight, title: 'night temperature', __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        },
        this.props.temperatureNight
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          },
          'temperature water:'
        ),
        ' ',
        this.props.temperatureWater
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          },
          'cloudiness:'
        ),
        ' ',
        this.props.cloudiness
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          },
          'precipitation:'
        ),
        ' ',
        this.props.precipitation
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          },
          'pressure:'
        ),
        ' ',
        this.props.pressure
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          },
          'humidity:'
        ),
        ' ',
        this.props.humidity
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          },
          'wind speed:'
        ),
        ' ',
        this.props.windSpeed
      )
    );
  }
}

class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        },
        weatherForecast.map(el => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TownWeather, {
          key: el.id,
          town: el.town,
          regionId: el.regionId,
          temperatureDay: el.temperatureDay,
          temperatureNight: el.temperatureNight,
          temperatureWater: el.temperatureWater,
          cloudiness: el.cloudiness,
          precipitation: el.precipitation,
          pressure: el.pressure,
          humidity: el.humidity,
          windSpeed: el.windSpeed,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }))
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3__Home_css___default.a)(Home));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy81LjUyNThiYmFhMmRhMTExOTVlNTVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JvdXRlcy9ob21lL0hvbWUuanM/NDUzOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ib21lLmNzcyc7XG5cbmxldCB3ZWF0aGVyRm9yZWNhc3QgPSBbXG4gIHtcbiAgICBpZDogMTEsXG4gICAgdG93bjogJ1NhaW50LVBldGVyc2J1cmcnLFxuICAgIHJlZ2lvbklkOiAxLFxuICAgIHRlbXBlcmF0dXJlRGF5OiAnKzE0JyxcbiAgICB0ZW1wZXJhdHVyZU5pZ2h0OiAnKzEwJyxcbiAgICB0ZW1wZXJhdHVyZVdhdGVyOiAnKzYnLFxuICAgIGNsb3VkaW5lc3M6ICdjbG91ZHknLFxuICAgIHByZWNpcGl0YXRpb246ICdyYWluJyxcbiAgICBwcmVzc3VyZTogJzc0NSBtbUhnJyxcbiAgICBodW1pZGl0eTogJzUwJScsXG4gICAgd2luZFNwZWVkOiAnMiBtL3MnLFxuICAgIGltYWdlOiAnJ1xuICB9LFxuICB7XG4gICAgaWQ6IDEyLFxuICAgIHRvd246ICdQYXZsb3ZzaycsXG4gICAgcmVnaW9uSWQ6IDEsXG4gICAgdGVtcGVyYXR1cmVEYXk6ICcrMTUnLFxuICAgIHRlbXBlcmF0dXJlTmlnaHQ6ICcrMTEnLFxuICAgIHRlbXBlcmF0dXJlV2F0ZXI6ICcrNicsXG4gICAgY2xvdWRpbmVzczogJ2Nsb3VkeScsXG4gICAgcHJlY2lwaXRhdGlvbjogJ3JhaW4nLFxuICAgIHByZXNzdXJlOiAnNzQ1IG1tSGcnLFxuICAgIGh1bWlkaXR5OiAnNTAlJyxcbiAgICB3aW5kU3BlZWQ6ICcyIG0vcycsXG4gICAgaW1hZ2U6ICcnXG4gIH0sXG4gIHtcbiAgICBpZDogMTMsXG4gICAgdG93bjogJ1B1c2hraW4nLFxuICAgIHJlZ2lvbklkOiAxLFxuICAgIHRlbXBlcmF0dXJlRGF5OiAnKzE0JyxcbiAgICB0ZW1wZXJhdHVyZU5pZ2h0OiAnKzEwJyxcbiAgICB0ZW1wZXJhdHVyZVdhdGVyOiAnKzYnLFxuICAgIGNsb3VkaW5lc3M6ICdjbG91ZHknLFxuICAgIHByZWNpcGl0YXRpb246ICdyYWluJyxcbiAgICBwcmVzc3VyZTogJzc0NSBtbUhnJyxcbiAgICBodW1pZGl0eTogJzUwJScsXG4gICAgd2luZFNwZWVkOiAnMiBtL3MnLFxuICAgIGltYWdlOiAnJ1xuICB9LFxuICB7XG4gICAgaWQ6IDIxLFxuICAgIHRvd246ICdaaGVsZXpub2dvcnNrJyxcbiAgICByZWdpb25JZDogMixcbiAgICB0ZW1wZXJhdHVyZURheTogJysxNCcsXG4gICAgdGVtcGVyYXR1cmVOaWdodDogJysxMCcsXG4gICAgdGVtcGVyYXR1cmVXYXRlcjogJys2JyxcbiAgICBjbG91ZGluZXNzOiAnY2xvdWR5JyxcbiAgICBwcmVjaXBpdGF0aW9uOiAncmFpbicsXG4gICAgcHJlc3N1cmU6ICc3NDUgbW1IZycsXG4gICAgaHVtaWRpdHk6ICc1MCUnLFxuICAgIHdpbmRTcGVlZDogJzIgbS9zJyxcbiAgICBpbWFnZTogJydcbiAgfSxcbiAge1xuICAgIGlkOiAyMixcbiAgICB0b3duOiAnU29zbm92b2JvcnNrJyxcbiAgICByZWdpb25JZDogMixcbiAgICB0ZW1wZXJhdHVyZURheTogJysxNCcsXG4gICAgdGVtcGVyYXR1cmVOaWdodDogJysxMCcsXG4gICAgdGVtcGVyYXR1cmVXYXRlcjogJys2JyxcbiAgICBjbG91ZGluZXNzOiAnY2xvdWR5JyxcbiAgICBwcmVjaXBpdGF0aW9uOiAncmFpbicsXG4gICAgcHJlc3N1cmU6ICc3NDUgbW1IZycsXG4gICAgaHVtaWRpdHk6ICc1MCUnLFxuICAgIHdpbmRTcGVlZDogJzIgbS9zJyxcbiAgICBpbWFnZTogJydcbiAgfVxuXTtcblxuY2xhc3MgVG93bldlYXRoZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudG93bldlYXRoZXJJdGVtfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy53ZWF0aGVyVmlzdWFsfT48L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3MudG93bn0+e3RoaXMucHJvcHMudG93bn08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnRlbXBEYXl9IHRpdGxlPVwiZGF5IHRlbXBlcmF0dXJlXCI+e3RoaXMucHJvcHMudGVtcGVyYXR1cmVEYXl9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy50ZW1wTmlnaHR9IHRpdGxlPVwibmlnaHQgdGVtcGVyYXR1cmVcIj57dGhpcy5wcm9wcy50ZW1wZXJhdHVyZU5pZ2h0fTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3Mud2VhdGhlckl0ZW19PjxzcGFuIGNsYXNzTmFtZT17cy53ZWF0aGVySXRlbVRpdGxlfT50ZW1wZXJhdHVyZSB3YXRlcjo8L3NwYW4+IHt0aGlzLnByb3BzLnRlbXBlcmF0dXJlV2F0ZXJ9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy53ZWF0aGVySXRlbX0+PHNwYW4gY2xhc3NOYW1lPXtzLndlYXRoZXJJdGVtVGl0bGV9PmNsb3VkaW5lc3M6PC9zcGFuPiB7dGhpcy5wcm9wcy5jbG91ZGluZXNzfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3Mud2VhdGhlckl0ZW19PjxzcGFuIGNsYXNzTmFtZT17cy53ZWF0aGVySXRlbVRpdGxlfT5wcmVjaXBpdGF0aW9uOjwvc3Bhbj4ge3RoaXMucHJvcHMucHJlY2lwaXRhdGlvbn08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLndlYXRoZXJJdGVtfT48c3BhbiBjbGFzc05hbWU9e3Mud2VhdGhlckl0ZW1UaXRsZX0+cHJlc3N1cmU6PC9zcGFuPiB7dGhpcy5wcm9wcy5wcmVzc3VyZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLndlYXRoZXJJdGVtfT48c3BhbiBjbGFzc05hbWU9e3Mud2VhdGhlckl0ZW1UaXRsZX0+aHVtaWRpdHk6PC9zcGFuPiB7dGhpcy5wcm9wcy5odW1pZGl0eX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLndlYXRoZXJJdGVtfT48c3BhbiBjbGFzc05hbWU9e3Mud2VhdGhlckl0ZW1UaXRsZX0+d2luZCBzcGVlZDo8L3NwYW4+IHt0aGlzLnByb3BzLndpbmRTcGVlZH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAge1xuICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdC5tYXAoZWwgPT4gPFRvd25XZWF0aGVyIFxuICAgICAgICAgICAga2V5PXtlbC5pZH1cbiAgICAgICAgICAgIHRvd249e2VsLnRvd259XG4gICAgICAgICAgICByZWdpb25JZD17ZWwucmVnaW9uSWR9XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZURheT17ZWwudGVtcGVyYXR1cmVEYXl9XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZU5pZ2h0PXtlbC50ZW1wZXJhdHVyZU5pZ2h0fVxuICAgICAgICAgICAgdGVtcGVyYXR1cmVXYXRlcj17ZWwudGVtcGVyYXR1cmVXYXRlcn1cbiAgICAgICAgICAgIGNsb3VkaW5lc3M9e2VsLmNsb3VkaW5lc3N9XG4gICAgICAgICAgICBwcmVjaXBpdGF0aW9uPXtlbC5wcmVjaXBpdGF0aW9ufVxuICAgICAgICAgICAgcHJlc3N1cmU9e2VsLnByZXNzdXJlfVxuICAgICAgICAgICAgaHVtaWRpdHk9e2VsLmh1bWlkaXR5fVxuICAgICAgICAgICAgd2luZFNwZWVkPXtlbC53aW5kU3BlZWR9XG4gICAgICAgICAgICAvPilcbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShIb21lKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2hvbWUvSG9tZS5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFhQTtBQWhCQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQW9CQTtBQXhCQTtBQUNBO0FBMEJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=