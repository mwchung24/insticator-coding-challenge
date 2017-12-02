export const ADD_TO_CART = 'ADD_TO_CART';
export const RECEIVE_CART = 'RECEIVE_CART';

export const shoppingCart = fruit => ({
  type: ADD_TO_CART,
  fruit: fruit
});

export const receiveCart = () => ({
  type: RECEIVE_CART
});

export const addToCart = (fruit) => dispatch => {
  dispatch(shoppingCart(fruit));
};

export const fetchCart = () => dispatch => {
  dispatch(receiveCart());
};
