import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import appMiddleware from './app/middleware';

const store = createStore(
  rootReducer,
  applyMiddleware(...appMiddleware)
);

export default store;