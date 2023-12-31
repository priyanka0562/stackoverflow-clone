import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

const AllRoutes = () => {
    return (
       <Routes>
            <Route exact path='/Welcome' component={Home}/>
            <Route path='/Auth' component={Auth}/> 
       </Routes>
    )
}

export default AllRoutes