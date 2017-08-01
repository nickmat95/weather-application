/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

let weatherForecast = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }
];

class TownWeather extends React.Component {
    render() {
      return(
        <div className={s.townWeatherItem}>
          <div className={s.weatherVisual}></div>
          <p className={s.town}>{this.props.town}</p>
          <p className={s.tempDay} title="day temperature">{this.props.temperatureDay}</p>
          <p className={s.tempNight} title="night temperature">{this.props.temperatureNight}</p>
          <p className={s.weatherItem}><span className={s.weatherItemTitle}>temperature water:</span> {this.props.temperatureWater}</p>
          <p className={s.weatherItem}><span className={s.weatherItemTitle}>cloudiness:</span> {this.props.cloudiness}</p>
          <p className={s.weatherItem}><span className={s.weatherItemTitle}>precipitation:</span> {this.props.precipitation}</p>
          <p className={s.weatherItem}><span className={s.weatherItemTitle}>pressure:</span> {this.props.pressure}</p>
          <p className={s.weatherItem}><span className={s.weatherItemTitle}>humidity:</span> {this.props.humidity}</p>
          <p className={s.weatherItem}><span className={s.weatherItemTitle}>wind speed:</span> {this.props.windSpeed}</p>
        </div>
      );
    }
  }

class Home extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        {
          weatherForecast.map(el => <TownWeather 
            key={el.id}
            town={el.town}
            regionId={el.regionId}
            temperatureDay={el.temperatureDay}
            temperatureNight={el.temperatureNight}
            temperatureWater={el.temperatureWater}
            cloudiness={el.cloudiness}
            precipitation={el.precipitation}
            pressure={el.pressure}
            humidity={el.humidity}
            windSpeed={el.windSpeed}
            />)
        }
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
