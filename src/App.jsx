import React from 'react'
import PropTypes from 'prop-types'

import { IntlProvider } from 'react-intl'
import { withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import allMessages from 'helpers/i18n'
import flatten from 'helpers/i18n/i18n-utils'
import Routes from 'routes'

/* multi language feature */
function getMessages(language) {
  const locale = allMessages[language] ? language : 'en'
  const nestedMessages = allMessages[locale]
  const messages = flatten(nestedMessages)
  return { messages, locale }
}

const App = props => {
  const { match, store } = props
  const { language } = match.params
  const { messages, locale } = getMessages(language)

  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages}>
        <Routes {...props} />
      </IntlProvider>
    </Provider>
  )
}

export default withRouter(App)

App.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  store: PropTypes.objectOf(PropTypes.any).isRequired
}
