// No need to un-register this event.
// as we require this for the entire lifecycle
// of the application.
// This is to avoid un-necessary layout re-calcs.
import { recomputeViewportSize } from 'helpers/utils/miscellaneous'
import { animateIfInView } from 'helpers/utils/animation'

const animatedClass = "animated-element"

window.addEventListener('resize', recomputeViewportSize)

const animateIfInViewEvenType = ['resize','scroll']
animateIfInViewEvenType.forEach( type =>
  window.addEventListener(type, animateIfInView(animatedClass)) 
)