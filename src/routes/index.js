import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'

//import asyncComponent from './asyncComponent'
//import HomeSlider from './HomeSlider'

import NoMatch from '../pages/NoMatch'
import HomePage from '../pages/HomePage'

const Routes = (props) => {

return(<Switch>
         <Route  exact path="/" render={ (prop) => <HomePage {...props}  /> }/> 
         <Route path="*" component={NoMatch} />
       </Switch>)
}
export default Routes;

