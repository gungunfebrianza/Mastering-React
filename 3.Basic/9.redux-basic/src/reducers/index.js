import { combineReducers } from 'redux';
import moviesReducer from './movies_reducer';

const rootReducer = combineReducers({
  moviesReducer
});

export default rootReducer;
