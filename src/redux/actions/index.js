import {
  SET_CURRENCY,
  SET_CATEGORY,
  SELECT_PRODUCT,
  ADD_TO_CART,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT_CARD,
  DELETE_PRODUCT_CART,
  TOGGLE_CART_POPUP,
  TOGGLE_CURRENCY_DROPDOWN_MENU,
  SET_PRODUCT_ATTRIBUTES,
} from './type';

export const setCurrency = currencyCode => {
  return {
    type: SET_CURRENCY,
    payload: currencyCode,
  };
};

export const setCategory = (category = 'clothes') => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};

export const selectProductProps = (attributeNames, attributeValue) => {
  return {
    type: SELECT_PRODUCT,
    payload: {
      attributeNames,
      attributeValue,
    },
  };
};

export const removeProductProps = () => {
  return {
    type: REMOVE_PRODUCT,
  };
};

export const addToCart = (productId, attributeNames, quantity = 1) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
      attributeNames,
      quantity,
    },
  };
};

export const updatetProductCard = (productId, attributeNames, quantity) => {
  return {
    type: UPDATE_PRODUCT_CARD,
    payload: {
      productId,
      quantity,
      attributeNames,
    },
  };
};

export const deleteProductCart = (productId, attributeNames) => {
  return {
    type: DELETE_PRODUCT_CART,
    payload: {
      productId,
      attributeNames,
    },
  };
};

export const toggleCartPopup = (status = true) => {
  return {
    type: TOGGLE_CART_POPUP,
    payload: status,
  };
};

export const toggleCurrencyDropdownMenu = (status = true) => {
  return {
    type: TOGGLE_CURRENCY_DROPDOWN_MENU,
    payload: status,
  };
};

export const setProductAttributes = (id, attributes) => {
  return {
    type: SET_PRODUCT_ATTRIBUTES,
    payload: {
      id,
      ...attributes,
    },
  };
};
