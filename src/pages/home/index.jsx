import React, { Fragment } from 'react'
import withCCConcernInfo from 'containers/withCCConcernInfo'
import Slider from 'components/organisms/Slider'
import Slide from 'components/layout/Slide'
import ForegroundUI from 'components/layout/ForegroundUI'
import { Home, AboutMe, Contact, Experience } from 'pages/home/slides';


import Portrait from "assets/svg/portrait";

const HomePage = props => {
  const slides = ['home', 'aboutMe', 'experience', 'contact']
  return (
    <Fragment>
      <ForegroundUI slides={slides} />
      <Slider {...props} slides={slides}>
        <Slide> 
          <Home />
        </Slide>
        <Slide> 
          <AboutMe />
        </Slide>
        <Slide> 
          <Experience /> 
        </Slide>
        <Slide> 
          <Contact />
        </Slide>
      </Slider>
    </Fragment>
  )
}

export default withCCConcernInfo(HomePage)
/*
<Slide> 
          <AboutMe />
        </Slide>
        <Slide> 
          <Experience /> 
        </Slide>
        <Slide> 
          <Contact />
        </Slide>*/