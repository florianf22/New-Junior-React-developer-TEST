import {
  SETUP_SUB_CATEGORIES,
  SET_SUB_CATEGORY,
  SET_CURRENCY,
  SET_CATEGORY,
  SELECT_PRODUCT,
  ADD_TO_CART,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT_CARD,
  DELETE_PRODUCT_CART,
} from './type';

export const setSubCategory = (subcategoryName) => {
  return {
    type: SET_SUB_CATEGORY,
    payload: subcategoryName,
  };
};

export const setCurrency = (currencyCode) => {
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

export const generateSubcatogories = () => {
  return {
    type: SETUP_SUB_CATEGORIES,
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

export const addToCart = (productId, productProps, quantity = 1) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
      productProps,
      quantity,
    },
  };
};

export const updatetProductCard = (productId, quantity, productProps) => {
  return {
    type: UPDATE_PRODUCT_CARD,
    payload: {
      productId,
      quantity,
      productProps,
    },
  };
};

export const deleteProductCart = (productId) => {
  return {
    type: DELETE_PRODUCT_CART,
    payload: productId,
  };
};
