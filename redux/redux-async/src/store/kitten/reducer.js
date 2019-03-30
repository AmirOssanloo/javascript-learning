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
    case kittenEvents.ADD_KITTEN_SUCCESS:
      return {
        ...state,
        kittens: state.kittens.concat(action.payload)
      }
    default:
      return { ...state }
  }
};

export default kittenReducer;