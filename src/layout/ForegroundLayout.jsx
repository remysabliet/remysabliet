import React from 'react'

import Footer from 'layout/Footer'
import Header from 'layout/Header'

const ForegroundLayout = props => (
  <>
    <div className="rs-foreground-ui">    <div id="debug" />
      <Header {...props} />
      <Footer {...props} />
    </div>
  </>
)

export default ForegroundLayout
