//Importaciones 
import { useState, createContext } from "react";

//Se crea el contexto para el modal 
export const ModalContext = createContext();

//Proveedor del contexto

export function ModalProvider({ children }) {

    //useState para manejar si el moda está visible o no 
    const [showModal, setShowModal] = useState(false);

    //función para abrir el modal 
    const openModal = () => {
        setShowModal(true);
    }

    //función para cerrar el modal 
    const closeModal = () => {
        setShowModal(false);
    }

    return(
        <ModalContext.Provider value={{ showModal, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )

}