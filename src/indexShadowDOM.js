import React from "react";
import { render } from "react-dom";
import ShadowDOM from 'react-shadow'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'


import slide3 from './stylesheets/slide3.css'
/*
 <Router> 
         <App/>
   </Router>   

   
<div id="div1">
      <p> First Div </p>
      <div id="div2">
            <p> second Div </p>
      </div>
  </div>
    </ShadowDOM>  

      <style type="text/css">{slide3}</style>


       <ShadowDOM include={'../css/stylesheets/slide3.css'}>

           <ShadowDOM include="./stylesheets/slide3.css" nodeName="div" boundaryMode="open">
   include={slide3} //doesnt work
   */


render(
    <ShadowDOM>
        <div id="div1">
            <style type="text/css">{slide3}</style>
            <p> First Div </p>
             <div id="div2">
                <p> second Div </p>
            </div>
         </div>
     </ShadowDOM>
    ,document.getElementById('root'));
//registerServiceWorker();
