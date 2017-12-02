export const ADD_TO_CART = 'ADD_TO_CART';
export const RECEIVE_CART = 'RECEIVE_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const shoppingCart = fruit => ({
  type: ADD_TO_CART,
  fruit: fruit
});

export const receiveCart = () => ({
  type: RECEIVE_CART
});

export const removeFruit = fruit => ({
  type: REMOVE_FROM_CART,
  fruit: fruit
});

export const removeItem = fruit => ({
  type: DELETE_FROM_CART,
  fruit: fruit
});

export const addToCart = (fruit) => dispatch => {
  dispatch(shoppingCart(fruit));
};

export const fetchCart = () => dispatch => {
  dispatch(receiveCart());
};

export const removeFromCart = (fruit) => dispatch => {
  dispatch(removeFruit(fruit));
};

export const deleteFromCart = (fruit) => dispatch => {
  dispatch(removeItem(fruit));
};
