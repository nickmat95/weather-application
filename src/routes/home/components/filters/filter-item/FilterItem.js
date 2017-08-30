
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FilterItem.css';
import { matchItemToTerm, sortItems, styles } from './autocomplete-utils.js'
import Autocomplete from 'react-autocomplete';
import ReactResource from 'react-resource';

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

    townList.$query()
    .then(result => {
      this.setState({
        towns: result
      })
    })
    .catch(error => console.error(error));

    regionList.$query()
    .then(result => {
      this.setState({
        regions: result
      })
    })
    .catch(error => console.error(error));
  } 

  static propTypes = {
    filterID: PropTypes.string.isRequired,
    updateFilter: PropTypes.func.isRequired,
  }

  filterChange = (event, value) => {

    this.setState({
      value: value
    });

    let filterValue = value;
    let filterId = this.props.filterID;

    this.props.updateFilter(filterValue, filterId);
  }

  render() {

    let getItems = (this.props.filterID == 1) ? this.state.towns : this.state.regions;
    let placeholderText = (this.props.filterID == 1) ? 'enter city' : (this.props.filterID == 2) ? 'enter region' : 'enter value';

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

export default withStyles(s)(FilterItem);
