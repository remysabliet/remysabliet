import React from 'react'
import { connect } from 'react-redux'
import Slider from '../../components/home/Slider'

const HomePage = props => {
  const slides = ['Home', 'aboutMe', 'experience', 'portfolio', 'contact']
  return <Slider {...props} slides={slides} />
}

const mapStateToProps = state => ({
  deviceInfo: state.deviceInfo
})

export default connect(mapStateToProps)(HomePage)
