import apiEvents from './events';

export const fetchStart = ({ method, url, body, onSuccess, onError }) => ({
  type: apiEvents.FETCH_START,
  payload: body,
  meta: {
    method,
    url,
    onSuccess,
    onError
  }
});

export const fetchEnd = () => ({
  type: apiEvents.FETCH_END
});