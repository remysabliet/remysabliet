import React from 'react'

// import NavBar from 'components/molecules/NavBar'

const ForegroundUI = React.memo(({children}) => (
  <div className="rs-foreground-ui">{children}</div>
))

export default ForegroundUI
