import React from 'react';
import  ReactDOM  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {ProductProvider} from './Context'

ReactDOM.render(
    <ProductProvider>
        <Router>
         <App/>
       </Router>
    </ProductProvider>
    ,document.getElementById('root'))