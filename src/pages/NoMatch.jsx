import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/nomatch.scss'
import imgNoMatch from '../img/pageNotFound.jpg'

const NoMatch = () => (
  <div className="main">
    <img src={imgNoMatch} />
    <p> Sorry, page not found!</p>
    <Link to="/"> Go to Home</Link>
  </div>
)

export default NoMatch
