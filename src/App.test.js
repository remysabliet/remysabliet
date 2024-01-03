import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import {
  waitForElement,
  wait,
  prettyDOM,
  Simulate
} from 'react-testing-library'
import { createMemoryHistory } from 'history'
import Routes from './routes'
import allMessages from './i18n'
import { flatten } from './i18n/i18n-utils'

function getMessages(language) {
  const locale = allMessages[language] ? language : 'en'
  const nestedMessages = allMessages[locale]
  const messages = flatten(nestedMessages)
  return { messages, locale }
}

it('renders whole application without crashing', () => {
  const language = 'en'
  const { messages, locale } = getMessages(language)

  const div = document.createElement('div')
  const history = createMemoryHistory()
  // const store = configureStore({}) no redux yet
  // const authApi = createAuthMockApi({ dispatch: store.dispatch })
  // Add following in render:  <App store={store} dependencies={dependencies} />
  // const dependencies = { authApi } no depedencies

  ReactDOM.render(
    <Router history={history}>
      <IntlProvider locale={locale} messages={messages}>
        <Routes />
      </IntlProvider>
    </Router>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
