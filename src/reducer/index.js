import { combineReducers } from 'redux';
import productReducer from '../components/productReducer';

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
