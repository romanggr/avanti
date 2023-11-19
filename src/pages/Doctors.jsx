import React from 'react'
import DoctorsCard from '../ui/DoctorsCard'


const Doctors = () => {

    return (
        <div className='doctors-container'>
            <DoctorsCard text={"Доктор Олексій Фігура"} image={"dentist1.jpg"} />
            <DoctorsCard text={"Доктор Сергій Бучко"} image={"dentist2.jpg"} />
            <DoctorsCard text={"Доктор Максим Яжик"} image={"dentist3.jpg"} />
            <DoctorsCard text={"Доктор Олег Бойко"} image={"dentist4.jpg"} />
        </div>
    )
}

export default Doctors