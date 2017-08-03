
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.footer}>
            <div className={s.getInfo}>
              <span className={s.getInfo__text}>All information about the weather is taken from the site</span> <Link className={s.getInfo__gismeteoLink} to="https://www.gismeteo.ru/">gismeteo.ru</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
