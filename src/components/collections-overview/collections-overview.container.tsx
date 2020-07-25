import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const CollectionOverviewContainer = () => {
  const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

  return <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded}/>;
};

export default CollectionOverviewContainer;
