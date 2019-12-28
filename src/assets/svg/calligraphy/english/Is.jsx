import React from 'react'
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) =>
  <svg class={classNames('calligraphy', className)}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.74 146">
    <clipPath id="is-clip-path">
      <path class="cls-1" d="M34.33,99a17.21,17.21,0,0,1-7.47-1.85c-1.88-.92-2.25-2.49-2.58-4.27-.22-1.24-.12-2.5,1-3,1.31-.57,1.59,1,2,1.74,1.44,2.91,3.61,3.48,6.48,2.62,4.25-1.28,8.66-2.24,12-5.49,2.79-2.68,2.7-4.26-.28-6.68-3.83-3.12-8.55-4.47-12.84-6.67a9.93,9.93,0,0,1-4.12-3.11c-1.7-2.58-2-4.91.57-7.37,7-6.71,15.15-11.23,24.06-14.53a5.24,5.24,0,0,1,3.62,0c.93.32,1.91.71,2.12,1.89.25,1.42-.75,2.08-1.74,2.55-2.68,1.27-5.41,2.44-8.13,3.61a51.19,51.19,0,0,0-13.74,8.09c-2.88,2.53-2.61,3.8,1,5.13a58.82,58.82,0,0,1,11.5,5.61C55.11,82,55.62,87,49.27,93,46.1,96,38.85,98.89,34.33,99Zm-21.89-7c-1.07.85-2,2.75-3.59,2s-1.55-2.7-1.53-4.39c.2-13,2.53-25.42,8.35-37,1.14-2.28,1.23-4.15-1.22-5.41s-3.87-.51-5,2C3.26,63.16,1.09,78,1.59,93.24a6.7,6.7,0,0,0,8.78,5.93c8-3,11.56-10,14.53-17.4,0-.06-.12-.2-.3-.47C19.68,84,16.6,88.64,12.44,91.94Zm2.24-58.62c.24,3.41,3,3.51,5.48,3.69C22.92,37.22,24,34.73,24,33c-.05-2.49-2.17-3.42-4.41-2.65C17.15,30.32,14.43,29.73,14.68,33.32Z" />
    </clipPath>
    <g clip-path="url(#is-clip-path)">
      <path class={classNames('siblings alphabet', firstStrokeClassName)} stroke-width="8" d="M15.19,45c-1,2.35-2.36,5.8-4,10s-2.37,6.13-3,8c-1,3.14-.81,3.57-3,16,0,.08-.6,3.44-1,8s-.27,6.39,1,8a5.4,5.4,0,0,0,3,2c.83.16,3.37.39,9-6a54.29,54.29,0,0,0,8-12" />
      <line class="siblings alphabet" stroke-width="10" x1="13.19" y1="28" x2="24.19" y2="38" />
      <path class="siblings alphabet" stroke-width="10" d="M58.19,50c-9.73,5.77-17.07,9.91-23,13-1.6.84-4.85,2.51-5,5s2.63,4.32,5,6c4,2.81,6.85,3.23,13,7,1.84,1.13,2.84,1.85,3,3,.32,2.11-2.39,4.11-5,6-4.28,3.1-6.6,4.78-10,5-7.32.48-12.46-6.27-13-7" />
    </g>
  </svg>