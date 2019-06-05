import React from 'react'
import { connect } from 'react-redux'
import Slider from 'components/organisms/Slider'
import ForegroundUI from 'components/layout/ForegroundUI'

const HomePage = props => {
  const slides = ['home', 'aboutMe', 'experience', 'contact']
  return (
    <Slider {...props} slides={slides}>
       <ForegroundUI slides={slides} />
    </Slider>
  )
}

const mapStateToProps = state => ({
  deviceInfo: state.deviceInfo
})

export default connect(mapStateToProps)(HomePage)
