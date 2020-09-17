import React from 'react'

import classNames from "classnames";

import MagicSlider from 'helpers/HOC/MagicSlider'
import AnimationContainer from 'containers/AnimationContainer'

import { recomputeViewportSize } from 'helpers/utils/miscellaneous'
import { animateIfInView, delay,  } from "helpers/utils/animation"

/**
 * Component representing the slider and its different states
 * Enhanced by MagicSlider(in-house) HOC for scrolling/touch effect;
 * 
 * Pause or resume slide animation (except for Safari/ios) depending on state.currentSlide update
 */
class Slider extends React.PureComponent {
  constructor(props) {
    super(props)
    const { slides } = props
     
    this.intervalAnimDesktop = -1;

    this.state = {
      currentSlide: slides[0],
      foregroundArrayHasBeenDeactivatedOnce: false
    }
    this.refs = slides.map(() => React.createRef())
  }

  /***************************************************/
  /****************     Methods    ******************/
  /*************************************************/

  /**
   * Makes element animated and visible based on the current slide change
   * @param {*} prevSlide 
   * @param {*} newSlide 
   */
  manageSmartphoneAnimation(prevSlide, newSlide) {
    const defaultAnimationClass = 'rs-js-slide-up-css-config' //specic class to add a delay transition to make it smoother with css slider config
    const prefixCssConfig = "-css-config"
    /** Anim the new slide node */
    const newSlideNode = document.getElementsByClassName(
      `rs-${newSlide}`);

    const elementToAnimate = newSlideNode[0].getElementsByClassName(
      `rs-js-animated-element`
    )
    // console.log("elementToAnimate", elementToAnimate)

    Array.prototype.forEach.call(elementToAnimate, elem => {
      // Retrieve the CSS class animation on the element dataset if specified and add the prefix for css-config otherwise we add default classname
      let classNameEffect = elem.dataset.animInView ? elem.dataset.animInView + prefixCssConfig : defaultAnimationClass;
      // console.log("Class to be added:", classNameEffect);
      elem.classList.add(classNameEffect)
      // console.log("elementToAnimate after adding",  elem.classList.value)
    })


    /** Remove Animation class to the previous slide node */
    /*  As it make them invisible by default we must add timeout to prevent them disappearing right away*/

    const slideTransitionDelay = getComputedStyle(document.documentElement).getPropertyValue('--slideTransitionDelay') //in Sec
    // slideTransitionDelay.styles.getPropertyValue('--slideTransitionDelay');
    if (prevSlide !== undefined) {
      // console.log("slideTransitionDelay", slideTransitionDelay)
      setTimeout(() => {
        const prevSlideNode = document.getElementsByClassName(
          `rs-${prevSlide}`);

        const elementToFreeze = prevSlideNode[0].getElementsByClassName(
          `rs-js-animated-element`
        )

        Array.prototype.forEach.call(elementToFreeze, elem => {
          // Retrieve the CSS class animation on the element dataset if specified and add the prefix for css-config otherwise we add default classname
          let classNameEffect = elem.dataset.animInView ? elem.dataset.animInView + prefixCssConfig : defaultAnimationClass;
          // console.log("Class to freeze:", classNameEffect);
          elem.classList.remove(classNameEffect)
          // console.log("Element to Freeze",  elem.classList.value)
        })
        // console.log("Element to Freeze",

      }, slideTransitionDelay * 1000)
    }
  }
  /**
   * - Pause animation at the slide level 
   * - remove CSS will-change properties from moving DOM element for performance
   * @param {*} slideRef 
   */
  pauseAnimation(slideRef) {
    // console.log("pausing animation", slideRef)
    const elem = document.querySelector(`.rs-${slideRef}`)
    elem.classList.add('js-pausing')
    elem.classList.remove('js-will-change')

    // EXPL: return an array of elements containing class .rs-${slideRef} and data attribute anim='_opa_tra' 
    // ( [] is a convention to refers data-attribute in querySelector)
    const elemOpaTraWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_opa_tra']`)
    // console.log("Slider-Elem found with attributes [anim='_opa']", elemOpaTraWillChange)
    elemOpaTraWillChange.forEach(e => e.classList.remove('js-will-change-opa-tra'))

    const elemOpaWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_opa']`)
    // console.log("Slider-Elem found with attributes [anim='_tra']", elemOpaWillChange)
    elemOpaWillChange.forEach(e => e.classList.remove('js-will-change-opa'))

    const elemTraWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_tra']`)
    // console.log("Slider-Elem found with attributes [anim='_tra']", elemTraWillChange)
    elemTraWillChange.forEach(e => e.classList.remove('js-will-change-tra'))

    let svgSiblingsElem = document.querySelectorAll(
      '.siblings'
    )

    svgSiblingsElem.forEach(e => e.classList.add('js-will-change-opa'));
  }

  /**
   * - Start animation at the slide level 
   * - add CSS will-change properties to moving DOM element for performance
   * @param {*} slideRef 
   */
  resumeAnimation(slideRef) {
    // console.log("resume animation", slideRef)
    const elem = document.querySelector(`.rs-${slideRef}`)
    elem.classList.remove('js-pausing')

    const elemOPaTraWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_opa_tra']`)
    // console.log("Slider-Elem found with attributes", elemOPaTraWillChange)
    elemOPaTraWillChange.forEach(e => e.classList.add('js-will-change-opa-tra'))

    const elemOpaWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_opa']`)
    // console.log("Slider-Elem found with attributes", elemOpaWillChange)
    elemOpaWillChange.forEach(e => e.classList.add('js-will-change-opa'))

    const elemTraWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_tra']`)
    // console.log("Slider-Elem found with attributes", elemTraWillChange)
    elemTraWillChange.forEach(e => e.classList.add('js-will-change-tra'))
  }

