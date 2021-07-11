import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import subcategoriesReducer from './subcategoriesReducer';
import selectedProductPropsRedurer from './selectedProductPropsRedurer';
import cartReducer from './cartReducer';

export default combineReducers({
  products: productsReducer,
  subcategories: subcategoriesReducer,
  selectedProductProps: selectedProductPropsRedurer,
  cart: cartReducer,
});
