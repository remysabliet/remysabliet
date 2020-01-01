
import React from "react"
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) => <svg class={classNames('calligraphy', className)}
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.55 204.21">
  <clipPath id="ten-clip-path">
    <path class="cls-1" d="M150.47,22.18c5.14,1.84,8.27,5.37,10.65,9.62a42.28,42.28,0,0,1,5,18.65c.22,4,4.73,8.43,9.44,9.25,4.07.7,8-1.69,9.69-6a19.65,19.65,0,0,0-2.16-18.31c-6.29-9.62-15.51-14.54-27.49-14.1A35.63,35.63,0,0,0,150.47,22.18Z" />
  </clipPath>
  <g clipPath="url(#ten-clip-path)">
    <path class={classNames('siblings', firstStrokeClassName)} stroke-width="20px" d="M147.15,9.93l44.22,58.68" />


    {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
    <polyline class="siblings additionalDelayEndOfCharacters" /> </g>
</svg>