import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from './middleware/logger';
import throttle from './middleware/throttle';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    logger,
    throttle
  )
);

export default store;