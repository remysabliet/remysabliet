// No need to un-register this event.
// as we require this for the entire lifecycle
// of the application.
// This is to avoid un-necessary layout re-calcs.
import { recomputeViewportSize } from 'helpers/utils/miscellaneous'
import { animateIfInView } from 'helpers/utils/animation'
import { disableBodyScroll } from 'body-scroll-lock'

// Class name of node element to be animated
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
    // 'resize', //active on smartPhone and bug CSS setting BUG
    // 'scroll', activate on Smartphone
    'keydown',
    'keyup',
    'wheel',
    
    // 'touchstart', remove smartphone event as we are going to manage things appearing on screen differently
    // 'touchmove' remove smartphone event as we are going to manage things appearing on screen differently
  ]
  animateIfInViewEvenType.forEach(type =>
    window.addEventListener(
      type,
      function() {
        // console.log("animateIfInView FIRED", type)
        animateIfInView(animatedClass)
      },
      false
    )
  )
}


