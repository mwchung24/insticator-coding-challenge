import { ADD_TO_CART, RECEIVE_CART } from '../actions/cart_actions';
import merge from 'lodash/merge';

const CartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_TO_CART:
      let fruits = {};
      // debugger
      let cart = Object.values(state).concat([action.fruit]);
      for (let i = 0; i < cart.length; i++) {
        fruits[cart[i].id] = cart[i];
      }
      return fruits;
    case RECEIVE_CART:
      return state;
    default:
      return state;
  }
};

export default CartReducer;
