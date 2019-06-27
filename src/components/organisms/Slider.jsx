import React from 'react'

import MagicSlider from 'helpers/HOC/MagicSlider'

/**
 * Component representing the slider and its different states
 * Enhanced by MagicSlider(in-house) HOC for scrolling/touch effect;
 */
class Slider extends React.PureComponent {
  constructor(props) {
    super(props)
    const { slides, children } = props
    this.state = {
      currentSlide: { slides }[0]
    }
    this.refs = slides.map(() => React.createRef())
  }

  getDerivedStateFromProps(nextProps) {
    const { currentSlide } = nextProps
    if (nextProps.currentSlide !== this.state.currentSlide) {
      this.setState({
        currentSlide: {
          currentSlide
        }
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.currentSlide !== this.state.currentSlide) {
      return false
    }
    return true
  }

  /**
   *
   *  Make a loop through children to add specific Slide properties
   *  // TO DO add a test to check whether there is an array of Children or only one
   */
  render() {
    const { children, slides, ...others } = this.props
    return (
      <div className="slider-container">
        {children.map((child, i) => {
          const slide = slides[i]
          const additionalProps = {
            title: slide,
            className: `slide-${slide}`,
            id: slide,
            ref: this.refs[i],
            ...others
          }
          return React.cloneElement(child, additionalProps)
        })}
      </div>
    )
  }
}

export default MagicSlider(Slider)
