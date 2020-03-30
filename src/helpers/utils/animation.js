import { getRandom } from 'helpers/utils/miscellaneous'

/**
 * Linear interpolation, to find corresponding values of a range [start, end] for an indicator t (ratio or time)
 * @param {*} start of a range
 * @param {*} end of a range
 * @param {*} ratio value between 1 and 0 to define the progress in a range
 * lerp(20,80,05) => 50
 */
export const lerp = (start, end, progress) =>
  start + progress * (end - start)

// https://gist.github.com/gre/1650294
/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 */
export const EasingFunctions = {
  // no easing, no acceleration
  linear: t => t,
  // accelerating from zero velocity
  easeInQuad: t => t * t,
  // decelerating to zero velocity
  easeOutQuad: t => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: t =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // accelerating from zero velocity
  easeInCubic: t => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: t => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: t =>
    t < 0.5
      ? 4 * t * t * t
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  easeInQuart: t => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: t => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: t =>
    t < 0.5
      ? 8 * t * t * t * t
      : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  easeInQuint: t => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: t => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: t =>
    t < 0.5
      ? 16 * t * t * t * t * t
      : 1 + 16 * --t * t * t * t * t,
  // elastic bounce effect at the beginning
  easeInElastic: t =>
    (0.04 - 0.04 / t) * Math.sin(25 * t) + 1,
  // elastic bounce effect at the end
  easeOutElastic: t =>
    ((0.04 * t) / --t) * Math.sin(25 * t),
  // elastic bounce effect at the beginning and end
  easeInOutElastic: t =>
    (t -= 0.5) < 0
      ? (0.01 + 0.01 / t) * Math.sin(50 * t)
      : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1
}

export const delay = (t, v) => {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(this, v), t) //We simply bind the v parameter so that it will be accessible once timeout is resolved .then((v) => ..
  })
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
 * This function activate animation on DOM element inside the viewport
 *
 *  1) Retrieve all elements owning "rs-js-animated-element" class inside the DOM
 *  2) For any of the element, retrieve a data attribute "animInView" whose contains className to apply
 *    if the element come into the viewport
 *  3) Check wether those elements inner boundaries are in view, that is to say
 *   whether their top boundary is equal or above viewport's top boundary and bottom boundary is above window bottom boundary
 *
 *   When running the function for the first time, all the element will have boundaries = 0 (because hidden) and so will be considered as IN VIEW,
 *   at the second call of the function, their boundaries would have been initialized and so will disappeared if not in view
 *
 *  4) if inside the viewport, add an animation class = dataset.animInView to the div element in order to trigger animation
 *     if outside the viewport, remove the animation class previously added from the div element
 */
