import { combineReducers } from 'redux';
import modalReducers from './modalReducers';
import redirectReducer from './redirectReducer';

export default combineReducers({
  modal: modalReducers,
  redirect: redirectReducer
});
