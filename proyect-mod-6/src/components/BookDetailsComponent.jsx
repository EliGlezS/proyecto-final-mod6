//Importaciones
import { useContext, useEffect, useState } from "react"
// import { ProductsCartContext } from "../context/ProductsCartContext"
import {BooksContext } from "../context/BooksContext"
import { Link, useParams } from "react-router-dom"
import "../styles/bookDetailsComponent.css" 

const BookDetailsComponent = () => {

    //Se usa más adelante el contexto del carrito

    //Se usa el contexto BooksContext 
    const {books} = useContext(BooksContext);

    //Se usa useParams obtener los valores de los parámetros dinámicos como el id, ahora se vuelven accesibles dentro del componente. (id desde la url)
    const {id} = useParams();

    //Se usa useState para almacenar el libro del que se mostrará los detalles 
    const [bookDetails, setBookDetails] = useState(null);

    //Se usa useEffect para renderizar los detalles del libro
    useEffect(() => {
        const book = books.find((item) => item.id === parseInt(id));
        setBookDetails(book);
    }, [id, books]);

    //Si no se encuentra el libro
    if (!bookDetails) {
        return <p>Libro no encontrado</p>;
    }

    console.log(books);

  return (
    <section className="section-book-details">
        
        <h1  className="title-book-details">Detalles: {bookDetails.title}</h1>
        
        <div className="book-container">

            <div className="book-card">

                <div className="container-img">
                    {/*Al ser una ruta dinámica accede a una ruta bookshttp://localhost:5177/books/src/img/booksCover/Libro1.jpg/ y no encuentra el cover*/}
                    <img className="book-img" src={`../${bookDetails.cover}`} data-test={bookDetails.cover} alt={bookDetails.title}/>
                </div>

                <div className="card-info">

                    <div className="book-information">

                        <h3>{bookDetails.title}</h3>
                    
                        <div className="container-author-genre-date">
                            <p>{bookDetails.author}</p>
                            <p>{bookDetails.genre}</p>
                            <p>{bookDetails.publicationDate}</p>
                        </div>

                        <p className="book-price">{bookDetails.price} €</p>

                        <div className="container-synopsis">
                            <p>{bookDetails.synopsis}</p>
                        </div>

                    </div>
                    {/* 
                    {bookDetails.stock ? (
                        <div className="inStock-books"><p>In Stock</p><span className="greenCircle"></span></div>
                        ) : (
                        <div className="noStock-books"><p>Out of stock</p><span className="redCircle"></span></div>
                    )} */}

                    <div className="buttons-book-card-or-disable">
                        {/*Si el libro que estamos mirando está en stock (true) aparece un botón que lo añade al carrito, pero 
                        si stock es false aparece un botón desabilitado */}
                        {bookDetails.stock ? (
                            <button className="button-addCart" >Añadir al Carrito</button>
                        // <button className="button-addCart" onClick={() => addProductCart(productDetails)}>Add to Cart</button>
                        ) : (
                            <button className="button-disable" disabled>No disponible en este momento</button>
                        )}
                        
                        <p className="back-home-from-details">
                            <Link to="/"> 
                                Back Home
                            </Link>   
                        </p>

                    </div>

                </div>

            </div>
            
           <div className="container-reviews">
                <div className="reviews">
                    <ul>{bookDetails.reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                    </ul>
                </div>
           </div>
        </div>

    </section>
  )
}

export default BookDetailsComponent