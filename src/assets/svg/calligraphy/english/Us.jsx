import React from 'react'
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) =>
  <svg class={classNames('calligraphy', className)}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.5 145">
    <clipPath id="us-clip-path">
      <path class="cls-1" d="M15.86,87.15c7-5.83,11.83-13.37,16.22-21.21.24-.42.33-.92.53-1.36C35,59.34,37.22,54.07,39.69,48.9c.74-1.56,1.64-4.15,3.81-3.08,1.12.56,1.18,3.28,1.64,5a2.48,2.48,0,0,1-.2,1.43c-1.6,3.75-3.1,7.56-4.9,11.22-2.87,5.83-4.45,11.84-3.33,18.34.51,3,1.5,3.66,4.14,2,3.06-1.88,5.77-4.32,8.71-6.41A7.6,7.6,0,0,1,52,76.84a6.6,6.6,0,0,1,.21,2.57c-1.57,4.49-5.22,7.37-9,9.68-5.92,3.62-9.6,2-11.81-4.6-.37-1.12-.82-2.21-1.39-3.7-2.72,2.89-5.13,5.3-7.39,7.85-3.85,4.36-8.75,6.68-14.35,8-2,.48-3.38.07-4-1.71-1.09-3.27-2.86-6.7-2.65-10C2.49,72.37,4.83,60,11.49,49c.43-.72,1.89-1.62,2.3-1.4a6.3,6.3,0,0,1,2.49,2.67c.31.61-.18,1.68-.45,2.5C13.24,60.47,10.41,68.14,8.09,76,6.7,80.63,7,85.53,8.09,91.23,11.13,89.68,13.85,88.83,15.86,87.15Zm35.29-2a4.78,4.78,0,0,0,.72,7.67,15.26,15.26,0,0,0,13.63,1A43.83,43.83,0,0,0,77,87.22c4.71-3.89,4.38-8.6-.43-12.32a53,53,0,0,0-8-4.74c-3.2-1.64-6.52-3.06-10.66-5,2.66-2.2,4.56-4.36,6.94-5.61C70.58,56.52,76.63,54,82.47,51c1.28-.64,3.21-2.35,3-3.1-.63-2.36-3.22-2.83-5.08-2.08A147.71,147.71,0,0,0,63.63,53.5c-3.38,1.86-6.23,4.71-9.16,7.29C51.94,63,51.75,65.31,54,67.9a14.91,14.91,0,0,0,4.42,3.24C62.55,73.31,67,75,71,77.41s4.09,4.68.37,7.68c-4.27,3.43-9.55,4.38-14.72,5.44-.78.15-2-.66-2.67-1.36A34.07,34.07,0,0,1,51.15,85.2Z" />
    </clipPath>
    <g clip-path="url(#us-clip-path)">
      <polyline class={classNames('siblings alphabet', firstStrokeClassName)} stroke-width="7" points="14.5 45.5 7.5 65.5 4 84 5 92 9 94 16 90 25 82 32 70 41 49 43 48 43 50 33 79 34 86 38 89 48 83 52 75" />
      <polyline class="siblings alphabet" stroke-width="7" points="87.05 48 84.05 48 81.05 48 72.05 53 59.05 59 54.05 64 58.05 68 73.05 76 79.05 81 76.05 83 70.05 89 62.05 93 52.05 91 50.05 85"/>
     
      {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
      <polyline class="siblings alphabet additionalDelayEndOfCharacters" />
    </g>
  </svg>