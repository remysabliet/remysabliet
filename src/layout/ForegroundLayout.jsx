import React from 'react'

import Footer from 'layout/Footer'
import Header from 'layout/Header'
import NavBar from 'components/molecules/NavBar'

const ForegroundLayout = props => (
  <>
    <div className="rs-foreground-ui">    <div id="debug" />
      <Header {...props} />
      <NavBar {...props} />
      <Footer {...props} />
    </div>
  </>
)

export default ForegroundLayout
