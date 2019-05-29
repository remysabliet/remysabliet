import React from 'react'
import { select } from 'd3-selection'
import { axisBottom } from 'd3-axis'
import { scaleLinear } from 'd3-scale'

class Axis extends React.Component {
  constructor() {
    super()
    this.groupingRef = React.createRef()
  }
  componentDidMount() {
    this.renderAxis()
  }
  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis() {
    const scale = scaleLinear()
      .domain([0, 10])
      .range([0, 200])
    const axis = axisBottom(scale)

    select(this.groupingRef.current).call(axis)
  }

  render() {
    return <g transform="translate(10, 80)" ref={this.groupingRef} />
  }
}

Axis.propTypes = {
  // parent: PropTypes.string.isRequired
}

export default Axis
