import './Contact.css';

function Contact(props) {
    return <div>
        <div>
            <img src="http://placekitten.com/200/300" alt="contacto"/>
        </div>
        <div>
            <strong>{props.name}</strong>
            <p className="contact-text">{props.icon}</p>
        </div>
    </div>
}

export default Contact;