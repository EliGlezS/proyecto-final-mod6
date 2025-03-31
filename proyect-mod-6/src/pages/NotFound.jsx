import '../styles/notFound.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const NotFound = () => {

    const [tyMessage, setTyMessage] = useState(false);

    const handleShowTyMessage = () => {
        setTyMessage(!tyMessage);
    }

    return (
        <div className='notfound'>
            <div className='notfound-container'>
                <h1>404</h1>
                <h2>Oooh nos hemos perdido...</h2>
                <h3 className='notfound-link'>
                    <Link to="/">Volvamos al principio</Link>
                </h3>
                <div className='notfound-ty'>
                    {tyMessage ? (<h3 className='ty-message'>Cris, muchas gracias por habernos traído hasta aquí!</h3>) : (<h3 className='ty-message'>...o mira qué pasa si haces clic &rarr;</h3>) }
                    <button className='notfound-button' onClick={handleShowTyMessage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" role="img" focusable="false" className="notfound-heart">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound