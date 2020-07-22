import { ActionTypes } from './cart.types';
import { Item } from '../../Types';

export const toggleCartHidden = () => ({
  type: ActionTypes.toggleCartHidden,
});

export const addItem = (item: Item) => ({
  type: ActionTypes.addItem,
  payload: item,
});

export const clearItem = (item: Item) => ({
  type: ActionTypes.clearItem,
  payload: item,
});

export const removeItem = (item: Item) => ({
  type: ActionTypes.removeItem,
  payload: item,
})
