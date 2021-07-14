import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import selectedProductPropsRedurer from './selectedProductPropsRedurer';
import cartReducer from './cartReducer';
import cartPopupReducer from './cartPopupReducer';

export default combineReducers({
  products: productsReducer,
  selectedProductProps: selectedProductPropsRedurer,
  cart: cartReducer,
  cartPopupShown: cartPopupReducer,
});
