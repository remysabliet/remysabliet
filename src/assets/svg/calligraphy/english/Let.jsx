import React from 'react'
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) =>
  <svg class={classNames('calligraphy', className)}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147 145.5">
    <clipPath id="let-clip-path">
      <path class="cls-1" d="M97,82.42c-1.21,1.49-2.15,3.57-3.67,4.35a139.2,139.2,0,0,1-17.8,8.08,18.12,18.12,0,0,1-17.14-2.47c-1.63-1.2-2.78-3.14-4.55-5.22-3.3.85-7.34,1.83-11.35,2.92-6.1,1.65-12.21,3.28-18.26,5.11-4,1.2-8.06,2.42-12.07,1.47A24.09,24.09,0,0,1,3.5,92.33C1,90.41.89,87,1.45,84,3,75.57,4.33,67,6.71,58.88s5.92-16.23,9-24.28c1.9-4.91,4-9.73,5.91-14.62a7.72,7.72,0,0,0,.27-2.43c0-.26-.21-.53-.23-.81-.15-1.7,3.95-9,5.46-9.51,2.79-1,4.47,1.36,6.26,2.86.61.52.73,2.43.38,3.42C32,18.39,30.19,23.25,28.09,28c-1.31,3-3.13,5.69-4.69,8.54a4.57,4.57,0,0,0-.8,2c.1,4.52-2.31,8.15-3.64,12.16-1.05,3.15-2.21,6.26-3.16,9.44-1.63,5.46-3.26,10.93-4.64,16.46a34.79,34.79,0,0,0-.69,7.09c-.18,5,1.87,7,6.47,6,8.82-1.84,17.61-3.83,26.43-5.66,3.4-.71,6.85-1.18,10-1.71,1.39-4.11,2.25-8.37,4.17-12A72.45,72.45,0,0,1,67.06,56,64.57,64.57,0,0,1,80.32,45c2.34-1.5,5.86-1.67,8.7-1.27,3.62.51,4.45,6.6,1.93,10.43C85.64,62.24,78,67.28,70.35,72.27a4.71,4.71,0,0,1-2.29.72c-3.75.18-6.26,1.56-7.68,5.79-1.17,3.5-.48,8.15,2.72,10,5.75,3.33,11.5,1.72,17.09-.27,4.78-1.69,9.35-4,14-6.07.7-.31,1.45-.52,2.18-.77ZM67.68,67C74.23,62,81,58.37,85.1,50.94,81.05,50,69.87,60.28,67.68,67Zm70.55,16.73c-2.26.7-4.53,1.39-6.79,2.11-3.64,1.15-7.22,2.73-10.94,3.37-4.48.77-5.5-.57-5.6-5.42-.22-10.09,4.49-18.26,8.67-26.78,2.32-4.72,5.68-5,9.7-4.87,3.83.09,7.66,0,11.73,0-.14-1,0-2.19-.42-2.57-4.18-3.6-9.47-3.14-14.67-4a58.85,58.85,0,0,0,10-21.11,4.89,4.89,0,0,0-.76-3.74c-2.9-3.38-6.19-2.3-7.47,2.1a76.51,76.51,0,0,1-3.56,10.31c-1.56,3.41-4,6.36-5.39,9.84-1.22,3.15-3.18,3.92-5.91,4.1A27.06,27.06,0,0,0,103,51.63c-2.32,1.57-2.6,3.42-.66,5.43s3.44,2.07,5.54.17A12.68,12.68,0,0,1,116.82,54c-1.64,3.66-2.94,7.16-4.71,10.37A34.9,34.9,0,0,0,108,84.73c.63,7.15,4.47,10.75,11.08,10.49a27.5,27.5,0,0,0,14.11-4.62c2.19-1.44,3.82-3.85,5.7-5.82Z" />
    </clipPath>
    <g clipPath="url(#let-clip-path)">
      <polyline class={classNames('siblings alphabet', firstStrokeClassName)} strokeWidth="11" points="31 5 17 43 8 73 6 88 9.5 92.5 39.5 87.5 48.5 84.5 53.5 84.5" />
      <path class="siblings alphabet" strokeWidth="8" d="M61,74l7.5-3.5L71,71c.52-4,1.82-5.43,3-6s2.31-.15,4-1a8,8,0,0,0,3-3c4.19-6,7.5-6.08,8-10,0-.38.39-3-1-4-.9-.64-2.6-.63-7,2a47.52,47.52,0,0,0-11,9C61.2,68.32,56.79,73.48,57,81c0,1.74.21,7.81,4,11,6.22,5.24,20.82,1.54,35-11" />
      <path class="siblings alphabet" strokeWidth="9" d="M136,17v7l-4,10-5,10-8,15a70.44,70.44,0,0,0-4.5,9.5c-2.17,5.64-3.52,9.29-3,14,.28,2.55.64,5.73,3,8,2.73,2.62,8.73,2,13,1,3.36-.79,5.1-1.35,7-4a11.65,11.65,0,0,0,2-5" />
      <polyline class="siblings alphabet" strokeWidth="9" points="100.5 56.5 109.5 51.5 116.5 50.5 136.5 48.5 145.5 48.5" />

      {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
      <polyline class="siblings alphabet additionalDelayEndOfCharacters" />
    </g>
  </svg>