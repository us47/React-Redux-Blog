import { combineReducers } from 'redux';
import blogCardReducer from './blogCardReducer';

export default combineReducers({
  blogCardReducer: blogCardReducer
});