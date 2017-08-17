
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './detailed.css';

class Detailed extends React.Component {
    render() {
      console.log('>>', this.props);
      return (
      <div className={s.root}>
        <div className={s.container}>
        	<h1 className={s.title}>Weather in ...</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Detailed);
