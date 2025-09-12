import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'

import __ from 'helpers/i18n'
import AppRoutes from 'routes'

import 'helpers/utils/TweenMax.min.js'
import { initAnimation } from 'helpers/window'

const App = (props) => {
  // Initialization of all eventListener for animated element
  initAnimation();
  return (<Provider store={props.store}>
    <AppRoutes {...props} />
  </Provider>)
}

export default App 

App.propTypes = {
  store: PropTypes.objectOf(PropTypes.any).isRequired
}
