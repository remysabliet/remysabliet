import React, { Fragment, useEffect } from 'react'
import withGlobalInfo from 'containers/withGlobalInfo'

import Slider from 'components/organisms/Slider'
import Slide from 'components/layout/Slide'
import { Home, AboutMe, Contact, Experience } from 'pages/home/slides'
import SVGLoader from 'assets/svg/SVGLoader'

import Layout from './Layout'

const HomePage = props => {
  const slides = ['home', 'aboutMe', 'experience', 'contact']

  useEffect(() => {
    console.log("HomePage", props.locale)
  }, [props.locale])

  return (
    <Fragment>
      <SVGLoader />
      <Layout {...props} slides={slides}/>
      <Slider {...props} slides={slides}>
        <Slide>
          <Home/>
        </Slide>
        <Slide>
          <AboutMe/>
        </Slide>
        {/* </Slide>
        <Experience />
       </Slide>*/}
        <Slide>
          <Contact/>
        </Slide>
      </Slider>
    </Fragment>
  )
}

export default withGlobalInfo(HomePage)


