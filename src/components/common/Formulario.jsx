import { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";
import { Button, Grid, TextField } from "@mui/material";

export const Formulario = ({ handleSubmit, handleChange, errors }) => {
    const { clearCart } = useContext(CartContext);
    const limpiarConAlerta = () => {
        Swal.fire({
            title: "¿Seguro quieres vaciar el carrito?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "si, vaciar",
            denyButtonText: `No vaciar`
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire("Vaciado!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("El carrito aun tiene productos", "", "info");
            }
        });

    }
    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ marginTop: 2, paddingRight: 23 }}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Nombre"
                        variant="outlined"
                        name="nombre"
                        id="nombre"
                        onChange={handleChange}
                        error={errors.nombre ? true : false}
                        helperText={errors.nombre}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Teléfono"
                        variant="outlined"
                        name="telefono"
                        id="telefono"
                        onChange={handleChange}
                        error={errors.telefono ? true : false}
                        helperText={errors.telefono}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        error={errors.email ? true : false}
                        helperText={errors.email}

                    />
                </Grid>
                <Grid item>
                    <Button onClick={limpiarConAlerta} variant="outlined" color="primary" sx={{
                        marginRight: 2, marginLeft: 5
                    }} >
                        Vaciar carrito
                    </Button>
                </Grid>
                <Grid item >
                    <Button type="submit" variant="contained" color="primary">
                        Terminar Compra
                    </Button>
                </Grid>

            </Grid>
        </form>
    )
}
