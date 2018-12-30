import { combineReducers } from 'redux';
import articles from './article_reducer';

const rootReducer = combineReducers({
  articles
});

export default rootReducer;
