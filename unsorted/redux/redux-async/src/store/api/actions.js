import apiEvents from './events';

export const fetchStart = ({
  url,
  method,
  headers,
  payload,
  onSuccess,
  onError,
  delayPre = 0,
  delayPost = 0,
}) => dispatch => {
  const body = JSON.stringify(payload);
  
  return new Promise((resolve, reject) => {
    fetch(url, { method, headers, body })
      .then(res => res.json())
      .then(res => {
        setTimeout(() => resolve(), delayPre);
        dispatch({ type: apiEvents.FETCH_END });

        setTimeout(() => dispatch({
          type: onSuccess, payload: res
        }), delayPost);
      })
      .catch(err => {
        setTimeout(() => reject(), delayPost);
        
        dispatch({ type: apiEvents.FETCH_END });
        setTimeout(() => dispatch({
          type: onError, payload: err
        }), delayPost);
      })
  });
}

export const fetchEnd = () => ({
  type: apiEvents.FETCH_END
});