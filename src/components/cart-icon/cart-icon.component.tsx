import React from 'react';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux/root-reducer';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state: rootState) =>selectCartItemsCount(state));
  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
