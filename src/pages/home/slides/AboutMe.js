import React, { Fragment, useEffect, useState } from 'react'

import { ChiHira, DeHira, GaHira, HaHira, KoHira, IHira, KaHira, KiHira, MaHira, NHira, NiHira, NoHira, RiHira, RuHira, SeHira, ShiHira, SoHira, SuHira, ToHira, YoHira, UHira, WoHira } from 'assets/svg/calligraphy/japanese/hiragana'
import { Ashita, Atarashii, Hi, Hito, Hitotsu, Idomu, O, Ooki, Ou, Tatakau, Watashi, Suki, Tsukuru, Yume } from 'assets/svg/calligraphy/japanese/kanji'
import { JiKata, MiKata, PeKata, ReKata, VertiBarreKata } from 'assets/svg/calligraphy/japanese/katakana'
import CalligraphyWritter from "components/molecules/CalligraphyWriter"

const AboutMe = props => {
  const { locale, isCurrentSlide } = props

  const [isAlreadyActivated, setIsAlreadyActivated] = useState(false);

  useEffect(() => {
    console.log("use effect: isCurrentlSlide, isAlreadyActivated", isCurrentSlide, isAlreadyActivated)
    let svgElem = document.querySelectorAll('.calligraphy')
    let strokeElem = document.querySelectorAll('.calligraphy .siblings')


    if (isCurrentSlide && isAlreadyActivated === false) {
      setIsAlreadyActivated(true);
      let counter = 0.8; // initial delay

      // Apply delay at initialization
      strokeElem.forEach(element => {
        console.log(element.className)
        // We check whether the class punctuation-delay is associated to the element of the SVG or not
        // This give birth to extra temporization yes to respect reading experience related to punctuation
        const additionalTime = element.className.baseVal.includes('punctuation-delay') ? 1 : 0.12;
        counter = counter + additionalTime;

        element.style.animationDelay = `${counter}s`
        element.style.opacity = 1; // By default the opacity of a SVG element is having opacity: 0
        // to avoid appearing on the screen when user come and leave

      })

      // Once we have et opacity on the stroke-element we can remove the opacity=0 on the SVG parent element
      // This will allow for stroke to be visible through the animation
      svgElem.forEach(elem =>  elem.classList.remove('faded-out'))

    } else { 
      //This case corresponds when user come back to the same slide without relaunching the full writing animation
      // console.log(svgElem);
      svgElem.forEach(elem => elem.classList.add('anim-opacity-up'))
    }
  }, [locale, isCurrentSlide])

  // We create another useEffect which concern only locale variable update
  useEffect(() => {
    setIsAlreadyActivated(false);
  }, locale)

  const idiomClassName = "faded-out"

  const symbols = {
    'empty': [], // used for refresh purpose
    'ja': [
      { class: 'a1', element: <KoHira className={idiomClassName} firstStrokeClassName="punctuation-delay" /> },
      { class: 'a2', element: <NHira className={idiomClassName} /> },
      { class: 'a3', element: <NiHira className={idiomClassName} /> },
      { class: 'a4', element: <ChiHira className={idiomClassName} /> },
      { class: 'a5', element: <HaHira className={idiomClassName} /> },
      { class: 'a6', element: <ReKata className={idiomClassName} firstStrokeClassName="punctuation-delay"/> },
      { class: 'a7', element: <MiKata className={idiomClassName} /> },
      { class: 'a8', element: <DeHira className={idiomClassName} /> },
      { class: 'a9', element: <SuHira className={idiomClassName}/> },
      { class: 'b0', element: <Watashi className={idiomClassName} firstStrokeClassName="punctuation-delay" /> },
      { class: 'b1', element: <NoHira className={idiomClassName} /> },
      { class: 'b2', element: <PeKata className={idiomClassName} /> },
      { class: 'b3', element: <VertiBarreKata className={idiomClassName} /> },
      { class: 'b4', element: <JiKata className={idiomClassName} /> },
      { class: 'b5', element: <NiHira className={idiomClassName}/> },
      { class: 'b6', element: <YoHira className={idiomClassName}/> },
      { class: 'b7', element: <UHira className={idiomClassName}/> },
      { class: 'b8', element: <KoHira className={idiomClassName}/> },
      { class: 'b9', element: <SoHira className={idiomClassName}/> },
      { class: 'c0', element: <Yume className={idiomClassName} firstStrokeClassName="punctuation-delay" /> },
      { class: 'c1', element: <Ou className={idiomClassName}/> } ,
      { class: 'c2', element: <IHira className={idiomClassName} /> },
      { class: 'c3', element: <Hito className={idiomClassName} /> },
      { class: 'c4', element: <DeHira className={idiomClassName} /> },
      { class: 'c5', element: <Atarashii className={idiomClassName} firstStrokeClassName="punctuation-delay"/> },
      { class: 'c6', element: <ShiHira className={idiomClassName} /> },
      { class: 'c7', element: <IHira className={idiomClassName}/> },
      { class: 'c8', element: <KoHira className={idiomClassName}/> },
      { class: 'c9', element: <ToHira className={idiomClassName}/> },
      { class: 'd0', element: <NiHira className={idiomClassName}/> },
      { class: 'd1', element: <Idomu className={idiomClassName}/> },
      { class: 'd2', element: <Tatakau className={idiomClassName}/> },
      { class: 'd3', element: <SuHira className={idiomClassName}/> },
      { class: 'd4', element: <RuHira className={idiomClassName}/> },
      { class: 'd5', element: <KoHira className={idiomClassName}/> },
      { class: 'd6', element: <ToHira className={idiomClassName}/> },
      { class: 'd7', element: <GaHira className={idiomClassName}/> },
      { class: 'd8', element: <Ooki className={idiomClassName}/> },
      { class: 'd9', element: <Suki className={idiomClassName}/> },
      { class: 'e0', element: <KiHira className={idiomClassName}/> },
      { class: 'e1', element: <DeHira className={idiomClassName}/> },
      { class: 'e2', element: <SuHira className={idiomClassName}/> },
      { class: 'e3', element: <Hitotsu className={idiomClassName} firstStrokeClassName="punctuation-delay" /> },
      { class: 'e4', element: <O className={idiomClassName}/> },
      { class: 'e5', element: <NiHira className={idiomClassName}/> },
      { class: 'e6', element: <Hi className={idiomClassName}/> },
      { class: 'e7', element: <Ashita className={idiomClassName}/> },
      { class: 'e8', element: <WoHira className={idiomClassName}/> },
      { class: 'e9', element: <Tsukuru className={idiomClassName}/> },
      { class: 'f0', element: <RiHira className={idiomClassName}/> },
      { class: 'f1', element: <MaHira className={idiomClassName}/> },
      { class: 'f2', element: <SeHira className={idiomClassName}/> },
      { class: 'f3', element: <NHira className={idiomClassName}/> },
      { class: 'f4', element: <KaHira className={idiomClassName}/> }
    ],
    'en': [{ class: 'a1', element: <SuHira /> },
    { class: 'a2', element: <SuHira /> }]
  }

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
