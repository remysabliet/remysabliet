import React from 'react'
// import NavBar from 'components/molecules/NavBar'

import FlagBox from "components/molecules/FlagBox"


// console.log("Header active", active)
const Header = props => {

  

  const flags = [
    {
      lang:"fr",
      active: false
    },
    {
      lang:"ja",
      active: true
    },
    {
      lang:"en",
      active: false
    }
  ]
 
  return (
  <div className="header">
    <div className="content">
      <FlagBox flags={flags}/>
    </div>
  </div>
)}

export default Header
