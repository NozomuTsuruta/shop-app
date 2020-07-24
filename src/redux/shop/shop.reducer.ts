import { ActionTypes, ShopActionTypes, CollectionsTypes } from './shop.types';

const initialState: CollectionsTypes = {
  collections: null,
};

const shopReducer = (state = initialState, action: ShopActionTypes) => {
  switch (action.type) {
    case ActionTypes.updateCollections:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
