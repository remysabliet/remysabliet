import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import {whichDevice} from './utils/whichDevice'
import {getDeviceInfo} from './actions/deviceInfo'
import { createStore } from 'redux'

import App from './App';

import rootReducer from './reducers'
//import 'babel-polyfill'
//import 'webcomponents.js';


const store = createStore(rootReducer)

//First we mount the App
render(
                  <Router> 
                        <App store={store}/>
                  </Router>
    
    ,document.getElementById('root'));

function initStore(store) {
      const deviceType=whichDevice();
      store.dispatch(getDeviceInfo(deviceType))
}
//Secondly we init store to propagate data amoung mounted component
initStore(store);
//

