
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.footer}>
            <div className={s.getInfo}>
              <span className={s.getInfo__text}>GitHub:</span> <a className={s.getInfo__githubLink} href="https://github.com/nickmat95/weather-application">weather-application</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
