import React, { useEffect } from 'react'
import withGlobalInfo from 'containers/withGlobalInfo'

import Slider from 'components/organisms/Slider'
import Slide from 'layout/Slide'
import { Home, AboutMe, Contact, Experience } from 'pages/home/slides'
import SVGLoader from 'assets/svg/SVGLoader'

import ForegroundUI from 'pages/home/ForegroundUI'

const HomePage = props => {
  // const slides = ['home', 'about-me', 'contact']
  const slides = ['home', 'about-me', 'contact']
  // useEffect(() => {
  //   // console.log("HomePage", props.deviceInfo)
  // }, [props.locale])

  return (
    <>
      <SVGLoader />
      <ForegroundUI {...props} slides={slides} />
      <Slider {...props} slides={slides}>

        <Slide>
          <Home />
        </Slide>
        <Slide>
          <AboutMe />
        </Slide>
        {/* <Slide>
          <Experience />
        </Slide> */}
        <Slide>
          <Contact />
        </Slide>

      </Slider >
    </>
  )
}

export default withGlobalInfo(HomePage)


