import { Button, Card, CardContent, CardMedia, Grid, Typography, IconButton } from "@mui/material"
import { useCount } from "../../../hooks/useCount"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';


export const CartDetail = ({ item, addToCart, removeById }) => {
    const { id, img, title, description, price, cantidad, stock } = item
    const { count, increment, decrement } = useCount(cantidad)

    useEffect(() => {
        addToCart({ ...item, cantidad: count })
    }, [count]);


    return (
        <>
            <Grid container
                direction="column"
                justifyContent="space-evenly"
                alignItems="flex-end">
                <Card sx={{ display: 'flex', marginTop: 4, width: '80%' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '30%', height: 200, objectFit: 'cover' }}
                        image={img}
                        alt="Imagen del producto seleccionado"
                    />
                    <CardContent sx={{ paddingLeft: 6, paddingTop: 2 }}>
                        <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }} >
                            {title}
                        </Typography>
                        <Typography variant="body1" style={{ fontSize: '0.8rem' }}>
                            {description}
                        </Typography>
                        <Grid container direction="row" alignItems="center" spacing={1} sx={{ display: 'flex', marginTop: 1 }}>
                            <Grid item>
                                <IconButton onClick={() => { decrement(stock) }} sx={{ color: 'black', fontSize: '1rem' }}>
                                    <RemoveIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" component="span" style={{ fontSize: '1rem' }}>
                                    {count}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={() => increment(stock)} sx={{ color: 'black', fontSize: '1rem' }}>
                                    <AddIcon />
                                </IconButton>
                            </Grid>
                            <Typography variant="h5" sx={{ marginTop: 1, paddingRight: 18, paddingLeft: 18, fontSize: '1rem' }}>
                                ${price}
                            </Typography>
                            <Typography variant="h5" sx={{ marginTop: 1, fontSize: '1rem' }}>
                                ${price * cantidad}
                            </Typography>
                        </Grid>


                        <Button onClick={() => removeById(id)}
                            sx={{

                                color: 'blue',
                                bgcolor: 'transparent',
                                border: 'none',
                                '&:hover': {
                                    bgcolor: 'transparent',
                                    boxShadow: 'none',
                                },
                            }}
                        >
                            Eliminar
                        </Button>
                    </CardContent>
                </Card>
            </Grid >
        </>

    )
}

