import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { products } from "../productsMock"
export const AgregarDoc = () => {
    const rellenar = () => {
        let productsCollection = collection(db, "products")
        products.forEach((producto) => {
            addDoc(productsCollection, producto)
        })

    }
    return (
        <button onClick={rellenar}>Agregar Documentos</button>
    )
}
