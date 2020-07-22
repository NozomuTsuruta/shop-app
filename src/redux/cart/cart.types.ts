import { Action } from 'redux';
import { Item } from '../../Types';

export const ActionTypes = {
  toggleCartHidden: 'TOGGLE_CART_HIDDEN',
  addItem: 'ADD_ITEM',
} as const;

export type CartTypes = {
  hidden: boolean;
  cartItems: Item[];
};

interface ToggleCartHiddenAction extends Action {
  type: typeof ActionTypes.toggleCartHidden;
}

interface AddItemAction extends Action {
  type: typeof ActionTypes.addItem;
  payload: Item;
}

export type CartActionTypes = ToggleCartHiddenAction | AddItemAction;
