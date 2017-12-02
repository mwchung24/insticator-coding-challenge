import { RECEIVE_FRUITS, UPDATE_FRUIT } from '../actions/fruit_actions';
import merge from 'lodash/merge';

const FruitsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FRUITS:
      let fruits = {};
      for (let i = 0; i < action.fruits.length; i++) {
        fruits[action.fruits[i].id] = action.fruits[i];
      }
      return fruits;
    case UPDATE_FRUIT:
      return merge({}, state, {[action.fruit.id]: action.fruit});
    default:
      return state;
  }
};

export default FruitsReducer;
