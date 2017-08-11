
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


class FilterInput extends React.Component {

  townFilterUpdate = (event) => {
    /**
     * TO DO
    */

    let filterValue = event.target.value;

    this.props.updateFilter(filterValue);
  }

  placeholderText() {

    let text = 'enter value';

    if(this.props.filterID == 1) {
      text = 'enter city';
    } else if (this.props.filterID == 2) {
      text = 'enter region';
    }

    return text;
  }

  render() {
    return (
        <input className={s.filters__input} type="text" placeholder={this.placeholderText()} onChange={this.townFilterUpdate}/>
    );
  }
}

class TownWeatherItem extends React.Component {
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

/*class TownWeatherList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayedWeatherItems: weatherForecast
    };
  } 

  render() {
    return(
      
    );
  }
}*/

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayedWeatherItems: weatherForecast,
      nameFilter: ''
    };
  } 

  todayDate = () => {
    let date = new Date();

    return date.toLocaleString("en-US", { year: 'numeric', month: 'long', weekday: 'short', day: 'numeric' });
  }

  townFilterUpdate = (filterValue) => {
    this.setState({nameFilter: filterValue});

    let displayedWeatherItems = weatherForecast.filter(el => {
        let filterVal = el.town.toLowerCase();
        return filterVal.indexOf(filterValue) !== -1;
      });

      this.setState({
          displayedWeatherItems: displayedWeatherItems
      });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        <p className={s.todayDate}>{this.todayDate}</p>
        <div className={s.filters}>
          <div className={s.filters__item}>
          {
            <FilterInput filterID="1" updateFilter={this.townFilterUpdate} />
          }
          </div>
          <div className={s.filters__item}>
          {
            <FilterInput filterID="2" />
          }
          </div>
        </div>
        <div className={s.townWeatherList}>
        {
          this.state.displayedWeatherItems.map(el => <TownWeatherItem 
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
      </div>
    );
  }
}

export default withStyles(s)(Home);
