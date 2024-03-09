import { Button, Card, CardContent, CardMedia, Grid, Typography, IconButton } from "@mui/material"
import { CartContext } from "../../../context/CartContext"
import { useContext } from "react"
import { useCount } from "../../../hooks/useCount"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export const CartDetail = ({ id, img, title, description, price, cantidad, stock }) => {
    const { removeById } = useContext(CartContext)
    const { count, increment, decrement } = useCount(cantidad)
    return (
        <>
            <Grid container
                direction="column"
                justifyContent="space-evenly"
                alignItems="flex-end">
                <Card sx={{ display: 'flex', marginTop: 4, width: '80%' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '20%', height: '5%', objectFit: 'cover' }}
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
                        <Grid container direction="row" alignItems="center" spacing={1}>
                            <Grid item>
                                <IconButton onClick={decrement} sx={{ color: 'black', fontSize: '1rem' }}>
                                    <RemoveIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" component="span" style={{ fontSize: '1rem' }}>
                                    {count}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={() => { increment(stock), onAdd(count) }} sx={{ color: 'black', fontSize: '1rem' }}>
                                    <AddIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Typography variant="h5" component="div" sx={{ marginTop: 2, fontSize: '1rem' }}>
                            ${price}
                        </Typography>
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
            </Grid>
        </>

    )
}

