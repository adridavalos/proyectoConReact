import { ItemDetailContainer, ItemListContainer } from "../components/pages";
import { CartContainer } from "../components/pages/cart/CartContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categoria",
    path: "/category/:category",
    Element: ItemListContainer,
  },
  {
    id: "carrito",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "detalle",
    path: "/item/:id",
    Element: ItemDetailContainer,
  },
];
