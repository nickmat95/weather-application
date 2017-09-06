import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import WeatherList from './components/weather-list/Weather-List';
import Filters from './components/filters/Filters';
import { connect } from 'react-redux';
import { getWeatherItems } from '../../actions/weather-forecast.js';

class Home extends React.Component {

  static defaultProps = {
    displayedItems: []
  };

  componentDidMount = () => this.props.takeWeatherItems();

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
    displayedItems: (state.filterItems[0]) ? state.filterItems[0] : state.takeWeatherItems[0]
  }),
  dispatch => ({
    takeWeatherItems: () => dispatch(getWeatherItems())
  })
)(withStyles(s)(Home));