import React from "react"
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) => <svg className={classNames('calligraphy', className)} viewBox="0 0 195.58 195.58">
  <clipPath id="verti-barre-kata-clip-path">
    <path id="trace" className="cls-1" d="M107.39,89.44q-.89-3.25-1.78-6.52l.32-.1L107,84.67c.2-.3.39-.49.36-.55C105.23,80.26,107,76,106,71.91s-.45-8.79-.91-13.16c-.59-5.5-1.46-11-2.35-16.42-.13-.77-1.06-1.41-1.62-2.1l-.67.37-.54-2.92-1.64,1.37-1-3a7.17,7.17,0,0,1-.9.18c-5.62.25-7.1,1.61-7,7.41.14,6.19.63,12.37,1.1,18.54,2,27.12.34,54.23.1,81.35,0,6.15.58,12.31.94,18.47a6.66,6.66,0,0,0,.6,1.69c2-.57,4.51-.57,5.6-1.81,1.45-1.66,1.78-4.29,2.73-6.88l1.37,5.15.36,0,.31-3.1,1,2.42h.89q.86-22.46,1.72-45c.14,2.19.27,4.36.41,6.52l.83,0a35.39,35.39,0,0,0-.36-4.13c-.57-2.82,1.09-5.93-1.14-8.56-.11-.12,1-1,1-1.47A102.81,102.81,0,0,0,106.46,95c-.14,2.28-.27,4.56-.41,6.84h-.21V88.48l1.06,1.32ZM103,136.75l.19-.26V142H103Zm.19-.26V142H103v-5.23Z" />
  </clipPath>
  <g clipPath="url(#verti-barre-kata-clip-path)">
    <line className={classNames('siblings', className)} x1="96.34" y1="26.28" x2="96.34" y2="176.9" />

    {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
    <polyline className="siblings additionalDelayEndOfCharacters" />
  </g>
</svg>
