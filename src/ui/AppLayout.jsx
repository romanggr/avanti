import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Map from './Map'
import { Toaster } from 'react-hot-toast'


const AppLayout = () => {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Outlet />

            </main>
            <Map />
            <Toaster position="top-center"
                toastOptions={{
                    duration: 2000
                }} />
        </div>
    )
}

export default AppLayout