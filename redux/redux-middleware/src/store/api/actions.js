import apiEvents from './events';

export const fetchStart = ({ method, url, headers, body, onSuccess, onError }) => ({
  type: apiEvents.FETCH_START,
  payload: body,
  meta: {
    url,
    method,
    headers,
    onSuccess,
    onError
  }
});

export const fetchEnd = () => ({
  type: apiEvents.FETCH_END
});