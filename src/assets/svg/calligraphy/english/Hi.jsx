import React from 'react'
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) =>
  <svg class={classNames('calligraphy', className)}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.32 146">
    <clipPath id="hi-clip-path">
      <path class="cls-1" d="M51.13,56.51a118.58,118.58,0,0,0-23,6.17,7.18,7.18,0,0,1-3.45.83c-4.74-.42-6.87.7-8.2,5.16-2.26,7.51-4,15.2-6.75,22.55a6.42,6.42,0,0,0,.36,5.71c.79,1.35,2.36,2.91-.33,3.63-1.88.5-4.13,1-5-1.94A21.49,21.49,0,0,1,4.56,87c1.71-7,3.49-14.09,5.61-21,.68-2.23.52-3.31-1.55-4.29C7,60.87,5.69,59.38,6.34,57.49s2.53-1.77,4.12-1.44c2.8.57,3.14-1.47,3.93-3.31,5-11.61,7.51-23.88,9.78-36.22a4.75,4.75,0,0,1,3.42-4.2c2.48-.83,3.58.94,5.14,1.95.69.44.8.88.43,1.8-3.5,8.65-4.94,17.92-7.8,26.78-1.39,4.32-3.25,8.5-4.13,13.3,7.61-.8,14.93-3.1,22.43-3.71,8.27-.67,12.21-4.85,14.57-12.56,2.75-9,5.61-18.07,10-26.48a42.81,42.81,0,0,0,2.44-4.09c1-2.57,3-2.83,4.64-1.47C76.73,9,79,10.23,77.06,13.13c-3.78,5.76-6.16,12.23-8.42,18.72-.52,1.51-1.08,3-1.66,4.5-4.29,11-8.32,22.2-11.63,33.59-2,6.89-3.09,14-2,21.15.34,2.34-.55,5.6,3.48,6.19,1.11.16.9,1.81-.07,2.33-1.79,1-3.58,2-5.57-.11-4.56-4.85-5.62-10.73-5.5-17C45.82,73.72,48.83,65.57,51.13,56.51ZM73.39,95.69c-2.43,1.86-3.12.52-3.71-1.47a7.73,7.73,0,0,1-.1-2.21c.24-12.69,2.37-25,8.23-36.35,1.21-2.35,1.36-4.21-1.34-5.44-2.43-1.11-3.78-.14-4.84,2.22-6.22,13.76-8.18,28.28-7.75,43.21a6.63,6.63,0,0,0,8.92,5.85c8.14-2.77,10.86-10.11,14.27-16.85C81.35,87.05,78,92.13,73.39,95.69ZM76.84,36.8c0,2.37,2.4,3.9,5.73,3.74a3.7,3.7,0,0,0,3.53-3.82c0-2.42-2-3.48-4.27-2.74C79.54,34.08,76.89,33.29,76.84,36.8Z" />
    </clipPath>
    <g clip-path="url(#hi-clip-path)">
      <polyline class={classNames('siblings alphabet', firstStrokeClassName)} stroke-width="8" points="30.63 10.5 4.63 94.88 13.63 102" />
      <polyline class="siblings alphabet" stroke-width="13" points="78.13 7 67.53 29.57 62.23 44.96 56.93 58.3 52.69 72.67 51.63 86 53.75 105.5" />
      <line class="siblings alphabet" stroke-width="13" x1="4.13" y1="61.49" x2="55.63" y2="52.71" />
      <polyline class="siblings alphabet" stroke-width="13" points="77.63 47.5 71.63 59.5 69.63 68.5 67.63 75.5 66.63 86.5 66.63 95.5 70.63 99.5 77.63 96.5 85.63 82.5" />
      <line class="siblings alphabet" stroke-width="11" x1="80.63" y1="31.5" x2="81.63" y2="42.5" />

      {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
      <polyline class="siblings alphabet additionalDelayEndOfCharacters" />
    </g>
  </svg>