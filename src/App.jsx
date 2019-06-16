import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import __ from 'helpers/i18n'
import Routes from 'routes'

const App = props => {
  const { store } = props

  return (
    <Provider store={store}>
      <Routes {...props} />
    </Provider>
  )
}

export default withRouter(App)

App.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  store: PropTypes.objectOf(PropTypes.any).isRequired
}
