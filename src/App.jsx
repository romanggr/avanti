import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Authorization from './pages/Authorization'
import Blog from './pages/Blog'
import Book from './pages/Book'
import Contact from './pages/Contact'
import Discount from './pages/Discount'
import Doctors from './pages/Doctors'
import Price from './pages/Price'
import AppLayout from './ui/AppLayout'
import PageNotFound from './ui/PageNotFound'

const App = () => {
  return (
    <BrowserRouter >
      <Routes >
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='home' element={<Home />} />
          <Route path='book' element={<Book />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='discount' element={<Discount />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path='price' element={<Price />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path='authorization' element={<Authorization />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App