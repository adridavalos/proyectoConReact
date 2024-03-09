import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../../context/CartContext';

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems()
  return (
    <IconButton color="black" aria-label="add to shopping cart">
      <Badge badgeContent={totalItems} color="error"
        sx={{ '& .MuiBadge-badge': { fontSize: '1.2rem', height: 'auto', minWidth: 'auto' } }}>
        <ShoppingCartIcon fontSize='large' />
      </Badge>
    </IconButton>
  );
};