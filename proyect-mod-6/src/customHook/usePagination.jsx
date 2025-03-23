/*Custom hook creado para paginación de los productos que se ven en home*/

import { useState } from "react";

const usePagination = (itemsXPage, items) => {

    //Se usa useState para la paginación
    const [currentPage, setCurrentPage] = useState(1);//empieza en 1

    //Se calcula el indice inicial y final para los productos que deben mostrarse en esa pág
    const indexLastItem = currentPage * itemsXPage; //El cálculo de indexLastItem te da el índice del último producto que quieres mostrar en esa página.
    const inexFirstItem = indexLastItem - itemsXPage; //El cálculo de indexFirstItem te da el índice del primer producto que quieres mostrar en esa página.

    //Se obtiene los productos que se deben mostrar en la pag actual usando los limites anteriores
    const currentItems = items.slice(inexFirstItem, indexLastItem);

    //Se calcula el total de pág
    const totalPages = Math.ceil(items.length/itemsXPage);

    //Manejador para cambiar a la siguiente pág
    const nextPage = () =>{
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    //Manejador para pág anterior
    const prevPage = () =>{
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

  return { currentItems, currentPage, totalPages, nextPage, prevPage }

}

export default usePagination