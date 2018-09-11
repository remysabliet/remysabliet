import React from "react";
import Slider from "../components/home/Slider";
import '../stylesheets/navbar.css'

/* In case of future implementation, we could connect to redux here 
and hence would become  a container 
    <NavBar {...this.newProps} />
*/
const HomePage = props => {
  //console.log('We render HomePage', props)
  return (
      <Slider {...props} />
  );
}

export default HomePage;
