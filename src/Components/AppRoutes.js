import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Category from '../Pages/Category'
import Home from '../Pages/Home'

const AppRoutes = () => {
  return <Routes>
    <Route path='/' element={<Category />}></Route>
    <Route path='/:categoryId' element={<Category />}></Route>
  </Routes>
    
  
}

export default AppRoutes