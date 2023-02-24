import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Basket = () => {
    return (
      <IconButton aria-label='cart'>
        <Badge badgeContent={0} color='warning'>
          <ShoppingCartIcon color='secondary' />
        </Badge>
      </IconButton>
    );
};

export default Basket;