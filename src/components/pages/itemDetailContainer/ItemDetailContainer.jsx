import { useContext, useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom";
import { Loading } from "../../common";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {
    const { id } = useParams();//Detecta el parametro que ingresamos en el navegador
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { addToCart, getTotalQuantityById } = useContext(CartContext)
    const inicial = getTotalQuantityById(id);

    useEffect(() => {
        setIsLoading(true);
        let productsCollection = collection(db, "products");
        let refDoc = doc(productsCollection, id);
        getDoc(refDoc).then((res) => setItem({ ...res.data(), id: res.id })).finally(() => setIsLoading(false))
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

