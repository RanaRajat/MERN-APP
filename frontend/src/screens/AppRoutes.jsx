import React from 'react'
import {Route, Routes} from "react-router-dom";
import DemoScreen from './DemoScreen';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/demo' element={<DemoScreen/>}/>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/product/:id' element={<ProductScreen/>}/>

      </Routes>
    </div>
  )
}

export default AppRoutes
