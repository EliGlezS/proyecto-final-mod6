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

    return(
        <BooksContext.Provider value={{books}}>
            {children}
        </BooksContext.Provider>
    )
}
