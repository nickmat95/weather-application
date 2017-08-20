
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SelectedDay.css';

class SelectedDay extends React.Component {
    static defaultProps = {
        displayedDate: {
            cloudiness: "rrr",
            date: "er",
            humidity: 500,
            image: "http://img-fotki.yandex.ru/get/9503/16969765.166/0_7b44c_99fd16d5_M.png",
            precipitation: "rain",
            pressure: 7000, 
            shortDate: "wd",
            temperatureDay: "+2w0",
            temperatureEvening: "+ef13",
            temperatureMorning: "+1wd1",
            temperatureNight: "+10w",
            temperatureWater: "+ef6",
            windSpeed: 21
        }
    };
    render() {
        return (
            <div className={s.selectedDay}>
                <div className={s.dayPart + ' ' + s.dayPart_theme_morning}>
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

                <div className={s.dayPart + ' ' + s.dayPart_theme_day}>
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

                <div className={s.dayPart + ' ' + s.dayPart_theme_evening}>
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

                <div className={s.dayPart + ' ' + s.dayPart_theme_night}>
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
                        <span className={s.otherInfo__weatherIndicatorTitle}>pressure: </span> {this.props.displayedDate.pressure}
                    </p>
                    <p className={s.otherInfo__weatherIndicator}>
                        <span className={s.otherInfo__weatherIndicatorTitle}>humidity: </span> {this.props.displayedDate.humidity}
                    </p>
                    <p className={s.otherInfo__weatherIndicator}>
                        <span className={s.otherInfo__weatherIndicatorTitle}>wind speed: </span> {this.props.displayedDate.windSpeed}
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
