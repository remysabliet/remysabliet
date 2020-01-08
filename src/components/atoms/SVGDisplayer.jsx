import React from 'react'

const SVGDisplayer = React.memo(({ className, svg }) => (
  <svg className={className} {...svg}>{svg.uses && svg.uses.map(use => <use {...use} />)}</svg>
))

export default SVGDisplayer
