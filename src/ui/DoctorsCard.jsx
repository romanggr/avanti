import React from 'react'

const DoctorsCard = ({ text, image }) => {
    return (
        <div className="doctors-card-container">
            <img src={image} alt="Doctor image" />
            <p>{text}</p>
        </div>
    )
}

export default DoctorsCard