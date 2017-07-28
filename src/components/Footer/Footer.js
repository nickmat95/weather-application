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
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
            <div className={s.getInfo}>
              <span>All information about the weather is taken from the site</span> <Link className={s.gismeteoLink} to="https://www.gismeteo.ru/">gismeteo.ru</Link>
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
