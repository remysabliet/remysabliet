export const statisticLogs = (elapsedTime, currentFps) =>
  console.log(`Elapsed time=  ${elapsedTime} secs @ ${currentFps} fps.`)

export const elapsedTime = sinceStart => Math.round((sinceStart / 1000) * 100) / 100

/**
 * Based on the time Elapsed since start and the number of Frame, 
 * allow to compute FPS 
 * 
 * @param {*} sinceStart 
 * @param {*} framecount
*/
export const currentFps = (sinceStart, framecount) =>
  Math.round(((1000 / (sinceStart / ++this.frameCount)) * 100) / 100)

/**
 *  1) Retrieve all elements owning "animation-element" class inside the DOM
 *  2) Check wether those elements inner boundaries are in view, that is to say 
 *   whether their top boundary is equal or above viewport's top boundary and bottom boundary is above window bottom boundary
 *  3) if inside the viewport, add an animation class to the div element in order to trigger animation
 *     if outside the viewport, remove the animation class from the div element
 */
export const animateIfInView = (className) => {

  const windowTopPos = 0
  const windowBottomPos = windowTopPos + window.innerHeight;

  const elementToAnimate = document.getElementsByClassName("rs-js-animated-element");
  // console.log("animatedElement #1 ", elementToAnimate)
  Array.prototype.forEach.call(elementToAnimate, (elem) => {
    // console.log("animatedElement #3 ", elem)
    const elementBounds = elem.getBoundingClientRect();
    const elemTopPos = elementBounds.y;
    const elemBottomPos = elemTopPos + elementBounds.height;

    //For now we do not manage dynamically effects (only slide-up effect works) => to be improved
    const classNameEffect = "rs-js-slide-up";

    let activate = false;

    // console.log("elemTopPos:", elemTopPos, "windowTopPos:", windowTopPos, "elemBottonPos:", elemBottomPos, "elemBottomPos:", windowBottomPos)
    if ((elemTopPos >= windowTopPos && elemTopPos <= windowBottomPos) ||
      elemBottomPos >= windowTopPos && elemBottomPos <= windowBottomPos) {
      activate = true;
    }

    if (activate) {
    //  console.log("animatedElement #5 activate start IN VIEW", document.getElementsByClassName(".js-slide-up .siblings"))
      // Cross-browser solution
      const arr = elem.className.split(" ");
      if (arr.indexOf(classNameEffect) == -1) {
        elem.className += " " + classNameEffect;
        // console.log("SLIDE UP CLASS ADDED")
      }

    } else { // Not in view anymore 
    //  console.log("animatedElement #6 activate start NOT IN VIEW",  document.getElementsByClassName(".js-slide-up .siblings"))

      // For now I decided not to reset animation when element get out of views
       const regExp = new RegExp(`\\b ${classNameEffect}\\b`)
       elem.className = elem.className.replace(regExp, ""); 

    }
  }
  )
}
