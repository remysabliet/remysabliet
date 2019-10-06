import React, { Fragment, useState, useEffect } from 'react'

import { ChiHira, DeHira, HaHira, KoHira, NHira, NiHira, NoHira, SuHira, SoHira, YoHira, UHira } from 'assets/svg/calligraphy/japanese/hiragana'
import { Kuru, Watashi, Yume } from 'assets/svg/calligraphy/japanese/kanji'
import {JiKata, MiKata, PeKata, ReKata, VertiBarreKata } from 'assets/svg/calligraphy/japanese/katakana'
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
  
  // To do list 
  //1 re-trigger the whole painting as soon as calligraphy is out of screen
  //2 make sure the display is elastic works on all browser (except IE) and IOS/Android last version
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
    { class: 'b0', element: <Watashi /> },
    { class: 'b1', element: <NoHira/> },
    { class: 'b2', element: <PeKata /> },
    { class: 'b3', element: <VertiBarreKata /> },
    { class: 'b4', element: <JiKata /> },
    { class: 'b5', element: <NiHira /> },
    { class: 'b6', element: <YoHira /> },
    { class: 'b7', element: <UHira /> },
    { class: 'b8', element: <KoHira /> },
    { class: 'b9', element: <SoHira /> },
    { class: 'c0', element: <Yume /> },
    { class: 'c1', element: <KoHira /> },
    { class: 'c2', element: <KoHira /> },
    { class: 'c3', element: <KoHira /> },
    { class: 'c4', element: <KoHira /> },
    { class: 'c5', element: <KoHira /> },
    { class: 'c6', element: <KoHira /> },
    { class: 'c7', element: <KoHira /> },
    { class: 'c8', element: <KoHira /> },
    { class: 'c9', element: <KoHira /> },
    { class: 'd0', element: <KoHira /> },

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
