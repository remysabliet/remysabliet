// No need to un-register this event.
// as we require this for the entire lifecycle
// of the application.
// This is to avoid un-necessary layout re-calcs.
import { recomputeViewportSize } from 'helpers/utils/miscellaneous'
import { animateIfInView } from 'helpers/utils/animation'

const animatedClass = "rs-js-animated-element"

window.addEventListener('resize', recomputeViewportSize)

//   ITERATOR PROBLEM WITH EDGE (trying to use iterator on an array while its possible only one object )
//   To be fix if such strategy is necessary (Animate on view)
//
 const animateIfInViewEvenType = ['resize', 'scroll', 'keydown', 'keyup' , 'wheel', 'touchend']
 animateIfInViewEvenType.forEach( type => window.addEventListener(type,function(){animateIfInView(animatedClass)}, false) 
 )
