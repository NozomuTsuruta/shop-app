import { CartActionTypes, CartTypes, ActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const initialState: CartTypes = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ActionTypes.toggleCartHidden:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ActionTypes.addItem:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems,action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
