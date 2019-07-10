import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ContactPage from './Component/ContactPage';
import AboutPage from './Component/AboutPage';
import AllProductspage from './Component/AllProductspage';
 import SingleproductPage from './Component/Singleproductpage';
 import Admin from "./Component/Admin"


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
