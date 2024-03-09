import { Box, Button, Grid } from "@mui/material";
import { CartDetail } from "../../common/cartDetail.jsx/CartDetail";
import { CartResumen } from "../../common/CartResumen";
import Swal from "sweetalert2";


export const Cart = ({ cart, clearCart }) => {
    const limpiarConAlerta = () => {
        Swal.fire({
            title: "¿Seguro quieres vaciar el carrito?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "si, vaciar",
            denyButtonText: `No vaciar`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                clearCart();
                Swal.fire("Vaciado!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("El carrito aun tiene productos", "", "info");
            }
        });

    }
    return <div>
        <Grid container>
            <Grid item xs={8} sx={{ paddingRight: 2 }}>
                {
                    cart.map(({ id, img, title, description, price, cantidad, stock }) => {
                        return (
                            <div key={id}>
                                <CartDetail
                                    id={id}
                                    img={img}
                                    title={title}
                                    description={description}
                                    price={price}
                                    cantidad={cantidad}
                                    stock={stock} />
                            </div>
                        )
                    })
                }
            </Grid>
            <Grid item xs={4}>
                <Grid item>
                    <Button onClick={limpiarConAlerta} variant="contained" color="primary" sx={{ marginTop: 2, marginLeft: 3 }} >
                        Vaciar carrito
                    </Button>
                </Grid>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <CartResumen />
                </Box>
            </Grid>
        </Grid>
    </div>


}