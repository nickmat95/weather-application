/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

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
          <div className={s.brand}>
            <Link to="/">
              <img className={s.brandLogoImg}
                src={logoUrl}
                alt="weater today"
              />
            </Link>
          </div>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Weather today</h1>
            <p className={s.bannerDesc}>Current weather forecast for every day</p>
          </div>
          <div className={s.contacts}>
            <p className={s.contactsTitle}>Contact us:</p>
            <div className={s.contactsBlock}>
              <div className={s.contactsBlockName}>
                <span>phone:</span>
              </div>
              <div className={s.contactsBlockContent}>
                <span>+7 (999) 999-99-98</span>
                <span>+7 (999) 999-99-99</span>
              </div>
            </div>
            <div className={s.contactsBlock}>
              <div className={s.contactsBlockName}>
                <span>e-mail:</span>
              </div>
              <div className={s.contactsBlockContent}>
                <span>support@app.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
