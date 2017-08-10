
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.header}>
            <div className={s.brand}>
              <Link to="/">
                <img className={s.brand__logoImg}
                  src={logoUrl}
                  alt="weater today"
                />
              </Link>
            </div>

            <div className={s.banner}>
              <h1 className={s.banner__title}>Weather today</h1>
              <p className={s.banner__desc}>Current weather forecast for every day</p>
            </div>
            <div className={s.contacts}>
              <p className={s.contacts__title}>Contact us:</p>
              <div className={s.contacts__block}>
                <div className={s.contacts__blockName}>
                  <span className={s.contacts__blockNameText}>phone:</span>
                </div>
                <div className={s.contacts__blockContent}>
                  <span className={s.contacts__blockContentText}>+7 (999) 999-99-98</span>
                  <span className={s.contacts__blockContentText}>+7 (999) 999-99-99</span>
                </div>
              </div>
              <div className={s.contacts__block}>
                <div className={s.contacts__blockName}>
                  <span className={s.contacts__blockNameText}>e-mail:</span>
                </div>
                <div className={s.contacts__blockContent}>
                  <span className={s.contacts__blockContentText}>support@app.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
