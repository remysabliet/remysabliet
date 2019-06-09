import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Slider from 'components/organisms/Slider'
import ForegroundUI from 'components/layout/ForegroundUI'

const HomePage = props => {
  const slides = ['home', 'aboutMe', 'experience', 'contact']
  return (
    <Fragment>
      <ForegroundUI slides={slides} />
      <Slider {...props} slides={slides}>
      </Slider>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  deviceInfo: state.deviceInfo
})

export default connect(mapStateToProps)(HomePage)
