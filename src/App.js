import React, { Component } from 'react';
import allMessages from './i18n';
import { flatten } from './i18n/i18n-utils';
import {IntlProvider} from 'react-intl'
import {withRouter} from 'react-router-dom'
import Routes from './routes'
import {whichDevice} from './utils/whichDevice'

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

    const deviceName=whichDevice();

    console.log(deviceName)
    return (
      <IntlProvider locale={locale} messages={messages} >
        <Routes {...props} deviceName={deviceName} />
      </IntlProvider>
    )
  
}

export default withRouter(App);
