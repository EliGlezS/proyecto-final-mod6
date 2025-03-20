import { useState } from "react";
import { NavLink } from "react-router-dom";
import SvgLogo from "../img/logos/LuzDeTinta-completo-v5.svg";
import "../styles/headerStyle.css";

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    }

    return (
        <header>
            <div className = "burger-container">
                <button className='icon-container' id='burger' onClick={handleShowNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className="logo-container">
                <NavLink to="/">
                    <div className="image-logo-container">
                        <img src={SvgLogo} alt="logotipo"/>
                    </div>
                </NavLink>
            </div>
                <nav id='header-nav' className={`header-nav  ${showNavbar && "active"}`}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/recommended">Recomendados</NavLink></li>
                        <li><NavLink to="/events">Eventos</NavLink></li>
                    </ul>  
                </nav>
                <div className="login-container">
                    <NavLink to="/login">
                        <p></p>
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                    </NavLink>
                </div>
                <div className="cart-container">
                    <NavLink to="/cart">
                        <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        </div>
                    </NavLink>
                    <span className="cart-number">0</span>
                </div>
        </header>
    )
}
    
export default Header;