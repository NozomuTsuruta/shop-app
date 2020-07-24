import React, { FC, useEffect } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {
  firestore,
  convertColectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

type Props = {} & RouteComponentProps;

const Shop: FC<Props> = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionsRef = firestore.collection('collections');

    collectionsRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertColectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
    });
  }, []);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
