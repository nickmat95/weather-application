import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FilterItem.css';
import { matchItemToTerm, sortItems } from './autocomplete-utils.js'
import Autocomplete from 'react-autocomplete';
import { connect } from 'react-redux';
import { getTownsAutocomplete, getRegionsAutocomplete } from '../../../../../actions/filters.js';

class FilterItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  } 

  static propTypes = {
    filterID: PropTypes.string.isRequired,
  }

  componentDidMount = () => {
    this.props.takeTownsList();
    this.props.takeRegionsList();
  }

  filterChange = (event, value) => {

    this.setState({
      value: value
    });

    let filterValue = value.toLowerCase();
    let filterId = this.props.filterID;

    let displayedItems = this.props.filteredItems.filter(el => {
      let filterVal = (Number(filterId) === 1) ? el.town.toLowerCase() : el.region.toLowerCase();
      return filterVal.includes(filterValue);
    });

    this.props.filterItems(displayedItems);
  }

  render() {
    let getItems = (Number(this.props.filterID) === 1) ? this.props.towns : this.props.regions;
    let placeholderText = (Number(this.props.filterID) === 1) ? 'enter city' : (Number(this.props.filterID) === 2) ? 'enter region' : 'enter value';

    getItems = (getItems) ? getItems : [];

    return (
      <div className={s.filters__filterWrap}>
        {
          <Autocomplete
          value={this.state.value}
          inputProps={{ className: s.filters__filterItem, placeholder: placeholderText, onChange: this.filterChange}}
          items={getItems}
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
    filteredItems: state.weatherItems[0],
    towns: state.takeTownsList[0],
    regions: state.takeRegionsList[0],
  }),
  dispatch => ({
    takeRegionsList: (item) => {
      dispatch(getRegionsAutocomplete());
    },
    takeTownsList: () => {
      dispatch(getTownsAutocomplete());
    },
    filterItems: (item) => {
      dispatch({ type: 'FILTER', payload: item });
    }
  })
)(withStyles(s)(FilterItem));
