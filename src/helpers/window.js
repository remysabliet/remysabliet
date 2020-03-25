// No need to un-register this event.
// as we require this for the entire lifecycle
// of the application.
// This is to avoid un-necessary layout re-calcs.
import { recomputeViewportSize } from 'helpers/utils/miscellaneous'
import { animateIfInView } from 'helpers/utils/animation'
import { disableBodyScroll } from 'body-scroll-lock'

const animatedClass = 'rs-js-animated-element'

window.addEventListener(
  'resize',
  recomputeViewportSize
)

const targetElement = document.querySelector(
  '#root'
)
disableBodyScroll(targetElement)

/** Initialization of eventListener for the whole page */
export const initAnimation = () => {
  //   ITERATOR PROBLEM WITH EDGE (trying to use iterator on an array while its possible only one object )
  //   To be fix if such strategy is necessary (Animate on view)
  //
  const animateIfInViewEvenType = [
    'onload',
    'resize',
    'scroll',
    'keydown',
    'keyup',
    'wheel',
    'touchstart',
    'touchend'
  ]
  animateIfInViewEvenType.forEach(type =>
    window.addEventListener(
      type,
      function() {
        // console.log("animateIfInView FIRED")
        animateIfInView(animatedClass)
      },
      false
    )
  )
}
