/*Este custom hook se va a usar para manejar el desplazamiento 
al principio de la página, ya que cuando navegamos de una pág a otra 
(ej: details a home regresa al final de home en vez del inicio) */

//Se importa el useEffect
import { useEffect } from "react";

//Se importa un useLocation para obtener la ubicacion actual 
import { useLocation } from "react-router-dom";


const useScrollToTop = () => {

  //Se usa useLocation para saber la ubicacion actual (URL)
  const location = useLocation();

  //Se usa el useEffect para que se ejecute al cambiar la ubicacion de la pág.
  useEffect(() => {
    window.scrollTo(0,0)//Se desplaza a la parte superior de la pág
  } ,[location])
}

export default useScrollToTop