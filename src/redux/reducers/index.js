import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import selectedProductPropsRedurer from './selectedProductPropsRedurer';
import cartReducer from './cartReducer';
import cartPopupReducer from './cartPopupReducer';
import dropdownMenuReducer from './dropdownPopupReducer';

export default combineReducers({
  products: productsReducer,
  selectedProductProps: selectedProductPropsRedurer,
  cart: cartReducer,
  cartPopupShown: cartPopupReducer,
  currencyDropdownMenu: dropdownMenuReducer,
});
