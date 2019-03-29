import apiEvents from './events';

const fetchStart = ({ dispatch }) => next => action => {
  if (action.type === apiEvents.FETCH_START) {
    const { url, method, onSuccess, onError } = action.meta;
    const body = action.payload;

    fetch(url, { method, body })
      .then(res => res.json())
      .then(res => dispatch({ type: onSuccess, payload: res }))
      .catch(err => dispatch({ type: onError, payload: err }));
  }

  next(action);
};

export default [
  fetchStart
];