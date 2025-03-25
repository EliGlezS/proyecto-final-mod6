import '../styles/footerStyle.css'
import '../styles/variables.css'
import Bluesky from '../img/iconos-RRSS/ico-bluesky-negro.svg'
import Facebook from '../img/iconos-RRSS/ico-facebook-negro.svg'
import Instagram from'../img/iconos-RRSS/ico-instagram-negro.svg'
import LogoFooter from '../img/logos/LuzDeTinta-letras-negro.svg'
import { Link } from "react-router-dom";
import { useState } from 'react'

const Footer = () => {

    const [email, setEmail ] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const checkHandler = () => {
        setIsChecked(!isChecked);
      }
    
    const handleSubmit = () => {

        if(email.trim()==="" || isChecked === false){
            alert("Revisa si has escrito tu email y aceptado las condiciones");
        } else {
            setEmail("");
            setIsChecked(false);        
        }
    };

    // document.addEventListener('submit', (e)=>{e.preventDefault();})

    return (
        <footer>
            <div className='newsletter'>
                <div className='newsletter-container'>
                    <div className='newsletter-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <form>
                        <h3>Suscríbete a nuestro boletín</h3>
                        <input type='email' placeholder='Escribe tu email' className='newsletter-email' maxLength="320" size="20" value={email} onChange={(e) => handleEmail(e)} required='required'></input>
                        <button type='submit' className='newsletter-button' onClick={() => handleSubmit()}>Enviar</button>
                        <label>
                            <input type='checkbox' className='newsletter-checkbox' checked={isChecked} onChange={checkHandler} required='required'></input>
                            Acepto la <a href=''>política de privacidad</a>
                        </label>
                    </form>
                </div>
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