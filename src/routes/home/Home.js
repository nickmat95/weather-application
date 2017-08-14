
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Link from 'components/Link';

let weatherForecast = [
  {
    id: 11,
    town: 'Saint-Petersburg',
    region: 'Leningrad region',
    temperatureDay: '+14',
    temperatureNight: '+10',
    temperatureWater: '+6',
    cloudiness: 'cloudy',
    precipitation: 'rain',
    pressure: '745 mmHg',
    humidity: '50%',
    windSpeed: '2 m/s',
    image: 'http://img-fotki.yandex.ru/get/9503/16969765.166/0_7b44c_99fd16d5_M.png'
  },
  {
    id: 12,
    town: 'Pavlovsk',
    region: 'Leningrad region',
    temperatureDay: '+15',
    temperatureNight: '+11',
    temperatureWater: '+6',
    cloudiness: 'cloudy',
    precipitation: 'rain',
    pressure: '745 mmHg',
    humidity: '50%',
    windSpeed: '2 m/s',
    image: 'http://img-fotki.yandex.ru/get/9503/16969765.166/0_7b44c_99fd16d5_M.png'
  },
  {
    id: 13,
    town: 'Pushkin',
    region: 'Leningrad region',
    temperatureDay: '+14',
    temperatureNight: '+10',
    temperatureWater: '+6',
    cloudiness: 'cloudy',
    precipitation: 'rain',
    pressure: '745 mmHg',
    humidity: '50%',
    windSpeed: '2 m/s',
    image: 'http://img-fotki.yandex.ru/get/9503/16969765.166/0_7b44c_99fd16d5_M.png'
  },
  {
    id: 21,
    town: 'Zheleznogorsk',
    region: 'Krasnoyarsk region',
    temperatureDay: '+14',
    temperatureNight: '+10',
    temperatureWater: '+6',
    cloudiness: 'cloudy',
    precipitation: 'rain',
    pressure: '745 mmHg',
    humidity: '50%',
    windSpeed: '2 m/s',
    image: 'http://img-fotki.yandex.ru/get/9503/16969765.166/0_7b44c_99fd16d5_M.png'
  },
  {
    id: 22,
    town: 'Sosnovoborsk',
    region: 'Krasnoyarsk region',
    temperatureDay: '+14',
    temperatureNight: '+10',
    temperatureWater: '+6',
    cloudiness: 'cloudy',
    precipitation: 'rain',
    pressure: '745 mmHg',
    humidity: '50%',
    windSpeed: '2 m/s',
    image: 'http://img-fotki.yandex.ru/get/9503/16969765.166/0_7b44c_99fd16d5_M.png'
  }
];


class FilterInput extends React.Component {

  filterChange = (event) => {

    let filterValue = event.target.value;
    let filterId = this.props.filterID;

    this.props.updateFilter(filterValue, filterId);
  }

  

  placeholderText() {

    let text = (this.props.filterID == 1) ? 'enter city' : (this.props.filterID == 2) ? 'enter region' : 'enter value';
    return text;
  }

  render() {
    return (
        <input className={s.filters__input} type="text" placeholder={this.placeholderText()} onChange={this.filterChange}/>
    );
  }
}

class TownWeatherItem extends React.Component {
  render() {
    let link = `/detailed/${this.props.town}`;
     return(
       <div className={s.townWeatherItem}>
         <div className={s.townWeatherItem__iconWrap}>
            <img className={s.townWeatherItem__icon} src={this.props.img} />
         </div>
         <p className={s.townWeatherItem__town}>
            <Link className={s.townWeatherItem__link} to={link}>{this.props.town}</Link>
         </p>
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

class TownWeatherList extends React.Component {
  render() {
    let displayedItems = this.props.items.map(el => {
        return (
          <TownWeatherItem 
            key={el.id}
            town={el.town}
            region={el.region}
            temperatureDay={el.temperatureDay}
            temperatureNight={el.temperatureNight}
            temperatureWater={el.temperatureWater}
            cloudiness={el.cloudiness}
            precipitation={el.precipitation}
            pressure={el.pressure}
            humidity={el.humidity}
            windSpeed={el.windSpeed}
            img = {el.image}
            />
          );
      });


    let content = (this.props.items.length > 0) ? displayedItems : <div className={s.townWeatherList__noInfoWrap}><span className={s.townWeatherList__noInfo}>Nothing to show!</span></div>;

    return(
       <div className={s.townWeatherList}>
        {
          content
        }
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

  filterUpdate = (filterValue, filterId) => {

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
        <div className={s.filters}>
          <div className={s.filters__item}>
          {
            <FilterInput filterID="1" updateFilter={this.filterUpdate} />
          }
          </div>
          <div className={s.filters__item}>
          {
            <FilterInput filterID="2" updateFilter={this.filterUpdate} />
          }
          </div>
        </div>
          <TownWeatherList items={this.state.displayedWeatherItems} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
