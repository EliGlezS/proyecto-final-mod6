//Importaciones

import { useContext } from "react"
import { BooksContext } from "../context/BooksContext"
import usePagination from "../customHook/usePagination"

//Importaciones de los estilos 
import '../styles/pagination.css'
import '../styles/booksCards.css'

const BooksCardsComponent = () => {

    //Se trae los datos de los libros usando el BooksContext
    const {books} = useContext(BooksContext);

    //Se trae los datos necesarios para la paginación desde el customHook creado
    const {currentItems, currentPage, totalPages, nextPage, prevPage } = usePagination(10, books);

  return (
    <section className="section-books-card">
        
    <h1 className="title-section-books-cards">Products on sale</h1>

    <div className="cards-container">

        {currentItems.map((book) => (

        <div className="books-card" key={book.id}>

            <div className="container-img">
                <img className="books-img" src={book.cover} alt={book.title}/>
            </div>
            
            <div className="card-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.genre}</p>
                <p>{book.price} $</p>
                {book.stock ? (
                    <div className="inStock-books"><p>In Stock</p><span className="greenCircle"></span></div>
                    ) : (
                    <div className="noStock-books"><p>Out of stock</p><span className="redCircle"></span></div>
                )}
                <p className="see-details-books">See details</p>
                {/* entre el p va <Link to={`/products/${book.id}`}>See details</Link> */}
            </div>

        </div>
        ))}
    </div>
    

    <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button onClick={nextPage} disabled={currentPage === 7}>Next</button>
    </div>

</section>
  )
}

export default BooksCardsComponent