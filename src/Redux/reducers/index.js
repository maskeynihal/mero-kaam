import { combineReducers } from 'redux';
import modalReducers from './modalReducers';
export default combineReducers({
  modal: modalReducers
});
