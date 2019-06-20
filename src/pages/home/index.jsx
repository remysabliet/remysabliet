import React, { Fragment } from 'react'
import withGlobalInfo from 'containers/withGlobalInfo'
import Slider from 'components/organisms/Slider'
import Slide from 'components/layout/Slide'
import { Home, AboutMe, Contact, Experience } from 'pages/home/slides';
import SVGLoader from 'assets/svg/SVGLoader';

import Layout from './Layout'

const HomePage = props => {
  const slides = ['home', 'aboutMe', 'experience', 'contact']
  return (
    <Fragment>
      <SVGLoader/>
      <Layout {...props} />
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

export default withGlobalInfo(HomePage)
