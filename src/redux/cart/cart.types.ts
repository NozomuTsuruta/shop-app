import { Action } from 'redux';
import { Item } from '../../Types';

export const ActionTypes = {
  toggleCartHidden: 'TOGGLE_CART_HIDDEN',
  addItem: 'ADD_ITEM',
  clearItem: 'CLEAR_ITEM',
  removeItem: 'REMOVE_ITEM',
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

interface ClearItemAction extends Action {
  type: typeof ActionTypes.clearItem;
  payload: Item;
}

interface RemoveItemAction extends Action {
  type: typeof ActionTypes.removeItem;
  payload: Item;
}

export type CartActionTypes =
  | ToggleCartHiddenAction
  | AddItemAction
  | ClearItemAction
  | RemoveItemAction;
