import React, { FC } from 'react';

import './collection.styles.scss';
import CollectionItem from '../../components/colleciton-item/collection-item.component';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import { Item } from '../../Types';

type Props = {} & RouteComponentProps<{ collectionId: string }>;

const CollectionPage: FC<Props> = ({ match }) => {
  const collection = useSelector(selectCollection(match.params.collectionId));

  return (
    <div className='collection-page'>
      <h2>{collection?.title}</h2>
      <div className='items'>
        {collection?.items.map((item: Item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
