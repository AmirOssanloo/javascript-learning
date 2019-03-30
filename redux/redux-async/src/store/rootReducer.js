import { combineReducers } from 'redux';
import apiReducer from './api/reducer';
import appReducer from './app/reducer';
import alertReducer from './alert/reducer';
import kittenReducer from './kitten/reducer';

const rootReducer = combineReducers({
  api: apiReducer,
  app: appReducer,
  alert: alertReducer,
  kitten: kittenReducer
});

export default rootReducer;