import React from 'react'
import { Link } from 'react-router-dom'
import ShadowDOM from 'react-shadow'
import nomatchCSS from '../stylesheets/nomatch.css'


const NoMatch = () => (
    <ShadowDOM>
            <div className="ReactShadowRoot">
                <style dangerouslySetInnerHTML={{__html:nomatchCSS}} />
                <div className="main">
                <img  src={require('../img/pageNotFound.jpg')} />
                <p> Sorry, page not found!</p>
                <Link to="/"> Go to Home</Link>
            </div>
         </div>
    </ShadowDOM>)

export default NoMatch
