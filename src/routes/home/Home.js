import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import weatherForecast from './weather-forecast.json';
import Filters from './components/filters/Filters';
import ReactResource from 'react-resource';

const Forecast = new ReactResource('/api/all_forecast/{:forecast}', {forecast: ':forecast'});
const forecastList = new Forecast();

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayedWeatherItems: []
    };
  }

  componentDidMount() {
    forecastList.$get()
    .then(result => {
        this.setState({
          displayedWeatherItems: result
        });
    })
    .catch(error => console.error(error));
  }

  filterUpdate = (filterValue, filterId) => {

    filterValue = filterValue.toLowerCase();

    this.setState({nameFilter: filterValue});

    let displayedWeatherItems = weatherForecast.filter(el => {
      let filterVal = (filterId == 1) ? el.town.toLowerCase() : el.region.toLowerCase();
      return filterVal.indexOf(filterValue) !== -1;
    });

    this.setState({
      displayedWeatherItems: displayedWeatherItems
    });
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
          <Filters updateFilters={this.filterUpdate} />
          <WeatherList items={this.state.displayedWeatherItems} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
