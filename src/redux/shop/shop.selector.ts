import { createSelector } from 'reselect';
import { rootState } from '../root-reducer';

const selectShop = (state: rootState) => state.shop;

const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections: any) => Object.keys(collections).map((key: any) => collections[key])
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector(
    [selectCollections],
    (collections: any) => collections[collectionUrlParam]
  );
