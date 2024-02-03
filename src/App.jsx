import { NavBar } from "./components/layout/NavBar"
import ItemListContainer from "./components/pages/ItemListContainer"


const App = ()=>{

  return (
    < div>
      <NavBar/>
      <ItemListContainer greeting = "Aca va el contenido"/>
    </div>
  )
}

export default App
