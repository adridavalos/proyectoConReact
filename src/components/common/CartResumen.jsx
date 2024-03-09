import { Card, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

export const CartResumen = () => {
    const { getTotalItems, getTotalPrice } = useContext(CartContext);
    return (

        <Card sx={{ width: '70%', marginTop: 3 }}>
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Resumen de compra</Typography>
                <Typography variant="body1" sx={{ marginTop: 2, paddingLeft: 2 }}>Productos: {getTotalItems()}</Typography>
                <Typography variant="body1" sx={{ paddingLeft: 2 }}>Precio total: ${getTotalPrice()}</Typography>
            </CardContent>
        </Card>


    )
}
