import React, { FC, useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

type Props = {} & RouteComponentProps;

const ShopPage: FC<Props> = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCollectionsStartAsync())
  },[])


  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
