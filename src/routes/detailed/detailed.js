
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './detailed.css';
import detailedWeatherForecast from './detailed-weather-forecast.json';
import SelectedDay from './components/selected-day/SelectedDay';
import WeekDays from './components/week-days/WeekDays';

class Detailed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      towns: detailedWeatherForecast
    };
  } 

  static propTypes = { 
    townID: PropTypes.number.isRequired,
  };

  preparationArr() {
    let date = new Date();

    let displayedTownWeather = this.state.towns.filter((town) => town.id == this.props.townID)[0];

    displayedTownWeather.weekForecast.forEach((el, i) => {
      let number = (i == 0) ? 0 : 1;
      date.setDate(date.getDate() + number);
      el.date = date.toLocaleString("en-US", { year: 'numeric', month: 'long', weekday: 'short', day: 'numeric' });
      el.shortDate = date.toLocaleString("en-US", { month: 'numeric', weekday: 'short', day: 'numeric' });
    }); 

    return displayedTownWeather;
  }

  todayDate() {
    let date = new Date();

    return date.toLocaleString("en-US", { year: 'numeric', month: 'long', weekday: 'short', day: 'numeric' });
  }

  render() {
    let displayedTownWeather = this.preparationArr();
    let weekForecast = displayedTownWeather.weekForecast;

    return (
      <div className={s.root}>
        <div className={s.container}>
        	<h1>Weather in {displayedTownWeather.town}</h1>
          <p className={s.selectedDate}></p>
        	<SelectedDay />
          <WeekDays items={weekForecast} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Detailed);
