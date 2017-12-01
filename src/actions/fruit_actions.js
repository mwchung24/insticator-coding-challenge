import * as APIUtil from '../util/fruit_api_util';

export const RECEIVE_FRUITS = 'RECEIVE_FRUITS';

export const receiveFruits = fruits => ({
  type: RECEIVE_FRUITS,
  fruits: fruits
});

export const fetchFruits = () => dispatch => {
  let fruits = APIUtil.fetchFruits();
  dispatch(receiveFruits(fruits));
};
