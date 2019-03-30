import { fetchStart } from '../api/actions';
import kittenEvents from './events';

export const fetchKittens = () => {
  return fetchStart({
    method: 'GET',
    url: '/api/kittens',
    onSuccess: kittenEvents.FETCH_KITTENS_SUCCESS,
    onError: kittenEvents.FETCH_KITTENS_ERROR
  });
};

export const addKitten = (data) => {
  return fetchStart({
    method: 'POST',
    url: '/api/kittens',
    headers: { 'Content-Type': 'application/json' },
    payload: data,
    onSuccess: kittenEvents.ADD_KITTEN_SUCCESS,
    onError: kittenEvents.ADD_KITTEN_ERROR
  });
};