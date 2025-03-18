import useScrollToTop from "../customHook/useScrollToTop"

//Importar los componentes de Home
import BooksCardsComponent from "../components/BooksCardsComponent"



const Home = () => {

  useScrollToTop()

  return (
    <div className="main-home">
        <BooksCardsComponent/>
    </div>
  )
}

export default Home