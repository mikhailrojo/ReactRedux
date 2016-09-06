import {combineReducers} from 'redux';
import visibility from './visibility';
import todos from './todos.js';

export default combineReducers({
  todos,
  visibility
});
