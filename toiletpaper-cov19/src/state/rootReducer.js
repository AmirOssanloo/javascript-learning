import combineReducers from '#utils/combineReducers';
import appReducer from './reducers/appReducer';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
  appReducer,
  counterReducer
});

export default rootReducer;
