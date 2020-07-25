import { createSelector } from 'reselect';
import { rootState } from '../root-reducer';

const selectShop = (state: rootState) => state.shop;

const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections: any) => collections? Object.keys(collections).map((key: any) => collections[key]):[]
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector(
    [selectCollections],
    (collections: any) => collections? collections[collectionUrlParam]:null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop=>shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop=>!!shop.collections
)
