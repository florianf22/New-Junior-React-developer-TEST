import { SET_SUB_CATEGORY, SET_CURRENCY, SET_CATEGORY } from '../actions/type';

const INITIAL_STATE = {
  selectedSubcategory: 'Apple',
  selectedCurrency: '$ AUD',
  selectedCategory: 'tech',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SUB_CATEGORY:
      return { ...state, selectedSubcategory: action.payload };
    case SET_CURRENCY:
      return { ...state, selectedCurrency: action.payload };
    case SET_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};
