'use strict';

import React, { Fragment, useState, useEffect } from 'react'
import SVGDisplayer from 'react'
import Japanese from 'assets/svg/calligraphy/Japanese'

const AboutMe = props => {
  const { locale, deviceInfo } = props

  /**
   *  1) Retrieve all elements owning "animation-element" class inside the DOM
   *  2) Check wether those elements inner boundaries are in view, that is to say
   *   whether their top boundary is equal or above viewport's top boundary and bottom boundary is above window bottom boundary
   *  3) if inside the viewport, add an animation class to the div element in order to trigger animation
   *     if outside the viewport, remove the animation class from the div element
   */
  const animateIfInView = () => {

    // console.log("wiw.scrollY", window.scrollY)
    // console.log("document.documentElement.scrollTop", document.documentElement.scrollTop)
    const windowTopPos = deviceInfo === "firefox" ? window.scrollY : 0
    const windowBottomPos = windowTopPos + window.innerHeight
    // console.log("AboutMe - window_bottom_position",windowBottomPos)
    console.log(window.scrollY)
    document.getElementsByClassName('animation-element')
    const animatedElement = [
      ...document.getElementsByClassName('animation-element')

    animatedElement.forEach(elem => {
      const elementBounds = elem.getBoundingClientRect()
      const elemTopPos = elementBounds.y
      const elemBottomPos = elemTopPos + elementBounds.height
      const classNameEffect = 'slide-up';

      let activate = false
      if (deviceInfo === "firefox") {
        console.log(' INSIDE FIREFOX ', deviceInfo)
        if ((elemTopPos >= windowTopPos && elemTopPos <= windowBottomPos) 
              || elemBottomPos >= windowTopPos && elemBottomPos <= windowBottomPos) {
        ) {
          activate = true
        }
      } else if((elemTopPos >= windowTopPos && elemTopPos <= windowBottomPos) || 
        elemBottomPos >= windowTopPos && elemBottomPos <= windowBottomPos) {
          activate = true;
        }

      if (activate) {
        console.log('IN VIEW', "windowTopPos: ", windowTopPos, 'windowBottomPos: ', windowBottomPos, 'elemTopPos', elemTopPos, 'elemBottomPos', elemBottomPos)
      
        // Cross-browser solution
        const arr = elem.className.split(' ');
        if (arr.indexOf(classNameEffect) == -1) {
          elem.className += ' ' + classNameEffect;
        }

      } else {
        console.log('NOT IN VIEW', 'windowTopPos: ', windowTopPos, 'windowBottomPos: ', windowBottomPos, 'elemTopPos', elemTopPos, 'elemBottomPos', elemBottomPos)
          const regExp = new RegExp(`\\b${classNameEffect}\\b`)

        elem.className = elem.className.replace(regExp, '');
      }
    })
  }

  // We must consider both scroll/touch (mobile) and resize to check whenever an element get into the viewport
  window.addEventListener('scroll', animateIfInView)
 // window.addEventListener("resize", animateIfInView)
    const [elementCollection, setElementCollection] = useState([]);
   // console.log("AboutMe", document.getElementsByClassName("animation-element"))
  useEffect(() => {
  }, [])



  return (
    <Fragment>
      <div className="calligraphy-container">
        <div className="animation-element">
          {' '}
          <Japanese />
        </div>
        <div className="animation-element">
          {' '}
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
