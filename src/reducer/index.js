import { combineReducers } from 'redux';
import session from './session';
import cart from './cart';
import category from './homepage/category';
import featuredProducts from './homepage/featuredProducts';
import carousel from './homepage/carousel';

export default combineReducers({
  session,
  cart,
  category,
  featuredProducts,
  carousel,
});
