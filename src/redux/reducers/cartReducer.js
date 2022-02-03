import produce from 'immer';

import {
  ADD_TO_CART,
  UPDATE_PRODUCT_CARD,
  DELETE_PRODUCT_CART,
} from '../actions/type';

const reducer = produce((state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const idxIfProductExists = state.findIndex(
        product =>
          product.productId === action.payload.productId &&
          JSON.stringify(product.attributeNames) ===
            JSON.stringify(action.payload.attributeNames),
      );

      if (idxIfProductExists >= 0) {
        state[idxIfProductExists].quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }

      return state;
    }
    case UPDATE_PRODUCT_CARD: {
      const existingProductId = state.findIndex(
        product =>
          product.productId === action.payload.productId &&
          JSON.stringify(product.attributeNames) ===
            JSON.stringify(action.payload.attributeNames),
      );

      state[existingProductId].quantity = action.payload.quantity;

      return state;
    }
    case DELETE_PRODUCT_CART: {
      const existingProductId = state.findIndex(
        product =>
          product.productId === action.payload.productId &&
          JSON.stringify(product.attributeNames) ===
            JSON.stringify(action.payload.attributeNames),
      );

      state.splice(existingProductId, 1);

      return state;
    }
    default:
      return state;
  }
});

export default reducer;
