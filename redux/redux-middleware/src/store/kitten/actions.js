import kittenEvents from './events';

export const fetchKittens = () => ({
  type: kittenEvents.FETCH_KITTENS
});

export const addKitten = (data) => ({
  type: kittenEvents.ADD_KITTEN,
  payload: data
});