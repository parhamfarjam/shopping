import React from 'react';
import Cart from './compononts/cart/Cart';
import Details from './compononts/Detalis';
import Navbar from './compononts/Navbar';
import ProductList from './compononts/ProductList';
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Default from './compononts/Default';
import Modal from './compononts/Modal';



const App = () => {


    return ( 
    <>
    <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/detalis' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Default/>}/>

    </Routes>
    <Modal/>
    </Router>
   
    </> );
}
 
export default App;