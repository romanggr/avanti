import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"

const HeaderToggle = ({ isOpen, setIsOpen }) => {

    return (
        <div className='toggle' onClick={() => setIsOpen(isOpen => !isOpen)} >
            {isOpen ? <AiOutlineMenu size={"30px"} /> : <AiOutlineClose size={"30px"} />}
        </div>
    )
}

export default HeaderToggle