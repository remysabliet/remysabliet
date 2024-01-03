import React from 'react'
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) =>
  <svg class={classNames('calligraphy', className)}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.81 146">
    <clipPath id="a-clip-path">
      <path class="cls-1" d="M23.86,86.16c.71,2,1.31,3.67,1.89,5.36,1.63,4.73,5.76,6.25,10.48,3.83,5.14-2.64,5.23-2.77,4.34-6.73l-7.22,3.51c-3.46-3.64-3.78-8.06-2.84-12.34,1.26-5.73,3.3-11.31,5-17a72.23,72.23,0,0,0,2.22-7.46c.3-1.61-.18-3.34-.32-5.12-3.09.43-4.21,1.76-4.89,3.93-1.82,5.82-4,11.54-5.85,17.35C24.55,78.27,20.59,84,15.85,89.23a21.39,21.39,0,0,1-5,4c-2.41,1.4-4.21.81-4.58-1.84a23.7,23.7,0,0,1,.46-8.8c3-12,10.82-21.28,19.55-29.92l1.24.51c-1.23,3.32-2.47,6.63-3.94,10.56,4.47-1.3,6-4.44,7.49-7.49a10.3,10.3,0,0,0,.93-5c-.1-1.44-.7-3.64-1.72-4-1.6-.62-4.24-.69-5.57.2-10,6.67-18.38,14.89-21.8,26.29-1.63,5.45-1.68,11.37-2,17.1C.73,94.25,2,98,5.59,99c3.92,1.12,7.63-.84,10.37-3.77S21.05,89.4,23.86,86.16Z" />
    </clipPath>
    <g clipPath="url(#a-clip-path)">
      <polyline class={classNames('siblings alphabet', firstStrokeClassName)} strokeWidth="7" points="23 66 31.5 46.5 28.5 46.5 20.5 53.5 12.5 62.5 6.5 72.5 3.5 83.5 3.5 92.5 7.5 96.5 16.5 91.5 22.5 83.5 34.5 52.5 36.5 47.5 31.5 72.5 26.5 88.5 30.5 92.5 33.5 94.5 41 89.97" />

      {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
      <polyline class="siblings alphabet additionalDelayEndOfCharacters" />
    </g>
  </svg>