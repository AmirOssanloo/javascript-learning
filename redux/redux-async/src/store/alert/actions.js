import alertEvents from './events';

export const newAlert = (text) => ({
  type: alertEvents.NEW_ALERT,
  payload: { text }
});