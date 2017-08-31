
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WeatherItem.css';
import Link from 'components/Link';

class WeatherItem extends React.Component {

static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        townID: PropTypes.number.isRequired,
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
  };

  render() {
     return(
        <Link className={s.weatherItem} to={`/detailed/${this.props.townID}`}>
            <div className={s.weatherItem__iconWrap}>
                <img className={s.weatherItem__icon} src={this.props.img} />
            </div>
            <p className={s.weatherItem__town}>
                {this.props.town}
            </p>
            <p className={s.weatherItem__dayTemp} title="day temperature">{this.props.temperatureDay}</p>
            <p className={s.weatherItem__nightTemp} title="night temperature">{this.props.temperatureNight}</p>
            <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>temperature water:</span> {this.props.temperatureWater}</p>
            <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>cloudiness:</span> {this.props.cloudiness}</p>
            <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>precipitation:</span> {this.props.precipitation}</p>
            <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>pressure:</span> {this.props.pressure} mmHg</p>
            <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>humidity:</span> {this.props.humidity}%</p>
            <p className={s.weatherItem__weatherIndicator}><span className={s.weatherItem__weatherIndicatorTitle}>wind speed:</span> {this.props.windSpeed} m/s</p>
        </Link>
     );
   }
}

export default withStyles(s)(WeatherItem);
