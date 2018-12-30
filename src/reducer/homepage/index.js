import { combineReducers } from 'redux';
import category from './category';
import featuredProducts from './featuredProducts';
import carousel from './carousel';

export default combineReducers({
  category,
  featuredProducts,
  carousel,
});
