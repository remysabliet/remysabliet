import React from 'react'
import { statisticLogs, elapsedTime, currentFps } from 'helpers/utils/animation'

import innerHeight from 'ios-inner-height';

import _ from 'lodash'

/**
 * This HOC ensure a sliding effect supporting desktop/smartphone browsers
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
      console.log("props MagicSlider", props)
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
      this.currentPosition = 0 // represent the Y position of the viewport (to be multiply with viewportHeight to get pixel positon)
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
      this.elapse =
        this.animationFrequency = 200; // Hz
      this.isLoopActive = false; // control the recursive loop to adjust the screen position (call to magicSlider)

      /* Mobile Variable*/
      this.touchesInAction = {}

      this.keyCode = undefined
      this.keyTimestamp = undefined

      // Slide displated to yuser
      this.slidePositionIndex = 0;

      // Purpose of this function is to limit the number of invokation per second
      this.throttle = _.throttle(this.translateSlide, 3000)

      // I keep React state Management for variables which either doesn'nt change often or which require to trigger a render
      // In order to pass updated props to the wrapped component
      this.state = {
        currentSlide: props.slides[0] // We naturally start at the first slide of the array
      }
    }

    // Update the wi to be taken into account magicSlider calculation
    handleResize() {
      const { deviceInfo } = this.props;
      // console.log(deviceInfo)
      // Resize event doesnt work on ios, and vHeight looks to be windo.outerheight;
      this.viewportHeight = deviceInfo === "ios" ? innerHeight() : window.innerHeight;
    }

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

    componentWillUnmount() {
      window.removeEventListener('touchstart', this.touchStartHandler, false)
      // window.removeEventListener('touchend', this.touchEndHandler, false)
      window.removeEventListener('wheel', this.handleOnWheel, false)
      window.removeEventListener('resize', this.handleResize, false)
      window.removeEventListener('keyup', this.keyUpHandler, false)
      window.removeEventListener('keydown', this.keyDownHandler, false)
    }

    startAnimating(fps) {
      this.fpsInterval = 1000 / fps
      this.then = Date.now()
      this.startTime = this.then
      this.magicSlider()
    }

    /**
     * Mobile touch handler when start touching screen
     * @param {*} event 
     */
    touchStartHandler(event) {
      // console.log("touchStartHandler")
      // Activate the scrolling animation loop
      this.isLoopActive = true;
      // this.startAnimating(this.animationFrequency)

      this.isLoopActive = true;
      var touches = event.changedTouches;
      for (var j = 0; j < touches.length; j++) {
        /* store touch info on touchstart */
        this.touchesInAction["$" + touches[j].identifier] = {
          identifier: touches[j].identifier,
          pageX: touches[j].pageX,
          pageY: touches[j].pageY
        };
      }
    }

    /**
     * Mobile touch handler when continuing touching screen while moving finger
     * @param {*} event 
     */
    onTouchMoveHandler(event) {
      var touches = event.changedTouches;
      for (var j = 0; j < touches.length; j++) {
        /* access stored touch info on touchend */
        var theTouchInfo = this.touchesInAction["$" + touches[j].identifier];
        theTouchInfo.dx = touches[j].pageX - theTouchInfo.pageX;  /* x-distance moved since touchstart */
        theTouchInfo.dy = touches[j].pageY - theTouchInfo.pageY;  /* y-distance moved since touchstart */
      }

      // We use  _.debounce() to prevent successful call in a specified period of time (here one sec)
      const dir = theTouchInfo.dy > 0 ? "up" : "down";

      // invoke the throttled function  (every3s)
      // console.log(dir, this.slidePositionIndex)
      //We make sure not going outside boundaries
      if (!(this.slidePositionIndex === this.props.slides.length - 1 && dir === "down") && !(this.slidePositionIndex === 0 && dir === "up")) {
        this.throttle(dir);
        //delete all the pending call to the function
        setTimeout(function (func) {func.cancel(); }, 2800, this.throttle)
      }
    }

    /**
     * Move Slide up or down based on direction
     * @param {*} dir up / down
     */
    translateSlide(dir) {
      // console.log("translateSlide CALLED dir:", dir)
      let newPosition = this.slidePositionIndex;
      if (dir === "down") { // add 1 except when we are at the lastSlide
        newPosition += this.slidePositionIndex === this.props.slides.length - 1 ? 0 : 1;
      } else { // remove 1 except when we are at position 0 
        newPosition += this.slidePositionIndex === 0 ? 0 : -1;
      }

      //Only if a slide change happened we go further
      if (newPosition !== this.slidePositionIndex) {
        this.slidePositionIndex = newPosition;

        // Retrieve all the slides elements
        const slides = document.getElementsByClassName(
          `rs-slide`
        )

        Array.prototype.forEach.call(slides, (slide => {
          this.updateSlideClass(slide);
        }))
        this.setState({
          currentSlide: this.props.slides[this.slidePositionIndex]
        })
      }
    }

    updateSlideClass(slideNode) {
      // console.log("updateSlideClass slideNode:", slideNode)
      //Filter the list of class to be removed from the nodes
      const classToRemove = Array.prototype.filter.call(slideNode.classList, (x => { return x !== "rs-slide" }))

      // Then we add the class only if it is not the starting position (slide 0) because no transformation to apply
      if (this.slidePositionIndex !== 0)
        slideNode.classList.add(`rs-move-${this.slidePositionIndex}-slide-down`)

      classToRemove.forEach(classN => slideNode.classList.remove(classN))     
    }

    /**
     * Desktop keyboard handler when pressing key
     * @param {*} event 
     */
    keyDownHandler(event) {
      // Activate the scrolling animation loop
      this.isLoopActive = true;
      this.startAnimating(this.animationFrequency)

      //38 UpArrow 40 DownArrow
      if ((event.keyCode === 38 || event.keyCode === 40) && !event.repeat) {
        this.keyCode = event.keyCode,
          this.keyTimestamp = event.timeStamp
      }
    }

    /**
     * Desktop keyboard handler when releasing key
     * @param {*} event 
     */
    keyUpHandler(event) {
      const elapsedTime = event.keyCode === this.keyCode ? event.timeStamp - this.keyTimestamp : 0;
      if (elapsedTime) {
        const deltaY = this.keyCode === 38 ? -1 : 1;
        this.speed += deltaY * elapsedTime / 1000;
      }
    }

    /**
     * Mouse wheel handler
     * @param {*} event 
     */
    handleOnWheel(event) {
      const deltaY = event.deltaY;

      // /** CSS slider animation purpose , deactivated by default */
      // const dir = deltaY > 0 ? "down" : "up";
      // // invoke the throttled function  (every3s)
      // this.throttle(dir);
      // //delete all the pending call to the function
      // setTimeout(function (func) { func.cancel() }, 2950, this.throttle)
      // console.log("dir", dir)

      /**Javascript sliding config */
      this.isLoopActive = true;
      this.startAnimating(this.animationFrequency)

      const { deviceInfo } = this.props
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

    velocityComputation(deltaY) {
      this.speed += -1 * deltaY * 0.0006 // -1 allow to inverse touch scrolling orientation on mobile
    }

    velocityComputationMobile(deltaY) {
      this.speed += -1 * deltaY // -1 allow to inverse touch scrolling orientation on mobile
    }

    /**
     * Looping function in charge of doing the sliding effect
     * When not moving much anymore between 2 loop, will deactivate the loop by turning the flag
     * this.isLoopActive to false
     */
    magicSlider() {
      // Security to avoid sliding out of boundaries
      if (this.currentPosition < 0) {
        this.currentPosition = 0
      } else if (this.currentPosition > this.props.slides.length - 1) {
        this.currentPosition = this.props.slides.length - 1
      } else {
        this.now = Date.now()
        this.elapsed = this.now - this.then
        // if enough time has elapsed, draw the next frame
        if (this.elapsed > this.fpsInterval) {
          // Get ready for next frame by setting then=now, but...
          // Also, adjust for fpsInterval not being multiple of 16.67
          this.then = this.now - (this.elapsed % this.fpsInterval)

          this.speed *= this.slideChangeSpeedCoeff
          this.currentPosition += this.speed

          const slideBoundary = Math.round(this.currentPosition);
          const dif = slideBoundary - this.currentPosition

          this.currentPosition += dif * this.slideChangeHardnessCoeff

          if (this.currentPosition < 0) {
            this.currentPosition = 0
          } else if (this.currentPosition > this.props.slides.length - 1) {
            this.currentPosition = this.props.slides.length - 1
          }

          //console.log("slideBoundary", slideBoundary, "this.currentPosition", this.currentPosition, Math.abs(slideBoundary - this.currentPosition))
          if (Math.abs(slideBoundary - this.currentPosition) < 0.001) {
            // We are really close to a boundary (Previous or Next slide) so we override our currentPosition with that integer
            // to avoid an infinite division
            this.currentPosition = slideBoundary
            this.isLoopActive = false;
            // console.log("TURNING THE LOOP OFF")
          }

          // console.log("window.scrollTo",  window.innerHeight, this.currentPosition * this.viewportHeight)
          window.scrollTo(0, this.currentPosition * this.viewportHeight)

          // We reajust the BoundaryIndex as it can goes to -1 as well as be superior to array.length will makes crash all
          // the logic behind currentSlide
          const adjustedSlideIndex = slideBoundary < 0 ? 0 : slideBoundary > this.props.slides.length - 1 ? this.props.slides.length - 1 : slideBoundary;
          const curSlide = this.props.slides[adjustedSlideIndex]

          // Will trigger a render every loop if we don't add this condition.
          // Purpose is to save performance
          if (curSlide && curSlide !== this.state.currentSlide) {
            this.setState({
              currentSlide: curSlide
            })
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

    // We trigger rerendering only if current slide change
    shouldComponentUpdate(nextState) {
      const { currentSlide } = this.state;
      if (nextState.currentSlide === currentSlide)
        return false
      return true
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          currentSlide={this.state.currentSlide}
        />
      )
    }
  }
  return HOC
}

export default MagicSlider
