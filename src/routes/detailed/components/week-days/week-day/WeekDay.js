import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WeekDay.css';

class WeekDay extends React.Component {

	static propTypes = { 
		date: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		temperatureDay: PropTypes.string.isRequired,
		temperatureNight: PropTypes.string.isRequired,
	};

	addedDate = () => {
		this.props.getData(this.props.date);
	}

    render() {
        return (
        	<div className={s.day} onClick={this.addedDate}>
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

export default withStyles(s)(WeekDay);
