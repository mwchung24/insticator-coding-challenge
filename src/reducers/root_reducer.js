import { combineReducers } from 'redux';
import FruitsReducer from './fruits_reducer';
import CartReducer from './cart_reducer';

const rootReducer = combineReducers({
  fruits: FruitsReducer,
  cart: CartReducer,
});

export default rootReducer;
