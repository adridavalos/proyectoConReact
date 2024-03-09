import { useCount } from "../../../hooks/useCount"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Grid, IconButton, Typography } from "@mui/material";

export const Count = ({ stock, count, increment, decrement }) => {


    return (
        <>
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
                    <IconButton onClick={() => { increment(stock) }} sx={{ color: 'black', fontSize: '1rem' }}>
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>

        </>
    )
}


