import React from 'react'
// import { statisticLogs, elapsedTime, currentFps } from 'helpers/utils/animation'

import { animateValues, EasingFunctions } from 'helpers/utils/animation'
import { CONST_SLIDE_TRANSITION_DURATION } from 'helpers/constants/animation'

import innerHeight from 'ios-inner-height'

import _ from 'lodash'

/**
 * This HOC ensure a sliding effect for both desktop browsers and smartphone
 * Desktop browser sliding effect is handled via vanillaJS whereas Smartphone is handled via CSS animation
 * Event Type leveraged:
 *   All Device: resize
 *   Mobile: touchstart/touchmove
 *   Browser: wheel + keyup/keydown
 *  */

const MagicSlider = WrappedComponent => {
  // Information like slides or deviceInfo are retrieved from the props
  // Depending on the deviceType different coeff are applied to the slider effect.
  class HOC extends React.PureComponent {
    constructor(props) {
      super(props)
      // console.log('props MagicSlider', props)
      this.handleOnWheel = this.handleOnWheel.bind(this)
      this.startAnimating = this.startAnimating.bind(this)
      this.magicSlider = this.magicSlider.bind(this)
      // this.velocityComputation = this.velocityComputation.bind(this)
      this.touchStartHandler = this.touchStartHandler.bind(this)
      // this.touchEndHandler = this.touchEndHandler.bind(this)
      this.onTouchMoveHandler = this.onTouchMoveHandler.bind(this)
      this.keyUpHandler = this.keyUpHandler.bind(this)
      this.keyDownHandler = this.keyDownHandler.bind(this)
      this.handleResize = this.handleResize.bind(this)

      this.speed = 0
      // We can't work with React State to manage this variable as the slider effect
      // algorithm require a recursivity call (high speed)
      // setState is asynchronous and quickly saturated (queue),
      // setState doesn't update quickly enough to follow the natural speed of the slider effect
      // to provide a smooth rendering.

      this.viewportHeight = 0

      this.slideChangeHardnessCoeff = 0.02 // Bigger the coef is, harder it is to change of slide. norm: 0.03
      this.slideChangeSpeedCoeff = 0.8 // Speed du changement de slide   norm= 0.8
      // 1= we keep changing slide as soon as we move the wheel
      // 0.3 => Harder to change of slide
      this.frameCount = 0
      this.fps = 0
      this.fpsInterval = 0
      this.startTime = 0
      this.now = 0
      this.then = 0
      this.elapse = this.animationFrequency = 60 // 60 => max possible using requestAnimationFrame(callback) Hz
      this.isLoopActive = false // control the recursive loop to adjust the screen position (call to magicSlider)

      /* Mobile Variable*/
      this.touchesInAction = {}

      this.keyCode = undefined
      this.keyTimestamp = undefined

      // viewport Y translation indicator to be automatically adjusted whenever the screen is resized (Smartphone Top bar disappearing)
      // this.moveViewportFrom = { a: 0 } // origin of the element to move, variable will be updated throughout the progress of animation
      this.moveViewportTarget = { a: 0 } // target of the element to move

      // Purpose of throttle function is to limit the number of invokation of a function (here translateSlide) every period of time
      // this.throttleTranslateSlide = _.throttle(this.translateSlide, CONST_SLIDE_TRANSITION_DURATION)
      this.throttleMoveViewport = _.throttle(
        this.moveViewportToSlide,
        CONST_SLIDE_TRANSITION_DURATION
      )

      //uSe as global variable to be leverage by handleResize() function
      this.nextSlideIndex = 0
      // Slide displayed to user
      this.slidePositionIndex = 0 // Slide index position
      this.currentSlideYPosition = 0 // represent the Y position of the viewport (to be multiply with viewportHeight to get pixel positon)
      // I keep React state Management for variables which either doesn'nt change often or which require to trigger a render
      // In order to pass updated props to the wrapped component
      this.state = {
        currentSlide: props.slides[props.currentSlideIndex] // We naturally start at the first slide of the array
      }
    }

    /***************************************************/
    /****************     Methods    ******************/
    /*************************************************/

    /**
     * Move viewport to slide index provided in parameter
     * This function will be called only if its props.currentSlideIndex has been updated
     * Meaning that user updated the slideIndex by clicking on the navigation bar
     * @param {*} slideIndex
     */
    async moveViewportToSlide(nextSlideIndex) {
      this.nextSlideIndex = nextSlideIndex

      const animDuration = CONST_SLIDE_TRANSITION_DURATION
      const easingFunction = EasingFunctions['easeInOutQuart']

      //Origin point of the animation
      const moveViewportTo = {
        a: this.props.slides.indexOf(this.state.currentSlide) * this.viewportHeight
      }

      //Target point of the animation, may be corrected if windows height being resized
      this.moveViewportTarget['a'] = this.nextSlideIndex * this.viewportHeight

      const options = {
        onUpdate: () => {
          // console.log("currentPosition.a", currentPosition.a)
          window.scrollTo(0, moveViewportTo.a)
        },
        onComplete: async values => {
          // console.log('OnComplete', values)
        },
        ease: easingFunction
      }

      /*Update Class variables/states*/
      this.currentSlideYPosition = nextSlideIndex
      this.slidePositionIndex = nextSlideIndex
      await this.setState({
        currentSlide: this.props.slides[nextSlideIndex]
      })
      this.props.setCurrentSlideIndex(this.slidePositionIndex)
      // console.log('moveViewportTarget (animated element final Y position):', this.moveViewportTarget)

      //Activate Sliding effects
      animateValues(moveViewportTo, this.moveViewportTarget, animDuration, options)
    }

    startAnimating(fps) {
      this.fpsInterval = 1000 / fps
      this.then = Date.now()
      this.startTime = this.then
      this.magicSlider()
    }

    // Update the wh
    handleResize() {
      const { deviceInfo } = this.props
      const vhString = getComputedStyle(document.documentElement).getPropertyValue('--vh')
      const windowsHeight = Number.parseFloat(vhString) * 100
      console.log("handleResize  windowsHeihgt: ", innerHeight(), windowsHeight)
      // this.viewportHeight = deviceInfo === 'ios' ? innerHeight() : windowsHeight
      this.viewportHeight = windowsHeight

      // Update viewport translation Y whenever the screen is resize (Smartphone Top bar disappearing)
      // this.moveViewportFrom = { a: this.props.slides.indexOf(this.state.currentSlide) * this.viewportHeight }
      this.moveViewportTarget['a'] = this.nextSlideIndex * this.viewportHeight

      // console.log('handleResize New moveViewportTo', this.moveViewportTarget, this.nextSlideIndex)
    }

    /**
     * Mobile touch handler when start touching screen
     * @param {*} event
     */
    touchStartHandler(event) {
      // Activate the scrolling animation loop
      this.isLoopActive = true
      var touches = event.changedTouches
      for (var j = 0; j < touches.length; j++) {
        /* store touch info on touchstart */
        this.touchesInAction['$' + touches[j].identifier] = {
          identifier: touches[j].identifier,
          pageX: touches[j].pageX,
          pageY: touches[j].pageY
        }
      }
    }

    /**
     * Mobile touch handler when continuing touching screen while moving finger
     * @param {*} event
     */
    onTouchMoveHandler(event) {
      var touches = event.changedTouches
      for (var j = 0; j < touches.length; j++) {
        /* access stored touch info on touchend */
        var theTouchInfo = this.touchesInAction['$' + touches[j].identifier]
        theTouchInfo.dx =
          touches[j].pageX - theTouchInfo.pageX /* x-distance moved since touchstart */
        theTouchInfo.dy =
          touches[j].pageY - theTouchInfo.pageY /* y-distance moved since touchstart */
      }

      // We use  _.debounce() to prevent successful call in a specified period of time (here one sec)
      const dir = theTouchInfo.dy > 0 ? 'up' : 'down'

      let newSlidePosition = this.slidePositionIndex
      if (dir === 'down') {
        // add 1 except when we are at the lastSlide
        newSlidePosition += this.slidePositionIndex === this.props.slides.length - 1 ? 0 : 1
      } else {
        // remove 1 except when we are at position 0
        newSlidePosition += this.slidePositionIndex === 0 ? 0 : -1
      }

      //We make sure not going outside boundaries
      if (
        !(this.slidePositionIndex === this.props.slides.length - 1 && dir === 'down') &&
        !(this.slidePositionIndex === 0 && dir === 'up')
      ) {
        this.throttleMoveViewport(newSlidePosition)
        //delete all the pending call to the function 200ms before the end of the current transition
        setTimeout(
          function(func) {
            func.cancel()
          },
          CONST_SLIDE_TRANSITION_DURATION - 200,
          this.throttleMoveViewport
        )

        /** CSS Slider related code - temporary activated as we rely on Javascript algo to perform scrolling */

        // this.throttleTranslateSlide(dir);
        // //delete all the pending call to the function 200ms before the end of the current transition
        // setTimeout(function (func) { func.cancel(); }, CONST_SLIDE_TRANSITION_DURATION - 200, this.throttleTranslateSlide)
        // console.log("onTouchMoveHandler throttle TranslateDir called")

        // await this.setState({ currentSlide: this.props.slides[newSlidePosition] });
        // this.currentSlideYPosition = newSlidePosition;
        // this.slidePositionIndex = newSlidePosition;

        // Move viewport to the next class

        //  this.moveViewportToSlide(newSlidePosition);
      }
    }

    // /**
    //  * Return an array of nodes
    //  */
    // getSlidesNodes() {
    //   return document.getElementsByClassName(
    //     `rs-slide`
    //   )
    // }

    // /**
    //  * Move Slide up or down based on direction
    //  * @param {*} dir up / down
    //  */
    // async translateSlide(dir) {
    //   console.log("translateSlide CALLED dir:", dir)
    //   let newPosition = this.slidePositionIndex;
    //   if (dir === "down") { // add 1 except when we are at the lastSlide
    //     newPosition += this.slidePositionIndex === this.props.slides.length - 1 ? 0 : 1;
    //   } else { // remove 1 except when we are at position 0
    //     newPosition += this.slidePositionIndex === 0 ? 0 : -1;
    //   }

    //   console.log("translateSlide", "newIndexPositionAfterCalculation", newPosition, "this.slidePositionIndex", this.slidePositionIndex)

    //   //Only if a slide change happened we go further
    //   if (newPosition !== this.slidePositionIndex) {

    //     // Retrieve all the slides elements
    //     const slides = this.getSlidesNodes();
    //     console.log("slides", slides)

    //     this.slidePositionIndex = newPosition;
    //     this.currentSlideYPosition = newPosition;
    //     await this.setState({
    //       currentSlide: this.props.slides[this.slidePositionIndex]
    //     })
    //     this.props.setCurrentSlideIndex(this.slidePositionIndex);

    //     Array.prototype.forEach.call(slides, (slide => {
    //       this.updateSlideClass(slide);
    //     }))
    //   }
    // }

    // /**
    //  * remove class except rs-slide and then add new class if indexSlide !=0
    //  * @param {*} slideNode
    //  */
    // updateSlideClass(slideNode) {
    //   console.log("removeSlideClass slideNode:", slideNode, "movin to Index", this.slidePositionIndex)
    //   const classToRemove = Array.prototype.filter.call(slideNode.classList, (x => { return x !== "rs-slide" }))
    //   // Add new class only if not (slide 0) because no transformation to apply
    //   if (this.slidePositionIndex !== 0)
    //     slideNode.classList.add(`rs-move-${this.slidePositionIndex}-slide-down`)

    //   // Remove Slide Translation related class
    //   classToRemove.forEach(classN => slideNode.classList.remove(classN))
    // }

    /**
     * Desktop keyboard handler when pressing key
     * @param {*} event
     */
    keyDownHandler(event) {
      // Activate the scrolling animation loop
      this.isLoopActive = true
      this.startAnimating(this.animationFrequency)

      //38 UpArrow 40 DownArrow
      if ((event.keyCode === 38 || event.keyCode === 40) && !event.repeat) {
        ;(this.keyCode = event.keyCode), (this.keyTimestamp = event.timeStamp)
      }
    }

    /**
     * Desktop keyboard handler when releasing key
     * @param {*} event
     */
    keyUpHandler(event) {
      if (this.props.isSlideControlActivated) {
        const elapsedTime = event.keyCode === this.keyCode ? event.timeStamp - this.keyTimestamp : 0
        if (elapsedTime) {
          const deltaY = this.keyCode === 38 ? -1 : 1

          this.speed += (deltaY * elapsedTime) / 2000
        }
      }
    }

    /**
     * Mouse wheel handler
     * @param {*} event
     */
    handleOnWheel(event) {
      // We allow scrolling only if no CSS Slide transition on going
      if (this.props.isSlideControlActivated) {
        const deltaY = event.deltaY

        // /** CSS based slider animation purpose , deactivated by default */
        // const dir = deltaY > 0 ? "down" : "up";
        // // invoke the throttled function  (every3s)
        // this.throttleTranslateSlide(dir);
        // //delete all the pending call to the function
        // setTimeout(function (func) { func.cancel() }, 2950, this.throttleTranslateSlide)
        // console.log("dir", dir)

        /**Javascript sliding config */
        this.isLoopActive = true
        this.startAnimating(this.animationFrequency)

        const { deviceInfo } = this.props

        // We allow change only if no slide transition is onGoing
        switch (deviceInfo) {
          case 'firefox':
            this.speed += deltaY * 0.006 // 0.006 Firefox
            break
          case 'edge':
            this.speed += deltaY * 0.0006 // 0.006 Firefox
            break
          default:
            this.speed += deltaY * 0.0003 // 0.0003 Chrome, Opera, Safari
        }
      }
    }

    velocityComputation(deltaY) {
      this.speed += -1 * deltaY * 0.0006 // -1 allow to inverse touch scrolling orientation on mobile
    }

    // velocityComputationMobile(deltaY) {
    //   this.speed += -1 * deltaY // -1 allow to inverse touch scrolling orientation on mobile
    // }

    /**
     * Looping function in charge of doing the sliding effect
     * When not moving much anymore between 2 loop, will deactivate the loop by turning the flag
     * this.isLoopActive to false
     */
    async magicSlider() {
      // console.log("MagicSlider function called")
      // Security to avoid sliding out of boundaries
      if (this.currentSlideYPosition < 0) {
        this.currentSlideYPosition = 0
      } else if (this.currentSlideYPosition > this.props.slides.length - 1) {
        this.currentSlideYPosition = this.props.slides.length - 1
      } else {
        this.now = Date.now()
        this.elapsed = this.now - this.then
        // if enough time has elapsed, draw the next frame
        if (this.elapsed > this.fpsInterval) {
          // Get ready for next frame by setting then=now, but...
          // Also, adjust for fpsInterval not being multiple of 16.67
          this.then = this.now - (this.elapsed % this.fpsInterval)

          this.speed *= this.slideChangeSpeedCoeff
          this.currentSlideYPosition += this.speed

          const slideBoundary = Math.round(this.currentSlideYPosition)
          const dif = slideBoundary - this.currentSlideYPosition

          this.currentSlideYPosition += dif * this.slideChangeHardnessCoeff

          if (this.currentSlideYPosition < 0) {
            this.currentSlideYPosition = 0
          } else if (this.currentSlideYPosition > this.props.slides.length - 1) {
            this.currentSlideYPosition = this.props.slides.length - 1
          }

          //console.log("slideBoundary", slideBoundary, "this.currentSlideYPosition", this.currentSlideYPosition, Math.abs(slideBoundary - this.currentSlideYPosition))
          if (Math.abs(slideBoundary - this.currentSlideYPosition) < 0.001) {
            // We are really close to a boundary (Previous or Next slide) so we override our currentPosition with that integer
            // to avoid an infinite division
            this.currentSlideYPosition = slideBoundary
            this.isLoopActive = false
          }

          window.scrollTo(0, this.currentSlideYPosition * this.viewportHeight)

          // We reajust the BoundaryIndex as it can goes to -1 as well as be superior to array.length will makes crash all
          // the logic behind currentSlide
          const adjustedSlideIndex =
            slideBoundary < 0
              ? 0
              : slideBoundary > this.props.slides.length - 1
              ? this.props.slides.length - 1
              : slideBoundary
          const newSlideIndex = this.props.slides[adjustedSlideIndex]

          // Will trigger a render every loop if we don't add this condition.
          // Purpose is to save performance
          if (newSlideIndex && newSlideIndex !== this.state.currentSlide) {
            // console.log("newSlideIndex", newSlideIndex, this.state.currentSlide)
            await this.setState({
              currentSlide: this.props.slides[adjustedSlideIndex]
            })
            this.props.setCurrentSlideIndex(adjustedSlideIndex) // update store
          }

          // Statistics purpose
          // const sinceStart = this.now - this.startTime
          // this.statisticLogs(
          //   this.elapsedTime(sinceStart),
          //   this.currentFps(sinceStart, this.frameCount)
          // )
        }
        this.isLoopActive && window.requestAnimationFrame(this.magicSlider)
      }
    }

    /*******************************************************/
    /****************     REACT HOOKS    ******************/
    /*****************************************************/

    /**
     * We apply a lower fps in order to reduce freezing effect
     * From time to time viewport is quicker, some time not, by reducing fps we reduce those latency effect
     */
    componentDidMount() {
      const { deviceInfo } = this.props

      // Initialize vh property
      window.scrollTo(0, 10)
      this.handleResize()
      // console.log(deviceInfo)
      if (['ios', 'android'].includes(deviceInfo)) {
        window.addEventListener('touchstart', this.touchStartHandler, false)
        // window.addEventListener('touchend', this.touchEndHandler, false)
        window.addEventListener('touchmove', this.onTouchMoveHandler, false)
      } else {
        // Browser
        window.addEventListener('wheel', this.handleOnWheel, false)
        window.addEventListener('keyup', this.keyUpHandler, false)
        window.addEventListener('keydown', this.keyDownHandler, false)
      }

      // Everytime our viewport is resized (for example when the searchBar appears on Mobile)
      // below function will be called in order to update our Slide's height accordingly
      window.addEventListener('resize', this.handleResize)
    }

    /**
     * Will be called anytime the slide did change
     * invoked right before the most recently rendered output is committed to e.g. the DOM
     * @param {*} prevProps
     * @param {*} prevState
     */
    componentDidUpdate(prevProps) {
      // console.log("MagicSlider HOC componentDidUpdate")

      // This block is aimed for NavBar update
      // Decide whether we start animation to switch of slide.
      // We must invoke this function only if the change has been coming from the store (and so updated by Navbar)
      // Must prevent change if the store.homepage.currentSlideIndex has been updated by magicSlider() itself
      if (
        prevProps.currentSlideIndex !== this.props.currentSlideIndex &&
        this.props.currentSlideIndex != this.props.slides.indexOf(this.state.currentSlide)
      ) {
        // Move viewport to the next class
        this.moveViewportToSlide(this.props.currentSlideIndex)
      }
    }

    componentWillUnmount() {
      window.removeEventListener('touchstart', this.touchStartHandler, false)
      window.removeEventListener('wheel', this.handleOnWheel, false)
      window.removeEventListener('resize', this.handleResize, false)
      window.removeEventListener('keyup', this.keyUpHandler, false)
      window.removeEventListener('keydown', this.keyDownHandler, false)
    }

    render() {
      return <WrappedComponent {...this.props} currentSlide={this.state.currentSlide} />
    }
  }
  return HOC
}

export default MagicSlider
