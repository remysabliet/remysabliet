import React from 'react';
import { InjectedIntl, InjectedIntlProps, injectIntl } from 'react-intl';

/**
 * Should only use this when not inside a React component (such as redux actions), see:
 * https://github.com/yahoo/react-intl/issues/416
 */
export let intl = null;

// turn the old context into the new context
class IntlGlobalProvider  extends React.Component{ 
  constructor(props) {
    super(props);
    intl = this.props.intl;
    console.log(intl)
  }
  
  render() {
    return this.props.children;
  }
}
  
export default injectIntl(IntlGlobalProvider);
