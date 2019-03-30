import apiEvents from './events';

export const fetchStart = ({
  method, url, headers, payload, onSuccess, onError
}) => dispatch => {
  const body = JSON.stringify(payload);

  return new Promise((resolve, reject) => {
    fetch(url, { method, headers, body })
      .then(res => res.json())
      .then(res => {
        resolve();

        dispatch({ type: apiEvents.FETCH_END });
        setTimeout(() => dispatch({
          type: onSuccess, payload: res
        }), 3000);
      })
      .catch(err => {
        reject();
        
        dispatch({ type: apiEvents.FETCH_END });
        setTimeout(() => dispatch({
          type: onError, payload: err
        }), 3000);
      })
  });
}

export const fetchEnd = () => ({
  type: apiEvents.FETCH_END
});