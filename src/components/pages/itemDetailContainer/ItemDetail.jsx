import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import { Count } from '../../common/count/count';
import { useCount } from "../../../hooks/useCount"

export const ItemDetail = ({ id, img, title, description, price, stock, onAdd, inicial = 1 }) => {

    const { count, increment, decrement } = useCount(inicial)


    return (
        <Grid container justifyContent="center">
            <Grid item xs={8}>
                <Card sx={{ display: 'flex', marginTop: 4 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 300, height: 250, objectFit: 'cover' }}
                        image={img}
                        alt="Imagen del producto seleccionado"
                    />
                    <CardContent sx={{ paddingLeft: 6, paddingTop: 2 }}>
                        <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }} >
                            {title}
                        </Typography>
                        <Typography variant="body1" style={{ fontSize: '1rem' }}>
                            {description}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                            ${price}
                        </Typography>
                        <Count stock={stock} inicial={inicial} increment={increment} decrement={decrement} count={count} />
                        <Grid container direction="row" alignItems="center" justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => { onAdd(count) }}>
                                    Añadir al carrito
                                </Button>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>

            </Grid>
        </Grid>
    );
}; 
