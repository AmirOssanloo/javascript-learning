import { SUBMIT_FORM } from '../actions/types';

const formReducer = (state = null, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return action.payload;

    default:
      return state;
  }
};

export default formReducer;