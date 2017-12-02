import { ADD_TO_CART, RECEIVE_CART } from '../actions/cart_actions';
import merge from 'lodash/merge';

const CartReducer = (state = [], action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case ADD_TO_CART:
      return state.concat([action.fruit]);
    case RECEIVE_CART:
      return state;
    default:
      return state;
  }
};

export default CartReducer;
