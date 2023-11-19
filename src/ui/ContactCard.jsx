import React from 'react'

const ContactCard = ({ icon, header, description, onClick }) => {

    return (
        <div className='contact-card' onClick={onClick}>
            <div className="contact-card-icon">
                {icon}
            </div>
            <div className="contact-card-text">
                <h3>{header}</h3>
                <p>{description}</p>
            </div>
        </div >
    )
}

export default ContactCard