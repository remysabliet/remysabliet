import React, { Fragment, forceUpdate, useState, useEffect } from 'react'

import { ChiHira, DeHira, HaHira, KoHira, IHira, NHira, NiHira, NoHira, ShiHira, SoHira, SuHira, ToHira, YoHira, UHira } from 'assets/svg/calligraphy/japanese/hiragana'
import { Ashita, Atarashii, Hi, Hito, Idomu, O, Ou, Tatakau, Watashi, Yume } from 'assets/svg/calligraphy/japanese/kanji'
import { JiKata, MiKata, PeKata, ReKata, VertiBarreKata } from 'assets/svg/calligraphy/japanese/katakana'
import CalligraphyWritter from "components/molecules/CalligraphyWriter"

import {useCompare} from "helpers/hooks"

const AboutMe = props => {
  const { locale, isCurrentSlide } = props
  console.log("AboutMe isOnView:", isCurrentSlide)
  // We must consider both scroll/touch (mobile) and resize to check whenever an element get into the viewport
  const [displayCalligraphy, setDisplayCalligraphy] = useState(false);

  useEffect(() => {

    // Bug to fix in the future, reactHooks include only 
    // componentDidMount(), componentDidUpdate and componentWillUnmount
    // Problem is that what ever logic I have here, this functional component will render before I apply the logic
    // so all the calligraphy will appears at once first
    if (isCurrentSlide) {
      // console.log("Redisplaying", displayCalligraphy)
      setDisplayCalligraphy(false)

      let counter = 0.8; // initial delay
      // Apply delay at initialization
      var childcount = document.querySelectorAll('.calligraphy .siblings')
      childcount.forEach(element => {
         // console.log("Reaching element",element.className.baseVal.includes('punctuation-delay'))
         // We check whether if the class punctuation-delay is associated to the first element of the SVG
         // If yes we temporize by one second
        const additionalTime = element.className.baseVal.includes('punctuation-delay') ? 1 : 0.12;
        counter = counter + additionalTime;

        element.style.animationDelay = `${counter}s`
      })
      console.log("number of child", childcount)
      setDisplayCalligraphy(true)
    }
    
  }, [locale, isCurrentSlide])

  // To do list 
  //1 re-trigger the whole painting as soon as calligraphy is out of screen
  //2 make sure the display is elastic works on all browser (except IE) and IOS/Android last version
  const symbols = {
    'empty': [], // used for refresh purpose
    'ja': [
      { class: 'a1', element: <KoHira className="punctuation-delay"/> },
      { class: 'a2', element: <NHira /> },
      { class: 'a3', element: <NiHira /> },
      { class: 'a4', element: <ChiHira /> },
      { class: 'a5', element: <HaHira /> },
      { class: 'a6', element: <ReKata /> },
      { class: 'a7', element: <MiKata /> },
      { class: 'a8', element: <DeHira /> },
      { class: 'a9', element: <SuHira /> },
      { class: 'b0', element: <Watashi className="punctuation-delay" /> },
      { class: 'b1', element: <NoHira /> },
      { class: 'b2', element: <PeKata /> },
      { class: 'b3', element: <VertiBarreKata /> },
      { class: 'b4', element: <JiKata /> },
      { class: 'b5', element: <NiHira /> },
      { class: 'b6', element: <YoHira /> },
      { class: 'b7', element: <UHira /> },
      { class: 'b8', element: <KoHira /> },
      { class: 'b9', element: <SoHira /> },
      { class: 'c0', element: <Yume /> },
      { class: 'c1', element: <Ou /> },
      { class: 'c2', element: <IHira /> },
      { class: 'c3', element: <Hito /> },
      { class: 'c4', element: <DeHira /> },
      { class: 'c5', element: <Atarashii /> },
      { class: 'c6', element: <ShiHira /> },
      { class: 'c7', element: <IHira /> },
      { class: 'c8', element: <KoHira /> },
      { class: 'c9', element: <ToHira /> },
      { class: 'd0', element: <NiHira /> },
      { class: 'd1', element: <Idomu /> },
      { class: 'd2', element: <Tatakau /> },
      { class: 'd3', element: <SuHira /> },
      { class: 'd4', element: <SuHira /> },
      { class: 'd5', element: <KoHira /> },
      { class: 'd6', element: <ToHira /> },
      { class: 'd7', element: <ToHira /> },
      { class: 'd8', element: <ToHira /> },
      { class: 'd9', element: <ToHira /> },
      { class: 'e0', element: <ToHira /> },
      { class: 'e1', element: <ToHira /> },
      { class: 'e2', element: <ToHira /> },
      { class: 'e3', element: <O /> },
      { class: 'e4', element: <NiHira /> },
      { class: 'e5', element: <Ashita /> },
      { class: 'e6', element: <Hi /> },
      { class: 'e7', element: <Hi /> },
      { class: 'e8', element: <Hi /> },
      { class: 'e9', element: <Hi /> },
      { class: 'f0', element: <Hi /> },
      { class: 'f1', element: <ShiHira /> },
      { class: 'f2', element: <UHira /> },
      { class: 'f3', element: <ToHira /> },
      { class: 'f4', element: <ToHira /> }
    ],
    'en': [{ class: 'a1', element: <SuHira /> },
    { class: 'a2', element: <SuHira /> }]
  }

  const getSymbols = () => {
    console.log("getSymbols", displayCalligraphy)
    return displayCalligraphy ? symbols[locale] : symbols['empty'] ;
  }

  // add animated-element to calligraphy div 
  // <div className="animated-element calligraphy-container">
  return (
    <Fragment>
      <div className="calligraphy-container animated-element">
        <div className="border" />
        <div className="middle">
          {isCurrentSlide ? <CalligraphyWritter symbols={symbols[locale]} /> : null}
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

