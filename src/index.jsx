import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { whichDevice } from 'helpers/utils/whichDevice'
import { getDeviceInfo } from 'actions/deviceInfo'
import 'styles/main.scss'
import App from './App'
import rootReducer from 'reducers'


const store = createStore(rootReducer)

function initStore() {
  const deviceType = whichDevice()
  store.dispatch(getDeviceInfo(deviceType))
}
// Secondly we init store to propagate data amoung mounted component
initStore(store)

// First we mount the App
render(
  <Router>
    <App store={store} />
  </Router>,
  document.getElementById('root')
)

