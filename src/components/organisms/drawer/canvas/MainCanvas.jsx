import React from 'react'
import PropTypes from 'prop-types'
import { timer } from 'd3-timer'
import { squareConf } from 'helpers/constants/animation'

// We leverage the lifecycle of a React.Component
class MainCanvas extends React.Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      vx: 0
    }

    this.canvasRef = React.createRef()
  }
  componentDidMount() {
    this.ctx = this.canvasRef.current.getContext('2d')
    this.animCanvas()
    this.timer = timer(elapsed => {
      if (elapsed > 2000) {
        // Give a timer of 5000 ms for my animation to avoid computer's overheat
        this.timer.stop()
        // console.log('Timer Elapsed')
      }
      this.animateShape()
    })
  }

  // When component mount, we initiate our canvas and start the loop using d3.timer
  componentDidUpdate() {
    this.animCanvas()
  }

  componentWillUnmount() {
    this.timer.stop()
  }

  animCanvas() {
    const { x } = this.state
    this.ctx.fillRect(x, 250, 100, 100)
  }

  animateShape() {
    const { x } = this.state
    let { vx } = this.state
    if (x > squareConf.MAX_AMPL) {
      vx = -vx * -0.87 // We inverse the direction if we reach the max
    }
    this.setState({
      x: x + vx,
      vx: vx + 0.3
    })
  }

  render() {
    const { width, height } = this.props
    return (
      <React.Fragment>
        <canvas ref={this.canvasRef} width={width} height={height} />
      </React.Fragment>
    )
  }
}
MainCanvas.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}
export default MainCanvas
