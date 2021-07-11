import { SETUP_SUB_CATEGORIES } from '../actions/type';

const INITIAL_STATE = {
  clothes: ['Women', 'Men', 'Kids'],
  tech: ['Apple', 'Microsoft', 'Sony'],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETUP_SUB_CATEGORIES:
      return { ...state };
    default:
      return state;
  }
};
