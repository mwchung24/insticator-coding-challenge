import React from 'react';
import { connect } from 'react-redux';
import Fruits from './fruits';
import { fetchFruits } from '../actions/fruit_actions';
import { addToCart } from '../actions/cart_actions';

const mapStateToProps = (state) => {
  return {
    fruits: state.fruits,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFruits: (fruits) => dispatch(fetchFruits(fruits)),
    addToCart: (fruit) => dispatch(addToCart(fruit)),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Fruits);
