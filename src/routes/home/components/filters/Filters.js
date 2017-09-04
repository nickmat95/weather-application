
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Filters.css';
import FilterItem from './filter-item/FilterItem';
import { connect } from 'react-redux';

class Filters extends React.Component {

  static propTypes = {
    updateFilters: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className={s.filters}>
        <div className={s.filters__item}>
          {
            <FilterItem filterID="1" updateFilter={this.props.updateFilters} />
          }
        </div>
        <div className={s.filters__item}>
          {
            <FilterItem filterID="2" updateFilter={this.props.updateFilters} />
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
  }),
  dispatch => ({
  })
)(withStyles(s)(Filters));
