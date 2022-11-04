import React, { Component } from 'react';
import { ProductConsumer } from '../../Context';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import EmptyCart from './EmptyCart';

class Cart extends Component {
    state = {  } 
    render() { 
        return (     
        <section>
            <ProductConsumer>
                {(value)=>{
                    const { cart } = value
                    if(cart.lenght > 0){
                        return(
                           <>
                            <Title name='your' tilte='cart'/>
                            <CartColumns/>
                            <CartList value={value}/>
                            </>
                        )
                    }
                    else{
                        return  <EmptyCart/>
                    }
                }}
            </ProductConsumer>
        </section>
        );
    }
}
 
export default Cart;