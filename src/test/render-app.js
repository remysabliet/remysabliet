import React from "react";
import { IntlProvider} from "react-intl";
import { withProps,compose } from "recompose";
import renderWithContext from "./render-with-context";

import App from "../App";
import messages from "../i18n/en";

export default function renderApp({ route }) {
  //const api = createApi(); no API for the moment
  const dependencies = {
  //  api
  };
 
  //    defaultFormats?: object = {},
  const intlProvider = new IntlProvider({ locale:'en', messages }, {});
  const { intl } = intlProvider.getChildContext();

  // Construct a new `IntlProvider` instance by passing `props` and
  // `context` as React would, then call `getChildContext()` to get the
  // React Intl API, complete with the `format*()` functions.

  return {
    ...renderWithContext(
      <IntlProvider locale="en" messages={messages}>
        <App dependencies={dependencies} />
      </IntlProvider>,
      {
        route
      }
    ),
    //api,
    intl
  };
}
