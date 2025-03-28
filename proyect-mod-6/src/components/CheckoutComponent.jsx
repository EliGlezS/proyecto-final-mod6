//Importaciones
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContextCart"

import "../styles/checkoutComponent.css"
import logoBizum from '../img/paymentLogos/Bizum_idSDhC8lZu_1.png'

const CheckoutComponent = () => {

    //Se usa el contexto del modal 
    const {showModal, openModal, closeModal} = useContext(ModalContext);

   
  return (
    <div className="general-container-checkout">

        <div className="container-checkout">
            
            <div className="checkout-message-payment-logos">
                <h2>¡Gracias por elegirnos!</h2>
                <p>Por favor, procede con el pago para finalizar</p>
                <p>Elige tu método de pago:</p>

                <div className="container-icons-checkout">
                    <div onClick={openModal} className="container-icon-masterCard">
                        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M97.5288 54.6562V53.7384H97.289L97.0137 54.3698L96.7378 53.7384H96.498V54.6562H96.6675V53.9637L96.9257 54.5609H97.1011L97.36 53.9624V54.6562H97.5288ZM96.0111 54.6562V53.8947H96.318V53.7397H95.5361V53.8947H95.843V54.6562H96.0111Z" fill="#F79E1B"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M49.6521 58.595H70.3479V21.4044H49.6521V58.595Z" fill="#FF5F00"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M98.2675 40.0003C98.2675 53.063 87.6791 63.652 74.6171 63.652C69.0996 63.652 64.0229 61.7624 60 58.5956C65.5011 54.2646 69.0339 47.5448 69.0339 40.0003C69.0339 32.4552 65.5011 25.7354 60 21.4044C64.0229 18.2376 69.0996 16.348 74.6171 16.348C87.6791 16.348 98.2675 26.937 98.2675 40.0003Z" fill="#F79E1B"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M50.966 40.0003C50.966 32.4552 54.4988 25.7354 59.9999 21.4044C55.977 18.2376 50.9003 16.348 45.3828 16.348C32.3208 16.348 21.7324 26.937 21.7324 40.0003C21.7324 53.063 32.3208 63.652 45.3828 63.652C50.9003 63.652 55.977 61.7624 59.9999 58.5956C54.4988 54.2646 50.966 47.5448 50.966 40.0003Z" fill="#EB001B"/>
                        </svg>
                    </div>

                    <div onClick={openModal} className="container-icon-visa">
                        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M86.6666 44.9375L90.3238 35.0625L92.3809 44.9375H86.6666ZM100.952 52.8375L95.8086 27.1625H88.7383C86.3525 27.1625 85.7723 29.0759 85.7723 29.0759L76.1904 52.8375H82.8868L84.2269 49.0244H92.3947L93.148 52.8375H100.952Z" fill="#182E66"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M77.1866 33.5711L78.0952 28.244C78.0952 28.244 75.2896 27.1625 72.3648 27.1625C69.2031 27.1625 61.6955 28.5638 61.6955 35.3738C61.6955 41.7825 70.5071 41.8621 70.5071 45.2266C70.5071 48.5912 62.6034 47.9901 59.9955 45.8676L59.0476 51.4362C59.0476 51.4362 61.8919 52.8375 66.2397 52.8375C70.5869 52.8375 77.1467 50.5544 77.1467 44.3455C77.1467 37.8964 68.2552 37.296 68.2552 34.4921C68.2552 31.6882 74.4602 32.0484 77.1866 33.5711Z" fill="#182E66"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M54.6517 52.8375H47.6191L52.0144 27.1625H59.0477L54.6517 52.8375Z" fill="#182E66"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M42.3113 27.1625L35.9217 44.8213L35.1663 41.0185L35.167 41.0199L32.9114 29.4749C32.9114 29.4749 32.6394 27.1625 29.7324 27.1625H19.1709L19.0476 27.5966C19.0476 27.5966 22.2782 28.2669 26.057 30.5326L31.8793 52.8375H38.8617L49.5238 27.1625H42.3113Z" fill="#182E66"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M34.2857 40.9875L32.1534 29.4695C32.1534 29.4695 31.8963 27.1625 29.1482 27.1625H19.1641L19.0476 27.5955C19.0476 27.5955 23.8467 28.6432 28.4504 32.5652C32.8505 36.3145 34.2857 40.9875 34.2857 40.9875Z" fill="#182E66"/>
                        </svg>
                    </div>

                    <div onClick={openModal} className="container-icon-paypal">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#1565C0" d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"></path>
                            <path fill="#039BE5" d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"></path>
                            <path fill="#283593" d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"></path>
                        </svg>
                    </div>

                    <div onClick={openModal} className="container-icon-bizum">
                        <img src={logoBizum} alt="bizum-logo" />
                    </div>
                        
                </div>

                <p className="p-button"><Link to="/cart">Volver a la cesta</Link></p>

            </div>
        </div>

        {/*Se agrega el modal*/}

        {showModal && (
            <div className={`modal-checkout ${showModal ? 'show' : ''}`}>
                <button className="modal-close-button" onClick={closeModal}>x</button>
                <p>En unos instantes, serás redirigido a la pasarela de pago para completar tu compra</p>
            </div>
        )}

    </div>
    
  )
}

export default CheckoutComponent