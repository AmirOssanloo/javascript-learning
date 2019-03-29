import apiEvents from './events';

export const fetchStart = () => ({
  type: apiEvents.FETCH_START
});

export const fetchEnd = () => ({
  type: apiEvents.FETCH_END
});