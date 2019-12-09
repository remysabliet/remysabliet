import React from 'react'
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) =>
  <svg class={classNames('calligraphy', className)}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.66 146">
    <clipPath id="exclamation-clip-path">
      <path class="cls-1" d="M13,71.52c.45-2,.83-3.91,1.29-5.78,2.05-8.36,3.27-16.95,5.52-25.22,2.31-8.45,3.56-17.1,5.82-25.52a18.06,18.06,0,0,0,.44-4.32c0-.95-1.64-2,0-2.78s3.17-1.22,4.82-.5a2.75,2.75,0,0,1,1.55,3.33c-.94,4.77-1.93,9.52-2.92,14.28A392.54,392.54,0,0,1,18.07,67c-.57,1.72-1.37,3.35-2.05,5-.4,1-1.13,1.68-2.15,1.49C12.65,73.33,13.56,72.08,13,71.52ZM3.17,100.1A3.56,3.56,0,0,0,7,104c3,0,3.68-2.86,4-5.11.28-2-1.62-2.89-3-3.42A4.71,4.71,0,0,0,3.17,100.1Z" />
    </clipPath>
    <g clip-path="url(#exclamation-clip-path)">
      <line class={classNames('siblings alphabet', firstStrokeClassName)} stroke-width="10" x1="30.81" y1="5" x2="12.81" y2="77" />
      <line class='siblings alphabet' x1="8.81" y1="93" x2="4.81" y2="107" />
    </g>
  </svg>