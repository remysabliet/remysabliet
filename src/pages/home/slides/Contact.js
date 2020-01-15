import React, { Fragment } from 'react'

// import {video} from "./video.mp4"
import video from 'assets/video/contactCodingBackground.mp4'

const Contact = () => (
  <Fragment>
    <video
      // controls="controls"
      autoplay="autoplay"
      width="100%"
      height="100%"
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <p>
      {' '}
      <ul>
        <li>
          ADD Jelly button for contact
          https://1stwebdesigner.com/free-code-snippets-css-buttons/
        </li>{' '}
        <li>
          Parallax Effect On Hover
          https://codemyui.com/parallax-effect-hover/
        </li>
        <li>
          {' '}
          Back and forward arrow between slide
          https://codemyui.com/back-forward-arrow-animation-using-svg/
        </li>
        <li>
          {' '}
          Menu Icon toggle anim (Optional)
          https://codepen.io/Zaku/pen/vcaFr
        </li>
        <li>
          {' '}
          Menu: Inspiration to create living SVG
          animation/transformation
          https://codepen.io/lbebber/pen/LELBEo
        </li>
        <li>
          {' '}
          Text distorsion effect
          https://tympanus.net/codrops/2019/02/06/text-distortion-effects-using-blotter-js/
        </li>
      </ul>
    </p>
  </Fragment>
)
export default Contact
