// import _ from 'lodash';

import {
  ADD_TO_CART,
  UPDATE_PRODUCT_CARD,
  DELETE_PRODUCT_CART,
} from '../actions/type';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.payload.productId]: {
          quantity: action.payload.quantity,
          productProps: action.payload.productProps,
        },
      };
    case UPDATE_PRODUCT_CARD:
      return {
        ...state,
        [action.payload.productId]: {
          quantity: action.payload.quantity,
          productProps: action.payload.productProps,
        },
      };
    case DELETE_PRODUCT_CART: {
      return { ...state, [action.payload]: null };
    }
    default:
      return state;
  }
};
