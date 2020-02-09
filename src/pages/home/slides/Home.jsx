import React, { Fragment, useEffect } from 'react'

import Portrait from 'assets/svg/Portrait'
import Matrix from 'components/molecules/effects/Matrix'
import __ from 'helpers/i18n'
/**
 * Home page
 */
const Home = props => {
  const { locale, deviceInfo } = props
  // console.log(" Home", locale)
  // For mobile, we reduce the number of div to be displayed in order to save cpu
  const matrixLimit = ['ios', 'android'].includes(
    deviceInfo
  )
    ? 15
    : undefined
  // // console.log('matrixLimit', matrixLimit)


  /**
   * We setup an interval for every element having the className .rs-portrait-color
   * those elements via separate interval update color based on shared variable r g b 
  */
  useEffect(() => {
    // console.log("USE EFFECT HOME PAGE")
    const elems = document.querySelectorAll(
      'svg.rs-full-view-port .rs-portrait-color'
    )

    let r = 0,
      g = 0,
      b = 0

    elems.forEach(elem => {
      const intervalColor = setInterval(
        () => {
          // console.log(intervalColor,
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
        50
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
        Web dev&design
      </h1>

      <Portrait />
    </Fragment>
  )
}

export default Home
