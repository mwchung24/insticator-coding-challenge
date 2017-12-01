import { RECEIVE_FRUITS } from '../actions/fruit_actions';

const FruitsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FRUITS:
      return action.fruits;
    default:
      return state;
  }
};

export default FruitsReducer;
