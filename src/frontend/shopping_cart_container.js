import React from 'react';
import { connect } from 'react-redux';
import ShoppingCart from './shopping_cart';
import { fetchCart } from '../actions/cart_actions';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart()),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
