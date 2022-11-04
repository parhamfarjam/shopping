import React from 'react';
import Cart from './compononts/cart/Cart';
import Defealt from './compononts/Defealt';
import Details from './compononts/Detalis';
import Navbar from './compononts/Navbar';
import ProductList from './compononts/ProductList';
import {Route , Routes} from 'react-router-dom'
import Modal from './compononts/Modal';

const App = () => {
    return ( 
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/detalis' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/defealt' element={<Defealt/>}/>
    </Routes>
    <Modal/>
    </> );
}
 
export default App;