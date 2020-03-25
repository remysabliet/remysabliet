import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'

import __ from 'helpers/i18n'
import Routes from 'routes'

import 'helpers/utils/TweenMax.min.js'
import { initAnimation } from 'helpers/window'

const App = (props) => {
  // Initialization of all eventListener for animated element
  initAnimation();
  return (<Provider store={props.store}>
    <Routes {...props} />
  </Provider>)
}

export default withRouter(App)

App.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  store: PropTypes.objectOf(PropTypes.any).isRequired
}
