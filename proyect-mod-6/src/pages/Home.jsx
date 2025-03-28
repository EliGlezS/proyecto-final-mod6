import useScrollToTop from "../customHook/useScrollToTop"

//Importar los componentes de Home
import BooksCardsComponent from "../components/BooksCardsComponent"

//Importacion de estilos
import '../styles/home.css'

import SearchBarComponent from '../components/SearchBarComponent'

/*Poner un componente carrusel si da tiempo */

const Home = () => {

  useScrollToTop()  

  return (
    <div className="main-home">
        <SearchBarComponent />
        <BooksCardsComponent />
    </div>
  )
}

export default Home