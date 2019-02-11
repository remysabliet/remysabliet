import React from 'react'
import '../../stylesheets/foregroundui.scss'
import NavBar from './NavBar'

const ForegroundUI = props => (
  <div className="foregroundUI">
    <NavBar {...props} />
  </div>
)

export default ForegroundUI
