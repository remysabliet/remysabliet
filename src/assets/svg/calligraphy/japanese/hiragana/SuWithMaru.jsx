import React from 'react'
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) => <svg class={classNames('calligraphy', className)} xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 196.17 196.17">
  <defs>
    <clipPath id="su-hira-maru-clip-path">
      <path class="cls-1" d="M186.93,172.09c.26-10.82-5.64-16.13-17.29-16.7-9.87-.48-17.14,7.9-17.19,18.74,0,8.05,10,16.58,19.42,16.53C178.63,190.62,186.94,180.38,186.93,172.09Zm-18.88,9.07c-4.85,0-7.26-2.25-7.2-6.6.07-5,5.18-11.12,9.36-11.15,4.64,0,8.29,3.79,8.35,8.76S173.7,181.22,168.05,181.16ZM112.18,56a25.11,25.11,0,0,1,3.64-19.72c3.88-6,2.05-12.94-6.88-14-6.84-.81-13.54.41-20.16,1.78-2.71.57-5.18,2.26-7.75,3.47-1.64.77-.74,2.22-.7,3.35,0,.33,1.13.86,1.75.88a17.24,17.24,0,0,1,13.16,5.77c2.29,2.59,4.68,5.3,6.11,8.38,1.17,2.52,1.08,5.66,1.35,8.54s.16,2.85-2.55,3.25A455.18,455.18,0,0,0,49.3,68.6c-7.15,1.92-14.34.83-21.4-1A1.94,1.94,0,0,1,27,67c-1.08-1.24-2-1-2.95.19-3.16,4.14-3.12,11.62.08,15.67,3.47,4.39,10.28,6.18,15.29,3.9,1.42-.65,2.65-1.7,4-2.42,12.81-6.63,26.65-10.24,40.59-13.48,6.09-1.41,12.25-2.49,18.36-3.71,1.13,4.18-1.41,19.82-4.22,26.7a30.17,30.17,0,0,0-22,3.57c-6.69,3.86-10.64,9.45-10,17.52.58,7.64,7.43,13.66,15.14,13.68,5.61,0,10.3-2.14,14.93-5.27-.66,1.63-1.2,3.33-2,4.89C89.78,137,85,145.53,78.79,153.17c-3,3.72-6.44,7.14-9.6,10.76A60.57,60.57,0,0,0,65,169.34a8.8,8.8,0,0,0-.8,2.48,7.57,7.57,0,0,0,2.61-.35,55.13,55.13,0,0,0,7.51-4.41c8.35-6.28,16.73-12.65,23.35-20.77a56,56,0,0,0,13.11-37.45c-.11-5.55.52-11.1.77-16.65.37-8.4.7-16.79,1-25.18,0-.31.06-.61.11-1.09,5.91-.64,11.74-1.31,17.59-1.88,4.54-.45,9.09-.77,13.64-1.16,8.23-.7,16.12,1.16,24,3.19.92.24,1.82.55,2.74.8a3.39,3.39,0,0,0,3.8-1,3.81,3.81,0,0,0,.65-4.08,1.71,1.71,0,0,0-.24-.51c-2.22-2.42-2.83-5.5-3.61-8.54-.53-2-1.81-2.6-3.76-2.07-2.19.59-4.37,1.26-6.6,1.68a23.54,23.54,0,0,1-3.55-.1c-5.88.14-11.78.05-17.63.56C130.51,53.67,121.29,54.91,112.18,56ZM91.76,104.11c1.71.54,3.45,1,5.12,1.67a1.28,1.28,0,0,1,.59,2.15,87.37,87.37,0,0,1-6,7.76,11.68,11.68,0,0,1-9.11,3.57,5,5,0,0,1-5-6.16,7.81,7.81,0,0,1,3.95-5.73A28.1,28.1,0,0,1,91.76,104.11Z" />
    </clipPath>
  </defs>
  <g clipPath="url(#su-hira-maru-clip-path)" >
    <polyline class={classNames('siblings', firstStrokeClassName)} stroke-width="15px" points="19.13 63.7 28.95 79.58 33.49 88.54 37.65 71.64 40.67 66.72 47.85 76.76 49.46 81.49 60.32 69.37 69.77 67.48 92.83 63.7 126.84 59.16 144.98 57.2 163.88 57.2 169.7 57.2 173.33 70.5" />
    <path class="siblings" stroke-width="16px" d="M77.28,26.28l29.15,1.36H114l5.67,3.18s-9.45,5.29-10.58,5.29-19.65,3.78-19.65,3.78l17.38,6.8.38,10.51V72.77l-1.51,19.14-5.29,19.78s-12,9.84-12.83,10.22-17.19,2-17.19,2V109.81l6.91-8.69,10.28-1.51H95l12.18,1.13.38,11-3,7.58-6,12.84-11,14.36L77.28,160.83,62.21,179" />
    <polyline class="siblings" stroke-width="14px" points="169.7 159.7 178.56 162.07 184.29 168.86 182.02 178.98 175.47 182.76 158.44 185.28 158.44 172.29 160.85 162.41 171.37 157.81" />

    {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
    <polyline class="siblings additionalDelayEndOfCharacters" />
  </g>
</svg>

