import React, { Fragment, useState, useEffect } from 'react'
import Japanese from 'assets/svg/calligraphy/Japanese'
import French from 'assets/svg/calligraphy/French'
import English from 'assets/svg/calligraphy/English'
import CalligraphyWritter from "components/molecules/CalligraphyWriter"

const AboutMe = props => {
  const { locale, deviceInfo } = props
  // We must consider both scroll/touch (mobile) and resize to check whenever an element get into the viewport

  // console.log("AboutMe", document.getElementsByClassName("animation-element"))
  /* [curLocale, setCurLocale] = useState(locale)
   useEffect(() => {
     if(locale)
   }, [locale]) */

   const symbols = [
     {class: 'a1', element: <Japanese/>},
     {class: 'b2', element: <Japanese/>},
     {class: 'c3', element: <Japanese/>},
     {class: 'd5', element: <Japanese/>},
     {class: 'e6', element: <Japanese/>},
     {class: 'f7', element: <Japanese/>},
     {class: 'g8', element: <Japanese/>},
     {class: 'h9', element: <Japanese/>},
     {class: 'i0', element: <Japanese/>},
     {class: 'j4', element: <Japanese/>}
    ]

  return (
    <Fragment>
      <div className="calligraphy-container">
        <div className="border" />
        <div className="middle">
          <CalligraphyWritter className="calligraphy-grid-container" symbols={symbols} />
        </div>
        <div className="border" />
      </div>
    </Fragment>
  )
}
export default AboutMe

// <SVGDisplayer svg={settings[flag.locale]} />
// Restart CSS animation
// https://css-tricks.com/restart-css-animation/


// className="animated-element"
