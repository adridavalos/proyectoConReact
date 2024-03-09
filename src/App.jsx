
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/pages"
import { Layout } from "./components/layout/Layout"
import { ErrorPage } from "./components/pages/ErrorPage"
import { CartContextProvider } from "./context/CartContext"
import { CartContainer } from "./components/pages/cart/CartContainer"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
