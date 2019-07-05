import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const NavBar = React.memo(({ slides }) => (
  <React.Fragment>
    <nav>
      {slides.map(slide => (
        <Link smooth to={`/#${slide}`}>
          {slide}
        </Link>
      ))}
    </nav>
  </React.Fragment>
))

export default NavBar
