import React, { Component } from 'react';
import logo from './logo.svg';
import MainCanvas from './canvas/MainCanvas';
import allMessages from './i18n';
import { flatten } from './i18n/i18n-utils';
import {IntlProvider} from 'react-intl'
import {withRouter} from 'react-router-dom'
import Routes from './routes'

function getMessages(language) {
    const locale = allMessages[language] ? language : 'en';
    const nestedMessages = allMessages[locale];
    const messages = flatten(nestedMessages);
    return { messages, locale };
  }

const App = (props) => {
  
    const { children, match, auth } = props;
    const { language } = match.params;
    const { messages, locale } = getMessages(language);

    console.log('App',props)
    return (
      <IntlProvider locale={locale} messages={messages}>
        <Routes {...props}/>
      </IntlProvider>
    )
  
}

export default withRouter(App);
