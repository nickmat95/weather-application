import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WeekDays.css';
import WeekDay from './week-day/WeekDay'
;
class WeekDays extends React.Component {

	static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        temperatureMorning: PropTypes.string.isRequired,
        temperatureDay: PropTypes.string.isRequired,
        temperatureEvening: PropTypes.string.isRequired,
        temperatureNight: PropTypes.string.isRequired,
        temperatureWater: PropTypes.string.isRequired,
        cloudiness: PropTypes.string.isRequired,
        precipitation: PropTypes.string.isRequired,
        pressure: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        windSpeed: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        shortDate: PropTypes.string.isRequired,
      }),
    ),
  };

  getData = (date) => {
    let weatherData = this.props.items.filter(el => el.shortDate == date);
    this.props.changeInfo(weatherData[0]);
  }

    render() {
    	let content = this.props.items.map((el) => {
    		return (
    			<WeekDay 
                    key={el.shortDate}
    				date={el.shortDate}
    				image={el.image}
    				temperatureDay={el.temperatureDay}
    				temperatureNight={el.temperatureNight}
                    getData={this.getData}
    			/>
    		);
    	});
        return (
        	<div className={s.weekDays}>
        		{
        			content
        		}
        	</div>
       	);
    }
}

export default withStyles(s)(WeekDays);