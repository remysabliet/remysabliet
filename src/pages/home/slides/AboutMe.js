import React, { Fragment, useState, useEffect } from 'react'
import Japanese from 'assets/svg/calligraphy/Japanese'

const AboutMe = props => {
  const { locale, deviceInfo } = props

  // We must consider both scroll/touch (mobile) and resize to check whenever an element get into the viewport

  // console.log("AboutMe", document.getElementsByClassName("animation-element"))
  useEffect(() => {}, [])

  return (
    <Fragment>
      <div className="calligraphy-container">
        <div className="animated-element">
          <Japanese />
        </div>
        <div className="animated-element">
          <Japanese />
        </div>
      </div>
    </Fragment>
  )
}
export default AboutMe

// <SVGDisplayer svg={settings[flag.locale]} />
// Restart CSS animation
// https://css-tricks.com/restart-css-animation/
// So a slide up effect for my profile picture
// https://codeburst.io/animating-dynamically-created-elements-pure-css-c864fdb6e366

// Animate when scrolling into view
// https://www.sitepoint.com/scroll-based-animations-jquery-css3/

// https://www.sitepoint.com/scroll-based-animations-jquery-css3/
