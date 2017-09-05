import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './detailed.css';
import SelectedDay from './components/selected-day/SelectedDay';
import WeekDays from './components/week-days/WeekDays';
//import ReactResource from 'react-resource';
import { connect } from 'react-redux';
import { getAllDetailedForecast } from '../../actions/weatherForecast.js';

//const TownDetailed = new ReactResource('/api/weather/{:townID}', {townID: ':townID'});

class Detailed extends React.Component {

  static propTypes = { 
    townID: PropTypes.number.isRequired,
  };

  static defaultProps = { 
    displayedTown: {
      id: 0,
      town: '',
      weekForecast: []
    }
  };

  componentDidMount = () => {
    this.props.displayedTownForecast(this.props.townID);
  }

  render() {

    let displayedTownWeather = this.props.displayedTown;
    let weekForecast = displayedTownWeather.weekForecast;

    return (
      <div className={s.root}>
        <div className={s.container}>
        	<h1 className={s.title}>Weather in {displayedTownWeather.town}</h1>
        	<SelectedDay displayedDate={this.props.displayedDate} />
          <WeekDays items={weekForecast} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    displayedTown: state.displayedTown[0],
    displayedDate: (state.choosenDate[0]) ? state.choosenDate[0] : state.displayedTown[1]
  }),
  dispatch => ({
    displayedTownForecast: (townID) => {
      dispatch(getAllDetailedForecast(townID));
    }
  })
)(withStyles(s)(Detailed));
