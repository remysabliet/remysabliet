import React from 'react'
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) =>
  <svg class={classNames('calligraphy', className)}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.65 146.83">
    <clipPath id="my-clip-path">
      <path class="cls-1" d="M4.19,91.52c.55-2.09,1.12-4.17,1.63-6.27C7.73,77.31,11.62,70,13,61.86c.57-3.36,1-6.66.07-10-.42-1.48-1.83-3.18.95-4s5.25,0,6,2.14a17.24,17.24,0,0,1-.3,12.83c-1.77,4.22-1.35,9-3.54,13A4.68,4.68,0,0,0,16.06,78c0,.54-.32,1.26.43,1.55s1-.44,1.37-.85c3-3.52,6.15-6.94,9.24-10.39,4.24-4.72,8.7-9.2,13.27-13.57,2.48-2.37,5.52-4.15,8.24-6.28,1.41-1.1,2.61-.61,3.74.3A6.73,6.73,0,0,1,54.78,54a54.12,54.12,0,0,1-4.31,23.35,31.17,31.17,0,0,0-1.32,5.07c1.55.67,2.48-.24,3.31-1.27,3.2-4,6.66-7.83,9.49-12.09C67.31,61,74.55,54.93,82.24,49.33a24.35,24.35,0,0,1,4.68-2.48c2.09-.91,3.91.56,4,3.24a32.71,32.71,0,0,1-2.65,14,91.06,91.06,0,0,0-6.77,28.31c-.13,2-1.81,4.64,1.37,6.17.81.39.12,1.42-.35,2-1.85,2.45-5.12,2.14-6.8-.73a8.73,8.73,0,0,1-1.2-3.33c-.73-6.37-.65-12.87,1.48-18.86,2.41-6.76,4.31-13.68,6.78-20.42A7.39,7.39,0,0,0,83,55.75c-5.16,3.64-8.9,8.18-12.74,12.64C64.48,75,58.77,81.69,52.88,88.18a24.86,24.86,0,0,1-8.45,6.32c-2.78,1.2-3.4.62-3-2.38.14-1,.29-2,.43-2.94,1.05-1.28,0-3,1-4.33a44.63,44.63,0,0,1,2.76-13.64c1.68-4.56,1.25-9.08.72-14.14-1.91,1.55-3.92,2.6-5.09,4.25-3.7,5.17-8.38,9.42-12.58,14.11A155.78,155.78,0,0,1,16.92,87a25,25,0,0,0-3.87,4.38c-2.92,4.24-3.82,4.66-8.86,3.7Zm90.89,45.69c7.94-6.39,12.48-15.42,17.69-23.83,3.78-6.1,5.75-13.13,8.51-19.74,2.06-4.94,3.48-10.15,5.58-15.06,3.31-7.73,7-15.32,10.47-23,1.08-2.34.49-4-2-4.81-1.75-.61-4.71.58-5.25,2.46-1.13,3.88-3,7.46-4.32,11.23-2.58,7.12-4.61,14.45-8.27,21.17-1,1.89-1.67,2.06-3.17.77-3.08-2.66-5.76-5.54-7-9.59a124,124,0,0,1-4-20.44c-.39-3.1-1.2-5.88-3.56-8.07-.75-.7-1.59-1.44-2.61-1.1-1.28.42-.82,1.67-.71,2.58.46,4,1.1,8.08,1.51,12.13.7,7,1.71,13.82,5.24,20.13,1.82,3.27,3.69,6.41,6.78,8.5,2.18,1.48,2.55,3.2,2,5.56-.67,3-2.42,5.53-3.51,8.36a119.23,119.23,0,0,1-7.73,16.18,123.43,123.43,0,0,1-15.33,21C89.7,142.15,90.54,140.85,95.08,137.21Zm-53.18-48c1.76-1.11,1.07-2.8,1-4.33C41,85.92,42,87.68,41.9,89.18Z" />
    </clipPath>
    <g clip-path="url(#my-clip-path)">
      <polyline class={classNames('siblings alphabet', firstStrokeClassName)} stroke-width="13" points="11.19 43 18.19 57 7.19 89 9.19 92 13.19 85 46.12 51.21 52.19 51 45.19 89 47.19 91 79.19 54 85.19 51 88.19 51 79.19 83 79.19 95 84.19 102" />
      <polyline class="siblings alphabet" stroke-width="13" points="97.69 44.5 101.69 63.5 104.69 78.5 108.69 87.5 113.69 89.5" />
      <polyline class="siblings alphabet" stroke-width="13" points="135.69 47.5 100.69 127.5 80.69 141.5" />
    </g>
  </svg>