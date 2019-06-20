import React from 'react'
// import NavBar from 'components/molecules/NavBar'

import FlagBox from "components/molecules/FlagBox"


// console.log("Header active", active)
const Header = props => {
 
  return (
  <div className="header">
    <div className="content">
      <FlagBox {...props}/>
    </div>
  </div>
)}

export default Header
