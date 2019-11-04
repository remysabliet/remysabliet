import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'

import __ from 'helpers/i18n'
import Routes from 'routes'

const App = (props) => {
  const q = () => console("AAAAA")
window.removeEventListener('scroll', q)
  const { store } = props;
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