import React, { Fragment, useEffect } from 'react'

import Portrait from 'assets/svg/Portrait'
import Matrix from 'components/molecules/effects/Matrix'
import __ from 'helpers/i18n'
import { animateIfInView } from 'helpers/utils/animation'

/**
 * Home page
 */
const Home = props => {
  const { locale, deviceInfo } = props
  // console.log(" Home", locale)
  // For mobile, we reduce the number of floating div to be displayed in order to limit freeze
  const matrixLimit = ['ios', 'android'].includes(
    deviceInfo
  )
    ? 10
    : undefined
  // // console.log('matrixLimit', matrixLimit)


  /**
   * We setup an interval for every element having the className .rs-portrait-color
   * Those elements, via different interval, update color based on shared variable r g b 
   * because all ele,ents are sharing the same class, the color speed will update as much quicker as elements are owning this color
   * 
   * Basically in the current configuration, we have 4 items having rs-portrait-color class,
   * So this function will be called 4 times in parallel
  */
  useEffect(() => {

    // Desktop version - we must do the Initial firing of animated element (There is no eventListener fired when page are successfully mounted)
    if(!['ios', 'android'].includes(deviceInfo)){
      console.log("home device info", deviceInfo)
      animateIfInView();
    }

    const elems = document.querySelectorAll(
      'svg.rs-full-view-port .rs-portrait-color'
    )

    let r = 0,
      g = 0,
      b = 0
      let counter =0;

      // for every node owning .rs-portrait-color class (current situation around 4 head, shoulder, tie, ..)
    elems.forEach(elem => {
      const intervalColor = setInterval(
        () => {
          counter+=1;
          //   getComputedStyle(elem).getPropertyValue(
          //     'fill'
          //   ),
          //   r,
          //   g,
          //   b
          // )
          r = r + 0.2
          g = g + 0.2
          b = b + 0.2
          elem.setAttribute(
            'style',
            `fill: rgb(${r},${g},${b})`
          )
          if (
            [r, g, b].every(
              currentValue => currentValue >= 255
            )
          ){
            clearInterval(intervalColor)
          }
        },
         50 // the whole animation last about 15s (255/0.2*50*4)
      )
    })
  }, [1]) // using a constant make the useEffect run only one time

  const debugMode = false
  return (
    <Fragment>
      {debugMode && <div>{deviceInfo}
      {'innerHeight: ' + window.innerHeight}
      {'  outerHeight: ' + window.outerHeight}
    </div>}
      <Matrix
        limit={matrixLimit}
        list={__('ITTerminology', locale)}
      />
      <h1
        className="rs-js-animated-element rs-title-left"
        data-anim-in-view="rs-js-slide-right"
      >
        Rémy SABLIET
      </h1>
      <h1
        className="rs-js-animated-element rs-title-right"
        data-anim-in-view="rs-js-slide-left"
      >
        Web Designer
      </h1>

      <Portrait />
    </Fragment>
  )
}

export default Home
