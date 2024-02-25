import { useEffect, useState } from "react";
import { ItemList } from "./ItemList"
import { getProducts } from "../../../productsMock"
import { Loading } from "../../common";
import { useParams } from "react-router-dom";





const ItemListContainer = () => {
  const { category } = useParams();
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(res => {

        if (category) {
          const productsFilter = res.filter(product => product.categories.includes(category));
          setProduct(productsFilter);
        } else {
          setProduct(res);
        }
        setIsLoading(false);
      })

  }, [category])
  return (
    <>
      {
        isLoading ? <Loading /> : <ItemList items={product} />
      }
    </>
  )
}

export default ItemListContainer
