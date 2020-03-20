import combineReducers from '#utils/combineReducers';
import appReducer from './reducers/appReducer';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
  app: appReducer,
  counter: counterReducer
});

export default rootReducer;
