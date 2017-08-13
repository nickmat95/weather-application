
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './more-weather-info.css';

class More extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        	<h1 className={s.title}>Weather in ...</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(More);
