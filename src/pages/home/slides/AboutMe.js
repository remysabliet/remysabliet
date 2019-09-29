import React, { Fragment, useState, useEffect } from 'react'

import { ChiHira, DeHira, HaHira, KoHira, NHira, NiHira, SuHira } from 'assets/svg/calligraphy/japanese/hiragana'
import { Yume } from 'assets/svg/calligraphy/japanese/kanji'
import { MiKata, ReKata } from 'assets/svg/calligraphy/japanese/katakana'
import CalligraphyWritter from "components/molecules/CalligraphyWriter"

const AboutMe = props => {
  const { locale, deviceInfo } = props
  // We must consider both scroll/touch (mobile) and resize to check whenever an element get into the viewport

  // console.log("AboutMe", document.getElementsByClassName("animation-element"))

  useEffect(() => {
    let counter = 0;

    var childcount = document.querySelectorAll('.calligraphy .siblings')
    console.log(childcount)
    childcount.forEach(element => {

      counter = counter + 0.2;
      element.style.animationDelay = `${counter}s`
      // console.log(element.style.animationDelay)
    })
    console.log("number of child", childcount)
  }, [locale])

  const symbols = [
    { class: 'a1', element: <KoHira /> },
    { class: 'a2', element: <NHira /> },
    { class: 'a3', element: <NiHira /> },
    { class: 'a4', element: <ChiHira /> },
    { class: 'a5', element: <HaHira /> },
    { class: 'a6', element: <ReKata /> },
    { class: 'a7', element: <MiKata /> },
    { class: 'a8', element: <DeHira /> },
    { class: 'a9', element: <SuHira /> },
    { class: 'b0', element: <Yume /> },
    { class: 'c1', element: <KoHira /> },
    { class: 'c2', element: <NHira /> },
    { class: 'c3', element: <NiHira /> },
    { class: 'c4', element: <ChiHira /> },
    { class: 'c5', element: <HaHira /> },
    { class: 'c6', element: <ReKata /> },
    { class: 'c7', element: <MiKata /> },
    { class: 'c8', element: <DeHira /> },
    { class: 'c9', element: <SuHira /> },
    
  ]

  return (
    <Fragment>
      <div className="calligraphy-container">
        <div className="border" />
        <div className="middle">
          <CalligraphyWritter symbols={symbols} />
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
