import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import WeatherList from './components/weather-list/WeatherList'
import Filters from './components/filters/Filters';
import ReactResource from 'react-resource';
import { connect } from 'react-redux';

const Forecast = new ReactResource('/api/all_forecast/{:forecast}', {forecast: ':forecast'});
const forecastList = new Forecast();

class Home extends React.Component {

  static defaultProps = {
        displayedItems: []
    };

  componentDidMount = () => {
    forecastList.$get()
    .then(result => {
      this.props.weatherItems(result);
    })
    .catch(error => console.error(error));
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
          <Filters />
          <WeatherList items={this.props.displayedItems} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    displayedItems: (state.filterItems[0]) ? state.filterItems[0] : state.weatherItems[0]
  }),
  dispatch => ({
    weatherItems: (item) => {
      dispatch({ type: 'DEFAULT', payload: item });
    }
  })
)(withStyles(s)(Home));