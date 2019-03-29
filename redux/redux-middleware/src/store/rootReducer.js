import { combineReducers } from 'redux';
import apiReducer from './api/reducer';
import appReducer from './app/reducer';
import kittenReducer from './kitten/reducer';

const rootReducer = combineReducers({
  api: apiReducer,
  app: appReducer,
  kitten: kittenReducer
});

export default rootReducer;