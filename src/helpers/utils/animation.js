export const statisticLogs = (
  elapsedTime,
  currentFps
) =>
  console.log(
    `Elapsed time=  ${elapsedTime} secs @ ${currentFps} fps.`
  )

export const elapsedTime = sinceStart =>
  Math.round((sinceStart / 1000) * 100) / 100

/**
 * Based on the time Elapsed since start and the number of Frame,
 * allow to compute FPS
 *
 * @param {*} sinceStart
 * @param {*} framecount
 */
export const currentFps = (
  sinceStart,
  framecount
) =>
  Math.round(
    ((1000 / (sinceStart / ++this.frameCount)) *
      100) /
      100
  )

/**
 *  1) Retrieve all elements owning "animation-element" class inside the DOM
 *  2) For any of the element, retrieve a data attribute "animInView" whose contains className to apply
 *    if the element come into the viewport
 *  3) Check wether those elements inner boundaries are in view, that is to say
 *   whether their top boundary is equal or above viewport's top boundary and bottom boundary is above window bottom boundary
 *  4) if inside the viewport, add an animation class = dataset.animInView to the div element in order to trigger animation
 *     if outside the viewport, remove the animation class previously added from the div element
 */
export const animateIfInView = className => {
  const errorMarginPx =2; // We will allow an error Margin of 2 pixel to define whether an element is in view or not
  const windowTopPos = 0
  const windowBottomPos =
    windowTopPos + window.innerHeight

  const elementToAnimate = document.getElementsByClassName(
    'rs-js-animated-element'
  ) //rs-js-animated-element'
  //  console.log("animatedElement #1 ", elementToAnimate)
  Array.prototype.forEach.call(
    elementToAnimate,
    elem => {
      // console.log("animatedElement #2 ", elem.className)

      const elementBounds = elem.getBoundingClientRect()
      const elemTopPos = elementBounds.y
      const elemBottomPos =
        elemTopPos + elementBounds.height

      /********************** EXPLANATION ************************************/
      // Data attribute are first placed on an element prefixed by 'data-'
      // then, the name of the data attribute becomes available in JS via the element dataset object
      // Careful, snake case attributes become CamelCase data-anim-in-view => elem.dataset.animInView

      //We try to retrieve the name of the effects class if exists otherwise we apply a default rs-js-slide-up effects.
      const classNameEffect =
        elem.dataset.animInView ||
        'rs-js-slide-up'
      let activate = false

      // console.log("DEBUG animatedElement #3 elemTopPos:", elemTopPos, "windowTopPos:", windowTopPos, "elemBottonPos:", elemBottomPos, "windowBottomPos:", windowBottomPos)
      if (
        (elemTopPos+errorMarginPx >= windowTopPos &&
          elemTopPos <= windowBottomPos) ||
        (elemBottomPos-errorMarginPx >= windowTopPos &&
          elemBottomPos <= windowBottomPos)
      ) {
        activate = true
      }

      if (activate) {
        
        //  console.log("DEBUG animatedElement #4 activate start IN VIEW", document.getElementsByClassName(".js-slide-up .siblings"), elemTopPos, "windowTopPos:", windowTopPos, "elemBottonPos:", elemBottomPos, "windowBottomPos:", windowBottomPos)
        // Cross-browser solution
        const arr = elem.className.split(' ')
        if (arr.indexOf(classNameEffect) == -1) {
          elem.className += ' ' + classNameEffect
          // console.log("SLIDE UP CLASS ADDED")
        }
      } else {
        // Not in view anymore
        //  console.log("DEBUG animatedElement #6 activate start NOT IN VIEW",  document.getElementsByClassName(".js-slide-up .siblings"), "elementTopPos:", elemTopPos, "windowTopPos:", windowTopPos, "elemBottonPos:", elemBottomPos, "windowBottomPos:", windowBottomPos)

        const regExp = new RegExp(
          `\\b ${classNameEffect}\\b`
        )
        elem.className = elem.className.replace(
          regExp,
          ''
        )
      }
    }
  )
}
