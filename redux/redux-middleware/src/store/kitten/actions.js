import kittenEvents from './events';

export const fetchKittens = () => ({
  type: kittenEvents.FETCH_KITTENS
});