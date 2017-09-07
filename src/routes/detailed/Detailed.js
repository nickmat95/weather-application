import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Detailed.css';
import SelectedDay from './components/selected-day/Selected-Day';
import WeekDays from './components/week-days/Week-Days';
import { connect } from 'react-redux';

class Detailed extends React.Component {

  static propTypes = { 
    detailedForecast: PropTypes.shape({
      id: PropTypes.number.isRequired,
      region: PropTypes.string.isRequired,
      town: PropTypes.string.isRequired,
      weekForecast: PropTypes.array.isRequired,
    }),
  };

  render() {

    let displayedTownWeather = this.props.detailedForecast;
    let weekForecast = displayedTownWeather.weekForecast;

    return (
      <div className={s.root}>
        <div className={s.container}>
        	<h1 className={s.title}>Weather in {displayedTownWeather.town}</h1>
        	<SelectedDay displayedDate={(this.props.displayedDate) ? this.props.displayedDate : weekForecast[0]} />
          <WeekDays items={weekForecast} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    displayedDate: state.choosenDate[0]
  }),
  dispatch => ({
  })
)(withStyles(s)(Detailed));
