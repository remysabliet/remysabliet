import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'helpers/window'
import App from './App'
import { getDeviceInfo, getLocale } from 'helpers/utils/miscellaneous'

import configureStore from 'store/configureStore'
import 'styles/main.scss'

const deviceInfo = getDeviceInfo()
const locale = getLocale()

const store = configureStore({ global: { deviceInfo, locale } })

render(
  <Router>
    <App store={store} />
  </Router>,
  document.getElementById('root')
)
