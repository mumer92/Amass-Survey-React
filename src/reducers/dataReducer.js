import { FETCH_TODOS, FETCH_SURVEYS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
};
