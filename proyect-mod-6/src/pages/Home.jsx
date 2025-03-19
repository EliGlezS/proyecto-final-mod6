import useScrollToTop from "../customHook/useScrollToTop"

//Importar los componentes de Home
import BooksCardsComponent from "../components/BooksCardsComponent"

//Importacion de estilos
import '../styles/home.css'

/*Poner un componente carrusel si da tiempo */

const Home = () => {

  useScrollToTop()

  return (
    <div className="main-home">
        <BooksCardsComponent/>
    </div>
  )
}

export default Home