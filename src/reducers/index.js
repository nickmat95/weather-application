import { combineReducers } from 'redux';

import filterItems from './filter-items.js';
import choosenDate from './choosen-date.js';
import takeActiveDay from './take-active-day.js';

export default combineReducers({
  filterItems,
  choosenDate,
  takeActiveDay
});