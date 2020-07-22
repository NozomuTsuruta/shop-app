import React, { FC } from 'react';
import { Item } from '../../Types';

import './cart-item.styles.scss';

type Props = {
  item: Item;
};

const CartItem: FC<Props> = ({ item:{imageUrl,name,price,quantity} }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
