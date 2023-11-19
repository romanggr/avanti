import React from 'react'
import { FaTooth } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/")} className='logo' >
            <FaTooth className='logo-icon' />
            <h1>Avanti</h1>
        </div>

    )
}

export default Logo