import React from 'react'

import MagicSlider from 'helpers/HOC/MagicSlider'

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
      currentSlide: slides[0]
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
    console.log("Slide change :", currentSlide)
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
  }

  /**
   * Will be called anytime the slide will change
   * @param {*} prevProps 
   * @param {*} prevState 
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSlide !== this.state.currentSlide) {
      this.resumeAnimation(this.state.currentSlide)
      this.pauseAnimation(prevState.currentSlide)
    }
  }

  /**
   * Pause a slide animation and remove CSS will-change properties
   * to moving DOM element
   * @param {*} slideRef 
   */
  pauseAnimation(slideRef) {
    // console.log("pausing animation", slideRef)
    const elem = document.querySelector(`.rs-${slideRef}`)
    elem.classList.add('js-pausing')
    // elem.classList.remove('js-will-change')

    // const elemOpaTraWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_opa_tra']`)
    // // console.log("Slider-Elem found with attributes [anim='_opa']", elemOpaTraWillChange)
    // elemOpaTraWillChange.forEach(e => e.classList.remove('js-will-change-opa-tra'))

    // const elemOpaWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_opa']`)
    // // console.log("Slider-Elem found with attributes [anim='_tra']", elemOpaWillChange)
    // elemOpaWillChange.forEach(e => e.classList.remove('js-will-change-opa'))

    // const elemTraWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_tra']`)
    // // console.log("Slider-Elem found with attributes [anim='_tra']", elemTraWillChange)
    // elemTraWillChange.forEach(e => e.classList.remove('js-will-change-tra'))

    // let svgSiblingsElem = document.querySelectorAll(
    //   '.siblings'
    // )

    // svgSiblingsElem.forEach(e => e.classList.add('js-will-change-opa'));
  }

  /**
   * Resume a slide animation and apply CSS will-change properties
   * to moving DOM element
   * @param {*} slideRef 
   */
  resumeAnimation(slideRef) {
    // console.log("resume animation", slideRef)
    const elem = document.querySelector(`.rs-${slideRef}`)
    elem.classList.remove('js-pausing')


    // const elemOPaTraWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_opa_tra']`)
    // // console.log("Slider-Elem found with attributes", elemOPaTraWillChange)
    // elemOPaTraWillChange.forEach(e => e.classList.add('js-will-change-opa-tra'))

    // const elemOpaWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_opa']`)
    // // console.log("Slider-Elem found with attributes", elemOpaWillChange)
    // elemOpaWillChange.forEach(e => e.classList.add('js-will-change-opa'))

    // const elemTraWillChange = document.querySelectorAll(`.rs-${slideRef} [anim='_tra']`)
    // // console.log("Slider-Elem found with attributes", elemTraWillChange)
    // elemTraWillChange.forEach(e => e.classList.add('js-will-change-tra'))


    /** Special Case
     * We will add will Change to every SVG element having .sibling class 
     */

    // let svgSiblingsElem = document.querySelectorAll(
    //   '.siblings'
    // )

    // svgSiblingsElem.forEach(e => e.classList.add('js-will-change-opa'));
  }

  /**
   *
   *  Make a loop through children to add specific Slide properties
   *  => TO DO add a test to check whether there is an array of Children or only one, as it breaks
   * because not an array
   */
  render() {
    const { children, slides, currentSlide, ...others } = this.props
    return (
      <div className="rs-slider-container">
        {children.map((child, i) => {
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
        })}
      </div>
    )
  }
}

export default MagicSlider(Slider)
