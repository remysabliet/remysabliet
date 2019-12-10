import React from 'react'
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) =>
  <svg class={classNames('calligraphy', className)}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.81 146">
    <clipPath id="comma-clip-path">
      <path class="cls-1" d="M17.59,93.92c-1,8.5-4.33,15.75-10.2,21.41-1.25,1.2-2.28,1.16-3.3.09-1.23-1.29-.19-2.37.49-3.43,3.77-5.89,7.5-11.83,8.53-19.37.27-2,1.33-2.41,2.7-2.09S18.07,91.78,17.59,93.92Z" />
    </clipPath>
    <g clip-path="url(#comma-clip-path)">
      <line class={classNames('siblings alphabet', firstStrokeClassName)} x1="16.14" y1="88" x2="4.67" y2="118" />
    </g>
  </svg>