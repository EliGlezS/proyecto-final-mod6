import { useState } from "react";
import SvgLogo from "../img/logos/LuzDeTinta-completo-v5.svg";
import "../styles/headerStyle.css";

const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        <header>
            <div className = "burger-container">
                <button className='icon-container' id='burger'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className="logo-container">
                <a href="/">
                    <div className="image-logo-container">
                        <img src={SvgLogo} alt="logotipo"/>
                    </div>
                </a>
            </div>
                <nav id='header-nav' className="header-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Recomendados</a></li>
                        <li><a href="/">Eventos</a></li>
                    </ul>  
                </nav>
                <div className="login-container">
                    <a href="/">
                        <p></p>
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div className="cart-container">
                    <a href="">
                        <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        </div>
                    </a>
                    <span className="cart-number" role="number">0</span>
                </div>
        </header>
    )
}
    
export default Header;