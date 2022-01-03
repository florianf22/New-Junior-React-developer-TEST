import { TOGGLE_CURRENCY_DROPDOWN_MENU } from '../actions/type';

const INITIAL_STATE = { status: false };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CURRENCY_DROPDOWN_MENU:
      return {
        ...state,
        status: !action.payload ? action.payload : !state.status,
      };
    default:
      return state;
  }
};

export default reducer;
