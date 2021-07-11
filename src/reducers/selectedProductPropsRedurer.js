import { SELECT_PRODUCT, REMOVE_PRODUCT } from '../actions/type';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      const obj = {};

      action.payload.attributeNames.forEach((attr) => {
        obj[attr] = {
          attributeName: attr,
          attributeValue: action.payload.attributeValue ?? 1,
        };
      });

      return { ...state, ...obj };
    case REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};
