
import React from "react"
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) => <svg className={classNames('calligraphy', className)}
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.83 195.83">
  <clipPath id="maru-clip-path">
    <path className="cls-1" d="M185.89,34c0-4.88-.81-9.57-3.79-13.65-3.51-4.81-8.65-7-14.39-8.19a26.3,26.3,0,0,0-4.4-.6,38.21,38.21,0,0,0-7.49.06,24.18,24.18,0,0,0-7.34,2.31c-7.67,4-11.44,10.68-13,18.72-2.15,10.8,3.27,18.08,11.82,23.87a26,26,0,0,0,12.68,4.83c4.64.32,9.24-.21,13.11-3.25,6.72-5.29,11.2-11.87,12.71-20.21a5,5,0,0,0,.13-.93C185.9,36,185.89,35,185.89,34Zm-12.44,1.09a10.31,10.31,0,0,1-1.86,6.23c-3.29,4.89-10,7.53-16.32,6.52-5.93-.95-8.41-4.82-7.65-10.35s3.84-9.62,8.38-12.81A9.4,9.4,0,0,1,163.38,23,12.19,12.19,0,0,1,173.45,35.08Z" />
  </clipPath>
  <g clipPath="url(#maru-clip-path)">
    <path className={classNames('siblings', firstStrokeClassName)} d="M153,18.74a21.66,21.66,0,0,1,15-1.07c2.06.62,7.77,2.35,10.73,7.72,4.49,8.18-1.37,17.63-2.15,18.89S170,54.84,159.39,55c-7.72.12-15.81-4.56-18.45-12.24C137.47,32.71,145.09,22.5,153,18.74Z" />

    {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
    <polyline className="siblings additionalDelayEndOfCharacters" />
  </g>
</svg>