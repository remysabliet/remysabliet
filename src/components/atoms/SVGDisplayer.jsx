import React from 'react'

const SVGDisplayer = React.memo(({ svg }) => (
  <svg {...svg}>{svg.uses && svg.uses.map(use => <use {...use} />)}</svg>
))

export default SVGDisplayer
