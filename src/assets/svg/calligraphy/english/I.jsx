import React from 'react'
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) =>
  <svg class={classNames('calligraphy', className)}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.64 146">
    <clipPath id="i-clip-path">
      <path class="cls-1" d="M30.32,26l0,2.83c-.38,2.25-2.62,3.39-3.6,5.4-5.2,10.71-8.19,22-11.57,33.29a60.27,60.27,0,0,0-2.46,14.33,3.14,3.14,0,0,1-.19,1.27,13.86,13.86,0,0,0,.07,13.2,1.68,1.68,0,0,1-.1,2c-.59.55-1.41.06-2.09-.13-1.94-.54-2.86-2-3.79-3.53-2.5-4.22-1.33-8.57-.81-12.9a162,162,0,0,1,8-35.06C16.21,39.58,18.53,32.29,23.3,26c1.2-1.56,2.76-1.86,4.55-2C29.4,23.88,29.92,24.87,30.32,26Z" />
    </clipPath>
    <g clipPath="url(#i-clip-path)">
      <line class={classNames('siblings alphabet', firstStrokeClassName)} strokeWidth="16" x1="25.82" y1="18.5" x2="7.82" y2="101.5" />
    
     {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
     <polyline class="siblings alphabet additionalDelayEndOfCharacters"/>
    </g>
  </svg>