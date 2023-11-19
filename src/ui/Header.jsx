import React, { useState } from 'react'
import NavBar from './NavBar'
import Logo from './Logo'
import HeaderToggle from './HeaderToggle'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <Logo />
            <HeaderToggle isOpen={isOpen} setIsOpen={setIsOpen} />
            <NavBar isOpen={isOpen} />
        </header>
    )
}

export default Header