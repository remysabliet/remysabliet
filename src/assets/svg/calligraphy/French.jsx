
import React from 'react'

// viewBox="0 0 183.26 41.77"
export default () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183.26 41.77">
    <clipPath id="clip-path-S">
      <path d="M.72,103.19c15.78,9.39,34.61,14.6,52.76,9.59C67.55,108.9,84.21,97,83.65,80.67,83.12,64.85,65.78,61.55,53.39,59.3,35.09,56,10.18,48,12.48,24.88,14.66,3,42.45-4.29,56.34,12c1.26,1.47,3.37-.66,2.13-2.13C49.66-.45,33.45-3.14,21.82,4,10,11.27,6.33,27.51,11.94,39.81,19.32,56,41,60,56.55,62.91c8,1.51,17.88,3.42,22.28,11.13,5.38,9.43-1.54,20.65-8.73,26.79-19.58,16.74-47.41,11.93-67.87-.23a1.5,1.5,0,0,0-1.51,2.59Z" />
    </clipPath>
    <g clip-path="url(#clip-path-S)">
      <path d="M58.47,9.86C49.66-.45,33.45-3.14,21.82,4,10,11.27,6.33,27.51,11.94,39.81,19.32,56,41,60,56.55,62.91c8,1.51,17.88,3.42,22.28,11.13,5.38,9.43-1.54,20.65-8.73,26.79-19.58,16.74-47.41,11.93-67.87-.23a1.5,1.5,0,0,0-1.51,2.59c15.78,9.39,34.61,14.6,52.76,9.59C67.55,108.9,84.21,97,83.65,80.67,83.12,64.85,65.78,61.55,53.39,59.3,35.09,56,10.18,48,12.48,24.88,14.66,3,42.45-4.29,56.34,12c1.26,1.47,3.37-.66,2.13-2.13Z" />
    </g>
  </svg>
)

/*
 TEMPO

@keyframes top-anim{
  100% {
    stroke-dashoffset: 0;
  }
}

@mixin delayed-draw($max){
  $counter: 0.5;
  @for $var from 1 through ($max){
    $counter:  $counter+0.5;
    &:nth-child(#{$var}){
       animation-delay: #{$counter}s;
    }
  }
}

g[clip-path]{
  stroke: black;
  stroke-width:8px;
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  path{
    fill: none;
  }
}

svg.calligraphy{
  width: 200px;
  height: 200px;
  line, polyline, path{
    animation: top-anim 2s linear forwards;
   // @include delayed-draw(15);

  }
}

*/