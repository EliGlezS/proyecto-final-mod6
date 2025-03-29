import '../styles/contact.css'
import { useState, useContext } from 'react';
import { ModalContext } from "../context/ModalContextCart"

const ContactComponent = () => {

    const [name, setName] = useState("");
    const [email, setEmail ] = useState("");
    const [message, setMessage ] = useState("");
    const [isReadOnly, setIsReadOnly] = useState(false);
    const [isComplete, setIsComplete] = useState(true);

    const {showModal, openModal, closeModal} = useContext(ModalContext);

    const handleName = (e) => {
      setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
      }
    
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = () => {

        if(name.trim()==="" || email.trim()==="" || message.trim()===""){
           setIsComplete(false);
        } else {
            setName("");
            setEmail("");
            setMessage("");
            setIsReadOnly(true);
            setIsComplete(true);
            
            openModal();
            }
    }

    const handleCloseModal = () => {
        closeModal();
        setIsReadOnly(false);
    }


    return (
        <section className="contact">
            <div className={!showModal ? `contact-container` : `contact-container contact-modal`}>
                <h1>Contacto</h1>
                <form className="contact-form">
                    <div className="form-field">
                        {/* {!isComplete ? <p className='alert-message'>* Revisa si has rellenado todo el formulario</p> : ""} */}
                        <p className={!isComplete ? 'alert-message' : 'message-hidden'}>
                            * Revisa si has rellenado todo el formulario
                        </p>
                        <label className="form-label" htmlFor="name">
                        Nombre
                        </label>
                        <input className="form-input" type="text" id="name" name="name" value={name} size="20" onChange={(e) => handleName(e)} autoFocus maxLength="50" required="required" disabled={isReadOnly}/>
                    </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="email">
                        Email
                        </label>
                        <input className="form-input" type="email" id="email" name="email" size="20" maxLength="320" value={email} onChange={(e) => handleEmail(e)} required="required" disabled={isReadOnly} />
                        </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="message">
                        Mensaje
                        </label>
                        <textarea className="form-textarea" id="message" name="message" cols="20" rows="6" value={message} onChange={(e) => handleMessage(e)} required minLength="5" maxLength="1024" disabled={isReadOnly}/>
                    </div>
                    <div className="form-button-container">
                        <button className="form-button" type="submit" onClick={() => handleSubmit()} disabled={isReadOnly} >
                        Enviar
                        </button>
                    </div>
                </form>
                <div className="contact-card">
                    <div className='contact-info'>
                        <div className="contact-phone">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p>+1 (555) 123-4567</p>
                            </div>
                        <div className="contact-email">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p>hola@luzdetinta.es</p>
                            </div>
                    </div>
                    <nav className='social-media'>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/' title='Ir a Facebook'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.14"
                            height="30"
                            viewBox="0 0 16.14 30"
                            >
                            <path
                            id="Icon_zocial-facebook"
                            fill=""
                            d="M13.257 16.11v-5.729h4.621V7.5A7.54 7.54 0 0 1 19.9 2.19 6.44 6.44 0 0 1 24.807 0H29.4v5.73h-4.59a1.01 1.01 0 0 0-.81.495 2 2 0 0 0-.36 1.215v2.94h5.76v5.729h-5.76V30h-5.76V16.11Z"
                            data-name="Icon zocial-facebook"
                            transform="translate(-13.257)"
                            ></path>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/' title='Ir a Instagram'>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                > 
                                <path
                                id="Icon_simple-instagram"
                                fill=""
                                d="M15 0c-4.075 0-4.584.019-6.184.09a11 11 0 0 0-3.641.7 7.35 7.35 0 0 0-2.657 1.73A7.3 7.3 0 0 0 .787 5.175a11 11 0 0 0-.7 3.641C.015 10.416 0 10.925 0 15s.019 4.584.09 6.184a11 11 0 0 0 .7 3.641 7.36 7.36 0 0 0 1.73 2.657 7.3 7.3 0 0 0 2.657 1.73 11.1 11.1 0 0 0 3.641.7c1.6.075 2.109.09 6.184.09s4.584-.019 6.184-.09a11.1 11.1 0 0 0 3.641-.7 7.67 7.67 0 0 0 4.387-4.387 11 11 0 0 0 .7-3.641c.075-1.6.09-2.109.09-6.184s-.019-4.584-.09-6.184a11.1 11.1 0 0 0-.7-3.641 7.4 7.4 0 0 0-1.73-2.657A7.3 7.3 0 0 0 24.825.787a11 11 0 0 0-3.641-.7C19.584.015 19.075 0 15 0m0 2.7c4 0 4.481.02 6.063.089a8.3 8.3 0 0 1 2.784.519 4.94 4.94 0 0 1 2.848 2.846 8.3 8.3 0 0 1 .516 2.784c.071 1.583.087 2.057.087 6.063s-.019 4.481-.092 6.063a8.4 8.4 0 0 1-.526 2.784 4.8 4.8 0 0 1-1.124 1.728 4.7 4.7 0 0 1-1.725 1.12 8.3 8.3 0 0 1-2.794.516c-1.592.071-2.061.087-6.074.087s-4.483-.019-6.074-.092a8.5 8.5 0 0 1-2.8-.526 4.64 4.64 0 0 1-1.719-1.126 4.56 4.56 0 0 1-1.125-1.725 8.5 8.5 0 0 1-.525-2.794c-.056-1.575-.076-2.061-.076-6.055s.02-4.483.076-6.076a8.5 8.5 0 0 1 .525-2.793A4.45 4.45 0 0 1 4.37 4.386a4.44 4.44 0 0 1 1.724-1.122 8.3 8.3 0 0 1 2.776-.526c1.594-.056 2.062-.075 6.074-.075zm0 4.6a7.7 7.7 0 1 0 7.7 7.7A7.7 7.7 0 0 0 15 7.3M15 20a5 5 0 1 1 5-5 5 5 0 0 1-5 5m9.808-13.006a1.8 1.8 0 1 1-1.8-1.8 1.8 1.8 0 0 1 1.8 1.8"
                                data-name="Icon simple-instagram"
                                ></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href='https://bsky.app/' title='Ir a Bluesky'>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34.073"
                                height="30"
                                viewBox="0 0 34.073 30"
                                >
                                <path
                                id="Bluesky_Logo"
                                fill=""
                                d="M17.382 11.674c3.906 2.933 8.108 8.879 9.651 12.07 1.543-3.191 5.744-9.137 9.651-12.07 2.819-2.116 7.385-3.753 7.385 1.457 0 1.04-.6 8.741-.946 9.991-1.216 4.346-5.648 5.455-9.59 4.784 6.891 1.173 8.644 5.057 4.858 8.942C31.2 44.225 28.057 35 27.251 32.632c-.148-.434-.217-.636-.218-.464 0-.172-.07.03-.218.464-.806 2.365-3.95 11.594-11.14 4.216-3.786-3.885-2.033-7.77 4.858-8.942-3.942.671-8.374-.438-9.59-4.784-.35-1.25-.946-8.95-.946-9.991 0-5.21 4.567-3.573 7.385-1.457"
                                transform="translate(-9.996 -9.655)"
                                ></path>
                                </svg>
                            </a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {showModal && (
            <div className={`modal-addCart ${showModal ? 'show' : ''}`}>
                <button className="modal-close-button" onClick={handleCloseModal}>Cerrar</button>
                <div className='modal-message'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="modal-heart">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p>Gracias por ponerte en contacto con nosotras</p>
                </div>
            </div>
        )}
        </section>
      );
}

export default ContactComponent