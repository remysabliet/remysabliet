import React from 'react'

const MagicSlider = WrappedComponent => {
  // information like slides or deviceInfo are retrieved from the props
  // Depending on the deviceType different coeff are applied to the slider effect.
  class HOC extends React.Component {
    constructor(props) {
      super(props)
      this.handleOnWheel = this.handleOnWheel.bind(this)
      this.startAnimating = this.startAnimating.bind(this)
      this.magicSlider = this.magicSlider.bind(this)

      const { slides } = props
      this.speed = 0 // We can't work with React State to manage this variable> Indeed, the slider effect algorithm require a
      // recursivity call (high speed), the update of the setState is asynchronous and  being quickly saturated (queue),
      // setState doesn't update quickly enough to follow the natural speed of the slider effect and have a smooth fps.

      this.currentPosition = 0 // represent the Y position of the viewport (to be multiply with viewportHeight to get pixel positon)
      this.frameCount = 0
      this.fps = 0
      this.fpsInterval = 0
      this.startTime = 0
      this.now = 0
      this.then = 0
      this.elapse = 0

      // I keep React state Management for variables which either doesn'nt change often or which require to trigger a render
      // In order to pass updated props to the wrapped component
      this.state = {
        slides: props.slides,
        viewportHeight: 0,
        currentSlide: slides[0] // We naturally start at the first slide of the array
      }
    }
    // We apply a lower fps in order to reduce freezing effect
    // From time to time viewport is quicker, some time not, by reducing fps we reduce those latency effect
    componentDidMount() {
      this.setState({ viewportHeight: document.documentElement.clientHeight }) // Retrieve height of the viewPort
      window.addEventListener('wheel', this.handleOnWheel.bind(this), true)
      window.addEventListener(
        'resize',
        event => {
          this.setState({
            viewportHeight: document.documentElement.clientHeight
          })
        },
        true
      )
      this.startAnimating(60) // By default maximum (screen's default 60hz)
    }

    componentWillUnmount() {
      window.removeEventListener('wheel', this.handleOnWheel.bind(this), true)
      window.removeEventListener(
        'resize',
        event => {
          this.setState({
            viewportHeight: document.documentElement.clientHeight
          })
        },
        true
      )
    }
    startAnimating(fps) {
      this.fpsInterval = 1000 / fps
      this.then = Date.now()
      this.startTime = this.then
      this.magicSlider()
    }

    magicSlider() {
      this.now = Date.now()
      this.elapsed = this.now - this.then

      // if enough time has elapsed, draw the next frame
      if (this.elapsed > this.fpsInterval) {
        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        this.then = this.now - (this.elapsed % this.fpsInterval)

        const slideChangeHardnessCoeff = 0.03 // Bigger the coef is, harder it is to change of slide. norm: 0.03

        const SlideChangeSpeedCoeff = 0.8 // Speed du changement de slide   norm= 0.8
        // 1= we keep changing slide as soon as we move the wheel
        // 0.3 => Harder to change of slide
        const { viewportHeight } = this.state
        this.speed *= SlideChangeSpeedCoeff

        this.currentPosition += this.speed
        const slideBoundary = Math.round(this.currentPosition)
        const dif = slideBoundary - this.currentPosition

        this.currentPosition += dif * slideChangeHardnessCoeff

        if (Math.abs(slideBoundary - this.currentPosition) < 0.001) {
          // We are really close to a boundary (Previous or Next slide) so we override our currentPosition with that integer
          // to avoid an infinite division
          this.currentPosition = slideBoundary
        }
        window.scrollTo(0, this.currentPosition * viewportHeight)

        const curSlide = this.state.slides[slideBoundary]

        // Will trigger a render every loop if we don't add this condition.
        // Purpose is to save performance
        if (curSlide !== this.state.currentSlide) {
          this.setState({
            currentSlide: curSlide
          })
        }
        const sinceStart = this.now - this.startTime
        this.statisticLogs(
          this.elapsedTime(sinceStart),
          this.currentFps(sinceStart, this.frameCount)
        )
      }
      window.requestAnimationFrame(this.magicSlider)
    }

    handleOnWheel(event) {
      const { deviceInfo } = this.props
      if (deviceInfo !== null) {
        if (deviceInfo === 'firefox') {
          this.speed += event.deltaY * 0.006 // 0.0003 Chrome, Opera   //0.006 Firefox
        } else {
          this.speed += event.deltaY * 0.0003
        }
      } else {
        this.speed += event.deltaY * 0.0003
      }
    }

    statisticLogs = (elapsedTime, currentFps) =>
      console.log(`Elapsed time=  ${elapsedTime} secs @ ${currentFps} fps.`)

    elapsedTime = sinceStart => Math.round((sinceStart / 1000) * 100) / 100

    currentFps = (sinceStart, framecount) =>
      Math.round(((1000 / (sinceStart / ++this.frameCount)) * 100) / 100)

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
