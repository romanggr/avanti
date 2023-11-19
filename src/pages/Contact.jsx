import React from 'react'
import ContactCard from '../ui/ContactCard'
import { FiMail } from "react-icons/fi"
import { BsTelephone } from 'react-icons/bs'
import { GrMap } from 'react-icons/gr'

import toast from 'react-hot-toast'

const Contact = () => {

    const navigateTo = (to) => {
        window.location.href = to
    }
    const copyToClipboard = (data) => {
        const dataElement = document.createElement('input');
        dataElement.value = data;
        document.body.appendChild(dataElement);
        dataElement.select();
        document.execCommand('copy');
        document.body.removeChild(dataElement);

        toast.success('Скопійовано: ' + data);
    };

    return (
        <div className='contact-card-container'>
            <ContactCard icon={<FiMail />} header={"Емейл"} onClick={() => copyToClipboard("avanti@gmail.com")} description={"avanti@gmail.com"} />
            <ContactCard icon={<BsTelephone />} header={"Телефон"} onClick={() => copyToClipboard("+38(xxx)xxxxxxx")} description={"+38 (xxx) xxx xxxx"} />
            <ContactCard icon={<GrMap />} header={"Розташування"} onClick={() => navigateTo("https://maps.app.goo.gl/unaVrgXqWxRzTP346")} description={"м. Самбір вул. Чорновола 12"} />
        </div>
    )
}

export default Contact;
