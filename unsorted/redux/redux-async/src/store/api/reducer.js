import apiEvents from './events';

const initialState = {
  fetching: false
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case apiEvents.FETCH_START:
      return {
        ...state,
        fetching: true
      }
    case apiEvents.FETCH_END:
      return {
        ...state,
        fetching: false
      }
    default:
      return { ...state }
  }
};

export default apiReducer;