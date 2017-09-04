import { combineReducers } from 'redux';

import weatherItems from './weatherItems.js';
import takeRegionsList from './takeRegionsList';
import takeTownsList from './takeTownsList';
import filterItems from './filterItems.js';

export default combineReducers({
  weatherItems,
  takeRegionsList,
  takeTownsList,
  filterItems
});