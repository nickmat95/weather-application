
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './detailed.css';
import SelectedDay from './components/selected-day/SelectedDay';
import WeekDays from './components/week-days/WeekDays';
import ReactResource from 'react-resource';

const TownDetailed = new ReactResource('/api/weather/{:townID}', {townID: ':townID'});

class Detailed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedTown: {
        id: 0,
        town: 'default',
        weekForecast: []
      }
    };

  } 

  static propTypes = { 
    townID: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const detailedForecast = new TownDetailed({townID: this.props.townID});

    detailedForecast.$get()
      .then(result => {
        this.setState({
          displayedTown: result,
          displayedDate: result.weekForecast[0]
        })
      })
      .catch(error => console.error(error));
  }

  todayDate() {
    let date = new Date();

    return date.toLocaleString("en-US", { year: 'numeric', month: 'long', weekday: 'short', day: 'numeric' });
  }

  changeInfo = (weatherData) => {
    this.setState({
      displayedDate: weatherData
    });
  }

  render() {

    let displayedTownWeather = this.state.displayedTown;
    let weekForecast = displayedTownWeather.weekForecast;

    return (
      <div className={s.root}>
        <div className={s.container}>
        	<h1 className={s.title}>Weather in {displayedTownWeather.town}</h1>
        	<SelectedDay displayedDate={this.state.displayedDate} />
          <WeekDays items={weekForecast} changeInfo={this.changeInfo} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Detailed);
