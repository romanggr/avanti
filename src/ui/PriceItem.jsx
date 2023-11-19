import React from 'react'

const PriceItem = ({ price, name }) => {
    return (
        <li>
            <p>{name}</p>
            <p>{price} грн</p>
        </li>
    )
}

export default PriceItem