import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from './middleware/logger';
import throttle from './middleware/throttle';
import alert from './middleware/alert';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    logger,
    throttle,
    alert
  )
);

export default store;