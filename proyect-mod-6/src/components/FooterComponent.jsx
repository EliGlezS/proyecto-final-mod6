import '../styles/footer.css'
import '../styles/variables.css'
import Bluesky from '../img/iconos-RRSS/ico-bluesky-negro.svg'
import Facebook from '../img/iconos-RRSS/ico-facebook-negro.svg'
import Instagram from'../img/iconos-RRSS/ico-instagram-negro.svg'
import LogoFooter from '../img/logos/LuzDeTinta-letras-negro.svg'
import { Link } from "react-router-dom";
import { useState } from 'react'

const Footer = () => {

    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      };

    const [email, setEmail ] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState("");
    const [showFooterModal, setShowFooterModal] = useState(false);

    // useEffect(() => {
    //     console.log("Estado de error actualizado:", error);
    // }, [error]); 

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const checkHandler = () => {
        setIsChecked(!isChecked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!isEmailValid(email)) {
            setError("* Formato de correo no válido");
        } else if (email.trim() === "" || !isChecked) {
            setError("* Revisa si has aceptado las condiciones");
        } else {
            setError("");
            setEmail("");
            setIsChecked(false);
            setShowFooterModal(true);
            console.log("Modal debería abrirse");

            // setTimeout(() => {
            //     closeModal();
            // }, 4000);
        }
    };

    const handleCloseFooterModal = () => {
        setShowFooterModal(false);
        setIsReadOnly(false);
    }

    return (
        <footer>
            <div className={!showFooterModal ? `newsletter` : `newsletter newsletter-modal`}>
                <div className='newsletter-container'>
                    <div className='newsletter-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <h3>Suscríbete a nuestro boletín</h3>
                    <input 
                        type='email' 
                        placeholder='Escribe tu email' 
                        className='newsletter-email' 
                        maxLength="320" 
                        size="20" 
                        value={email} 
                        onChange={handleEmail}
                    />
                    <button type='submit' className='newsletter-button' onClick={handleSubmit}>Enviar</button>
                    <label>
                        <input 
                            type='checkbox' 
                            className='newsletter-checkbox' 
                            checked={isChecked} 
                            onChange={checkHandler}
                        />
                        Acepto la <a href=''>política de privacidad</a>
                    </label>
                    {error ? <p className="error-message">{error}</p> : <p className="error-hidden">Error</p>}
                </form>
                </div>
                {showFooterModal && (
                <div className={`modal-footer ${showFooterModal ? 'show-footer' : ''}`}>
                <button className="modal-close-button" onClick={handleCloseFooterModal}>Cerrar</button>
                <div className='modal-message'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="modal-heart">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p>En breve recibirás un correo de confirmación</p>
                </div>
            </div>
        )}
            </div>
            <div className='footer-info'>
                    <div className='footer-logo-container'>
                        <img src={LogoFooter} alt="logotipo"/>
                    </div>
                <div className='address'>
                <address>
                    <div>
                        <span>Editorial Luz de Tinta</span>
                    </div>
                    <div>
                        <span>Callejón Diagon, 3</span>
                    </div>
                    <div>
                        <span>38005 Santa Cruz de Tenerife</span>
                    </div>
                    <div>
                        <span>+1 (555) 123-4567</span>
                    </div>
                </address>
                </div>
                <nav className='info-menu'>
                    <ul>
                        <li>Quiénes somos</li>
                        <li>
                            <Link to="/contact">Contacto</Link>
                        </li>
                        <li>Condiciones de venta</li>
                </ul>
                </nav>
                <nav className='policies'>
                    <ul>
                        <li>Aviso legal</li>
                        <li>Política de privacidad</li>
                        <li>Política de cookies</li>
                    </ul>
                </nav>
                <nav className='social-media'>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/' title='Ir a Facebook'>
                            <img src={Facebook} alt="Facebook"/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/' title='Ir a Instagram'>
                            <img src={Instagram} alt="Instagram"/>
                            </a>
                        </li>
                        <li>
                            <a href='https://bsky.app/' title='Ir a Bluesky'>
                            <img src={Bluesky} alt="Bluesky"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='copyright-container'>
                <div className='copyright'>
                <small>&copy; Luz de Tinta 2025</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer
