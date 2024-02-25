import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom";
import { getProduct } from "../../../productsMock";
import { Loading } from "../../common";

export const ItemDetailContainer = () => {
    const { id } = useParams();//Detecta el parametro que ingresamos en el navegador
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getProduct(parseInt(id))
            .then(res => {
                setItem(res);
                setIsLoading(false);
            })

    }, [])
    return (
        <>
            {isLoading ? <Loading /> : <ItemDetail {...item} />}
        </>
    )
}


