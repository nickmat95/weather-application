import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Week-Days.css';
import WeekDay from './week-day/Week-Day';
import { connect } from 'react-redux';

class WeekDays extends React.Component {

	static propTypes = {
        items: PropTypes.arrayOf(
          PropTypes.shape({
            dayNumber: PropTypes.number.isRequired,
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

    render() {
    	let content = this.props.items.map(el => {
    		return (
    			<WeekDay 
                    key={el.dayNumber}
                    dayNumber={el.dayNumber}
    				date={el.shortDate}
    				image={el.image}
    				temperatureDay={el.temperatureDay}
    				temperatureNight={el.temperatureNight}
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

export default connect(
  state => ({
  }),
  dispatch => ({
  })
)(withStyles(s)(WeekDays));
