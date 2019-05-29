import React from 'react'

import Slide from 'components/layout/Slide'
import MainCanvas from 'components/organisms/drawer/canvas/MainCanvas'
import ForegroundUI from 'components/layout/ForegroundUI'
import MagicSlider from 'helpers/HOC/MagicSlider'

/**
 * Component representing the slider and its different states
 * Enhanced by MagicSlider(Slider,slides);
 */

class Slider extends React.Component {
  constructor(props) {
    super(props)
    const { slides } = props
    this.state = {
      currentSlide: { slides }[0]
    }

    this.slideHome = React.createRef()
    this.slideAboutMe = React.createRef()
    this.slideExperience = React.createRef()
    this.slidePortfolio = React.createRef()
    this.slideContact = React.createRef()
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
      // console.log('shouldComponentUpdate: we dont update')
      return false
    }
    // console.log('shouldComponentUpdate: we  update')
    return true
  }

  render() {
    const { slides } = this.props
    return (
      <div className="slider-container">
        <ForegroundUI />
        <Slide
          {...this.props}
          title={slides[0]}
          className="slide-home"
          id="home"
          ref={this.slideHome}
        >
          {/* <ReactD3 /> */}
        </Slide>
        <Slide
          {...this.props}
          title={slides[1]}
          className="slide-aboutMe"
          id="aboutMe"
          ref={this.slideAboutMe}
        >
          <p> This is a short story about me</p>
          <p> This is a long story or a short story about me</p>
          <p>
            ABCD From the Middle Ages until about the middle of the 20th
            century, Latin was a central part of a man’s schooling in the West.
            Along with logic and rhetoric, grammar (as Latin was then known) was
            included as part of the Trivium – the foundation of a medieval
            liberal arts education. From Latin, all scholarship flowed an it was
            truly the gateway to the life of the mind, as the bulk of
            scientific, 3religious, legal, and philosophical literature was
            written in the language until about the 16th century. To immerse
            oneself in classical and humanistic studies, Latin was a must.
          </p>
          <MainCanvas width={300} height={400} />
        </Slide>
        <Slide
          {...this.props}
          title={slides[2]}
          className="slide-experience"
          id="experience"
          ref={this.slideExperience}
        >
          <p>oneself in classical and humanistic studies, Latin was a must.</p>
          <MainCanvas width={300} height={400} />
        </Slide>
        <Slide
          {...this.props}
          title={slides[3]}
          className="slide-portfolio"
          id="portfolio"
          ref={this.slidePortfolio}
        >
          <MainCanvas width={300} height={400} />
        </Slide>
        <Slide
          {...this.props}
          title={slides[4]}
          className="slide-contact"
          id="contact"
          ref={this.slideContact}
        >
          <MainCanvas width={300} height={400} />
        </Slide>
      </div>
    )
  }
}

export default MagicSlider(Slider)
