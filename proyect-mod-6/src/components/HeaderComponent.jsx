import "../styles/headerComponent.css"

const HeaderComponent = () => {

    const toggleMenu = () =>{
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
    };

    return (
        <>
        <div>
            <header>
                <div className = "burger">
                    <button onClick= {toggleMenu} className='boton_menu' id='x'>X</button>
                </div>
                <div className="logo-container">
                    <a href="">
                        <svg src="../img/LuzDeTinta modelo nitido (1).svg" alt="logo"></svg>
                    </a>
                </div>
                <nav id='header-nav' className="header-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Catálogo</a></li>
                        <li><a href="/">Eventos</a></li>
                    </ul>  
                </nav>
                <div className="login-container">
                    <a href="/">
                        Mi cuenta
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div className="search-container">
                    <input type="search" id="menu-search" placeholder="¿Qué libro buscas?"></input> 
                    <div className="cart-img">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
                <div className="cart-container">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </a>
                    <span className="cart-number"></span>
                </div>
            </header>
        </div>
       </>
   );
}

export default HeaderComponent