import { useContext, useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom";
import { getProduct } from "../../../productsMock";
import { Loading } from "../../common";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

export const ItemDetailContainer = () => {
    const { id } = useParams();//Detecta el parametro que ingresamos en el navegador
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { addToCart, getTotalQuantityById } = useContext(CartContext)
    const inicial = getTotalQuantityById(+id);
    useEffect(() => {
        getProduct(parseInt(id))
            .then(res => {
                setItem(res);
                setIsLoading(false);
            })

    }, [id])
    const onAdd = (cantidad) => {

        addToCart({ ...item, cantidad });

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1500
        });


    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <ItemDetail {...item} onAdd={onAdd} inicial={inicial} />
        </>
    )
}

