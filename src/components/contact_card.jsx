import React from 'react';
import { Contact } from './contact.class';
import ContactComponent from './contact';

const ContactCardComponent = () => {

    const defaultContact = new Contact('Jhon', 'Doe', 'jhon_doe@gmail.com', false,);

    return (
        <div>
            <div>
                <h1>Contacto</h1>
            </div>
            <ContactComponent  contact={defaultContact}></ContactComponent>
        </div>
    );
};




export default ContactCardComponent;
