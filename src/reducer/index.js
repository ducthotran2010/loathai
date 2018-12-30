import { combineReducers } from 'redux';
import session from './session';
import cart from './cart';
import homepage from './homepage';
import product from './product.js';

export default combineReducers({
  session,
  cart,
  homepage,
  product,
});
