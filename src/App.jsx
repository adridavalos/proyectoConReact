
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import { Cart } from "./components/common"
import { ItemDetailContainer } from "./components/pages"
import { Layout } from "./components/layout/Layout"
import { ErrorPage } from "./components/pages/ErrorPage"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
