import React from 'react'
import HomePage from '../pages/HomePage'
import {Route} from 'react-router-dom'

const HomeSlider = (props) => {
    console.log('HomeSlider',props)
    return (
        <div id="main-content" className="container" {...props}>
            <Route exact path="/#home" render={(props) => <HomePage {...props} />} />
            <Route exact path="/#aboutMe" component={HomePage} />
       </div>)
}
export default HomeSlider;