import { ActionTypes, ShopActionTypes, CollectionsTypes } from './shop.types';

const initialState: CollectionsTypes = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = initialState, action: ShopActionTypes) => {
  switch (action.type) {
    case ActionTypes.fetchCollectionsStart:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.fetchCollectionsSuccess:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      }
    case ActionTypes.fetchCollectionsFailure:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
