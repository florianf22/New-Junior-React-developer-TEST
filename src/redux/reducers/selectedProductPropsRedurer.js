import { SELECT_PRODUCT, REMOVE_PRODUCT } from '../actions/type';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        ...action.payload.attributeNames.reduce(
          (acc, curr) => (
            (acc[curr] = action.payload.attributeValue ?? 1), acc
          ),
          {}
        ),
      };
    case REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};
