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
          lineNumber: 85
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__icon, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__town, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        },
        this.props.town
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__dayTemp, title: 'day temperature', __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        },
        this.props.temperatureDay
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__nightTemp, title: 'night temperature', __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        },
        this.props.temperatureNight
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 90
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
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 91
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
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 92
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
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 93
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
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 94
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
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.townWeatherItem__weatherItemTitle, __source: {
              fileName: _jsxFileName,
              lineNumber: 95
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

  constructor(props) {
    super(props);

    this.townFilter = event => {

      let filterQuery = event.target.value.toLowerCase();
      let displayedWeatherItems = weatherForecast.filter(el => {
        let filterVal = el.town.toLowerCase();
        return filterVal.indexOf(filterQuery) !== -1;
      });

      this.setState({
        displayedWeatherItems: displayedWeatherItems
      });
    };

    this.state = {
      displayedWeatherItems: weatherForecast
    };
  }

  todayDate() {
    let date = new Date();

    return date.toLocaleString("en-US", { year: 'numeric', month: 'long', weekday: 'short', day: 'numeric' });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.todayDate, __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          },
          this.todayDate()
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.filters, __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.filters__item, __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'enter city', onChange: this.townFilter, __source: {
                fileName: _jsxFileName,
                lineNumber: 139
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_3__Home_css___default.a.filters__item, __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'enter region', __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              },
              __self: this
            })
          )
        ),
        this.state.displayedWeatherItems.map(el => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TownWeather, {
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
            lineNumber: 146
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy81LjUwODQyYzc0OTc5M2Q0MmE1NDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JvdXRlcy9ob21lL0hvbWUuanM/NDUzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ib21lLmNzcyc7XG5cbmxldCB3ZWF0aGVyRm9yZWNhc3QgPSBbXG4gIHtcbiAgICBpZDogMTEsXG4gICAgdG93bjogJ1NhaW50LVBldGVyc2J1cmcnLFxuICAgIHJlZ2lvbklkOiAxLFxuICAgIHRlbXBlcmF0dXJlRGF5OiAnKzE0JyxcbiAgICB0ZW1wZXJhdHVyZU5pZ2h0OiAnKzEwJyxcbiAgICB0ZW1wZXJhdHVyZVdhdGVyOiAnKzYnLFxuICAgIGNsb3VkaW5lc3M6ICdjbG91ZHknLFxuICAgIHByZWNpcGl0YXRpb246ICdyYWluJyxcbiAgICBwcmVzc3VyZTogJzc0NSBtbUhnJyxcbiAgICBodW1pZGl0eTogJzUwJScsXG4gICAgd2luZFNwZWVkOiAnMiBtL3MnLFxuICAgIGltYWdlOiAnJ1xuICB9LFxuICB7XG4gICAgaWQ6IDEyLFxuICAgIHRvd246ICdQYXZsb3ZzaycsXG4gICAgcmVnaW9uSWQ6IDEsXG4gICAgdGVtcGVyYXR1cmVEYXk6ICcrMTUnLFxuICAgIHRlbXBlcmF0dXJlTmlnaHQ6ICcrMTEnLFxuICAgIHRlbXBlcmF0dXJlV2F0ZXI6ICcrNicsXG4gICAgY2xvdWRpbmVzczogJ2Nsb3VkeScsXG4gICAgcHJlY2lwaXRhdGlvbjogJ3JhaW4nLFxuICAgIHByZXNzdXJlOiAnNzQ1IG1tSGcnLFxuICAgIGh1bWlkaXR5OiAnNTAlJyxcbiAgICB3aW5kU3BlZWQ6ICcyIG0vcycsXG4gICAgaW1hZ2U6ICcnXG4gIH0sXG4gIHtcbiAgICBpZDogMTMsXG4gICAgdG93bjogJ1B1c2hraW4nLFxuICAgIHJlZ2lvbklkOiAxLFxuICAgIHRlbXBlcmF0dXJlRGF5OiAnKzE0JyxcbiAgICB0ZW1wZXJhdHVyZU5pZ2h0OiAnKzEwJyxcbiAgICB0ZW1wZXJhdHVyZVdhdGVyOiAnKzYnLFxuICAgIGNsb3VkaW5lc3M6ICdjbG91ZHknLFxuICAgIHByZWNpcGl0YXRpb246ICdyYWluJyxcbiAgICBwcmVzc3VyZTogJzc0NSBtbUhnJyxcbiAgICBodW1pZGl0eTogJzUwJScsXG4gICAgd2luZFNwZWVkOiAnMiBtL3MnLFxuICAgIGltYWdlOiAnJ1xuICB9LFxuICB7XG4gICAgaWQ6IDIxLFxuICAgIHRvd246ICdaaGVsZXpub2dvcnNrJyxcbiAgICByZWdpb25JZDogMixcbiAgICB0ZW1wZXJhdHVyZURheTogJysxNCcsXG4gICAgdGVtcGVyYXR1cmVOaWdodDogJysxMCcsXG4gICAgdGVtcGVyYXR1cmVXYXRlcjogJys2JyxcbiAgICBjbG91ZGluZXNzOiAnY2xvdWR5JyxcbiAgICBwcmVjaXBpdGF0aW9uOiAncmFpbicsXG4gICAgcHJlc3N1cmU6ICc3NDUgbW1IZycsXG4gICAgaHVtaWRpdHk6ICc1MCUnLFxuICAgIHdpbmRTcGVlZDogJzIgbS9zJyxcbiAgICBpbWFnZTogJydcbiAgfSxcbiAge1xuICAgIGlkOiAyMixcbiAgICB0b3duOiAnU29zbm92b2JvcnNrJyxcbiAgICByZWdpb25JZDogMixcbiAgICB0ZW1wZXJhdHVyZURheTogJysxNCcsXG4gICAgdGVtcGVyYXR1cmVOaWdodDogJysxMCcsXG4gICAgdGVtcGVyYXR1cmVXYXRlcjogJys2JyxcbiAgICBjbG91ZGluZXNzOiAnY2xvdWR5JyxcbiAgICBwcmVjaXBpdGF0aW9uOiAncmFpbicsXG4gICAgcHJlc3N1cmU6ICc3NDUgbW1IZycsXG4gICAgaHVtaWRpdHk6ICc1MCUnLFxuICAgIHdpbmRTcGVlZDogJzIgbS9zJyxcbiAgICBpbWFnZTogJydcbiAgfVxuXTtcblxuXG5cbmNsYXNzIFRvd25XZWF0aGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgICByZXR1cm4oXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3MudG93bldlYXRoZXJJdGVtfT5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRvd25XZWF0aGVySXRlbV9faWNvbn0+PC9kaXY+XG4gICAgICAgICA8cCBjbGFzc05hbWU9e3MudG93bldlYXRoZXJJdGVtX190b3dufT57dGhpcy5wcm9wcy50b3dufTwvcD5cbiAgICAgICAgIDxwIGNsYXNzTmFtZT17cy50b3duV2VhdGhlckl0ZW1fX2RheVRlbXB9IHRpdGxlPVwiZGF5IHRlbXBlcmF0dXJlXCI+e3RoaXMucHJvcHMudGVtcGVyYXR1cmVEYXl9PC9wPlxuICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnRvd25XZWF0aGVySXRlbV9fbmlnaHRUZW1wfSB0aXRsZT1cIm5pZ2h0IHRlbXBlcmF0dXJlXCI+e3RoaXMucHJvcHMudGVtcGVyYXR1cmVOaWdodH08L3A+XG4gICAgICAgICA8cCBjbGFzc05hbWU9e3MudG93bldlYXRoZXJJdGVtX193ZWF0aGVySXRlbX0+PHNwYW4gY2xhc3NOYW1lPXtzLnRvd25XZWF0aGVySXRlbV9fd2VhdGhlckl0ZW1UaXRsZX0+dGVtcGVyYXR1cmUgd2F0ZXI6PC9zcGFuPiB7dGhpcy5wcm9wcy50ZW1wZXJhdHVyZVdhdGVyfTwvcD5cbiAgICAgICAgIDxwIGNsYXNzTmFtZT17cy50b3duV2VhdGhlckl0ZW1fX3dlYXRoZXJJdGVtfT48c3BhbiBjbGFzc05hbWU9e3MudG93bldlYXRoZXJJdGVtX193ZWF0aGVySXRlbVRpdGxlfT5jbG91ZGluZXNzOjwvc3Bhbj4ge3RoaXMucHJvcHMuY2xvdWRpbmVzc308L3A+XG4gICAgICAgICA8cCBjbGFzc05hbWU9e3MudG93bldlYXRoZXJJdGVtX193ZWF0aGVySXRlbX0+PHNwYW4gY2xhc3NOYW1lPXtzLnRvd25XZWF0aGVySXRlbV9fd2VhdGhlckl0ZW1UaXRsZX0+cHJlY2lwaXRhdGlvbjo8L3NwYW4+IHt0aGlzLnByb3BzLnByZWNpcGl0YXRpb259PC9wPlxuICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnRvd25XZWF0aGVySXRlbV9fd2VhdGhlckl0ZW19PjxzcGFuIGNsYXNzTmFtZT17cy50b3duV2VhdGhlckl0ZW1fX3dlYXRoZXJJdGVtVGl0bGV9PnByZXNzdXJlOjwvc3Bhbj4ge3RoaXMucHJvcHMucHJlc3N1cmV9PC9wPlxuICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnRvd25XZWF0aGVySXRlbV9fd2VhdGhlckl0ZW19PjxzcGFuIGNsYXNzTmFtZT17cy50b3duV2VhdGhlckl0ZW1fX3dlYXRoZXJJdGVtVGl0bGV9Pmh1bWlkaXR5Ojwvc3Bhbj4ge3RoaXMucHJvcHMuaHVtaWRpdHl9PC9wPlxuICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnRvd25XZWF0aGVySXRlbV9fd2VhdGhlckl0ZW19PjxzcGFuIGNsYXNzTmFtZT17cy50b3duV2VhdGhlckl0ZW1fX3dlYXRoZXJJdGVtVGl0bGV9PndpbmQgc3BlZWQ6PC9zcGFuPiB7dGhpcy5wcm9wcy53aW5kU3BlZWR9PC9wPlxuICAgICAgIDwvZGl2PlxuICAgICApO1xuICAgfVxufVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNwbGF5ZWRXZWF0aGVySXRlbXM6IHdlYXRoZXJGb3JlY2FzdFxuICAgIH07XG4gIH1cblxuICB0b2RheURhdGUoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgd2Vla2RheTogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfSk7XG4gIH1cblxuXG4gIHRvd25GaWx0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICBcbiAgICBsZXQgZmlsdGVyUXVlcnkgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgZGlzcGxheWVkV2VhdGhlckl0ZW1zID0gd2VhdGhlckZvcmVjYXN0LmZpbHRlcihlbCA9PiB7XG4gICAgICBsZXQgZmlsdGVyVmFsID0gZWwudG93bi50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGZpbHRlclZhbC5pbmRleE9mKGZpbHRlclF1ZXJ5KSAhPT0gLTE7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheWVkV2VhdGhlckl0ZW1zOiBkaXNwbGF5ZWRXZWF0aGVySXRlbXNcbiAgICB9KTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnRvZGF5RGF0ZX0+e3RoaXMudG9kYXlEYXRlKCl9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5maWx0ZXJzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5maWx0ZXJzX19pdGVtfT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgY2l0eVwiIG9uQ2hhbmdlPXt0aGlzLnRvd25GaWx0ZXJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZmlsdGVyc19faXRlbX0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVudGVyIHJlZ2lvblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5kaXNwbGF5ZWRXZWF0aGVySXRlbXMubWFwKGVsID0+IDxUb3duV2VhdGhlciBcbiAgICAgICAgICAgIGtleT17ZWwuaWR9XG4gICAgICAgICAgICB0b3duPXtlbC50b3dufVxuICAgICAgICAgICAgcmVnaW9uSWQ9e2VsLnJlZ2lvbklkfVxuICAgICAgICAgICAgdGVtcGVyYXR1cmVEYXk9e2VsLnRlbXBlcmF0dXJlRGF5fVxuICAgICAgICAgICAgdGVtcGVyYXR1cmVOaWdodD17ZWwudGVtcGVyYXR1cmVOaWdodH1cbiAgICAgICAgICAgIHRlbXBlcmF0dXJlV2F0ZXI9e2VsLnRlbXBlcmF0dXJlV2F0ZXJ9XG4gICAgICAgICAgICBjbG91ZGluZXNzPXtlbC5jbG91ZGluZXNzfVxuICAgICAgICAgICAgcHJlY2lwaXRhdGlvbj17ZWwucHJlY2lwaXRhdGlvbn1cbiAgICAgICAgICAgIHByZXNzdXJlPXtlbC5wcmVzc3VyZX1cbiAgICAgICAgICAgIGh1bWlkaXR5PXtlbC5odW1pZGl0eX1cbiAgICAgICAgICAgIHdpbmRTcGVlZD17ZWwud2luZFNwZWVkfVxuICAgICAgICAgICAgLz4pXG4gICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoSG9tZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9ob21lL0hvbWUuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWQTtBQWFBO0FBaEJBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQXpCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBREE7QUE2QkE7QUE5REE7QUFDQTtBQWdFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9