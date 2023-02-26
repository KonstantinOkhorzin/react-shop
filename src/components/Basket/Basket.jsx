import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import IconButton from '../UI/IconButton';
import Badge from '../UI/Badge';

const Basket = ({ quantity }) => {
  return (
    <>
      <IconButton aria-label='cart'>
        {quantity > 0 && <Badge quantity={quantity} />}
        <MdShoppingCart />
      </IconButton>
    </>
  );
};

export default Basket;
