import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Slider from 'components/organisms/Slider'
import Slide from 'components/layout/Slide'
import ForegroundUI from 'components/layout/ForegroundUI'
import { Home, AboutMe, Contact, Experience } from 'pages/home/slides';

const HomePage = props => {
  const slides = ['home', 'aboutMe', 'experience', 'contact']
  return (
    <Fragment>
      <ForegroundUI slides={slides} />
      <Slider {...props} slides={slides}>
        <Slide> 
          <Home/>
        </Slide>
        <Slide> 
          <AboutMe/>
        </Slide>
        <Slide> 
          <Contact/>
        </Slide>
        <Slide> 
          <Experience/>
        </Slide>
      </Slider>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  deviceInfo: state.deviceInfo
})

export default connect(mapStateToProps)(HomePage)
