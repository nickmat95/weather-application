import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Weather-List.css';
import WeatherItem from './weather-item/Weather-Item';
import { connect } from 'react-redux';

class WeatherList extends React.Component {

  static propTypes = {
    items: PropTypes.arrayOf(
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
  };

  render() {
    let displayedItems = this.props.items.map(el => {
      return (
        <WeatherItem 
          key={el.id}
          townID={el.id}
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

    let content = (this.props.items.length > 0) ? displayedItems : <div className={s.weatherList__noInfoWrap}><span className={s.weatherList__noInfo}>Nothing to show!</span></div>;

    return(
      <div className={s.weatherList}>
        {
          content
        }
      </div>
    );
  }
}

export default connect(
  state => ({
  }),
  dispatch => ({
  })
)(withStyles(s)(WeatherList));
