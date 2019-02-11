import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NoMatch from '../pages/NoMatch'
import HomePage from '../pages/HomePage'

const Routes = props => (
  <Switch>
    <Route exact path="/" render={prop => <HomePage {...props} />} />
    <Route path="*" component={NoMatch} />
  </Switch>
)

export default Routes
