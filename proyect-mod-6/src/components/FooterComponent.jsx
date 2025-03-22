import '../styles/footerStyle.css'
import Bluesky from '../img/iconos-RRSS/ico-bluesky.svg'
import Facebook from '../img/iconos-RRSS/ico-facebook.svg'
import Instagram from'../img/iconos-RRSS/ico-instagram.svg'
import Youtube from '../img/iconos-RRSS/ico-youtube.svg'
import LogoFooter from '../img/logos/LuzDeTinta-letras-negro.svg'

const Footer = () => {

    return (
        <footer>
            <div className='newsletter-container'>
                <form>
                    <label>Suscríbete a nuestro boletín
                        <input type='email' placeholder='Escribe tu email' required className='newsletter-email'></input>
                    </label>
                    <button type='submit' className='newsletter-button'>Enviar</button>
                    <label>
                        <input type='checkbox' className='newsletter-checkbox'></input>
                        Acepto la política de privacidad
                    </label>
                </form>
            </div>
            <div className='footer-logo-container'>
                <svg src={LogoFooter}></svg>
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
            <nav className='social-media'>
                <ul>
                    <li>
                        <a href='https://bsky.app/' title='Ir a Bluesky'>
                        <svg src={Bluesky}></svg>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/' title='Ir a Facebook'>
                        <svg src={Facebook}></svg>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/' title='Ir a Instagram'>
                        <svg src={Instagram}></svg>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/' title='Ir a Youtube'>
                        <svg src={Youtube}></svg>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className='info-menu'>
                <ul>
                    <li>Quiénes somos</li>
                    <li>Contacto</li>
                    <li>Condiciones de venta</li>
                </ul>
            </nav>
            <nav className='info-policies'>
                <ul>
                    <li>Aviso legal</li>
                    <li>Política de privacidad</li>
                    <li>Política de cookies</li>
                </ul>
            </nav>
            <small>&copy; Luz de Tinta 2025</small>
        </footer>
    )
}

export default Footer