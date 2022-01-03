import { SELECT_PRODUCT, REMOVE_PRODUCT } from '../actions/type';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        ...action.payload.attributeNames.reduce(
          (acc, curr) => (
            // eslint-disable-next-line no-sequences
            (acc[curr] = action.payload.attributeValue ?? 1), acc
          ),
          {},
        ),
      };
    case REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};

export default reducer;
