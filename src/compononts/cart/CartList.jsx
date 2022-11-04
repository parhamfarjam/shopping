import React from 'react';
import CartItem from './CartItem';

const CartList = ({value}) => {
    const {cart} = value
    console.log(value,cart);
    return ( 
    <>
    cart CartList
    <CartItem/>
    </> );
}
 
export default CartList;