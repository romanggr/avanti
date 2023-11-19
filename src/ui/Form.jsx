import React from 'react'
import toast from 'react-hot-toast'


const Form = () => {
    return (
        <form className="book-form-container" onSubmit={(e) => {
            e.preventDefault()
            toast.success("Ваш запис було прийнято. Очікуйте дзвінка")
        }}>
            <h3>Записатись на прийом</h3>
            <div className='book-form-container-grid'>
                <label htmlFor="email">Емейл</label>
                <input id='email' placeholder={"Вводьте тут..."} type="email" />
            </div>

            <div className='book-form-container-grid'>
                <label htmlFor="phone">Телефон</label>
                <input id='phone' placeholder={"Вводьте тут..."} type="tel" />
            </div>

            <div className='book-form-container-grid'>
                <label htmlFor="description">В чому проблема?</label>
                <textarea id='description' placeholder={"Вводьте тут..."} />
            </div>

            <div className="book-form-button-container">
                <button >Add</button>
            </div>

        </form>
    )
}

export default Form