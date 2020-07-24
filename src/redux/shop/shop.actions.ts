import { ShopObject } from '../../Types';
import { ActionTypes } from './shop.types';

export const updateCollections = (collectionsMap: ShopObject) => ({
  type: ActionTypes.updateCollections,
  payload: collectionsMap,
});
