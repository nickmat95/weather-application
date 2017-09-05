import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WeekDay.css';
import { connect } from 'react-redux';

class WeekDay extends React.Component {

	static propTypes = {
		date: PropTypes.string.isRequired,
        dayNumber: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		temperatureDay: PropTypes.string.isRequired,
		temperatureNight: PropTypes.string.isRequired,
	};

    static defaultProps = { 
        active: 1
    };

    isActive = (value) => (value === this.props.active) ? s.active : 'default';
    
	chosenDate = () => {
        this.props.takeActiveDay(this.props.dayNumber);

        let weatherData = this.props.allDays.filter(el => el.shortDate == this.props.date);
        this.props.choosenDate(weatherData[0])
	}

    render() {
        return (
        	<div className={`${s.day} ${this.isActive(this.props.dayNumber)}`} onClick={this.chosenDate}>
        		<p className={s.day__name}>{this.props.date}</p>
        		<div className={s.day__iconWrap}>
        			<img className={s.day__icon} src={this.props.image} />
        		</div>
        		<p className={s.day__dayTemp}  title="day temperature">{this.props.temperatureDay}</p>
        		<p className={s.day__nightTemp} title="night temperature">{this.props.temperatureNight}</p>
        	</div>
       	);
    }
}

export default connect(
  state => ({
    allDays: state.displayedTown[2],
    active: state.takeActiveDay[0]
  }),
  dispatch => ({
    choosenDate: (item) => {
        dispatch({ type: 'CHOOSEN_DATE', payload: item });
    },
    takeActiveDay: (dayNumber) => {
        dispatch({ type: 'ACTIVE', payload: dayNumber });
    }
  })
)(withStyles(s)(WeekDay));
