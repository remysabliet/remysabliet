import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const NavBar = props => (
  <React.Fragment>
    <nav>
      <Link smooth to="/#home">
        Home
      </Link>
      <Link smooth to="/#aboutMe">
        About me
      </Link>
      <Link smooth to="/#experience">
        About me
      </Link>
      <Link smooth to="/#contact">
        Contact
      </Link>
    </nav>
  </React.Fragment>
)

export default NavBar
