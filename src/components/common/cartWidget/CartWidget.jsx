import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = ({ cantidad }) => {
  return (
    <IconButton color="black" aria-label="add to shopping cart">
      <Badge badgeContent={cantidad} color="error"
        sx={{ '& .MuiBadge-badge': { fontSize: '1.2rem', height: 'auto', minWidth: 'auto' } }}>
        <ShoppingCartIcon fontSize='large' />
      </Badge>
    </IconButton>
  );
};