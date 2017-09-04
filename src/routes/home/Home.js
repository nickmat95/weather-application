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

  constructor(props) {
    super(props);

    this.state = {
      displayedWeatherItems: [],
      filteredItems: []
    };
  }

  componentDidMount = () => {
    forecastList.$get()
    .then(result => {
      this.setState({
        displayedWeatherItems: result,
        filteredItems: result
      });

      this.props.weatherItems(result);

    })
    .catch(error => console.error(error));
  }

  filterUpdate = (filterValue, filterId) => {

    filterValue = filterValue.toLowerCase();

    let displayedItems = this.state.filteredItems.filter(el => {
      let filterVal = (Number(filterId) === 1) ? el.town.toLowerCase() : el.region.toLowerCase();
      return filterVal.includes(filterValue);
    });

    this.setState({
      displayedWeatherItems: displayedItems
    });
  }

  todayDate = () => {
    let date = new Date();

    return date.toLocaleString("en-US", { year: 'numeric', month: 'long', weekday: 'short', day: 'numeric' });
  }

  render() {
    console.log('->>', this.props);
    
    return (
      <div className={s.root}>
        <div className={s.container}>
          <p className={s.todayDate}>{this.todayDate()}</p>
          <Filters updateFilters={this.filterUpdate} />
          <WeatherList items={this.state.displayedWeatherItems} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    displayedItems: state.weatherItems[0]
  }),
  dispatch => ({
    weatherItems: (item) => {
      dispatch({ type: 'DEFAULT', payload: item });
    }
  })
)(withStyles(s)(Home));