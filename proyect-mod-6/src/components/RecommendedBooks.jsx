//Importaciones 
import { useContext } from "react"
import { BooksContext } from "../context/BooksContext"
import { Link } from "react-router-dom";

//Importaciones de los estilos 
import '../styles/recommendedBooks.css'


const RecommendedBooks = () => {


    //Se trae los datos de los libros usando el BooksContext
    const {books} = useContext(BooksContext);

    //Se crea una constante para almacenar los id que se quieren mostrar 
    const booksIdRecomended = [1, 7, 11, 32, 35, 47];
     
    //Se quiere encontrar esos id en el array de objetos (books) por lo que se usa un filter y un include para comprobar si existe los id en el array
    const booksRecommended = books.filter((book) => booksIdRecomended.includes(book.id));

  return (

    <section className="section-books-recommended-card">
            
        <h1 className="title-section-books-recommended-cards">Libros Recomendados</h1>

        <div className="cards-container">

            {booksRecommended.map((book) => (

            <div className="books-card" key={book.id}>

                <div className="container-img">
                    <Link to={`/products/${book.id}`}>
                        <img className="books-img" src={book.cover} alt={book.title}/>
                    </Link>
                </div>
                
                <div className="card-info">
                    <div className="book-info-price">
                        <h3>{book.title}</h3>
                        <p>{book.price} €</p>
                    </div>
                    {book.stock ? (
                        <div className="inStock-books"><p>In Stock</p><span className="greenCircle"></span></div>
                        ) : (
                        <div className="noStock-books"><p>Out of stock</p><span className="redCircle"></span></div>
                    )}
                    <p className="see-details-books"><Link to={`/products/${book.id}`}>Ver más</Link></p>
                </div>

            </div>
            ))}
        </div>

    </section>
  )
}

export default RecommendedBooks