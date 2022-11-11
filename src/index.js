import React from 'react';
import  ReactDOM  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import './App.css'
import {ProductProvider} from './Context'

ReactDOM.render(
    <ProductProvider>
        
         <App/>
       
    </ProductProvider>
    ,document.getElementById('root'))