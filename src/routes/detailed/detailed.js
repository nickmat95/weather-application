
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './detailed.css';
import detailedWeatherForecast from './detailed-weather-forecast.json';
import SelectedDay from './components/selected-day/SelectedDay';

class Detailed extends React.Component {
    render() {
      return (
      <div className={s.root}>
        <div className={s.container}>
        	<h1 className={s.title}>Weather in {this.props.city}</h1>
        	<SelectedDay />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Detailed);
