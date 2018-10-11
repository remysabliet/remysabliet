import React from "react";
import { IntlProvider} from "react-intl";
import { withProps,compose } from "recompose";
import renderWithContext from "./render-with-context";
import { createStore } from 'redux'
import rootReducer from '../reducers'
import {getDeviceInfo} from '../actions/deviceInfo'
import {whichDevice} from '../utils/whichDevice'
import App from "../App";
import messages from "../i18n/en";

export default function renderApp({ route }) {
  //const api = createApi(); no API for the moment
  const dependencies = {
  // api
  };
 

  const store = createStore(rootReducer)
  function initStore(store) {
    const deviceType=whichDevice();
    store.dispatch(getDeviceInfo(deviceType))
  }

//Secondly we init store to propagate data amoung mounted component
initStore(store);
  //    defaultFormats?: object = {},
  const intlProvider = new IntlProvider({ locale:'en', messages }, {});
  const { intl } = intlProvider.getChildContext();

  // Construct a new `IntlProvider` instance by passing `props` and
  // `context` as React would, then call `getChildContext()` to get the
  // React Intl API, complete with the `format*()` functions.

  return {
  
    ...renderWithContext(
       <App dependencies={dependencies} store={store} />,
      {
        route
      }
    ),
    intl,
    store
  };
}



/**        <IntlProvider locale="en" messages={messages}>
          
        </IntlProvider>
* */