import React from 'react'
// import NavBar from 'components/molecules/NavBar'

import FlagBox from 'components/molecules/FlagBox'

const Header = React.memo(props => (
  <div className="rs-header">
    <div className="rs-content">
      <FlagBox {...props} />
    </div>
  </div>
))

export default Header
