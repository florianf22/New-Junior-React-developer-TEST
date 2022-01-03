import {
  ADD_TO_CART,
  UPDATE_PRODUCT_CARD,
  DELETE_PRODUCT_CART,
} from '../actions/type';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.payload.productId]: action.payload,
      };
    case UPDATE_PRODUCT_CARD:
      return {
        ...state,
        [action.payload.productId]: action.payload,
      };
    case DELETE_PRODUCT_CART: {
      return { ...state, [action.payload]: null };
    }
    default:
      return state;
  }
};

export default reducer;
