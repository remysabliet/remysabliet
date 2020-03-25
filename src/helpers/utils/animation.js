import { gsap } from "gsap"

import { getRandom } from "helpers/utils/miscellaneous"

export const delay = (t, v) => {
  return new Promise(function(resolve) { 
      setTimeout(resolve.bind(this, v), t) //We simply bind the v parameter so that it will be accessible once timeout is resolved .then((v) => ..
  });
}

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

/**
 * This function will appends to an node elem provided in parameter a few particules 
 * in motion to the right and disappearing in explosion
 * @param {*} originNode 
 */
export const addExplosionEffectOnClick = (originNode) => {
  const bt = originNode;
  var filter = document.querySelectorAll('#filter-goo-2 feGaussianBlur')[0];
  var particleCount = 12;
  var colors = ['#49FF18', '#D2FF2A', '#186103', '#00FFFF']
    
    var particles = [];
    var tl = new TimelineLite({onUpdate: function() {
      filter.setAttribute('x', 0);
    }});
    
  // Elastic Effects
    // tl.to(originNode, 2, { scaleX: 1.05 });
    // tl.to(originNode, 3, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 5);

    for (var i = 0; i < particleCount; i++) {
      particles.push(document.createElement('span'));
      bt.appendChild(particles[i]);

      particles[i].classList.add('appended-particle-right');
      
     // var dir = i % 2 ? '-' : '+';
      // Will go only in the positive x Axe direction
      var dir  = '+';
      
      var rotation = i % 2 ? getRandom(-1, 1)*i/2 : getRandom(-1, 1)*i;
      // Small particle size
      var size = i < 2 ? 1 : getRandom(0.5, 1.2);
      var tl = new TimelineLite({ onComplete: function(i) {
        particles[i].parentNode.removeChild(particles[i]);
        this.kill();
      }, onCompleteParams: [i] });

      tl.set(particles[i], { scale: size });
      // First life phase of the particle
      tl.to(particles[i], 0.5, { x: dir + 20, scaleX: 3, ease: SlowMo.ease.config(0.1, 0.7, false) });
      // Second life phase of the particle
      tl.to(particles[i], 0.1, { scale: size, x: dir +'=25' }, '-=0.1');
      
      //Set the color of particules
      if(i >= 2) tl.set(particles[i], { backgroundColor: colors[Math.round(getRandom(0, 3))] });
      // Assign a a movement to the particle
      tl.to(particles[i], 0.6, { x: dir + getRandom(60, 100), y: rotation*10, scale: 0.5, ease: Power3.easeOut });
      // Assign of way for the particle to disappear
      // Slowly
      tl.to(particles[i], 0.2, { opacity: 0, ease: Power3.easeOut }, '-=0.2');
    }
  // });
 // });
}
