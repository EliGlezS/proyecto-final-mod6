import '../styles/contact.css'
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
            <form className="contact-form">
                <h1>Contacto</h1>
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
      );
}

export default ContactComponent