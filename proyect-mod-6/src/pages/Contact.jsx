import '../styles/contact.css'
import Bluesky from '../img/iconos-RRSS/ico-bluesky-blanco.svg'
import Facebook from '../img/iconos-RRSS/ico-facebook-blanco.svg'
import Instagram from'../img/iconos-RRSS/ico-instagram-blanco.svg'
import { useState } from 'react';

const ContactComponent = () => {

    const [name, setName] = useState("");
    const [email, setEmail ] = useState("");
    const [message, setMessage ] = useState("");

    const handleName = (e) => {
      setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
      };
    
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {

        if(name.trim()==="" || email.trim()==="" || message.trim()===""){
            alert("Revisa si has rellenado todo el formulario");
        } else {
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    // document.addEventListener('submit', (e)=>{e.preventDefault();})
    
    return (
        <div className="contact">
            <div className="contact-container">
                <h1>Contacto</h1>
                <div className="contact-card">
                    <div className='contact-info'>
                        <div className="contact-phone">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p>+1 (555) 123-4567</p>
                            </div>
                        <div className="contact-email">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p>hola@luzdetinta.es</p>
                            </div>
                    </div>
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
                <form className="contact-form">
                    <div className="form-field">
                        <label className="form-label" htmlFor="name">
                        Nombre
                        </label>
                        <input className="form-input" type="text" id="name" name="name" value={name} size="20" onChange={(e) => handleName(e)} autoFocus maxLenght="50" required="required"/>
                    </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="email">
                        Email
                        </label>
                        <input className="form-input" type="email" id="email" name="email" size="20" maxLenght="320" value={email} onChange={(e) => handleEmail(e)} required="required" />
                        </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="message">
                        Mensaje
                        </label>
                        <textarea className="form-textarea" id="message" name="message" cols="20" rows="6" value={message} onChange={(e) => handleMessage(e)} required minLength="5" maxLenght="1024"/>
                    </div>
                    <div className="form-button-container">
                        <button className="form-button" id="form-button" type="submit" onClick={() => handleSubmit()}>
                        Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
      );
}

export default ContactComponent