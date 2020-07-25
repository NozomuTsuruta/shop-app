import { ShopObject } from '../../Types';
import { ActionTypes } from './shop.types';
import {
  firestore,
  convertColectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { Dispatch } from 'redux';

export const fetchCollectionsStart = () => ({
  type: ActionTypes.fetchCollectionsStart,
});

export const fetchCollectionsSuccess = (collectionsMap: ShopObject) => ({
  type: ActionTypes.fetchCollectionsSuccess,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage: string) => ({
  type: ActionTypes.fetchCollectionsFailure,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Dispatch) => {
    const collectionsRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionsRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertColectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
