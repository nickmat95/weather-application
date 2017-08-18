
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WeatherItem.css';
import Link from 'components/Link';

class WeatherItem extends React.Component {
  render() {
    let link = `/detailed/${this.props.townID}`;
     return(
       <div className={s.weatherItem}>
         <div className={s.weatherItem__iconWrap}>
            <img className={s.weatherItem__icon} src={this.props.img} />
         </div>
         <p className={s.weatherItem__town}>
            <Link className={s.weatherItem__link} to={link}>{this.props.town}</Link>
         </p>
         <p className={s.weatherItem__dayTemp} title="day temperature">{this.props.temperatureDay}</p>
         <p className={s.weatherItem__nightTemp} title="night temperature">{this.props.temperatureNight}</p>
         <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>temperature water:</span> {this.props.temperatureWater}</p>
         <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>cloudiness:</span> {this.props.cloudiness}</p>
         <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>precipitation:</span> {this.props.precipitation}</p>
         <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>pressure:</span> {this.props.pressure} mmHg</p>
         <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>humidity:</span> {this.props.humidity}%</p>
         <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>wind speed:</span> {this.props.windSpeed} m/s</p>
       </div>
     );
   }
}

export default withStyles(s)(WeatherItem);
