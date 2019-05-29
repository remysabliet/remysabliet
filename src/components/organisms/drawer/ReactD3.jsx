import React from 'react'
import { axisBottom } from 'd3-axis'
import { scaleLinear } from 'd3-scale'

import Axis from 'components/organisms/Axis'

// We leverage the lifecycle of a React.Component
class ReactD3 extends React.Component {
  componentDidMount() {
    this.d3AxisDraw()
  }

  d3AxisDraw() {
    this.scale = scaleLinear()
      .domain([0, 10])
      .range([0, 200])
    const axis = axisBottom(this.scale)
    /* select('svg')
      .append('g')
      .attr('transform', 'translate(10, 30)') */
    // .call(axis)
  }

  render() {
    // const { width, height } = this.props
    return (
      <React.Fragment>
        <svg width="800" height="600">
          <rect width="40" height="40" x="50" y="20" />
          <Axis />
        </svg>
      </React.Fragment>
    )
  }
}

export default ReactD3
