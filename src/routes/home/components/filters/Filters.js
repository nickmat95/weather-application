import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Filters.css';
import FilterItem from './filter-item/Filter-Item';
import { connect } from 'react-redux';

class Filters extends React.Component {

  static propTypes = {
    defaultForecastList: PropTypes.arrayOf(
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

  render() {
    return (
      <div className={s.filters}>
        <div className={s.filters__item}>
          {
            <FilterItem
            filterID="1"
            defaultForecastList={this.props.defaultForecastList}
            autocompleteList={this.props.townsList}
            />
          }
        </div>
        <div className={s.filters__item}>
          {
            <FilterItem
            filterID="2"
            defaultForecastList={this.props.defaultForecastList}
            autocompleteList={this.props.regionsList}
            />
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
  }),
  dispatch => ({
  })
)(withStyles(s)(Filters));
