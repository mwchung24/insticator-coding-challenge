import * as APIUtil from '../util/fruit_api_util';

export const RECEIVE_FRUITS = 'RECEIVE_FRUITS';
export const UPDATE_FRUIT = 'UPDATE_FRUIT';

export const receiveFruits = fruits => ({
  type: RECEIVE_FRUITS,
  fruits: fruits
});

export const fruitUpdate = fruit => ({
  type: UPDATE_FRUIT,
  fruit: fruit
});

export const fetchFruits = () => dispatch => {
  let fruits = APIUtil.fetchFruits();
  dispatch(receiveFruits(fruits));
};

export const updateFruit = fruit => dispatch => {
  dispatch(fruitUpdate(fruit));
};
