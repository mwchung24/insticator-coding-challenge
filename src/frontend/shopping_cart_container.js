import React from 'react';
import { connect } from 'react-redux';
import ShoppingCart from './shopping_cart';
import { fetchCart, addToCart, removeFromCart, deleteFromCart } from '../actions/cart_actions';
import { updateFruit } from '../actions/fruit_actions';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    fruits: state.fruits,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    updateFruit: (fruit) => dispatch(updateFruit(fruit)),
    addToCart: (fruit) => dispatch(addToCart(fruit)),
    removeFromCart: (fruit) => dispatch(removeFromCart(fruit)),
    deleteFromCart: (fruit) => dispatch(deleteFromCart(fruit)),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
