import alertEvents from '../alert/events';
import uuid from 'uuid/v4';

const alert = ({ dispatch }) => next => action => {
  if (action.type !== alertEvents.NEW_ALERT) {
    return next(action);
  }

  action.payload._id = uuid();

  setTimeout(() => {
    dispatch({type: alertEvents.REMOVE_ALERT, payload: action.payload._id});
  }, 3000);

  next(action);
};

export default alert;