import { Box, Grid } from "@mui/material";
import { CartDetail } from "../../common/cartDetail.jsx/CartDetail";
import { CartResumen } from "../../common/CartResumen";
import { Formulario } from "../../common/Formulario";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup"


export const Cart = ({ cart, addToCart, removeById }) => {

    const { getTotalPrice, clearCart } = useContext(CartContext);
    let total = getTotalPrice()

    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            nombre: "",
            telefono: "",
            email: "",
        },
        onSubmit: (userInfo) => {
            let order = {
                buyer: userInfo,
                items: cart,
                total: total,
            }
            let orderCollection = collection(db, "orders");
            addDoc(orderCollection, order)
                .then((res) => {
                    Swal.fire({
                        title: "¡Gracias por tu compra en Little Bunny! ",
                        text: `Tu código de seguimiento es: ${res.id}`,
                        icon: "success",
                    });
                    clearCart();
                })
            cart.forEach((product) => {

                let refDoc = doc(db, "products", product.id);

                updateDoc(refDoc, { stock: product.stock - product.cantidad })

            });

        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Campo requerido").min(3, "Debe tener al menos 3 caracteres"),
            email: Yup.string().email("Debe ingresar un email valido").required("Campo requerido"),
            telefono: Yup.string().required("Campo requerido").matches(/^\d{10}$/, 'El número de teléfono debe tener 10 dígitos numéricos'),
        }),
        validateOnChange: false,

    })

    return <div>
        <Grid container>
            <Grid item xs={8} sx={{ paddingRight: 2 }}>
                {
                    cart.map(item => {
                        return <CartDetail
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                            removeById={removeById}
                        />
                    })
                }
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <CartResumen />
                </Box>
                <Formulario handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
            </Grid>
        </Grid>
    </div>


}