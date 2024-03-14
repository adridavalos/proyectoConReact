import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';


export const ProductCard = ({ id, img, title, description, price }) => {

    return (
        <Grid item sx={{ paddingLeft: 6, paddingTop: 4 }}>
            <Card sx={{ maxWidth: 400 }}>
                <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: 'black' }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={img}
                            alt="ropa de Bebe"
                        />
                        <CardContent               >
                            <Typography gutterBottom variant="h4" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                ${price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </Grid>
    )
}



