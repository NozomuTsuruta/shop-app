import React, { FC, useEffect, useState } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {
  firestore,
  convertColectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

type Props = {} & RouteComponentProps;

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage: FC<Props> = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionsRef = firestore.collection('collections');

    collectionsRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertColectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
