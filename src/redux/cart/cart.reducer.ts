import { CartActionTypes, CartTypes, ActionTypes } from './cart.types';

const initialState: CartTypes = {
  hidden: true,
};

const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ActionTypes.toggleCartHidden:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
