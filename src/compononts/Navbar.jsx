import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import {ButtonContainer} from './Button'
import styled from 'styled-components';

class Navbar extends Component {
    state = {  } 
    render() { 
        return ( <Navwrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
            <Link to='/'>
                <img src={logo} alt="logo" className='navbar-brand'/>
            </Link>
            <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'>
                    <Link to='/' className='nav-link'>
                        products
                    </Link>
                </li>
            </ul>
            <Link to='/cart' className='ml-auto'>
                <ButtonContainer>
                <span className='mr-2'>
                <i class="bi bi-cart"></i>
                </span>
                my cart
                </ButtonContainer>
            </Link>
        </Navwrapper> );
    }
}
const Navwrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !importanat;
    font-size: 1.3rem;
    text-transform:captalize;
}
`
 
export default Navbar;