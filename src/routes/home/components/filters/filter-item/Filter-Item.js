import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Filter-Item.css';
import { matchItemToTerm, sortItems } from './autocomplete-utils.js';
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';

class FilterItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  } 

  static propTypes = {
    defaultForecastList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        town: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        temperatureDay: PropTypes.string.isRequired,
        temperatureNight: PropTypes.string.isRequired,
        temperatureWater: PropTypes.string.isRequired,
        cloudiness: PropTypes.string.isRequired,
        precipitation: PropTypes.string.isRequired,
        pressure: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        windSpeed: PropTypes.number.isRequired,
      }),
    ),
    filterID: PropTypes.string.isRequired,
    autocompleteList: PropTypes.array.isRequired,
  }

  filterChange = (event, value) => {

    this.setState({
      value: value
    });

    let filterValue = value.toLowerCase();
    let filterId = this.props.filterID;

    let displayedItems = this.props.defaultForecastList.filter(el => {
      let filterVal = (Number(filterId) === 1) ? el.town.toLowerCase() : el.region.toLowerCase();
      return filterVal.includes(filterValue);
    });

    this.props.filterItems(displayedItems);
  }

  render() {

    let placeholderText = (Number(this.props.filterID) === 1) ? 'enter city' : (Number(this.props.filterID) === 2) ? 'enter region' : 'enter value';

    return (
      <div className={s.filters__filterWrap}>
        {
          <Autocomplete
          value={this.state.value}
          inputProps={{ className: s.filters__filterItem, placeholder: placeholderText, onChange: this.filterChange}}
          items={this.props.autocompleteList}
          getItemValue={(item) => item.name}
          shouldItemRender={matchItemToTerm}
          sortItems={sortItems}
          onChange={(event, value) => this.filterChange(event, value)}
          onSelect={value => this.filterChange('', value)}
          renderItem={(item, isHighlighted) => (
            <div 
              className={s.autocompleteItem}
            >{item.name}</div>
          )}
          />
        }
        </div>
    );
  }
}

export default  connect(
  state => ({
  }),
  dispatch => ({
    filterItems: (item) => dispatch({ type: 'FILTER', payload: item })
  })
)(withStyles(s)(FilterItem));
