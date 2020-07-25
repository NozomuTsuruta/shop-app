import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
import { match } from 'react-router-dom';

type Props={
  match: match
}

const CollectionPageContainer:FC<Props> = (props) => {
  const CollectionPageWithSpinner = WithSpinner(CollectionPage);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

  return <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>;
};

export default CollectionPageContainer;
