import React from "react"
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) => <svg class={classNames('calligraphy', className)}
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200.64 196.17">
  <clipPath id="hitotsu-hira-clip-path">
    <path id="trace" class="cls-1" d="M181.12,99a5.81,5.81,0,0,0-4.78-2.3c-1.74.07-3.47.2-5.29.31l1.45-2.14h6l.06-.48-5.42-.8,4.73-.62,0-.37c-3.35-.41-6.69-.88-10.05-1.19s-6.68-.47-10-.65-6.82-.35-10.23-.5-6.7-.11-10-.46-6.39,0-9.59,0-6.68,0-10-.17l11.15-.88,0-.57L112.79,89l-.05.42,2.08.73L86,91.43l0-.26,3.36-.92-.12-.54L78.83,92.07l-.13-.55,3.89-1L82.46,90l-9.9,2.4L72.47,92l3.11-.76-.13-.63c-2.92.57-5.84,1.17-8.77,1.7a16.57,16.57,0,0,1-2.64.16q-16.77.4-33.54.82c-1,0-1.95.23-3.21.39l1.13,1.58H24.1l-.36.39,2,.85-.43.66-3.79.34a9,9,0,0,1-.68,1.91c-1.47,2.26-1.31,4.09,1.15,5.17A27.45,27.45,0,0,0,30.5,107c13.18,1,26.39.6,39.58-.16,25-1.45,50.1-2.94,75.21-2,8.27.3,16.53.94,24.8,1.08,3.81.07,7.64-.69,11.46-1.09a7.52,7.52,0,0,0,1.37-.53l-1.83-.4c1.69-2.37,1.57-2.69-1.85-4.32l1.84-.61Zm-22.87-6.52,0,.17H147.14v-.17Zm3.05.61s0,.06,0,.06h-.14a.18.18,0,0,0,0-.06Zm-21.13-.66-.07-.09.11,0ZM111.53,90H91.45C97.52,88.94,109.73,88.73,111.53,90Zm69.58,9-.06.08,0-.14Zm-19.83-5.85h-.14a.18.18,0,0,0,0-.06h.15S161.29,93.14,161.28,93.14Zm-21.18-.81.11,0,0,.11Z" />
  </clipPath>
  <g clipPath="url(#hitotsu-hira-clip-path)">
    <line class={classNames('siblings', firstStrokeClassName)} stroke-width="23px" x1="9.76" y1="99.07" x2="188.91" y2="97.87" />

    {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
    <polyline class="siblings additionalDelayEndOfCharacters" />
  </g>
</svg>
