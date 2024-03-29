import React from "react"
import classNames from "classnames";

export default ({ className, firstStrokeClassName }) => <svg className={classNames('calligraphy', className)}
  viewBox="0 0 195.58 196.17">
  <clipPath id="re-kata-clip-path">
    <path d="M170.12,73.62,164,71.1c-3,5.13-5.55,11.37-9.75,16.14A241.44,241.44,0,0,1,129.48,112,182.47,182.47,0,0,1,72,145.46c-.93.34-1.85.72-2.79,1a4.56,4.56,0,0,1-1.21-.11c-.36-4.82-.63-9.72-1.1-14.61-1.57-16.24-3.42-32.46-4.74-48.72-.82-10.19-.83-20.44-1.32-30.65-.25-5.3,3.66-8,6.62-11.35,1.06-1.22,2.46-3.73,2-4.37-1-1.29-3-2-4.78-2.43-4.94-1.33-9.94-2.5-14.94-3.6a15.51,15.51,0,0,0-5.74-.58c-3.18.56-4.43,4.39-1.82,6,7,4.35,6.72,10.83,7,17.78,1.1,32.35,2.21,64.71,4.08,97,.59,10.26,4.94,12.25,13.29,9.42,30.9-10.46,57.95-27.2,81.83-49.25,8-7.4,14.72-15.86,19.11-25.86C169,81.43,169.35,77.05,170.12,73.62Zm-5.52,1.12-.46-.38a12.19,12.19,0,0,1,.86-1s.34.26.53.4Zm-.46-.38a12.19,12.19,0,0,1,.86-1s.34.26.53.4l-.93,1Z" />
  </clipPath>
  <g clipPath="url(#re-kata-clip-path)">
    <path className={classNames('siblings', firstStrokeClassName)} strokeWidth="30px" d="M54.59,28,60.8,154.51l20.34-5.35,30-16.21A145.29,145.29,0,0,0,170,70.35" />

    {/* We add one element which wont be draw but will allow a delay between 2 characters  */}
    <polyline className="siblings additionalDelayEndOfCharacters" />
  </g>
</svg>
