import { combineReducers } from 'redux';

import takeWeatherItems from './take-weather-items.js';
import takeRegionsList from './take-regions-list.js';
import takeTownsList from './take-towns-list.js';
import filterItems from './filter-items.js';
import displayedTown from './displayed-town.js';
import choosenDate from './choosen-date.js';
import takeActiveDay from './take-active-day.js';

export default combineReducers({
  takeWeatherItems,
  takeRegionsList,
  takeTownsList,
  filterItems,
  displayedTown,
  choosenDate,
  takeActiveDay
});