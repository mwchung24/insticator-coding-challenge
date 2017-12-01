import { combineReducers } from 'redux';
import FruitsReducer from './fruits_reducer';

const rootReducer = combineReducers({
  fruits: FruitsReducer,
});

export default rootReducer;
