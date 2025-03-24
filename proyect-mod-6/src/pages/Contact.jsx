import '../styles/contact.css'
import { useState } from 'react';

const ContactComponent = () => {

    const [name, setName] = useState("");
    const [email, setEmail ] = useState("");
    const [message, setMessage ] = useState("");

    const handleNameChange = (e) => {
      setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleClick = () => {
        setName("");
        setEmail("");
        setMessage("");
      };

    document.addEventListener('submit', (e)=>{e.preventDefault();})
    
    return (
        <div className="contact">
            <form className="contact-form">
                <h1>Contacto</h1>
                <div className="form-field">
                    <label className="form-label" htmlFor="name">
                    Nombre
                    </label>
                    <input className="form-input" type="text" id="name" name="name" value={name} onChange={(e) => handleNameChange(e)} autoFocus maxLenght="300" required/>
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="email" maxLenght="320">
                     Email
                    </label>
                    <input className="form-input" type="email" id="email" name="email" value={email} onChange={(e) => handleEmailChange(e)} required />
                    </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="message">
                    Mensaje
                    </label>
                    <textarea className="form-textarea" id="message" name="message" value={message} onChange={(e) => handleMessageChange(e)} maxLenght="1024" required/>
                </div>
                <div className="form-button-container">
                    <button className="form-button" id="form-button" type="submit" onClick={() => handleClick()}>
                    Enviar
                    </button>
                </div>
            </form>
        </div>
      );
}

export default ContactComponent