import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const NavBar = ({ isOpen }) => {

    return (
        <nav className={isOpen ? "hidden" : ""}>
            <Link to="book">Записатись</Link>
            <Link to="contact">Контакти</Link>
            <Link to="doctors">Лікарі</Link>
            <Link to="price">Ціни</Link>
            <Link to="blog">Статті</Link>
            <Link className='header-media-inst' to="https://www.instagram.com/"><AiFillInstagram /></Link>
            <Link className='header-media-fcb' to="https://www.facebook.com/"><BsFacebook /></Link>
        </nav>

    )
}

export default NavBar