import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <p>
                Nombre: { contact.name }
            </p>
            <p>
                Apellido: { contact.lastname }
            </p>
            <p>
                Email: { contact.email }
            </p>
            <p>
                Estado: { contact.online ? 'Contacto En Línea':'Contacto No Disponible' }
            </p>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;