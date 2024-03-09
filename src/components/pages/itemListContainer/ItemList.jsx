import { ProductCard } from '../../common';
import Grid from '@mui/material/Grid';

export const ItemList = ({ items }) => {
    return <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
        {
            items.map(({ id, img, title, description, price }) => {
                return (
                    <Grid key={id} item>
                        <ProductCard
                            id={id}
                            img={img}
                            title={title}
                            description={description}
                            price={price} />
                    </Grid>
                )
            })
        }
    </Grid>
}

