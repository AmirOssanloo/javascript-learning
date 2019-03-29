import kittenEvents from './events';

const initialState = {
  kittens: []
};

const kittenReducer = (state = initialState, action) => {
  switch (action.type) {
    case kittenEvents.FETCH_KITTENS:
      return {
        ...state,
        kittens: action.payload
      }
    default:
      return { ...state }
  }
};

export default kittenReducer;