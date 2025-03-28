/*Este contexto se creará para traer los datos de los libros mockeados*/

//Importaciones

import { GetAllBooks } from "../servicesBooks";
import { useState, useEffect, createContext } from "react";

//Se crea el contexto para los libros 

export const BooksContext = createContext();

//Se crea el proveedor 

export function BooksProvider({children}){

    //Se almacenan los datos del array books en un useState
    const [books, setBooks] = useState([]);

    //Se Simula una llamada a una API en este caso llamamos a los datos mockeados para eso usamos un useEffect
    useEffect(() => {
        setBooks(GetAllBooks());
    }, [])

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

    return(
        <BooksContext.Provider value={{books, handleSearch, handleStockChange, filteredBooks}}>
            {children}
        </BooksContext.Provider>
    )
}
