import { Action } from 'redux';
import { ShopObject } from '../../Types';

export const ActionTypes = {
  fetchCollectionsStart: 'FETCH_COLLECTIONS_START',
  fetchCollectionsSuccess: 'FETCH_COLLECTIONS_SUCCESS',
  fetchCollectionsFailure: 'FETCH_COLLECTIONS_FAILURE',
} as const;

export type CollectionsTypes = {
  collections: ShopObject | null;
  isFetching: boolean;
  errorMessage: string|undefined
};

interface FetchCollectionsStartAction extends Action {
  type: typeof ActionTypes.fetchCollectionsStart;
}

interface FetchCollectionsSuccessAction extends Action {
  type: typeof ActionTypes.fetchCollectionsSuccess;
  payload: ShopObject;
}

interface FetchCollectionsFailureAction extends Action {
  type: typeof ActionTypes.fetchCollectionsFailure;
  payload: string;
}

export type ShopActionTypes =
  | FetchCollectionsStartAction
  | FetchCollectionsSuccessAction
  | FetchCollectionsFailureAction;
