import React, { FC } from 'react';
import './collection-preview.styles.scss';
import { Item } from '../../Types';
import CollectionItem from '../colleciton-item/collection-item.component';

type Props = {
  title: string;
  items: Item[];
};

const CollectionPreview: FC<Props> = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map(({id,...otherItemProps}) => (
          <CollectionItem key={id} id={id} {...otherItemProps}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
