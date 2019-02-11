import React from 'react'

import logo from '../logo.svg' // temp
import '../stylesheets/slide.scss'

const Slide = props => {
  const { className, children, id, ...newProps } = props

  return (
    <div className="slide">
      <div className={className} id={id}>
        {/* id va permettre au NavBar de faire le lien avec #home, #aboutMe etc..}*/}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main {...newProps}>{children}</main>
      </div>
    </div>
  )
}

export default Slide
