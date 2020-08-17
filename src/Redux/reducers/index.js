import { combineReducers } from 'redux';
import modalReducers from './modalReducers';
import redirectReducer from './redirectReducer';
import apiReducers from './apiReducers';

export default combineReducers({
  modal: modalReducers,
  redirect: redirectReducer,
  apiReducer: apiReducers
});
