import { Action } from 'redux';
import { ShopObject } from '../../Types';

export const ActionTypes = {
  updateCollections: 'UPDATE_COLLECTIONS',
} as const;

export type CollectionsTypes = {
  collections: ShopObject|null;
};

interface UpdateCollectionsAction extends Action {
  type: typeof ActionTypes.updateCollections;
  payload: ShopObject;
}

export type ShopActionTypes = UpdateCollectionsAction;
