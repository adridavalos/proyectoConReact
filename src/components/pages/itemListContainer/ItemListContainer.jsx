import { useEffect, useState } from "react";
import { ItemList } from "./ItemList"
import { Loading } from "../../common";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = () => {
  const { category } = useParams();
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta;

    if (category) {
      consulta = query(productsCollection, where("categories", "array-contains", category));

    } else {
      consulta = productsCollection;
    }


    getDocs(consulta).then(res => {
      let productosDB = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      })
      setProduct(productosDB);
    }).finally(() => setIsLoading(false));

  }, [category]);

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <ItemList items={product} />
    </>
  )
}

export default ItemListContainer
