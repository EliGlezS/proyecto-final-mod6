//Importaciones
import { useState, useEffect, useContext } from "react"
import { ProductsCartContext } from "../context/ProductsCartContext"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useScrollToTop from "../customHook/useScrollToTop";
import { UserContext } from "../context/UserContext";

//Importación del estilado del componente
import '../styles/cartListComponent.css'


const CartListComponent = () => {

    //Se usa el contexto creado para el carrito de compra
    const {productsCart, deleteProductCart, increaseProductQuantity, decreaseProductQuantity} = useContext(ProductsCartContext);

    //Se usa el contexto del usuario
    const {isLoggedIn} = useContext(UserContext);

    //Se crea un useState para almacenar el precio
    const [price, setPrice] = useState(0);
   
    //Se usa useNavigate
    const navigate = useNavigate();

    //Se crea la función para el calculo del precio total
    useEffect(() => {
        if (productsCart.length > 0) {
            setPrice(productsCart.reduce((acc, currentValue) => acc + currentValue.price * currentValue.quantity, 0));
        }
    },[productsCart]);

    //Handle para volver a home y ver los productos
    const handleGoProducts = () => {
        navigate("/");
    }

    //Función para manejar el checkout 
    const handleCheckout = () => {
        if (!isLoggedIn) {
            //Si no está logeado, el usuario se dirige a login 
            navigate("/login");
        }else{
            //Si está logeado se dirige a la pág de pago y visualiza el mensaje de procede al pago gracias por su compra con el name del usuario
            navigate("/checkout");
        }
    }

    //Se usa el custom Hook para hacer scroll al inicio
    useScrollToTop();

    return (
        <section className="section-shoppingCart">
            
            <h1 className="title-shoppingCart">Mi Cesta</h1>

            {productsCart.length < 1 ? (
                <div className="cart-list-empty">

                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> 
                        </svg>
                    </div>

                    <div className="container-message-buttons">
                        <p>Tu cesta está vacía</p>
                        <button onClick={handleGoProducts}>Volver a la Tienda</button>
                    </div>

                </div>

            ) : (
            
            <div className="cart-list-full">

                {productsCart.map((product, index) => (

                <div className="cart-product-img-info-buttons" key={index}>
                    
                    <div className="container-img"> 
                        <img src={`../${product.cover}`} alt={product.title}/>
                    </div>
                

                    <div className="cart-product-info-buttons">

                        <div className="cart-product-info">
                            <p className="cart-product-info-name">{product.title}</p>
                            <p>{product.price} €</p>
                        </div>

                        <div className="cart-product-buttons">

                            <div className="cart-product-quantity">
                                <button onClick={() => decreaseProductQuantity(product)}>-</button>
                                <p>{product.quantity}</p>
                                <button onClick={() => increaseProductQuantity(product)}>+</button>
                            </div>

                            <button className="delete-button" onClick={() => deleteProductCart(product.id)}>Delete Product</button>
                        </div>

                    </div>
                        
                </div>
                ))}

                <div className="container-total-price-buttons">

                    <div className="container-price">
                        <h3>Total</h3>
                        <p>{price.toFixed(2)} €</p>
                    </div>

                    <p className="continue-shopping-button">
                        <Link to="/"> 
                            Seguir Comprando
                        </Link>
                    </p>

                    <button onClick={handleCheckout}>Finalizar Compra</button>
                </div>


            </div>

            )

                  
            }  

        </section>
    )
}

export default CartListComponent