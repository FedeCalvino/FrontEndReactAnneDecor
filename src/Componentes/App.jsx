import React from 'react';
import { NavBar } from './NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Ventas } from '../Routes/Ventas';
import { CrearVenta } from '../Routes/CrearVenta';

const App = () => {
    return (
        <>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Ventas/>} ></Route>
            <Route path='/Ventas' element={<Ventas/>} ></Route>
            <Route path='/CrearVenta' element={<CrearVenta/>} ></Route>
            <Route path='/*' element={<Navigate to='/'/>} ></Route>
        </Routes>
        </>
    );
}

export default App;