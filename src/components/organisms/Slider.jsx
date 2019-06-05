import React from 'react'

import Slide from 'components/layout/Slide'
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
    const refs = slides.map( () => React.createRef())
  }

  componentWillMount() {
    const { history } = this.props
    const { currentSlide } = this.props
    history.push(`/#${currentSlide}`) // Push to first Slide
  }

  componentWillReceiveProps(nextProps) {
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

  render() {
    const { children, slides, ...others } = this.props
    return (
      <div className="slider-container">
        {children}
        {slides.map((slide, i) => (
            <Slide
              {...others}
              title={slide}
              className={`slide-${slide}`}
              id={slide}
              ref={this.refs[i]}
            />
          )
        )}
      </div>
    )
  }
}

export default MagicSlider(Slider)
