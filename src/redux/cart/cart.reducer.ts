import { CartActionTypes, CartTypes, ActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

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
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case ActionTypes.clearItem:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case ActionTypes.removeItem:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems,action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;
