import produce from 'immer';

import { SET_PRODUCT_ATTRIBUTES } from '../actions/type';

const reducer = produce((state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_ATTRIBUTES: {
      const { id, ...attributes } = action.payload;

      state[id] = attributes;

      return state;
    }
    default:
      return state;
  }
});

export default reducer;
