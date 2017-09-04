import { combineReducers } from 'redux';

import weatherItems from './weatherItems.js';
import takeRegionsList from './takeRegionsList';
import takeTownsList from './takeTownsList';
import takeFilterValue from './takeFilterValue.js';

export default combineReducers({
  weatherItems,
  takeRegionsList,
  takeTownsList,
  takeFilterValue
});