  /**
   * This function will dispatch an action to the store in order to advise Foreground Ui to activate the 
   * footer directional arrow. Purpose being to indicate the user where to go next. 
   * We setup a timer of 7s before showing up the arrow
   */
  async activateForegroundDirectionalArrowOnHome(isActive) {
    // console.log("activateForegroundDirectionalArrowOnHome", isActive)
    const { setFgndArrowActive, slides } = this.props;
    const { currentSlide, foregroundArrayHasBeenDeactivatedOnce } = this.state;
    if (currentSlide === slides[0] && !foregroundArrayHasBeenDeactivatedOnce) {
      await delay(7000).then(() => {
        if (currentSlide === slides[0] && !this.state.foregroundArrayHasBeenDeactivatedOnce) {
          // console.log("foregroundArrayHasBeenDeactivatedOnce", this.state.foregroundArrayHasBeenDeactivatedOnce)
          setFgndArrowActive(isActive);
        }
      }
      )
    } else {
      setFgndArrowActive(isActive);

      this.setState({ foregroundArrayHasBeenDeactivatedOnce: true })
    }
  }


  /*******************************************************/
  /****************     REACT HOOKS    ******************/
  /*****************************************************/

  /**
   * Invoked just before render, it returns the state to update
   * 
   * @param {*} props 
   * @param {*} state 
   */
  static getDerivedStateFromProps(props, state) {
    const { currentSlide } = props

    if (props.currentSlide !== state.currentSlide) {
      console.log("NOTIF Slide change :", currentSlide, props)

      return {
        currentSlide: currentSlide
      }
    } else if (props.foregroundArrayHasBeenDeactivatedOnce)
      return null; // return null if the state hasn't changed
  }

    /**
   *  Called only at initial loading, we must activate the home page animation as
   * componentDidUpdate (in charge of pausing or starting slide animation) won't be called if we don't state doesn't change
   */
  componentDidMount() {
    //We initialize viewport SCSS variable --vh/--vw
    recomputeViewportSize()
    this.resumeAnimation(this.state.currentSlide)
    this.activateForegroundDirectionalArrowOnHome(true);
    if (["ios", "android"].includes(this.props.deviceInfo)) {
      // console.log("mounted Slider IOS/android");
      this.manageSmartphoneAnimation(undefined, this.state.currentSlide)
    } else {
      // For desktop device, the Slider effect is based on MagicSlider algorithm where screen move by itself 
      //  when passing to an other slide and where animateIfInView() is called only with keyboard/mouse user interaction.
      //  Because of the screen moving by itself, even if some element may appears in view they wont be visible because animateIfInView not fired, 
      //  to prevent that we fire this function at least one time/sec
      this.intervalAnimDesktop = setInterval(() => animateIfInView(), 1000);
    }
  }

  /** lever to prevent or not Full re-rendering of the page**/
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("Slider shouldComponentUpdate", nextProps)

    // Prevent rerendering if isForegroundDirArrowActive changed (Array Direction on HomeSlide)
    if (nextProps.isForegroundDirArrowActive != this.props.isForegroundDirArrowActive) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUnmount() {
    window.clearInterval(this.intervalAnimDesktop)
  }

  /**
   * Will be called anytime the slide did change
   * invoked right before the most recently rendered output is committed to e.g. the DOM
   * @param {*} prevProps 
   * @param {*} prevState 
   */
  componentDidUpdate(prevProps, prevState) {
    //In case of slide change
    if (prevState.currentSlide !== this.state.currentSlide) {
      this.resumeAnimation(this.state.currentSlide);
          // Safari animation-play-state is not working for years now
      if(!(prevProps.deviceInfo==="safari" || prevProps.deviceInfo==="ios")){
        this.pauseAnimation(prevState.currentSlide);
      }

      /** deactivate the directional arrow in foregroundUI if it has not been done yet */
      if (!this.state.foregroundArrayHasBeenDeactivatedOnce) {
        this.setState({ foregroundArrayHasBeenDeactivatedOnce: true })
        prevProps.setFgndArrowActive(false);
      }

      if (["ios", "android"].includes(this.props.deviceInfo)) {
        // console.log("componentDidUpdate IOS/android");
        this.manageSmartphoneAnimation(prevState.currentSlide, this.state.currentSlide)
      }
    }
  }
  
  /**
   *
   *  Make a loop through children to add specific Slide properties
   *  => TO DO add a test to check whether there is an array of Children or only one, as it breaks
   * because not an array
   */
  render() {
    const { children, deviceInfo, slides, currentSlide, ...others } = this.props
    const childrenArr = children && children.length ? children : [children]

    // console.log("Slider Render", this.props, this.state)
    return (
      <div className={classNames(deviceInfo === "safari" ? "safari" : "", "rs-slider-container")}>
        {childrenArr.map((child, i) => {
          const slide = slides[i]
          const additionalProps = {
            title: slide,
            className: `rs-${slide} js-pausing`,
            id: slide,
            ref: this.refs[i],
            isCurrentSlide: currentSlide === slide ? true : false,
            deviceInfo
            ,
            ...others
          }
          return React.cloneElement(child, additionalProps)
        })
        }
      </div>
    )
  }
}

export default AnimationContainer(MagicSlider((Slider)))
