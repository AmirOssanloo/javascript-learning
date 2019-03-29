import { fetchStart } from '../api/actions';
import kittenEvents from './events';

const fetchKittens = ({ dispatch }) => next => action => {
  if (action.type === kittenEvents.FETCH_KITTENS) {
    dispatch(fetchStart({
      method: 'GET',
      url: '/api/kittens',
      onSuccess: kittenEvents.FETCH_KITTENS_SUCCESS,
      onError: kittenEvents.FETCH_KITTENS_ERROR
    }));
  }

  next(action);
};

const addKitten = ({ dispatch }) => next => action => {

  if (action.type === kittenEvents.ADD_KITTEN) {
    dispatch(fetchStart({
      url: '/api/kittens',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: action.payload,
      onSuccess: kittenEvents.FETCH_KITTENS,
      onError: kittenEvents.ADD_KITTEN_ERROR,
    }));
  }

  next(action);
}

export default [
  fetchKittens,
  addKitten
];