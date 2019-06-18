
import React from "react"

//  viewBox="0 0 640 480"
export default () => <svg xmlns="http://www.w3.org/2000/svg" display="none">
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M-88 32h640v480H-88z"/>
    </clipPath>
  </defs>
  <symbol id="japanFlag">
    <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)" transform="translate(88 -32)">
      <path fill="#fff" d="M-128 32h720v480h-720z"/>
      <ellipse cx="523.1" cy="344.1" fill="#d30000" rx="194.9" ry="194.9" transform="translate(-168.4 8.6) scale(.76554)"/>
    </g>
  </symbol>
</svg>