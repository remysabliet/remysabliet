import React from 'react'

import MagicSlider from 'helpers/HOC/MagicSlider'
import AnimationContainer from 'containers/AnimationContainer'

import { delay } from "helpers/utils/animation"

/**
 * Component representing the slider and its different states
 * Enhanced by MagicSlider(in-house) HOC for scrolling/touch effect;
 * 
 * Also pause or resume slide animation depending on state.currentSlide update
 */
class Slider extends React.PureComponent {
  constructor(props) {
    super(props)
    const { slides } = props

    this.state = {
      currentSlide: slides[0],
      foregroundArrayHasBeenDeactivatedOnce: false
    }
    this.refs = slides.map(() => React.createRef())
  }

  /**
   * Invoked just before render, it returns the state to update
   * 
   * @param {*} props 
   * @param {*} state 
   */
  static getDerivedStateFromProps(props, state) {
    const { currentSlide } = props
    console.log("NOTIF Slide change :", currentSlide)


    if (props.currentSlide !== state.currentSlide) {
      return {
        currentSlide: currentSlide
      }
    }
    return currentSlide; // return null if the state hasn't changed
  }

  /**
   *  Called only at initial loading, we must activate the home page animation as
   * componentDidUpdate (in charge of pausing or starting slide animation) won't be called if we don't state doesn't change
   */
  componentDidMount() {
    this.resumeAnimation(this.state.currentSlide)
    this.activateForegroundDirectionalArrowOnHome(true);
  }

  /**
   * Will be called anytime the slide will change
   * invoked right before the most recently rendered output is committed to e.g. the DOM
   * @param {*} prevProps 
   * @param {*} prevState 
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSlide !== this.state.currentSlide) {
      this.resumeAnimation(this.state.currentSlide);
      this.pauseAnimation(prevState.currentSlide);
      this.activateForegroundDirectionalArrowOnHome(false);
    }
  }

  /**
   * - Pause animation at the slide level 
   * - remove CSS will-change properties from moving DOM element
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
   * - add CSS will-change properties to moving DOM element
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
    console.log("activateForegroundDirectionalArrowOnHome", isActive)
    const { setFgndArrowActive, slides } = this.props;
    const { currentSlide, foregroundArrayHasBeenDeactivatedOnce } = this.state;
    if (currentSlide === slides[0] && !foregroundArrayHasBeenDeactivatedOnce) {
      await delay(7000).then(() => {
        if (currentSlide === slides[0] && !this.state.foregroundArrayHasBeenDeactivatedOnce) {
          setFgndArrowActive(isActive);
        }
      }
      )
    } else {
      setFgndArrowActive(isActive);

      this.setState({ foregroundArrayHasBeenDeactivatedOnce: true })
      console.log("else set State")
    }
  }

  /**
   *
   *  Make a loop through children to add specific Slide properties
   *  => TO DO add a test to check whether there is an array of Children or only one, as it breaks
   * because not an array
   */
  render() {
    const { children, slides, currentSlide, ...others } = this.props
    const childrenArr = children && children.length ? children : [children]
    return (
      <div className="rs-slider-container">
        {childrenArr.map((child, i) => {
          const slide = slides[i]
          const additionalProps = {
            title: slide,
            className: `rs-${slide} js-pausing`,
            id: slide,
            ref: this.refs[i],
            isCurrentSlide: currentSlide === slide ? true : false
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

export default MagicSlider(AnimationContainer(Slider))
