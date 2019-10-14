import { combineReducers } from 'redux';
import files from './files';
import importing from './importing';

export default combineReducers({
  files,
  importing
});
