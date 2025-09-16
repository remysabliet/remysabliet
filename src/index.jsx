import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import classNames from 'classnames'
import is from 'is_js'

import 'helpers/window'
import App from './App'
import { getDeviceInfo, getLocale } from 'helpers/utils/miscellaneous'

import configureStore from 'store/configureStore'
import 'styles/main.scss'

const deviceInfo = getDeviceInfo()
const locale = getLocale()

const store = configureStore({ global: { deviceInfo, locale } })

const RoutedAppWithStore = () => {

  return (
    <div className={classNames(is['safari']() || is['ios']() ? 'safari' : '')}>
      <Router>
        <App store={store} />
      </Router>
    </div>);
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RoutedAppWithStore />)

