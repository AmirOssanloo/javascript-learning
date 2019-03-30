import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';
// import apiMiddleware from './api/middleware';
import appMiddleware from './app/middleware';
// import kittenMiddleware from './kitten/middleware';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    // ...apiMiddleware,
    ...appMiddleware,
    // ...kittenMiddleware
  )
);

export default store;