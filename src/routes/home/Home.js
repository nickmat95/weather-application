
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

let weatherForecast = [
  {
    id: 11,
    town: 'Saint-Petersburg',
    regionId: 1,
    temperatureDay: '+14',
    temperatureNight: '+10',
    temperatureWater: '+6',
    cloudiness: 'cloudy',
    precipitation: 'rain',
    pressure: '745 mmHg',
    humidity: '50%',
    windSpeed: '2 m/s',
    image: ''
  },
  {
    id: 12,
    town: 'Pavlovsk',
    regionId: 1,
    temperatureDay: '+15',
    temperatureNight: '+11',
    temperatureWater: '+6',
    cloudiness: 'cloudy',
    precipitation: 'rain',
    pressure: '745 mmHg',
    humidity: '50%',
    windSpeed: '2 m/s',
    image: ''
  },
  {
    id: 13,
    town: 'Pushkin',
    regionId: 1,
    temperatureDay: '+14',
    temperatureNight: '+10',
    temperatureWater: '+6',
    cloudiness: 'cloudy',
    precipitation: 'rain',
    pressure: '745 mmHg',
    humidity: '50%',
    windSpeed: '2 m/s',
    image: ''
  },
  {
    id: 21,
    town: 'Zheleznogorsk',
    regionId: 2,
    temperatureDay: '+14',
    temperatureNight: '+10',
    temperatureWater: '+6',
    cloudiness: 'cloudy',
    precipitation: 'rain',
    pressure: '745 mmHg',
    humidity: '50%',
    windSpeed: '2 m/s',
    image: ''
  },
  {
    id: 22,
    town: 'Sosnovoborsk',
    regionId: 2,
    temperatureDay: '+14',
    temperatureNight: '+10',
    temperatureWater: '+6',
    cloudiness: 'cloudy',
    precipitation: 'rain',
    pressure: '745 mmHg',
    humidity: '50%',
    windSpeed: '2 m/s',
    image: ''
  }
];



class TownWeather extends React.Component {
  render() {
     return(
       <div className={s.townWeatherItem}>
         <div className={s.townWeatherItem__icon}></div>
         <p className={s.townWeatherItem__town}>{this.props.town}</p>
         <p className={s.townWeatherItem__dayTemp} title="day temperature">{this.props.temperatureDay}</p>
         <p className={s.townWeatherItem__nightTemp} title="night temperature">{this.props.temperatureNight}</p>
         <p className={s.townWeatherItem__weatherItem}><span className={s.townWeatherItem__weatherItemTitle}>temperature water:</span> {this.props.temperatureWater}</p>
         <p className={s.townWeatherItem__weatherItem}><span className={s.townWeatherItem__weatherItemTitle}>cloudiness:</span> {this.props.cloudiness}</p>
         <p className={s.townWeatherItem__weatherItem}><span className={s.townWeatherItem__weatherItemTitle}>precipitation:</span> {this.props.precipitation}</p>
         <p className={s.townWeatherItem__weatherItem}><span className={s.townWeatherItem__weatherItemTitle}>pressure:</span> {this.props.pressure}</p>
         <p className={s.townWeatherItem__weatherItem}><span className={s.townWeatherItem__weatherItemTitle}>humidity:</span> {this.props.humidity}</p>
         <p className={s.townWeatherItem__weatherItem}><span className={s.townWeatherItem__weatherItemTitle}>wind speed:</span> {this.props.windSpeed}</p>
       </div>
     );
   }
}

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayedWeatherItems: weatherForecast
    };
  }

  todayDate() {
    let date = new Date();

    return date.toLocaleString("en-US", { year: 'numeric', month: 'long', weekday: 'short', day: 'numeric' });
  }


  townFilter = (event) => {
    
    let filterQuery = event.target.value.toLowerCase();
    let displayedWeatherItems = weatherForecast.filter(el => {
      let filterVal = el.town.toLowerCase();
      return filterVal.indexOf(filterQuery) !== -1;
    });

    this.setState({
        displayedWeatherItems: displayedWeatherItems
    });

  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        <p className={s.todayDate}>{this.todayDate()}</p>
        <div className={s.filters}>
          <div className={s.filters__item}>
            <input type="text" placeholder="enter city" onChange={this.townFilter} />
          </div>
          <div className={s.filters__item}>
            <input type="text" placeholder="enter region" />
          </div>
        </div>
        {
          this.state.displayedWeatherItems.map(el => <TownWeather 
            key={el.id}
            town={el.town}
            regionId={el.regionId}
            temperatureDay={el.temperatureDay}
            temperatureNight={el.temperatureNight}
            temperatureWater={el.temperatureWater}
            cloudiness={el.cloudiness}
            precipitation={el.precipitation}
            pressure={el.pressure}
            humidity={el.humidity}
            windSpeed={el.windSpeed}
            />)
        }
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
