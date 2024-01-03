import React from 'react'
import withGlobalInfo from 'containers/withGlobalInfo'
import localSetter from 'containers/localeSetter'
import HomepageContainer from 'containers/HomepageContainer'

import Slider from 'components/organisms/Slider'
import Slide from 'layout/Slide'
import { Home, AboutMe, Contact } from 'pages/home/slides'
import SVGLoader from 'assets/svg/SVGLoader'

import ForegroundUI from 'pages/home/ForegroundUI'

import { UI_FOREGROUND_LAYOUT } from "helpers/constants/homepage"

const HomePage = props => {
  const { currentSlideIndex } = props;

  const slides = ['home', 'about-me', 'contact']

  // useEffect(() => {
  //   // console.log("HomePage", props.deviceInfo)
  // }, [props.locale])
  return (
    <>
      <SVGLoader />
      <ForegroundUI
        {...props}
        slides={slides}
        layout={
          slides[currentSlideIndex] === 'contact'
            ? UI_FOREGROUND_LAYOUT['TOP-30']
            : UI_FOREGROUND_LAYOUT['FULL_LAYOUT']
        }
      />
      <Slider {...props} slides={slides}>
        <Slide>
          <Home />
        </Slide>

        <Slide>
          <AboutMe />
        </Slide>

        <Slide>
          <Contact />
        </Slide>
      </Slider>
    </>
  )
}

export default localSetter(withGlobalInfo(HomepageContainer(HomePage)))
