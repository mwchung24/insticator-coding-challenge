import React from 'react';
import { connect } from 'react-redux';
import Fruits from './fruits';
import { fetchFruits, updateFruit } from '../actions/fruit_actions';
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
    updateFruit: (fruit) => dispatch(updateFruit(fruit)),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Fruits);
