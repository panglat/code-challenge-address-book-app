/**
 * @file Root reducer
 * @module redux/rootReducer
 */
import { combineReducers } from 'redux';
import users from './users/reducer';
import settings from './settings/reducer';

export default combineReducers({
  users,
  settings,
});
