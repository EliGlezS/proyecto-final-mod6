import '../styles/notFound.css'


const NotFound = () => {

    return (
        <div className='notfound'>
            <div className='notfound-container'>
                <h1>404</h1>
                <h2>No hemos encontrado lo que buscabas</h2>
                <div className='notfound-ty'>
                    <h3>Cristi, muchas gracias por traernos hasta aquí!</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="notfound-heart">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
            </div>
        </div>
    )

}

export default NotFound