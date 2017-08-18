
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SelectedDay.css';

class SelectedDay extends React.Component {
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
                    <p className={s.dayPart__temperature}>+14</p>
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
                    <p className={s.dayPart__temperature}>+14</p>
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
                    <p className={s.dayPart__temperature}>+14</p>
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
                    <p className={s.dayPart__temperature}>+14</p>
                </div>

                <div className={s.otherInfo}>
                    <p className={s.otherInfo__weatherIndicator}>
                        <span className={s.otherInfo__weatherIndicatorTitle}>pressure: </span>test
                    </p>
                    <p className={s.otherInfo__weatherIndicator}>
                        <span className={s.otherInfo__weatherIndicatorTitle}>humidity: </span>test 
                    </p>
                    <p className={s.otherInfo__weatherIndicator}>
                        <span className={s.otherInfo__weatherIndicatorTitle}>wind speed: </span>test 
                    </p>
                    <p className={s.otherInfo__weatherIndicator}>
                        <span className={s.otherInfo__weatherIndicatorTitle}>temperature water: </span>test
                    </p>
                </div>

            </div>
        );
    }
}

export default withStyles(s)(SelectedDay);
