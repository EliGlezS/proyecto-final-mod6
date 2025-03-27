import useScrollToTop from "../customHook/useScrollToTop"

//Importar los componentes de Home
import BooksCardsComponent from "../components/BooksCardsComponent"

//Importacion de estilos
import '../styles/home.css'

import { BooksContext } from '../context/BooksContext'
import SearchBarComponent from '../components/SearchBarComponent'
import { useContext, useState } from "react"

/*Poner un componente carrusel si da tiempo */

const Home = () => {

  useScrollToTop()

  const { books } = useContext(BooksContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [onlyInStock, setOnlyInStock] = useState(false);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleStockChange = (inStock) => {
        setOnlyInStock(inStock);
    };

    const filteredBooks = books.filter((book) => {
        const matchesSearchQuery = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStockStatus = onlyInStock ? book.stock > 0 : true;
        return matchesSearchQuery && matchesStockStatus;
    });


  return (
    <div className="main-home">
        <SearchBarComponent onSearch={handleSearch} onStockChange={handleStockChange} />
        <BooksCardsComponent books={filteredBooks} />
    </div>
  )
}

export default Home