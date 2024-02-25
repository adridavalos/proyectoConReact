import { useCount } from "../../../hooks/useCount"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Typography } from "@mui/material";

export const Count = () => {

    const { count, increment, decrement, reset } = useCount(1)


    return (
        <>
            <div>
                <IconButton onClick={decrement} sx={{ color: 'black', fontSize: '1rem' }}>
                    <RemoveIcon />
                </IconButton>
                <Typography variant="body1" component="span" style={{ fontSize: '1rem' }}>
                    {count}
                </Typography>
                <IconButton onClick={increment} sx={{ color: 'black', fontSize: '1rem' }}>
                    <AddIcon />
                </IconButton>
            </div>
        </>
    )
}


