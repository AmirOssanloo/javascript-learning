import kittenEvents from './events';

const initialState = {
  kittens: []
};

const kittenReducer = (state = initialState, action) => {
  switch (action.type) {
    case kittenEvents.FETCH_KITTENS_SUCCESS:
      return {
        ...state,
        kittens: action.payload
      }
    case kittenEvents.FETCH_KITTENS_ERROR:
      return {
        ...state,
        kittens: []
      }
    default:
      return { ...state }
  }
};

export default kittenReducer;