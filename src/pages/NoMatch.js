import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/nomatch.css'

const NoMatch = () => (
    <div className="main">
        <img  src={require('../img/pageNotFound.jpg')} />
        <p> Sorry, page not found!</p>
        <Link to="/"> Go to Home</Link>
    </div>)

export default NoMatch
