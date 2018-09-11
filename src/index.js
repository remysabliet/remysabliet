import React from "react";
import { render } from "react-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

render(
   <Router> 
         <App/>
   </Router>   
    ,document.getElementById('root'));
registerServiceWorker();
