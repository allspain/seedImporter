import { combineReducers } from 'redux';
import seeding from './seeding';
import importing from './importing';

export default combineReducers({
  seeding,
  importing
});
