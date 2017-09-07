import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import WeatherList from './components/weather-list/Weather-List';
import Filters from './components/filters/Filters';
import { connect } from 'react-redux';

class Home extends React.Component {

  static propTypes = {
    weatherItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        town: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        temperatureDay: PropTypes.string.isRequired,
        temperatureNight: PropTypes.string.isRequired,
        temperatureWater: PropTypes.string.isRequired,
        cloudiness: PropTypes.string.isRequired,
        precipitation: PropTypes.string.isRequired,
        pressure: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        windSpeed: PropTypes.number.isRequired,
      }),
    ),
    regionsList: PropTypes.array.isRequired,
    townsList: PropTypes.array.isRequired,
  }

  todayDate = () => {
    let date = new Date();
    return date.toLocaleString("en-US", { year: 'numeric', month: 'long', weekday: 'short', day: 'numeric' });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <p className={s.todayDate}>{this.todayDate()}</p>
          <Filters 
          defaultForecastList={this.props.weatherItems}
          regionsList={this.props.regionsList}
          townsList={this.props.townsList}
          />
          <WeatherList items={(this.props.displayedItems) ? this.props.displayedItems : this.props.weatherItems} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    displayedItems: state.filterItems[0]
  }),
  dispatch => ({
  })
)(withStyles(s)(Home));