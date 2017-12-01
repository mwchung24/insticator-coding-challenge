import React from 'react';
import { connect } from 'react-redux';
import Fruits from './fruits';
import { fetchFruits } from '../actions/fruit_actions';

const mapStateToProps = (state) => {
  return {
    fruits: state.fruits,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFruits: (fruits) => dispatch(fetchFruits(fruits)),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Fruits);
