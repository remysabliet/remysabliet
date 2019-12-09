import React, {
  Fragment,
  useEffect,
  useState
} from 'react'

import CalligraphyWritter from 'components/molecules/CalligraphyWriter'

import { symbols } from 'helpers/constants/homePage'

const AboutMe = props => {
  const {
    locale,
    isCurrentSlide,
    deviceInfo
  } = props

  const [
    isAlreadyActivated,
    setIsAlreadyActivated
  ] = useState(false)

  // This useEffect must be located before the one in charge of applying CSS
  // AnimationDelay and class
  useEffect(() => {
    setIsAlreadyActivated(false)
  }, locale)

  useEffect(() => {
    let svgElem = document.querySelectorAll(
      '.calligraphy'
    )
    let strokeElem = document.querySelectorAll(
      '.rs-js-animated-element.rs-js-slide-up .calligraphy .siblings'
    )
    if (
      isCurrentSlide &&
      isAlreadyActivated === false
    ) {
      setIsAlreadyActivated(true)
      let counter = 1 // initial delay
      strokeElem.forEach(element => {
        //console.log(element.style.animationDelay)
        // We check whether the class punctuation-delay is associated to the element of the SVG or not
        // This give birth to extra temporization yes to respect reading experience related to punctuation
        const additionalTime = element.className.baseVal.includes(
          'punctuation-delay'
        )
          ? 1
          : locale === 'ja'
          ? 0.12
          : 0.3 // elapse time between character letter
        counter = counter + additionalTime

        element.style.animationDelay = `${counter}s`

        // By default the opacity of a SVG element is having opacity: 0
        // to avoid appearing on the screen when user come and leave
        element.style.opacity = 1
      })

      // Once we have et opacity on the stroke-element we can remove the opacity=0 on the SVG parent element
      // This will allow for stroke to be visible through the animation
      svgElem.forEach(elem => {
        elem.classList.remove('faded-out')
        // elem.classList.add('anim-opacity-up')
      })
    } else if (isCurrentSlide) {
      // This case corresponds when user come back to the same slide without relaunching the full writing animation
      svgElem.forEach(elem => {
        elem.classList.add('anim-opacity-up')
      })
    } else {
      // When user quit the slide
      svgElem.forEach(elem => {
        elem.classList.remove('anim-opacity-up')
      })
    }
  }, [locale, isCurrentSlide, isAlreadyActivated])

  //  {isCurrentSlide ? <CalligraphyWritter symbols={symbols[locale]} /> : null}
  return (
    <Fragment>
      <div
        className="rs-calligraphy-container rs-js-animated-element"
        anim="_opa_tra"
      >
        <div className="rs-border" />
        <div className="rs-middle">
          <CalligraphyWritter
            symbols={symbols[locale]}
            locale={locale}
            deviceInfo={deviceInfo}
          />
        </div>
        <div className="rs-border" />
      </div>
    </Fragment>
  )
}
export default AboutMe