export const animateIfInView = className => {
  const errorMarginPx = 200 // We will allow an error Margin of 2 pixel to define whether an element is in view or not
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
      // console.log(
      //   'animatedElement #2 ',
      //   elem.className
      // )

      const elementBounds = elem.getBoundingClientRect()
      const elemTopPos = elementBounds.y
      const elemBottomPos =
        elemTopPos + elementBounds.height
      // console.log(
      //   'elementBounds',
      //   elementBounds,
      //   'elemTopPos',
      //   elemBottomPos,
      //   'elemBottomPos'
      // )

      /********************** EXPLANATION ************************************/
      // Data attribute are first placed on an element prefixed by 'data-'
      // then, the name of the data attribute becomes available in JS via the element dataset object
      // Careful, snake case attributes become CamelCase data-anim-in-view => elem.dataset.animInView

      //We try to retrieve the name of the effects class if exists otherwise we apply a default rs-js-slide-up effects.
      const classNameEffect =
        elem.dataset.animInView ||
        'rs-js-slide-up'
      let activate = false

      // console.log("DEBUG animatedElement #3 elemTopPos:", elemTopPos + errorMarginPx, "windowTopPos:", windowTopPos, "elemBottonPos:", elemBottomPos - errorMarginPx, "windowBottomPos:", windowBottomPos)
      if (
        (elemTopPos + errorMarginPx >=
          windowTopPos &&
          elemTopPos <= windowBottomPos) ||
        (elemBottomPos - errorMarginPx >=
          windowTopPos &&
          elemBottomPos <= windowBottomPos)
        //  && elemTopPos + elemBottomPos !== 0 // object which doesnt appears on screens happens to have all boundaries = 0
      ) {
        activate = true
      }

      if (activate) {
        // console.log(
        //   'DEBUG animatedElement #4 activate start IN VIEW',
        //   document.getElementsByClassName(
        //     '.js-slide-up .siblings'
        //   ),
        //   elemTopPos + errorMarginPx,
        //   'windowTopPos:',
        //   windowTopPos,
        //   'elemBottonPos:',
        //   elemBottomPos - errorMarginPx,
        //   'windowBottomPos:',
        //   windowBottomPos
        // )
        // Cross-browser solution
        const arr = elem.className.split(' ')
        if (arr.indexOf(classNameEffect) == -1) {
          elem.className += ' ' + classNameEffect
          // console.log("SLIDE UP CLASS ADDED")
        }
      } else {
        // Not in view anymore
        // console.log(
        //   'DEBUG animatedElement #6 activate start NOT IN VIEW',
        //   document.getElementsByClassName(
        //     '.js-slide-up .siblings'
        //   ),
        //   'elementTopPos:',
        //   elemTopPos,
        //   'windowTopPos:',
        //   windowTopPos,
        //   'elemBottonPos:',
        //   elemBottomPos,
        //   'windowBottomPos:',
        //   windowBottomPos
        // )

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
export const addExplosionEffectOnClick = originNode => {
  const bt = originNode
  var filter = document.querySelectorAll(
    '#filter-goo-2 feGaussianBlur'
  )[0]
  var particleCount = 12
  var colors = [
    '#49FF18',
    '#D2FF2A',
    '#186103',
    '#00FFFF'
  ]

  var particles = []
  var tl = new TimelineLite({
    onUpdate: function() {
      filter.setAttribute('x', 0)
    }
  })

  // Elastic Effects
  // tl.to(originNode, 2, { scaleX: 1.05 });
  // tl.to(originNode, 3, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 5);

  for (var i = 0; i < particleCount; i++) {
    particles.push(document.createElement('span'))
    bt.appendChild(particles[i])

    particles[i].classList.add(
      'appended-particle-right'
    )

    // var dir = i % 2 ? '-' : '+';
    // Will go only in the positive x Axe direction
    var dir = '+'

    var rotation =
      i % 2
        ? (getRandom(-1, 1) * i) / 2
        : getRandom(-1, 1) * i
    // Small particle size
    var size = i < 2 ? 1 : getRandom(0.5, 1.2)
    var tl = new TimelineLite({
      onComplete: function(i) {
        particles[i].parentNode.removeChild(
          particles[i]
        )
        this.kill()
      },
      onCompleteParams: [i]
    })

    tl.set(particles[i], { scale: size })
    // First life phase of the particle
    tl.to(particles[i], 0.5, {
      x: dir + 20,
      scaleX: 3,
      ease: SlowMo.ease.config(0.1, 0.7, false)
    })
    // Second life phase of the particle
    tl.to(
      particles[i],
      0.1,
      { scale: size, x: dir + '=25' },
      '-=0.1'
    )

    //Set the color of particules
    if (i >= 2)
      tl.set(particles[i], {
        backgroundColor:
          colors[Math.round(getRandom(0, 3))]
      })
    // Assign a a movement to the particle
    tl.to(particles[i], 0.6, {
      x: dir + getRandom(60, 100),
      y: rotation * 10,
      scale: 0.5,
      ease: Power3.easeOut
    })
    // Assign of way for the particle to disappear
    // Slowly
    tl.to(
      particles[i],
      0.2,
      { opacity: 0, ease: Power3.easeOut },
      '-=0.2'
    )
  }
  // });
  // });
}

/**
 * Codesource From @xerxesnoble on CodePen https://codepen.io/xerxesnoble/pen/JNgmJR?editors=0010
* @desc Basic linear value animation that can accept simple easing functions and provides update & complete callbacks
* @param  {Object} values - Object with numerical values. eg. { value1: 0, value2: 20, someKey: 55 }
* @param  {Number} duration - How long (in milliseconds) the animation will be
* @param  {Object} options - target values, update callback & complete callback
* @param  {Function} [options.onComplete=(values) => values] - Callback that fires once animation is complete
* @param  {Function} [options.onUpdate=(values) => values] - Callback that fires when animation frame updates
* @param  {Function} [options.ease=(t) => t] - easing method eg. https://gist.github.com/gre/1650294
* @example
 const a = document.getElementById('a')
 animateValues({ a: 0 }, 800, {
    a: 500,
    onUpdate: v => a.style.transform = 'scaleX('+ v.a +')',
    onComplete: v => alert('Done!'),
    ease: t => t<.5 ? 2*t*t : -1+(4-2*t)*t, // From: https://gist.github.com/gre/1650294 
  })
*/
export const animateValues = (
  values,
  targets,
  duration,
  options
) => {
  // Linear interpolation (already present in the same file)
  // const lerp = (source, target, amount) => source + amount * (target - source)

  // Validation methods
  const checkNum = n =>
    typeof n === 'number' ? n : null
  const checkFunc = f =>
    typeof f === 'function' ? f : _ => _

  // Ensure methods.
  const onComplete = checkFunc(options.onComplete)
  const onUpdate = checkFunc(options.onUpdate)
  const ease = checkFunc(options.ease)

  // Animation start time
  const start = Date.now()

  // Create & run animation function
  const animation = () => {
    const now = Date.now()
    let t =
      duration > 0 ? (now - start) / duration : 1
    
    /** Targets values can potentially be updated on the fly, so we need to incorporate those possible changes */
    // Create a map <key: [from, to]>
    const animationMap = Object.keys(
      values
    ).reduce((map, key) => {
      const _from = checkNum(values[key])
      const _to = checkNum(targets[key])
      if (_from !== null && _to !== null)
        map[key] = [_from, _to]
      return map
    }, {})



    // List of animating values
    const keys = Object.keys(animationMap)

    // Update all values using 't'
    keys.forEach(key => {
      // If both 'from' and 'to' are numbers: animate!
      const [_from, _to] = animationMap[key]
      const progress = ease(
        t,
        _from,
        _to,
        duration
      )
      // console.log(progress)
      // Update value
      values[key] = lerp(_from, _to, progress)
    })

    // If complete..
    if (t >= 1) {
      // Final update for all keys
      keys.forEach(
        key => (values[key] = targets[key])
      )
      onUpdate(values)
      onComplete(values)
    } else {
      // Run update callback and loop until finished
      onUpdate(values)
      requestAnimationFrame(animation)
    }
  }
  animation()
}
