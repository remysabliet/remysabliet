import React from "react";
import Slider from "../../components/home/Slider";
import { connect } from 'react-redux'

const HomePage = props => {
    const slides=['Home','aboutMe','experience','contact'];
  return (
      <Slider {...props} slides={slides} />
  );
}

const mapStateToProps = (state) => ({
  deviceInfo: state.deviceInfo
 }
)

export default connect(mapStateToProps)(HomePage);
