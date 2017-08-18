import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WeekDay.css';

class WeekDay extends React.Component {
    render() {
        return (
        	<div className={s.day}>
        		<p className={s.day__name}>{this.props.date}</p>
        		<div className={s.day__iconWrap}>
        			<img className={s.day__icon} src={this.props.image} />
        		</div>
        		<p className={s.day__dayTemp}>{this.props.temperatureDay}</p>
        		<p className={s.day__nightTemp}>{this.props.temperatureNight}</p>
        	</div>
       	);
    }
}

export default withStyles(s)(WeekDay);
