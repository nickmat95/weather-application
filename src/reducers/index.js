import { combineReducers } from 'redux';

import weatherItems from './weatherItems.js';
import takeRegionsList from './takeRegionsList';
import takeTownsList from './takeTownsList';
import filterItems from './filterItems.js';
import displayedTown from './displayedTown.js';
import choosenDate from './choosenDate.js';
import takeActiveDay from './takeActiveDay.js';

export default combineReducers({
  weatherItems,
  takeRegionsList,
  takeTownsList,
  filterItems,
  displayedTown,
  choosenDate,
  takeActiveDay
});