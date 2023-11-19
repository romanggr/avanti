import React from 'react'

const Map = () => {
    return (
        <footer className='justify-end'>
            <iframe className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.30598469425!2d23.19568727600214!3d49.51649875416945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ba5102debab9d%3A0xc77a4a891e14769!2zQXZhbnRpINCm0LXQvdGC0YAg0KHRgtC-0LzQsNGC0L7Qu9C-0LPRltGX!5e0!3m2!1suk!2spl!4v1698405144850!5m2!1suk!2spl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>Created by romanggr &copy;</p>
        </footer>
    )
}

export default Map