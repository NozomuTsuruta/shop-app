import { Action } from 'redux';

export const ActionTypes = {
  toggleCartHidden: 'TOGGLE_CART_HIDDEN',
} as const;

export type CartTypes = {
  hidden: boolean;
};

interface ToggleCartHiddenAction extends Action {
  type: typeof ActionTypes.toggleCartHidden;
}

export type CartActionTypes = ToggleCartHiddenAction;
