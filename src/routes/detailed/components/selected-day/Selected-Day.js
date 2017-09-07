import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Selected-Day.css';

class SelectedDay extends React.Component {

    static propTypes = { 
        displayedDate: PropTypes.shape({
            cloudiness: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            dayNumber: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            precipitation: PropTypes.string.isRequired,
            pressure: PropTypes.number.isRequired,
            shortDate: PropTypes.string.isRequired,
            temperatureDay: PropTypes.string.isRequired,
            temperatureEvening: PropTypes.string.isRequired,
            temperatureMorning: PropTypes.string.isRequired,
            temperatureNight: PropTypes.string.isRequired,
            temperatureWater: PropTypes.string.isRequired,
            windSpeed: PropTypes.number.isRequired,
        }),
    };

    render() {
        return (
            <div className={s.selectedDay}>
                <p className={s.date}>{this.props.displayedDate.date}</p>
                <div className={`${s.dayPart} ${s.dayPart_theme_morning}`}>
                    <p className={s.dayPart__title}>Morning</p>
                    <div className={s.dayPart__iconWrap}>
                        <img className={s.dayPart__icon} src="" />
                    </div>
                    <p className={s.dayPart__weatherIndicator}>
                        <span className={s.dayPart__weatherIndicatorTitle}>cloudiness:</span> test
                    </p>
                    <p className={s.dayPart__weatherIndicator}>
                        <span className={s.dayPart__weatherIndicatorTitle}>precipitation:</span> test
                    </p>
                    <p className={s.dayPart__temperature}>{this.props.displayedDate.temperatureMorning}</p>
                </div>

                <div className={`${s.dayPart} ${s.dayPart_theme_day}`}>
                    <p className={s.dayPart__title}>Day</p>
                    <div className={s.dayPart__iconWrap}>
                        <img className={s.dayPart__icon} src="" />
                    </div>
                    <p className={s.dayPart__weatherIndicator}>
                        <span className={s.dayPart__weatherIndicatorTitle}>cloudiness:</span> test
                    </p>
                    <p className={s.dayPart__weatherIndicator}>
                        <span className={s.dayPart__weatherIndicatorTitle}>precipitation:</span> test
                    </p>
                    <p className={s.dayPart__temperature}>{this.props.displayedDate.temperatureDay}</p>
                </div>

                <div className={`${s.dayPart} ${s.dayPart_theme_evening}`}>
                    <p className={s.dayPart__title}>Evening</p>
                    <div className={s.dayPart__iconWrap}>
                        <img className={s.dayPart__icon} src="" />
                    </div>
                    <p className={s.dayPart__weatherIndicator}>
                        <span className={s.dayPart__weatherIndicatorTitle}>cloudiness:</span> test
                    </p>
                    <p className={s.dayPart__weatherIndicator}>
                        <span className={s.dayPart__weatherIndicatorTitle}>precipitation:</span> test
                    </p>
                    <p className={s.dayPart__temperature}>{this.props.displayedDate.temperatureEvening}</p>
                </div>

                <div className={`${s.dayPart} ${s.dayPart_theme_night}`}>
                    <p className={s.dayPart__title}>Night</p>
                    <div className={s.dayPart__iconWrap}>
                        <img className={s.dayPart__icon} src="" />
                    </div>
                    <p className={s.dayPart__weatherIndicator}>
                        <span className={s.dayPart__weatherIndicatorTitle}>cloudiness:</span> test
                    </p>
                    <p className={s.dayPart__weatherIndicator}>
                        <span className={s.dayPart__weatherIndicatorTitle}>precipitation:</span> test
                    </p>
                    <p className={s.dayPart__temperature}>{this.props.displayedDate.temperatureNight}</p>
                </div>

                <div className={s.otherInfo}>
                    <p className={s.otherInfo__weatherIndicator}>
                        <span className={s.otherInfo__weatherIndicatorTitle}>pressure: </span> {this.props.displayedDate.pressure} mmHG
                    </p>
                    <p className={s.otherInfo__weatherIndicator}>
                        <span className={s.otherInfo__weatherIndicatorTitle}>humidity: </span> {this.props.displayedDate.humidity}%
                    </p>
                    <p className={s.otherInfo__weatherIndicator}>
                        <span className={s.otherInfo__weatherIndicatorTitle}>wind speed: </span> {this.props.displayedDate.windSpeed} m/s
                    </p>
                    <p className={s.otherInfo__weatherIndicator}>
                        <span className={s.otherInfo__weatherIndicatorTitle}>temperature water: </span> {this.props.displayedDate.temperatureWater}
                    </p>
                </div>

            </div>
        );
    }
}

export default withStyles(s)(SelectedDay);
