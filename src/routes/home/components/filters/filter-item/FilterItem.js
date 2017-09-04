import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FilterItem.css';
import { matchItemToTerm, sortItems } from './autocomplete-utils.js'
import Autocomplete from 'react-autocomplete';
import ReactResource from 'react-resource';
import { connect } from 'react-redux';

const Town = new ReactResource('/api/towns/{:town}', {town: ':town'});
const townList = new Town();

const Region = new ReactResource('/api/regions/{:region}', {region: ':region'});
const regionList = new Region();

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
    townList.$get()
    .then(result => {
      this.props.takeTownsList(result);
    })
    .catch(error => console.error(error));

    regionList.$get()
    .then(result => {
      this.props.takeRegionsList(result);
    })
    .catch(error => console.error(error));
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
    test: state
  }),
  dispatch => ({
    takeRegionsList: (item) => {
      dispatch({ type: 'REGIONS', payload: item });
    },
    takeTownsList: (item) => {
      dispatch({ type: 'TOWNS', payload: item });
    },
    filterItems: (item) => {
      dispatch({ type: 'FILTER', payload: item });
    }
  })
)(withStyles(s)(FilterItem));
