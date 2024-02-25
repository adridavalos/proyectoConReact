
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBarContainer } from "./components/layout/navBar/NavBarContainer"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import { Cart } from "./components/common"
import { ItemDetailContainer } from "./components/pages"
import { Count } from "./components/common/count/count"




const App = () => {

  return (
    <>

      <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
