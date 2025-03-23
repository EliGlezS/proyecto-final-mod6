import '../styles/contactComponent.css'

const ContactComponent = () => {
    
    return (
        <div className="contact">
            <form className="contact-form">
                <div className="form-field">
                    <label className="form-label" htmlFor="name">
                    Nombre
                    </label>
                    <input className="form-input" type="text" id="name" name="name" autoFocus/>
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="email">
                     Email
                    </label>
                    <input className="form-input" type="email" id="email" name="email" required />
                    </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="message">
                    Mensaje
                    </label>
                    <textarea className="form-textarea" id="message" name="message" />
                </div>
                <div class="form-button-container">
                    <button className="form-button" type="submit">
                    Enviar
                    </button>
                </div>
            </form>
        </div>
      );
}

export default ContactComponent





